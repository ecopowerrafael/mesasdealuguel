import { useEffect } from "react";
import { Category, Product, BlogPost } from "../types";
import { SeoLandingPageData } from "../data/seoPages";

interface SEOHeadProps {
  category?: Category | null;
  product?: Product | null;
  post?: BlogPost | null;
  seoPage?: SeoLandingPageData | null;
  currentPath?: string;
  isBudgetOpen?: boolean;
}

export default function SEOHead({ category, product, post, seoPage, currentPath = "/", isBudgetOpen }: SEOHeadProps) {
  useEffect(() => {
    let title = "Fest Sul Locações | Aluguel de Louças, Taças, Talheres e Mesas em Porto Alegre";
    let description =
      "Fest Sul Locações em Porto Alegre - RS. Aluguel de louças de porcelana, taças de cristal, talheres gourmet de inox, copos, mesas e cadeiras Tiffany para casamentos, formaturas e eventos corporativos.";

    if (seoPage) {
      title = pageTitle(seoPage.metaTitle);
      description = seoPage.metaDescription;
    } else if (product) {
      title = `${product.name} - Aluguel | Fest Sul Locações Porto Alegre`;
      description = `Aluguel de ${product.name} em Porto Alegre e Região Metropolitana. ${product.description} Peça seu orçamento online com a Fest Sul.`;
    } else if (category) {
      title = `${category.seoContent?.h1 || `Aluguel de ${category.title} em Porto Alegre`} | Fest Sul Locações`;
      description = `Aluguel de ${category.title.toLowerCase()} em Porto Alegre e região metropolitana. ${category.description} Orçamento rápido via WhatsApp.`;
    } else if (post) {
      title = `${post.title} | Guia Fest Sul Locações`;
      description = `${post.excerpt} Confirma dicas de locação e organização de eventos na Fest Sul Porto Alegre.`;
    } else if (currentPath === "/blog") {
      title = "Blog & Guia de Aluguel de Materiais para Eventos em Porto Alegre | Fest Sul";
      description = "Dicas e orientações de cálculo de louças, etiquetas de mesa posta, escolha de móveis e utensílios para casamentos e recepções de luxo no RS.";
    } else if (isBudgetOpen) {
      title = "Seu Orçamento de Locação | Fest Sul Locações Porto Alegre";
    }

    document.title = title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
  }, [category, product, post, seoPage, currentPath, isBudgetOpen]);

  function pageTitle(t: string) {
    if (t.includes("Fest Sul")) return t;
    return `${t} | Fest Sul Locações Porto Alegre`;
  }

  // General Organization & LocalBusiness Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fest Sul Locações para Eventos",
    "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    "description": "Empresa especializada no aluguel de louças de porcelana, taças de cristal, talheres gourmet, mesas redondas e cadeiras Tiffany em Porto Alegre e Região Metropolitana.",
    "telephone": "+5551989879933",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Porto Alegre",
      "addressRegion": "RS",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -30.0346,
      "longitude": -51.2177
    },
    "url": "https://festsullocacoes.com.br",
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
