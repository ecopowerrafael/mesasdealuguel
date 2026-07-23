import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, "", path);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const quickThemeGroups = [
    {
      title: "Louças & Porcelanas",
      categoryPath: "/locacao-loucas",
      links: [
        { label: "Locação de Louças Porto Alegre", path: "/locacao-de-loucas-porto-alegre" },
        { label: "Aluguel de Pratos Porto Alegre", path: "/aluguel-de-pratos-porto-alegre" },
        { label: "Aluguel de Pratos Rasos", path: "/aluguel-pratos-rasos" },
        { label: "Aluguel de Pratos Fundos", path: "/aluguel-pratos-fundos" },
        { label: "Aluguel de Pratos Sobremesa", path: "/aluguel-pratos-sobremesa" },
        { label: "Locação de Porcelanas", path: "/locacao-porcelanas" },
      ],
    },
    {
      title: "Talheres Inox",
      categoryPath: "/locacao-talheres",
      links: [
        { label: "Aluguel de Talheres Porto Alegre", path: "/aluguel-de-talheres-porto-alegre" },
        { label: "Locação de Talheres Inox", path: "/locacao-de-talheres-inox" },
        { label: "Aluguel de Faqueiros", path: "/aluguel-de-faqueiros" },
        { label: "Talheres para Buffet", path: "/talheres-para-buffet" },
      ],
    },
    {
      title: "Taças de Cristal",
      categoryPath: "/locacao-tacas-porto-alegre",
      links: [
        { label: "Aluguel de Taças Porto Alegre", path: "/aluguel-de-tacas-porto-alegre" },
        { label: "Locação de Taças Porto Alegre", path: "/locacao-de-tacas-porto-alegre" },
        { label: "Aluguel de Taças de Cristal", path: "/aluguel-de-tacas-de-cristal" },
        { label: "Taças para Casamento", path: "/tacas-para-casamento" },
        { label: "Taças para Espumante", path: "/tacas-para-espumante" },
        { label: "Taças para Vinho", path: "/tacas-para-vinho" },
        { label: "Taças para Água", path: "/tacas-para-agua" },
        { label: "Taças para Gin", path: "/tacas-para-gin" },
        { label: "Taças para Whisky", path: "/tacas-para-whisky" },
      ],
    },
    {
      title: "Copos para Eventos",
      categoryPath: "/locacao-copos-eventos-porto-alegre",
      links: [
        { label: "Aluguel de Copos Porto Alegre", path: "/aluguel-de-copos-porto-alegre" },
        { label: "Locação de Copos para Eventos", path: "/locacao-de-copos-para-eventos" },
        { label: "Copos Long Drink", path: "/copos-long-drink" },
        { label: "Copos Whisky", path: "/copos-whisky" },
        { label: "Copos Cerveja / Chopp", path: "/copos-cerveja" },
        { label: "Copos de Vidro", path: "/copos-de-vidro" },
      ],
    },
    {
      title: "Rechauds & Buffet",
      categoryPath: "/locacao-rechaud-porto-alegre",
      links: [
        { label: "Aluguel de Rechaud Porto Alegre", path: "/aluguel-de-rechaud-porto-alegre" },
        { label: "Locação de Rechaud", path: "/locacao-de-rechaud" },
        { label: "Rechaud Inox", path: "/rechaud-inox" },
        { label: "Rechaud Retangular", path: "/rechaud-retangular" },
        { label: "Rechaud Redondo", path: "/rechaud-redondo" },
        { label: "Rechaud para Buffet", path: "/rechaud-para-buffet" },
      ],
    },
  ];

  const eventOcassionGroups = [
    {
      title: "Eventos & Estrutura",
      links: [
        { label: "Locação para Eventos Porto Alegre", path: "/locacao-para-eventos-porto-alegre" },
        { label: "Material para Eventos Porto Alegre", path: "/material-para-eventos-porto-alegre" },
        { label: "Equipamentos para Eventos", path: "/equipamentos-para-eventos" },
        { label: "Estrutura para Eventos", path: "/estrutura-para-eventos" },
        { label: "Locação de Equipamentos para Festas", path: "/locacao-de-equipamentos-para-festas" },
      ],
    },
    {
      title: "Casamentos",
      links: [
        { label: "Locação para Casamento Porto Alegre", path: "/locacao-para-casamento-porto-alegre" },
        { label: "Aluguel de Material para Casamento", path: "/aluguel-de-material-para-casamento" },
        { label: "Louças para Casamento", path: "/loucas-para-casamento" },
        { label: "Taças para Casamento", path: "/tacas-para-casamento" },
        { label: "Mesas para Casamento", path: "/mesas-para-casamento" },
        { label: "Cadeiras Tiffany Casamento", path: "/cadeiras-tiffany-casamento" },
      ],
    },
    {
      title: "Aniversários & Formaturas",
      links: [
        { label: "Locação para Aniversário Porto Alegre", path: "/locacao-para-aniversario-porto-alegre" },
        { label: "Material para Aniversário", path: "/material-para-aniversario" },
        { label: "Louças para Aniversário", path: "/loucas-para-aniversario" },
        { label: "Taças para Aniversário", path: "/tacas-para-aniversario" },
        { label: "Aluguel de Mesas para Aniversário", path: "/aluguel-de-mesas-para-aniversario" },
        { label: "Locação para Formatura", path: "/locacao-para-formatura" },
        { label: "Material para Formatura", path: "/material-para-formatura" },
        { label: "Taças para Formatura", path: "/tacas-para-formatura" },
        { label: "Mesas para Formatura", path: "/mesas-para-formatura" },
      ],
    },
    {
      title: "Eventos Corporativos",
      links: [
        { label: "Locação para Evento Corporativo", path: "/locacao-para-evento-corporativo" },
        { label: "Material para Evento Empresarial", path: "/material-para-evento-empresarial" },
        { label: "Equipamentos para Convenções", path: "/equipamentos-para-convencoes" },
        { label: "Material para Palestras", path: "/material-para-palestras" },
        { label: "Material para Confraternização", path: "/material-para-confraternizacao" },
      ],
    },
    {
      title: "Datas Especiais & Público",
      links: [
        { label: "Locação para Bodas", path: "/locacao-para-bodas" },
        { label: "Locação para Chá de Bebê", path: "/locacao-para-cha-de-bebe" },
        { label: "Locação para Chá Revelação", path: "/locacao-para-cha-revelacao" },
        { label: "Locação para Batizado", path: "/locacao-para-batizado" },
        { label: "Locação para Confraternização", path: "/locacao-para-confraternizacao" },
        { label: "Locação para Natal", path: "/locacao-para-natal" },
        { label: "Locação para Ano Novo", path: "/locacao-para-ano-novo" },
        { label: "Locação para Empresas", path: "/locacao-para-empresas" },
        { label: "Locação para Condomínios", path: "/locacao-para-condominios" },
        { label: "Locação para Igrejas", path: "/locacao-para-igrejas" },
        { label: "Locação para Escolas", path: "/locacao-para-escolas" },
        { label: "Locação para Clubes", path: "/locacao-para-clubes" },
        { label: "Locação para Salões de Festa", path: "/locacao-para-saloes-de-festa" },
      ],
    },
  ];

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-gold/20 pt-16 sm:pt-20 pb-12" id="site-footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* SEO Category & Topic Grid in Footer */}
        <div className="mb-16 pb-12 border-b border-brand-gold/15">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-gold mb-8 text-center sm:text-left">
            Navegação por Categoria & Termos de Locação
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {quickThemeGroups.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <a
                  href={group.categoryPath}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(group.categoryPath);
                  }}
                  className="font-display text-xs font-bold uppercase tracking-wider text-white hover:text-brand-gold transition-colors flex items-center gap-1 group"
                >
                  <span>{group.title}</span>
                  <ArrowUpRight className="w-3 h-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <ul className="space-y-1.5 text-[11px] font-sans text-gray-400">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav(link.path);
                        }}
                        className="hover:text-brand-gold transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-gold mt-12 mb-8 text-center sm:text-left pt-8 border-t border-brand-gold/15">
            Soluções de Locação por Tipo de Evento & Público
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {eventOcassionGroups.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                  {group.title}
                </h4>
                <ul className="space-y-1.5 text-[11px] font-sans text-gray-400">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav(link.path);
                        }}
                        className="hover:text-brand-gold transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Brand & Main Navigation Footer Block */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div 
            className="flex flex-col items-center justify-center cursor-pointer group"
            onClick={() => handleNav("/")}
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-[0.25em] text-brand-gold leading-none transition-transform duration-300 group-hover:scale-105">
              FEST SUL
            </span>
            <div className="w-16 border-t border-brand-gold/60 my-1.5 transition-transform duration-300 group-hover:scale-x-110" />
            <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.3em] text-brand-gold font-medium leading-none">
              Locações para Eventos
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-[11px] font-sans">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>Porto Alegre – RS e Região Metropolitana</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-6 border-t border-brand-gold/10 w-full max-w-lg text-[10px] uppercase tracking-[0.15em] font-semibold">
            <button
              onClick={() => handleNav("/")}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => handleNav("/locacao-loucas")}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Louças
            </button>
            <button
              onClick={() => handleNav("/locacao-talheres")}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Talheres
            </button>
            <button
              onClick={() => handleNav("/locacao-tacas-porto-alegre")}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Taças
            </button>
            <button
              onClick={() => handleNav("/locacao-copos-eventos-porto-alegre")}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Copos
            </button>
            <button
              onClick={() => handleNav("/locacao-rechaud-porto-alegre")}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Rechauds
            </button>
            <button
              onClick={() => handleNav("/blog")}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Blog
            </button>
            <button
              onClick={() => {
                if (window.location.pathname !== "/") {
                  handleNav("/");
                  setTimeout(() => {
                    document.getElementById("parcelamento")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  document.getElementById("parcelamento")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-sans text-gray-300 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Parcelamento
            </button>
          </div>

          <div className="pt-8 text-center text-[10px] text-gray-500 font-sans tracking-wide">
            <p>© {new Date().getFullYear()} FestSul Locações para Eventos. Todos os direitos reservados.</p>
            <p className="mt-2 text-gray-600 uppercase tracking-widest text-[8px]">
              Aluguel de louças, pratos, talheres, taças, copos, rechauds e materiais de festa em Porto Alegre – RS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
