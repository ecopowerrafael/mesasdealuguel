import React from "react";
import { Search, Home, ArrowRight } from "lucide-react";
import { categories } from "../data/catalog";
import Footer from "./Footer";

export default function NotFoundPage() {
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen pt-28 flex flex-col justify-between">
      <div className="px-4 sm:px-8 py-12 flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 sm:p-12 rounded-sm border border-brand-gold/20 shadow-xs">
          <span className="font-display text-5xl font-extrabold text-brand-gold block mb-2">404</span>
          <h1 className="font-display text-2xl font-bold text-brand-green mb-4">
            Página não encontrada no catálogo da Fest Sul
          </h1>
          <p className="text-xs font-sans text-gray-600 mb-8 max-w-md mx-auto">
            O endereço digitado pode ter mudado ou a página foi movida. Explore as principais categorias do nosso catálogo de locação para eventos em Porto Alegre:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/${cat.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${cat.slug}`);
                }}
                className="p-3 bg-[#F7F7F5] hover:bg-brand-green hover:text-white rounded-sm border border-gray-200 transition-colors text-xs font-display font-semibold text-brand-green flex items-center justify-between group"
              >
                <span>Aluguel de {cat.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>

          <button
            onClick={() => navigate("/")}
            className="py-3 px-8 bg-brand-green hover:bg-brand-green-light text-white font-display text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center space-x-2 cursor-pointer"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Voltar para Página Inicial</span>
          </button>
        </div>
      </div>

      <Footer onNavigate={navigate} />
    </div>
  );
}
