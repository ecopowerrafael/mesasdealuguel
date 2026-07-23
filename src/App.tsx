import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Zap,
  Clock,
  DollarSign,
  Phone,
  Instagram,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Check,
  MapPin,
  Utensils,
  UtensilsCrossed,
  Wine,
  GlassWater,
  Table,
  Armchair,
  ConciergeBell,
  MessageSquare,
  BookmarkCheck,
  Star,
  CreditCard
} from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BudgetDrawer from "./components/BudgetDrawer";
import CategoryDetailModal from "./components/CategoryDetailModal";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import BlogPage from "./components/BlogPage";
import BlogPostPage from "./components/BlogPostPage";
import SeoLandingPage from "./components/SeoLandingPage";
import NotFoundPage from "./components/NotFoundPage";
import SEOHead from "./components/SEOHead";
import { categories } from "./data/catalog";
import { blogPosts } from "./data/blog";
import { seoLandingPages } from "./data/seoPages";
import { Category, Product, BudgetItem, BlogPost } from "./types";

export default function App() {
  // Budget Bag State
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  
  // Category Modal State
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  // Path Routing State
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  // Listen to PopState for back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Load budget state from localStorage if available
  useEffect(() => {
    try {
      const stored = localStorage.getItem("festsul_budget");
      if (stored) {
        setBudgetItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Erro ao carregar orçamento salvo:", e);
    }
  }, []);

  // Save budget state to localStorage
  const saveBudget = (items: BudgetItem[]) => {
    setBudgetItems(items);
    try {
      localStorage.setItem("festsul_budget", JSON.stringify(items));
    } catch (e) {
      console.error("Erro ao salvar orçamento:", e);
    }
  };

  // Budget Operations
  const handleAddProduct = (product: Product, categoryTitle: string, quantity: number) => {
    if (quantity <= 0) {
      const filtered = budgetItems.filter((item) => item.product.id !== product.id);
      saveBudget(filtered);
    } else {
      const existingIndex = budgetItems.findIndex((item) => item.product.id === product.id);
      if (existingIndex >= 0) {
        const updated = [...budgetItems];
        updated[existingIndex].quantity = quantity;
        saveBudget(updated);
      } else {
        const newItem: BudgetItem = {
          product,
          categoryTitle,
          quantity,
        };
        saveBudget([...budgetItems, newItem]);
      }
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updated = budgetItems.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    saveBudget(updated);
  };

  const handleRemoveItem = (productId: string) => {
    const filtered = budgetItems.filter((item) => item.product.id !== productId);
    saveBudget(filtered);
  };

  const handleClearBudget = () => {
    if (window.confirm("Deseja realmente limpar toda a sua lista de orçamento?")) {
      saveBudget([]);
    }
  };

  // Navigation Helper
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCategory = (category: Category) => {
    navigate(`/${category.slug}`);
  };

  // Helper for rendering dynamic lucide icons
  const renderCategoryIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-brand-gold transition-colors duration-300" };
    switch (iconName) {
      case "Utensils":
        return <Utensils {...props} />;
      case "ForkSpoon":
        return <UtensilsCrossed {...props} />;
      case "Wine":
        return <Wine {...props} />;
      case "GlassWater":
        return <GlassWater {...props} />;
      case "Grid":
        return <Table {...props} />;
      case "Armchair":
        return <Armchair {...props} />;
      case "ConciergeBell":
        return <ConciergeBell {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const whatsappNumber = "5551989879933";
  const generalWhatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20evento%20com%20a%20FestSul.`;

  const scrollToSection = (id: string) => {
    if (currentPath !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const normalizedPath = (currentPath.replace(/\/$/, "") || "/").toLowerCase();
  const rawSlug = normalizedPath.replace(/^\//, "");

  // Routing Determination - Category Search
  const isCategoryRoute = categories.find((c) => {
    const slugMatch = `/${c.slug}`.toLowerCase() === normalizedPath;
    const aliasMatch = c.aliases?.some((a) => a.toLowerCase() === rawSlug);
    return slugMatch || aliasMatch;
  });

  // Routing Determination - Product Search
  let productMatch: Product | null = null;
  let categoryForProductMatch: Category | null = null;

  const isExplicitProductPath = normalizedPath.startsWith("/produto/");
  const searchProductSlug = isExplicitProductPath ? normalizedPath.replace("/produto/", "") : rawSlug;

  for (const cat of categories) {
    const p = cat.products.find((prod) => {
      const mainMatch = prod.slug.toLowerCase() === searchProductSlug;
      const aliasMatch = prod.aliases?.some((a) => a.toLowerCase() === searchProductSlug);
      return mainMatch || aliasMatch;
    });

    if (p) {
      productMatch = p;
      categoryForProductMatch = cat;
      break;
    }
  }

  const isProductRoute = isExplicitProductPath || (productMatch !== null && !isCategoryRoute);

  const isBlogRoute = normalizedPath === "/blog";
  const isBlogPostRoute = normalizedPath.startsWith("/blog/");
  let blogPostMatch: BlogPost | null = null;
  if (isBlogPostRoute) {
    const postSlug = normalizedPath.replace("/blog/", "");
    blogPostMatch = blogPosts.find((post) => post.slug.toLowerCase() === postSlug) || null;
  }

  // Routing Determination - SEO Landing Pages
  const seoPageMatch = seoLandingPages.find(
    (p) => `/${p.slug}`.toLowerCase() === normalizedPath
  );

  // Render SEO Landing Page Route View
  if (seoPageMatch) {
    return (
      <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
        <SEOHead seoPage={seoPageMatch} currentPath={currentPath} isBudgetOpen={isBudgetOpen} />
        <Header
          budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <SeoLandingPage
          page={seoPageMatch}
          onAddToBudget={handleAddProduct}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <BudgetDrawer
          isOpen={isBudgetOpen}
          onClose={() => setIsBudgetOpen(false)}
          items={budgetItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearBudget={handleClearBudget}
        />
      </div>
    );
  }

  // Render Category Route View
  if (isCategoryRoute) {
    return (
      <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
        <SEOHead category={isCategoryRoute} currentPath={currentPath} isBudgetOpen={isBudgetOpen} />
        <Header
          budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <CategoryPage
          category={isCategoryRoute}
          onAddToBudget={handleAddProduct}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <BudgetDrawer
          isOpen={isBudgetOpen}
          onClose={() => setIsBudgetOpen(false)}
          items={budgetItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearBudget={handleClearBudget}
        />
      </div>
    );
  }

  // Render Product Route View
  if (isProductRoute) {
    if (!productMatch || !categoryForProductMatch) {
      return (
        <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
          <Header
            budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
            onOpenBudget={() => setIsBudgetOpen(true)}
            onNavigate={navigate}
          />
          <NotFoundPage onNavigate={navigate} />
        </div>
      );
    }

    return (
      <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
        <SEOHead product={productMatch} category={categoryForProductMatch} currentPath={currentPath} isBudgetOpen={isBudgetOpen} />
        <Header
          budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <ProductPage
          product={productMatch}
          category={categoryForProductMatch}
          onAddToBudget={handleAddProduct}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <BudgetDrawer
          isOpen={isBudgetOpen}
          onClose={() => setIsBudgetOpen(false)}
          items={budgetItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearBudget={handleClearBudget}
        />
      </div>
    );
  }

  // Render Blog Index View
  if (isBlogRoute) {
    return (
      <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
        <SEOHead currentPath={currentPath} isBudgetOpen={isBudgetOpen} />
        <Header
          budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <BlogPage posts={blogPosts} onNavigate={navigate} />
        <BudgetDrawer
          isOpen={isBudgetOpen}
          onClose={() => setIsBudgetOpen(false)}
          items={budgetItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearBudget={handleClearBudget}
        />
      </div>
    );
  }

  // Render Blog Article View
  if (isBlogPostRoute) {
    if (!blogPostMatch) {
      return (
        <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
          <Header
            budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
            onOpenBudget={() => setIsBudgetOpen(true)}
            onNavigate={navigate}
          />
          <NotFoundPage onNavigate={navigate} />
        </div>
      );
    }

    return (
      <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
        <SEOHead post={blogPostMatch} currentPath={currentPath} isBudgetOpen={isBudgetOpen} />
        <Header
          budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <BlogPostPage post={blogPostMatch} onNavigate={navigate} onOpenBudget={() => setIsBudgetOpen(true)} />
        <BudgetDrawer
          isOpen={isBudgetOpen}
          onClose={() => setIsBudgetOpen(false)}
          items={budgetItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearBudget={handleClearBudget}
        />
      </div>
    );
  }

  // Render 404 for unknown URLs
  if (normalizedPath !== "/") {
    return (
      <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green">
        <Header
          budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onNavigate={navigate}
        />
        <NotFoundPage onNavigate={navigate} />
      </div>
    );
  }

  // DEFAULT RENDER: HOME PAGE "/"
  return (
    <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green overflow-x-hidden" id="app-root-container">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEOHead category={selectedCategory} isBudgetOpen={isBudgetOpen} />

      {/* Header / Navbar */}
      <Header
        budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenBudget={() => setIsBudgetOpen(true)}
        onNavigate={navigate}
      />

      {/* SECTION 1 - HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 pb-12 sm:pb-20 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920"
            alt="Mesa Posta Sofisticada"
            className="w-full h-full object-cover scale-105 filter brightness-45 contrast-105"
            referrerPolicy="no-referrer"
            id="hero-bg-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-brand-dark/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-3xl text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-gold/10 border border-brand-gold/30 px-4 py-2.5 rounded-sm mb-6 sm:mb-8"
              id="hero-tagline-badge"
            >
              <Star className="w-3.5 h-3.5 text-brand-gold animate-pulse fill-brand-gold" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold">
                Exclusividade & Tradição em Eventos
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.05em] uppercase leading-[1.15] mb-6"
              id="hero-title"
            >
              Locações para Eventos em{" "}
              <span className="text-brand-gold font-extrabold relative inline-block">
                Porto Alegre
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand-gold/30" />
              </span>{" "}
              e Região Metropolitana
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 font-sans text-sm sm:text-base md:text-lg font-light mb-8 sm:mb-12 max-w-2xl leading-relaxed"
              id="hero-subtitle"
            >
              Transforme seu evento com materiais de qualidade, atendimento ágil e entrega pontual. Do casamento à confraternização, entregamos sofisticação.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              id="hero-ctas"
            >
              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm text-center shadow-md flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
                id="btn-hero-primary"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>

              <button
                onClick={() => scrollToSection("o-que-alugamos")}
                className="bg-transparent hover:bg-white/10 text-white font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm text-center border border-white/40 hover:border-brand-gold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="btn-hero-secondary"
              >
                <span>Ver catálogo completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative wave/fade transitioning to gray page body */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F7F7F5] to-transparent" />
      </section>

      {/* SECTION 2 - O QUE ALUGAMOS (CATALOG) */}
      <section id="o-que-alugamos" className="py-24 sm:py-32 bg-white relative border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          
          {/* Header Text Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold bg-brand-green/5 px-4 py-2 rounded-sm border border-brand-gold/20">
              Nosso Acervo
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mt-5 tracking-[0.1em] uppercase">
              O que alugamos
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4 mb-5" />
            <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed font-light">
              Tudo o que você precisa para montar um evento bonito, organizado e elegante em um único lugar. Oferecemos materiais higienizados e impecáveis para todos os estilos de festa.
            </p>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="catalog-cards-grid">
            {categories.map((category, index) => {
              const selectedInCat = budgetItems.filter((item) => item.categoryTitle === category.title);
              const totalQtyInCat = selectedInCat.reduce((sum, item) => sum + item.quantity, 0);

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-[#F7F7F5] rounded-sm overflow-hidden border border-brand-gold/10 shadow-xs hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between"
                  id={`card-cat-${category.id}`}
                >
                  <div 
                    className="relative h-48 w-full overflow-hidden cursor-pointer"
                    onClick={() => handleOpenCategory(category)}
                  >
                    <img
                      src={category.image}
                      alt={category.imageAlt || category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating icon circle */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-brand-green rounded-sm border border-brand-gold/20 flex items-center justify-center shadow-sm">
                      {renderCategoryIcon(category.icon)}
                    </div>

                    {/* Selected Badge */}
                    {totalQtyInCat > 0 && (
                      <div className="absolute bottom-4 left-4 bg-brand-gold text-white font-bold text-[8px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm shadow-sm flex items-center gap-1 border border-white/10">
                        <BookmarkCheck className="w-3.5 h-3.5" />
                        <span>{totalQtyInCat} Selecionados</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 
                        onClick={() => handleOpenCategory(category)}
                        className="font-display text-sm font-bold text-brand-green tracking-[0.1em] uppercase mb-2 group-hover:text-brand-gold-dark transition-colors duration-200 cursor-pointer"
                      >
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 font-sans leading-relaxed mb-6 font-light">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a
                        href={`https://wa.me/5551989879933?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20aluguel%20de%20${encodeURIComponent(category.title)}%20em%20Porto%20Alegre.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] tracking-wider uppercase py-3 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-white" />
                        <span>Solicitar no WhatsApp</span>
                      </a>

                      <a
                        href={`https://wa.me/5551989879933?text=Olá!%20Gostaria%20de%20receber%20o%20catálogo%20completo%20de%20${encodeURIComponent(category.title)}%20para%20locação%20em%20Porto%20Alegre.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full border border-brand-gold text-brand-green hover:bg-brand-gold hover:text-brand-green font-bold text-[10px] tracking-wider uppercase py-2.5 rounded-sm flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
                      >
                        <span>Ver Catálogo Completo</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to action at bottom of catalog */}
          <div className="mt-16 text-center">
            <p className="text-[11px] text-gray-500 font-sans uppercase tracking-widest">
              Quer ver todo o nosso catálogo de uma vez? Fale conosco no WhatsApp ou confira seu carrinho.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/5551989879933?text=Olá!%20Gostaria%20de%20solicitar%20o%20catálogo%20completo%20de%20materiais%20para%20locação."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase px-8 py-4 rounded-sm inline-flex items-center justify-center gap-2 shadow-md transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Solicitar Catálogo Completo no WhatsApp</span>
              </a>
              {budgetItems.length > 0 && (
                <button
                  onClick={() => setIsBudgetOpen(true)}
                  className="bg-brand-green hover:bg-brand-dark text-white border border-brand-gold/20 font-bold text-[10px] sm:text-xs tracking-widest uppercase px-8 py-4 rounded-sm inline-flex items-center justify-center gap-2 shadow-md transition-all duration-300 cursor-pointer"
                >
                  <BookmarkCheck className="w-4 h-4 text-brand-gold" />
                  <span>Ver Orçamento ({budgetItems.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 - POR QUE ESCOLHER A FESTSUL? */}
      <section id="por-que-escolher" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-brand-gold/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold bg-brand-green/5 px-4 py-2 rounded-sm border border-brand-gold/20">
              Nossa Missão
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mt-5 tracking-[0.1em] uppercase">
              Por que escolher a FestSul?
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4 mb-5" />
            <p className="text-gray-600 font-sans text-sm sm:text-base font-light">
              Garantimos a máxima sofisticação e perfeição técnica para tornar seu evento inesquecível.
            </p>
          </div>

          {/* Grid: 4 Diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" id="diferenciais-grid">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden bg-white p-8 rounded-sm border border-brand-gold/15 shadow-[0_4px_20px_-4px_rgba(197,160,89,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(197,160,89,0.12)] hover:border-brand-gold/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold/10 group-hover:bg-brand-gold transition-colors duration-500" />
              <div>
                <div className="w-12 h-12 bg-brand-green/5 rounded-sm flex items-center justify-center border border-brand-gold/20 mb-6 group-hover:bg-brand-green transition-all duration-300">
                  <ShieldCheck className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.15em] text-brand-green mb-3 group-hover:text-brand-gold transition-colors">
                  Produtos higienizados
                </h3>
                <p className="text-[12px] text-gray-600 font-sans leading-relaxed font-light">
                  Nossos materiais passam por rigoroso controle de lavagem, esterilização e são embalados individualmente, garantindo assepsia total.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden bg-white p-8 rounded-sm border border-brand-gold/15 shadow-[0_4px_20px_-4px_rgba(197,160,89,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(197,160,89,0.12)] hover:border-brand-gold/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold/10 group-hover:bg-brand-gold transition-colors duration-500" />
              <div>
                <div className="w-12 h-12 bg-brand-green/5 rounded-sm flex items-center justify-center border border-brand-gold/20 mb-6 group-hover:bg-brand-green transition-all duration-300">
                  <Clock className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.15em] text-brand-green mb-3 group-hover:text-brand-gold transition-colors">
                  Entrega pontual
                </h3>
                <p className="text-[12px] text-gray-600 font-sans leading-relaxed font-light">
                  Sabemos o valor do tempo na montagem do seu evento. Cumprimos com absoluto rigor a escala de entrega e retirada agendada.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden bg-white p-8 rounded-sm border border-brand-gold/15 shadow-[0_4px_20px_-4px_rgba(197,160,89,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(197,160,89,0.12)] hover:border-brand-gold/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold/10 group-hover:bg-brand-gold transition-colors duration-500" />
              <div>
                <div className="w-12 h-12 bg-brand-green/5 rounded-sm flex items-center justify-center border border-brand-gold/20 mb-6 group-hover:bg-brand-green transition-all duration-300">
                  <Zap className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.15em] text-brand-green mb-3 group-hover:text-brand-gold transition-colors">
                  Atendimento rápido
                </h3>
                <p className="text-[12px] text-gray-600 font-sans leading-relaxed font-light">
                  Equipe comercial de prontidão no WhatsApp para ajustar orçamentos, tirar dúvidas de layout de mesa e ajudar na sua tomada de decisão.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden bg-white p-8 rounded-sm border border-brand-gold/15 shadow-[0_4px_20px_-4px_rgba(197,160,89,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(197,160,89,0.12)] hover:border-brand-gold/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold/10 group-hover:bg-brand-gold transition-colors duration-500" />
              <div>
                <div className="w-12 h-12 bg-brand-green/5 rounded-sm flex items-center justify-center border border-brand-gold/20 mb-6 group-hover:bg-brand-green transition-all duration-300">
                  <DollarSign className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.15em] text-brand-green mb-3 group-hover:text-brand-gold transition-colors">
                  Excelente custo-benefício
                </h3>
                <p className="text-[12px] text-gray-600 font-sans leading-relaxed font-light">
                  Materiais dignos dos melhores banquetes com preços altamente competitivos no mercado de locação da região.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Highlights & Numbers Section */}
          <div className="bg-brand-green text-white rounded-sm p-8 sm:p-12 border border-brand-gold/20 shadow-lg relative overflow-hidden" id="stats-section">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-green opacity-40 z-0" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 divide-y lg:divide-y-0 lg:divide-x divide-brand-gold/20">
              <div className="flex items-start gap-4 pt-6 lg:pt-0 lg:px-6 first:pt-0">
                <div className="bg-brand-gold/10 p-3 rounded-sm border border-brand-gold/20 text-brand-gold flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-brand-gold tracking-[0.15em] uppercase">
                    Atendimento Completo
                  </h4>
                  <p className="text-[11px] text-gray-300 font-sans mt-2 leading-relaxed font-light">
                    Porto Alegre e Região Metropolitana. Entregas programadas diretamente no local da recepção.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 lg:pt-0 lg:px-6">
                <div className="bg-brand-gold/10 p-3 rounded-sm border border-brand-gold/20 text-brand-gold flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-brand-gold tracking-[0.15em] uppercase">
                    Diversos Itens
                  </h4>
                  <p className="text-[11px] text-gray-300 font-sans mt-2 leading-relaxed font-light">
                    Centenas de opções em louças filetadas, talheres polidos, taças de cristal, mesas de madeira e cadeiras tiffany.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 lg:pt-0 lg:px-6">
                <div className="bg-brand-gold/10 p-3 rounded-sm border border-brand-gold/20 text-brand-gold flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-brand-gold tracking-[0.15em] uppercase">
                    Suporte pelo WhatsApp
                  </h4>
                  <p className="text-[11px] text-gray-300 font-sans mt-2 leading-relaxed font-light">
                    Dúvidas ou alterações no pedido? Nossa equipe de atendimento via WhatsApp atende você com agilidade e presteza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-y-4 gap-x-8 text-center text-gray-500 text-xs font-sans">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Casamentos de Alto Padrão</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Formaturas Marcantes</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Eventos Corporativos Precisos</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Aniversários e Festas Privadas</span>
          </div>

        </div>
      </section>

      {/* SECTION - PARCELAMENTO NO CARTÃO */}
      <section id="parcelamento" className="py-20 sm:py-28 bg-[#F7F7F5] border-t border-brand-gold/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="bg-white border border-brand-gold/20 rounded-sm p-8 sm:p-12 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold bg-brand-green/5 px-4 py-2 rounded-sm border border-brand-gold/20 inline-flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-brand-gold" />
                    <span>Facilite a organização do seu evento</span>
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mt-5 tracking-[0.05em] uppercase leading-tight">
                    Realize seu evento dos sonhos sem pesar no orçamento.
                  </h2>
                  <div className="w-12 h-[2px] bg-brand-gold my-4" />
                </div>

                <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                  Na <strong className="text-brand-green font-semibold">Fest Sul Locações</strong>, você pode parcelar a locação dos materiais no cartão de crédito, tornando o planejamento muito mais tranquilo e acessível. Assim, você garante todos os itens para sua festa e distribui o pagamento em parcelas que cabem no seu bolso.
                </p>

                <ul className="space-y-3.5 pt-2">
                  <li className="flex items-center gap-3 text-sm font-sans text-brand-green font-medium">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </span>
                    <span>Parcelamento no cartão de crédito</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans text-brand-green font-medium">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </span>
                    <span>Mais flexibilidade para organizar seu evento</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-sans text-brand-green font-medium">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </span>
                    <span>Atendimento rápido e orçamento personalizado</span>
                  </li>
                </ul>

                <p className="text-xs text-gray-500 font-sans italic pt-1">
                  Solicite um orçamento e consulte as condições de parcelamento.
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5551989879933?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20e%20consultar%20as%20condições%20de%20parcelamento%20no%20cartão."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-sm inline-flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Solicitar Orçamento</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center bg-brand-green/5 border border-brand-gold/20 p-8 rounded-sm text-center">
                <div className="w-16 h-16 bg-brand-green text-brand-gold rounded-full flex items-center justify-center border border-brand-gold/30 mb-6 shadow-sm">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="font-display text-sm font-bold text-brand-green uppercase tracking-wider mb-2">
                  Aceitamos Principais Bandeiras
                </h3>
                <p className="text-xs text-gray-500 font-sans mb-6 max-w-xs">
                  Pagamento rápido, seguro e parcelado para a sua comodidade
                </p>

                <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-xs max-w-sm w-full flex items-center justify-center">
                  <img
                    src="https://images.seeklogo.com/logo-png/43/2/bandeiras-de-cartao-de-credito-logo-png_seeklogo-431666.png"
                    alt="Bandeiras de cartão de crédito aceitas na Fest Sul Locações"
                    className="max-h-16 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CONTATO */}
      <section id="contato" className="bg-brand-green text-white py-24 sm:py-32 relative border-t border-brand-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(#C8A86A_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold">
                  Atendimento FestSul
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] mt-3 mb-6">
                  Solicite seu orçamento
                </h2>
                <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl font-light">
                  Nossa equipe está pronta para atender você e ajudar a escolher os materiais ideais para o seu evento. Garantimos praticidade desde a escolha até a retirada do acervo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="contact-info-cards">
                <div className="bg-brand-dark/40 border border-brand-gold/15 p-5 sm:p-6 rounded-sm">
                  <div className="w-10 h-10 bg-brand-gold/5 border border-brand-gold/20 rounded-sm flex items-center justify-center mb-4">
                    <Phone className="w-4 h-4 text-brand-gold" />
                  </div>
                  <h4 className="text-[9px] uppercase font-sans tracking-[0.15em] text-brand-gold font-bold mb-1">
                    WhatsApp Comercial
                  </h4>
                  <a
                    href={`https://wa.me/5551989879933`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-gold transition-colors duration-200 uppercase tracking-wider"
                  >
                    (51) 98987-9933
                  </a>
                  <p className="text-[10px] text-gray-400 font-sans mt-1">
                    Atendimento imediato para Porto Alegre e RS
                  </p>
                </div>

                <div className="bg-brand-dark/40 border border-brand-gold/15 p-5 sm:p-6 rounded-sm">
                  <div className="w-10 h-10 bg-brand-gold/5 border border-brand-gold/20 rounded-sm flex items-center justify-center mb-4">
                    <Instagram className="w-4 h-4 text-brand-gold" />
                  </div>
                  <h4 className="text-[9px] uppercase font-sans tracking-[0.15em] text-brand-gold font-bold mb-1">
                    Instagram Oficial
                  </h4>
                  <a
                    href="https://instagram.com/festsullocacoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-gold transition-colors duration-200"
                  >
                    @festsullocacoes
                  </a>
                  <p className="text-[10px] text-gray-400 font-sans mt-1">
                    Acompanhe inspirações de mesas postas reais
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-brand-dark/35 p-4 rounded-sm border border-brand-gold/15 inline-flex">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-[11px] text-gray-300 font-sans uppercase tracking-wider">
                  Sede e Logística localizados em Porto Alegre – RS, com atendimento em toda região metropolitana.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-dark/50 border border-brand-gold/20 rounded-sm p-8 space-y-6 flex flex-col justify-center relative after:absolute after:inset-1 after:border after:border-brand-gold/10 after:pointer-events-none" id="contact-action-panel">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-gold text-center">
                Como deseja prosseguir?
              </h3>
              <p className="text-[11px] text-gray-300 text-center font-sans leading-relaxed font-light">
                Você pode solicitar um atendimento livre com nossos consultores ou montar seu catálogo personalizado e enviar diretamente no WhatsApp!
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-center font-bold text-[10px] tracking-widest uppercase py-4 rounded-sm shadow-md flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Falar pelo WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    scrollToSection("o-que-alugamos");
                    setIsBudgetOpen(true);
                  }}
                  className="w-full bg-transparent hover:bg-white/10 text-white text-center font-bold text-[10px] tracking-widest uppercase py-4 rounded-sm border border-brand-gold flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
                >
                  <BookmarkCheck className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Montar Meu Catálogo</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[9px] text-gray-400 font-sans uppercase tracking-wider">
                  ⏱️ Respondemos em poucos minutos em horário comercial.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavigate={navigate} />

      {/* FLOATING ACTION PILL FOR CART IN LOWER RIGHT */}
      {budgetItems.length > 0 && !isBudgetOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setIsBudgetOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-brand-gold text-white px-5 py-4 rounded-sm shadow-2xl flex items-center gap-3 border border-white/20 hover:bg-brand-gold-dark transition-all duration-300 transform hover:scale-105"
          id="btn-floating-budget-pill"
        >
          <div className="relative">
            <BookmarkCheck className="w-5 h-5" />
            <span className="absolute -top-3 -right-3 bg-brand-green text-white font-bold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white shadow-md">
              {budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">
            Meu Orçamento
          </span>
        </motion.button>
      )}

      <BudgetDrawer
        isOpen={isBudgetOpen}
        onClose={() => setIsBudgetOpen(false)}
        items={budgetItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBudget={handleClearBudget}
      />

      <CategoryDetailModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        category={selectedCategory}
        budgetItems={budgetItems}
        onAddProduct={handleAddProduct}
        onRemoveProduct={handleRemoveItem}
      />
    </div>
  );
}
