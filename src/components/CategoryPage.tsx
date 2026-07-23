import React from "react";
import { Category, Product } from "../types";
import Breadcrumbs from "./Breadcrumbs";
import InternalLinks from "./InternalLinks";
import Footer from "./Footer";
import FAQAccordion from "./FAQAccordion";
import { Check, ArrowRight, ShieldCheck, Clock, Sparkles, Phone } from "lucide-react";

interface CategoryPageProps {
  category: Category;
  onAddToBudget: (product: Product, categoryTitle: string, quantity: number) => void;
  onOpenBudget: () => void;
  onNavigate: (path: string) => void;
}

export default function CategoryPage({
  category,
  onAddToBudget,
  onOpenBudget,
  onNavigate,
}: CategoryPageProps) {
  const seo = category.seoContent;

  const faqSchema = seo?.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seo.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: category.products.map((prod, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: prod.name,
      url: `https://festsullocacoes.com.br/produto/${prod.slug}`,
    })),
  };

  const whatsappCategoryUrl = `https://wa.me/5551989879933?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20aluguel%20de%20${encodeURIComponent(
    category.title
  )}%20em%20Porto%20Alegre.`;

  return (
    <div className="bg-[#F7F7F5] min-h-screen pt-20">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Breadcrumbs
        items={[{ label: category.title }]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-brand-green text-white py-12 px-4 sm:px-8 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-display uppercase tracking-[0.25em] text-brand-gold font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Fest Sul Locações para Eventos – Porto Alegre & RS
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-bold mt-2 mb-4 leading-tight">
              {seo?.h1 || `Aluguel de ${category.title} em Porto Alegre`}
            </h1>
            <p className="text-sm font-sans text-gray-200 leading-relaxed font-light">
              {category.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gray-300 font-sans">
              <span className="flex items-center gap-1.5 bg-brand-dark/40 px-3 py-1.5 rounded-sm border border-brand-gold/20">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                Produtos Higienizados
              </span>
              <span className="flex items-center gap-1.5 bg-brand-dark/40 px-3 py-1.5 rounded-sm border border-brand-gold/20">
                <Clock className="w-4 h-4 text-brand-gold" />
                Entrega Pontual em Porto Alegre & Região
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={whatsappCategoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate("/")}
                className="py-3 px-5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Ver Todos os Itens Disponíveis para Locação</span>
              </button>
            </div>
          </div>

          <div className="w-full md:w-80 h-48 rounded-sm overflow-hidden border border-brand-gold/40 shadow-lg">
            <img
              src={category.image}
              alt={category.imageAlt || category.title}
              width={600}
              height={400}
              loading="eager"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Main Content & Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="mb-8">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-green">
            {seo?.h2Title || `Opções de ${category.title} para Locação`}
          </h2>
          <div className="w-16 border-t-2 border-brand-gold my-2" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {category.products.map((product) => {
            const productWhatsappUrl = `https://wa.me/5551989879933?text=Olá!%20Gostaria%20de%20um%20orçamento%20de%20aluguel%20para%20${encodeURIComponent(
              product.name
            )}%20em%20Porto%20Alegre.`;

            return (
              <article
                key={product.id}
                className="bg-white rounded-sm border border-brand-gold/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div
                    onClick={() => onNavigate(`/produto/${product.slug}`)}
                    className="relative h-56 bg-gray-50 overflow-hidden cursor-pointer flex items-center justify-center p-4 border-b border-gray-100"
                  >
                    <img
                      src={product.image}
                      alt={product.imageAlt || product.name}
                      loading="lazy"
                      width={product.imageWidth || 400}
                      height={product.imageHeight || 400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-3 left-3 bg-brand-green/90 text-brand-gold text-[10px] font-display uppercase tracking-widest px-2.5 py-1">
                      Higienizado & Embalado
                    </span>
                  </div>

                  <div className="p-6">
                    <h3
                      onClick={() => onNavigate(`/produto/${product.slug}`)}
                      className="font-display text-sm font-bold text-brand-green group-hover:text-brand-gold transition-colors cursor-pointer mb-2"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed line-clamp-3 mb-4">
                      {product.description}
                    </p>

                    {product.material && (
                      <p className="text-[11px] text-gray-500 font-sans mb-1">
                        <strong className="text-gray-700">Material:</strong> {product.material}
                      </p>
                    )}
                    {product.dimensions && (
                      <p className="text-[11px] text-gray-500 font-sans mb-4">
                        <strong className="text-gray-700">Dimensão / Cap.:</strong> {product.dimensions}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-col gap-2">
                  <a
                    href={productWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>Solicitar no WhatsApp</span>
                  </a>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onNavigate(`/produto/${product.slug}`)}
                      className="flex-1 py-2 px-3 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-display text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Ver Detalhes do Item</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onAddToBudget(product, category.title, 50)}
                      className="py-2 px-3 border border-brand-gold text-brand-green hover:bg-brand-gold/10 font-sans text-[10px] font-semibold transition-colors cursor-pointer"
                      title="Adicionar ao Carrinho de Orçamento"
                    >
                      + Carrinho
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Deep SEO Text Content */}
        {seo && (
          <section className="bg-white p-8 sm:p-12 rounded-sm border border-brand-gold/20 shadow-xs mb-12 space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold text-brand-green mb-4">
                Guia de Locação: {category.title} em Porto Alegre e Região Metropolitana
              </h2>
              {seo.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm text-gray-600 font-sans leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>

            {/* Event Tips */}
            {seo.eventTips && (
              <div className="bg-[#F7F7F5] p-6 rounded-sm border-l-4 border-brand-gold">
                <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-green mb-3">
                  Recomendações Práticas para seu Evento:
                </h3>
                <ul className="space-y-2 text-xs text-gray-700 font-sans">
                  {seo.eventTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* FAQs Component */}
        {seo?.faq && seo.faq.length > 0 && (
          <div className="mb-12">
            <FAQAccordion
              items={seo.faq}
              title={`Dúvidas Frequentes sobre Aluguel de ${category.title}`}
              subtitle="Confira abaixo as respostas para as principais questões sobre prazos, entrega e higienização das peças."
              showSearch={false}
            />
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mb-12 p-8 sm:p-10 bg-brand-green text-white rounded-sm border border-brand-gold/30 text-center shadow-sm">
          <h3 className="font-display text-xl font-bold mb-2">
            Precisa de um orçamento completo para {category.title} em Porto Alegre?
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 font-sans mb-6 max-w-xl mx-auto font-light leading-relaxed">
            Fale diretamente com nossa equipe via WhatsApp para receber atendimento rápido ou consulte todos os itens do nosso catálogo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappCategoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate("/")}
              className="py-3.5 px-6 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green font-display text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Ver Todos os Itens Disponíveis para Locação
            </button>
          </div>
        </div>
      </main>

      <InternalLinks onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
