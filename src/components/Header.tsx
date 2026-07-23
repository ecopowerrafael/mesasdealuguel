import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag, ChevronDown } from "lucide-react";
import { BudgetItem } from "../types";

interface HeaderProps {
  budgetItemsCount: number;
  onOpenBudget: () => void;
  onNavigate?: (path: string) => void;
}

export default function Header({ budgetItemsCount, onOpenBudget, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (path: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, "", path);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      handleNav("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const whatsappNumber = "5551989879933";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20meu%20evento%20com%20a%20FestSul!`;

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-brand-gold/20 shadow-sm"
          : "bg-gradient-to-b from-brand-dark/95 to-transparent border-b border-white/5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div 
            onClick={() => scrollToSection("hero")} 
            className="flex flex-col items-center justify-center cursor-pointer group"
            id="header-logo-container"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-[0.25em] text-brand-gold leading-none transition-transform duration-300 group-hover:scale-105">
              FEST SUL
            </span>
            <div className="w-16 border-t border-brand-gold/60 my-1 transition-transform duration-300 group-hover:scale-x-110" />
            <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.3em] text-brand-gold font-medium leading-none">
              Locações
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-7 text-[10px] lg:text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] font-semibold" id="desktop-nav-menu">
            <button
              onClick={() => handleNav("/")}
              className={`transition-colors duration-200 cursor-pointer ${
                isScrolled ? "text-brand-green/80 hover:text-brand-gold-dark" : "text-gray-200 hover:text-brand-gold"
              }`}
            >
              Início
            </button>

            <button
              onClick={() => scrollToSection("o-que-alugamos")}
              className={`transition-colors duration-200 cursor-pointer ${
                isScrolled ? "text-brand-green/80 hover:text-brand-gold-dark" : "text-gray-200 hover:text-brand-gold"
              }`}
            >
              O que Alugamos
            </button>

            {/* Eventos Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsEventsDropdownOpen(!isEventsDropdownOpen)}
                onMouseEnter={() => setIsEventsDropdownOpen(true)}
                className={`transition-colors duration-200 cursor-pointer inline-flex items-center gap-1 ${
                  isScrolled ? "text-brand-green/80 hover:text-brand-gold-dark" : "text-gray-200 hover:text-brand-gold"
                }`}
              >
                <span>Eventos & Ocasiões</span>
                <ChevronDown className="w-3 h-3 text-brand-gold" />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseLeave={() => setIsEventsDropdownOpen(false)}
                className={`absolute top-full left-0 w-64 bg-brand-dark/95 backdrop-blur-md border border-brand-gold/30 rounded-sm shadow-xl p-2 transition-all duration-200 z-50 ${
                  isEventsDropdownOpen ? "opacity-100 visible translate-y-1" : "opacity-0 invisible translate-y-0"
                }`}
              >
                <div className="text-[10px] uppercase font-sans font-bold text-brand-gold px-3 py-1 border-b border-brand-gold/15 mb-1">
                  Soluções por Ocasião
                </div>
                <button
                  onClick={() => { setIsEventsDropdownOpen(false); handleNav("/locacao-para-eventos-porto-alegre"); }}
                  className="w-full text-left px-3 py-1.5 text-[10px] uppercase text-gray-200 hover:text-brand-gold hover:bg-white/5 rounded-xs transition-colors"
                >
                  Locação para Eventos
                </button>
                <button
                  onClick={() => { setIsEventsDropdownOpen(false); handleNav("/locacao-para-casamento-porto-alegre"); }}
                  className="w-full text-left px-3 py-1.5 text-[10px] uppercase text-gray-200 hover:text-brand-gold hover:bg-white/5 rounded-xs transition-colors"
                >
                  Casamentos
                </button>
                <button
                  onClick={() => { setIsEventsDropdownOpen(false); handleNav("/locacao-para-aniversario-porto-alegre"); }}
                  className="w-full text-left px-3 py-1.5 text-[10px] uppercase text-gray-200 hover:text-brand-gold hover:bg-white/5 rounded-xs transition-colors"
                >
                  Aniversários
                </button>
                <button
                  onClick={() => { setIsEventsDropdownOpen(false); handleNav("/locacao-para-formatura"); }}
                  className="w-full text-left px-3 py-1.5 text-[10px] uppercase text-gray-200 hover:text-brand-gold hover:bg-white/5 rounded-xs transition-colors"
                >
                  Formaturas
                </button>
                <button
                  onClick={() => { setIsEventsDropdownOpen(false); handleNav("/locacao-para-evento-corporativo"); }}
                  className="w-full text-left px-3 py-1.5 text-[10px] uppercase text-gray-200 hover:text-brand-gold hover:bg-white/5 rounded-xs transition-colors"
                >
                  Eventos Corporativos
                </button>
                <button
                  onClick={() => { setIsEventsDropdownOpen(false); handleNav("/locacao-para-natal"); }}
                  className="w-full text-left px-3 py-1.5 text-[10px] uppercase text-gray-200 hover:text-brand-gold hover:bg-white/5 rounded-xs transition-colors"
                >
                  Datas Especiais & Ceias
                </button>
                <button
                  onClick={() => { setIsEventsDropdownOpen(false); handleNav("/locacao-para-empresas"); }}
                  className="w-full text-left px-3 py-1.5 text-[10px] uppercase text-gray-200 hover:text-brand-gold hover:bg-white/5 rounded-xs transition-colors"
                >
                  Empresas, Condomínios e Clubes
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNav("/blog")}
              className={`transition-colors duration-200 cursor-pointer ${
                isScrolled ? "text-brand-green/80 hover:text-brand-gold-dark" : "text-gray-200 hover:text-brand-gold"
              }`}
            >
              Blog & Guia
            </button>
            <button
              onClick={() => scrollToSection("por-que-escolher")}
              className={`transition-colors duration-200 cursor-pointer ${
                isScrolled ? "text-brand-green/80 hover:text-brand-gold-dark" : "text-gray-200 hover:text-brand-gold"
              }`}
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("parcelamento")}
              className={`transition-colors duration-200 cursor-pointer ${
                isScrolled ? "text-brand-green/80 hover:text-brand-gold-dark" : "text-gray-200 hover:text-brand-gold"
              }`}
            >
              Parcelamento
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`transition-colors duration-200 cursor-pointer ${
                isScrolled ? "text-brand-green/80 hover:text-brand-gold-dark" : "text-gray-200 hover:text-brand-gold"
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4" id="desktop-actions">
            {budgetItemsCount > 0 && (
              <button
                onClick={onOpenBudget}
                className="relative bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/50 px-4 py-2 rounded-sm text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 transition-all duration-300"
                id="btn-nav-budget"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Meu Orçamento</span>
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-green font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-brand-green animate-bounce">
                  {budgetItemsCount}
                </span>
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-sm flex items-center gap-2 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              id="btn-nav-whatsapp"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Icons (Budget + Menu) */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:hidden" id="mobile-controls">
            {budgetItemsCount > 0 && (
              <button
                onClick={onOpenBudget}
                className="relative bg-brand-gold text-white p-2 rounded-sm flex items-center justify-center transition-all duration-300"
                id="btn-mobile-budget"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-1.5 bg-brand-green text-white font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {budgetItemsCount}
                </span>
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-sm transition-colors duration-200 ${
                isScrolled ? "text-brand-green hover:text-brand-gold" : "text-white hover:text-brand-gold"
              }`}
              aria-label="Toggle menu"
              id="btn-toggle-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 lg:hidden bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/25" id="mobile-menu-dropdown">
          <div className="px-6 pt-3 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-green hover:text-brand-gold transition-all duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("o-que-alugamos")}
              className="block w-full text-left px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-green hover:text-brand-gold transition-all duration-200"
            >
              O que Alugamos
            </button>
            <button
              onClick={() => handleNav("/blog")}
              className="block w-full text-left px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-green hover:text-brand-gold transition-all duration-200"
            >
              Blog & Guia
            </button>
            <button
              onClick={() => scrollToSection("por-que-escolher")}
              className="block w-full text-left px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-green hover:text-brand-gold transition-all duration-200"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("parcelamento")}
              className="block w-full text-left px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-green hover:text-brand-gold transition-all duration-200"
            >
              Parcelamento
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-200 hover:bg-brand-green hover:text-brand-gold transition-all duration-200"
            >
              Contato
            </button>

            <div className="pt-4 border-t border-brand-gold/10 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-center font-bold text-[10px] tracking-widest uppercase py-3 rounded-sm shadow-md transition-all duration-300"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
