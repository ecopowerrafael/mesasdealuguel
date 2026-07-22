import React from "react";
import { categories } from "../data/catalog";
import { blogPosts } from "../data/blog";

interface InternalLinksProps {
  onNavigate?: (path: string) => void;
}

export default function InternalLinks({ onNavigate }: InternalLinksProps) {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, "", path);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-green/5 border-t border-brand-gold/15 py-12 px-4 sm:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-8">
          Navegação Rápida & Links Relevantes de Locação
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Categorias */}
          <div>
            <h4 className="font-display text-sm font-semibold text-brand-green mb-4">
              Categorias Principais
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 font-sans">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`/${cat.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/${cat.slug}`);
                    }}
                    className="hover:text-brand-gold transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 mr-2" />
                    Aluguel de {cat.title} em Porto Alegre
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos em Destaque */}
          <div>
            <h4 className="font-display text-sm font-semibold text-brand-green mb-4">
              Mais Solicitados
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 font-sans">
              {categories.flatMap((cat) => cat.products.slice(0, 1)).map((prod) => (
                <li key={prod.id}>
                  <a
                    href={`/produto/${prod.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/produto/${prod.slug}`);
                    }}
                    className="hover:text-brand-gold transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 mr-2" />
                    {prod.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guia & Artigos do Blog */}
          <div>
            <h4 className="font-display text-sm font-semibold text-brand-green mb-4">
              Dicas de Planejamento de Eventos
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 font-sans">
              {blogPosts.map((post) => (
                <li key={post.id}>
                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/blog/${post.slug}`);
                    }}
                    className="hover:text-brand-gold transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 mr-2" />
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
