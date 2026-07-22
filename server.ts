import express from "express";
import path from "path";
import fs from "fs";
import compression from "compression";
import { createServer as createViteServer } from "vite";
import { categories } from "./src/data/catalog";
import { blogPosts } from "./src/data/blog";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // HTTP Compression (Brotli/Gzip) - SEO requirement #7
  app.use(compression());

  // Security & HTTP Caching Headers - SEO requirement #8 & #27
  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");

    // Cache static assets (images, fonts, css, js) for 1 year
    if (req.url.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)$/)) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    } else {
      res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
    }
    next();
  });

  // Serve static files from public directory
  const publicPath = path.join(process.cwd(), "public");
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Helper function to inject SEO metadata into index.html
  function generateSeoHtml(templateHtml: string, reqPath: string): string {
    let title = "Fest Sul - Aluguel de Louças, Taças e Cadeiras em Porto Alegre";
    let description = "Locação de louças de porcelana, taças de cristal, talheres de inox, mesas e cadeiras Tiffany em Porto Alegre. Atendimento para casamentos, formaturas e banquetes.";
    let canonical = `https://festsullocacoes.com.br${reqPath}`;
    let ogImage = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200";
    let jsonLdSchemas: any[] = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Fest Sul - Aluguel de Louças, Taças e Cadeiras",
        "description": "Locação de materiais refinados para eventos sociais e corporativos em Porto Alegre e RS.",
        "url": "https://festsullocacoes.com.br",
        "telephone": "+55-51-99999-8888",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Carlos Gomes, 1000",
          "addressLocality": "Porto Alegre",
          "addressRegion": "RS",
          "postalCode": "90480-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -30.0346,
          "longitude": -51.2177
        },
        "priceRange": "$$"
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Fest Sul Locações",
        "url": "https://festsullocacoes.com.br",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://festsullocacoes.com.br/busca?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ];

    const cleanPath = (reqPath.replace(/\/$/, "") || "/").toLowerCase();
    const rawSlug = cleanPath.replace(/^\//, "");

    // Check if category page
    const category = categories.find((c) => {
      const mainMatch = `/${c.slug}`.toLowerCase() === cleanPath;
      const aliasMatch = c.aliases?.some((a) => a.toLowerCase() === rawSlug);
      return mainMatch || aliasMatch;
    });

    if (category) {
      title = `${category.seoContent?.h1 || `Aluguel de ${category.title} em Porto Alegre`} | Fest Sul`;
      description = category.description;
      ogImage = category.image;

      if (category.seoContent?.faq) {
        jsonLdSchemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": category.seoContent.faq.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        });
      }
    }

    // Check if product page
    let foundProduct = null;
    let foundCategory = null;
    const isExplicitProd = cleanPath.startsWith("/produto/");
    const pSlug = isExplicitProd ? cleanPath.replace("/produto/", "") : rawSlug;

    for (const cat of categories) {
      const prod = cat.products.find((p) => {
        const mainMatch = p.slug.toLowerCase() === pSlug;
        const aliasMatch = p.aliases?.some((a) => a.toLowerCase() === pSlug);
        return mainMatch || aliasMatch;
      });

      if (prod) {
        foundProduct = prod;
        foundCategory = cat;
        break;
      }
    }

    if (foundProduct && !category) {
      title = `Aluguel de ${foundProduct.name} em Porto Alegre | Fest Sul`;
      description = foundProduct.longDescription || foundProduct.description;
      ogImage = foundProduct.image;

      jsonLdSchemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": foundProduct.name,
        "image": foundProduct.image,
        "description": description,
        "sku": foundProduct.id,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BRL",
          "price": foundProduct.priceEstimate || "0.00",
          "availability": "https://schema.org/InStock"
        }
      });
    }

    // Check if blog post
    if (reqPath.startsWith("/blog/")) {
      const slug = reqPath.replace("/blog/", "");
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) {
        title = `${post.title} | Blog Fest Sul`;
        description = post.excerpt;
        ogImage = post.image;

        jsonLdSchemas.push({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "author": { "@type": "Organization", "name": post.author }
        });
      }
    } else if (reqPath === "/blog") {
      title = "Blog de Eventos & Guia de Mesa Posta Porto Alegre | Fest Sul";
      description = "Dicas de planejamento de casamentos, cálculo de louças e taças por pessoa, escolha de cadeiras Tiffany e montagem de buffet em Porto Alegre.";
    }

    // Replace Title & Description tags
    let html = templateHtml;
    html = html.replace(/<title>.*?<\/title>/gi, `<title>${title}</title>`);
    html = html.replace(/<meta name="description" content=".*?"\s*\/?>/gi, `<meta name="description" content="${description}" />`);
    html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/gi, `<link rel="canonical" href="${canonical}" />`);

    // Inject OpenGraph & Twitter tags
    const metaTags = `
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:url" content="${canonical}" />
      <meta property="og:image" content="${ogImage}" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:image" content="${ogImage}" />
      ${jsonLdSchemas.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("\n")}
    `;

    html = html.replace("</head>", `${metaTags}\n</head>`);
    return html;
  }

  // Integrate Vite for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Initializing Vite in middleware mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);

    app.get("*", async (req, res, next) => {
      const url = req.originalUrl;
      
      // Do not intercept static assets, JS/TS modules, or API calls with HTML
      if (
        url.startsWith("/api") ||
        url.startsWith("/@") ||
        url.includes("/node_modules/") ||
        /\.(js|ts|tsx|jsx|css|json|svg|png|jpg|jpeg|gif|ico|webp|woff|woff2|ttf|eot)$/i.test(url.split("?")[0])
      ) {
        return next();
      }

      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        const seoHtml = generateSeoHtml(template, url.split("?")[0]);
        res.status(200).set({ "Content-Type": "text/html" }).end(seoHtml);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    console.log("Serving static files in production...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));

    app.get("*", (req, res, next) => {
      const url = req.path;
      if (
        url.startsWith("/api") ||
        /\.(js|ts|tsx|jsx|css|json|svg|png|jpg|jpeg|gif|ico|webp|woff|woff2|ttf|eot)$/i.test(url)
      ) {
        return next();
      }

      try {
        const template = fs.readFileSync(path.join(distPath, "index.html"), "utf-8");
        const seoHtml = generateSeoHtml(template, req.path);
        res.status(200).set({ "Content-Type": "text/html" }).end(seoHtml);
      } catch (err) {
        res.sendFile(path.join(distPath, "index.html"));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
