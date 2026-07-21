import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  CheckCircle2,
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
  Heart,
  Star
} from "lucide-react";

import Header from "./components/Header";
import BudgetDrawer from "./components/BudgetDrawer";
import CategoryDetailModal from "./components/CategoryDetailModal";
import { categories } from "./data/catalog";
import { Category, Product, BudgetItem } from "./types";

export default function App() {
  // Budget Bag State
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  
  // Category Modal State
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

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
      // Remove if quantity set to 0
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

  const handleOpenCategory = (category: Category) => {
    setSelectedCategory(category);
    setIsCategoryModalOpen(true);
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
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen font-sans text-brand-green overflow-x-hidden" id="app-root-container">
      {/* Header / Navbar */}
      <Header
        budgetItemsCount={budgetItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenBudget={() => setIsBudgetOpen(true)}
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
              // Count selected items in this category
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
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
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
                      <h3 className="font-display text-sm font-bold text-brand-green tracking-[0.1em] uppercase mb-2 group-hover:text-brand-gold-dark transition-colors duration-200">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 font-sans leading-relaxed mb-6 font-light">
                        {category.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenCategory(category)}
                      className="w-full bg-white group-hover:bg-brand-green text-brand-green group-hover:text-white border border-brand-gold/25 group-hover:border-brand-green font-bold text-[10px] tracking-widest uppercase py-3 rounded-sm flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
                    >
                      <span>Explorar e Adicionar</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to action at bottom of catalog */}
          <div className="mt-16 text-center">
            <p className="text-[11px] text-gray-500 font-sans uppercase tracking-widest">
              Quer ver todo o nosso catálogo de uma vez? Nós ajudamos você.
            </p>
            <button
              onClick={() => setIsBudgetOpen(true)}
              className="mt-4 bg-brand-green hover:bg-brand-dark text-white border border-brand-gold/20 font-bold text-[10px] tracking-widest uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2 shadow-md transition-all duration-300 cursor-pointer"
            >
              <BookmarkCheck className="w-4 h-4 text-brand-gold" />
              <span>Ver Orçamento Personalizado ({budgetItems.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
            </button>
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
            {/* Diferencial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-sm border border-brand-gold/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              id="diferencial-1"
            >
              <div>
                <div className="w-10 h-10 bg-brand-green/5 rounded-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-green mb-3">
                  Produtos higienizados
                </h3>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed font-light">
                  Nossos materiais passam por rigoroso controle de lavagem, esterilização e são embalados individualmente, garantindo assepsia total.
                </p>
              </div>
            </motion.div>

            {/* Diferencial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-sm border border-brand-gold/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              id="diferencial-2"
            >
              <div>
                <div className="w-10 h-10 bg-brand-green/5 rounded-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-green mb-3">
                  Entrega pontual
                </h3>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed font-light">
                  Sabemos o valor do tempo na montagem do seu evento. Cumprimos com absoluto rigor a escala de entrega e retirada agendada.
                </p>
              </div>
            </motion.div>

            {/* Diferencial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-sm border border-brand-gold/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              id="diferencial-3"
            >
              <div>
                <div className="w-10 h-10 bg-brand-green/5 rounded-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                  <Zap className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-green mb-3">
                  Atendimento rápido
                </h3>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed font-light">
                  Equipe comercial de prontidão no WhatsApp para ajustar orçamentos, tirar dúvidas de layout de mesa e ajudar na sua tomada de decisão.
                </p>
              </div>
            </motion.div>

            {/* Diferencial 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-sm border border-brand-gold/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              id="diferencial-4"
            >
              <div>
                <div className="w-10 h-10 bg-brand-green/5 rounded-sm flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                  <DollarSign className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-green mb-3">
                  Excelente custo-benefício
                </h3>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed font-light">
                  Materiais dignos dos melhores banquetes com preços altamente competitivos no mercado de locação da região.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Highlights & Numbers Section */}
          <div className="bg-brand-green text-white rounded-sm p-8 sm:p-12 border border-brand-gold/20 shadow-lg relative overflow-hidden" id="stats-section">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-green opacity-40 z-0" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 divide-y lg:divide-y-0 lg:divide-x divide-brand-gold/20">
              {/* Highlight 1 */}
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

              {/* Highlight 2 */}
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

              {/* Highlight 3 */}
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

          {/* Social Proof / Trust Banner */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-y-4 gap-x-8 text-center text-gray-500 text-xs font-sans">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Casamentos de Alto Padrão</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Formaturas Marcantes</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Eventos Corporativos Precisos</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-gold" /> Aniversários e Festas Privadas</span>
          </div>

        </div>
      </section>

      {/* SECTION 4 - CONTATO */}
      <section id="contato" className="bg-brand-green text-white py-24 sm:py-32 relative border-t border-brand-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(#C8A86A_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Info and contact details (left column) */}
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

              {/* Specific Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="contact-info-cards">
                
                {/* Whatsapp Card */}
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

                {/* Instagram Card */}
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

              {/* Geographic detail */}
              <div className="flex items-center gap-3 bg-brand-dark/35 p-4 rounded-sm border border-brand-gold/15 inline-flex">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-[11px] text-gray-300 font-sans uppercase tracking-wider">
                  Sede e Logística localizados em Porto Alegre – RS, com atendimento em toda região metropolitana.
                </span>
              </div>
            </div>

            {/* Button callouts (right column) */}
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
      <footer className="bg-brand-dark text-white border-t border-brand-gold/20 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Logo in footer */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="relative w-12 h-12 rounded-sm overflow-hidden border border-brand-gold bg-white flex items-center justify-center shadow-md">
                <img
                  src="https://duqxk0v9olda1.cloudfront.net/messages/461392/6cca3916-68bd-4098-9c21-394aba239349/whatsapp-image-2026-02-19-at-17-48-27.jpeg"
                  alt="FestSul Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase text-brand-gold">
                FestSul Locações para Eventos
              </h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-sans mt-2">
                Porto Alegre – RS
              </p>
            </div>

            {/* Menu Links in Footer */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-6 border-t border-brand-gold/10 w-full max-w-md text-[10px] uppercase tracking-[0.15em] font-semibold">
              <button
                onClick={() => scrollToSection("hero")}
                className="font-sans text-gray-400 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("o-que-alugamos")}
                className="font-sans text-gray-400 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                O que Alugamos
              </button>
              <button
                onClick={() => scrollToSection("por-que-escolher")}
                className="font-sans text-gray-400 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="font-sans text-gray-400 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                Contato
              </button>
            </div>

            {/* Copyright */}
            <div className="pt-8 text-center text-[10px] text-gray-500 font-sans tracking-wide">
              <p>© {new Date().getFullYear()} FestSul Locações para Eventos. Todos os direitos reservados.</p>
              <p className="mt-2 text-gray-600 uppercase tracking-widest text-[8px]">Elegância e pontualidade no aluguel de materiais para festas de luxo.</p>
            </div>

          </div>
        </div>
      </footer>

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

      {/* BUDGET DRAWER SIDE PANEL */}
      <BudgetDrawer
        isOpen={isBudgetOpen}
        onClose={() => setIsBudgetOpen(false)}
        items={budgetItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBudget={handleClearBudget}
      />

      {/* CATEGORY EXPLORATION MODAL */}
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
