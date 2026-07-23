import React from "react";
import { SeoLandingPageData, seoLandingPages } from "../data/seoPages";
import { categories } from "../data/catalog";
import { Product } from "../types";
import Breadcrumbs from "./Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import InternalLinks from "./InternalLinks";
import Footer from "./Footer";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  CreditCard,
  Utensils,
  MapPin,
  Calendar
} from "lucide-react";

interface SeoLandingPageProps {
  page: SeoLandingPageData;
  onAddToBudget: (product: Product, categoryTitle: string, quantity: number) => void;
  onOpenBudget: () => void;
  onNavigate: (path: string) => void;
}

export default function SeoLandingPage({
  page,
  onAddToBudget,
  onOpenBudget,
  onNavigate,
}: SeoLandingPageProps) {
  // Schema JSON-LD for WebPage & FAQPage
  const faqSchema = page.faq && page.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url: `https://festsullocacoes.com.br/${page.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Fest Sul Locações para Eventos",
      logo: "https://festsullocacoes.com.br/logo.png",
    },
  };

  // Find relevant products from catalog matching recommendedCategorySlugs
  const matchingCategories = categories.filter((cat) =>
    page.recommendedCategorySlugs.includes(cat.slug)
  );

  // Collect top products to highlight
  const featuredProducts = matchingCategories.flatMap((cat) =>
    cat.products.map((prod) => ({ product: prod, categoryTitle: cat.title }))
  ).slice(0, 8);

  // Group other SEO pages for cross-linking
  const sameGroupPages = seoLandingPages.filter(
    (p) => p.categoryGroup === page.categoryGroup && p.slug !== page.slug
  );

  const otherGroupPages = seoLandingPages.filter(
    (p) => p.categoryGroup !== page.categoryGroup
  ).slice(0, 10);

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento para ${page.title} em Porto Alegre.`
  );
  const whatsappUrl = `https://wa.me/5551989879933?text=${whatsappMessage}`;

  return (
    <div className="bg-[#F7F7F5] min-h-screen pt-20">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Soluções por Evento" },
          { label: page.categoryGroup },
          { label: page.title },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="bg-brand-green text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C8A86A_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-brand-dark/60 border border-brand-gold/30 px-3.5 py-1.5 rounded-sm text-[11px] uppercase tracking-[0.2em] text-brand-gold font-bold">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>{page.badge}</span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-wide text-white uppercase">
              {page.h1}
            </h1>

            <p className="text-sm sm:text-base font-sans text-gray-200 leading-relaxed font-light max-w-2xl">
              {page.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-300 font-sans">
              <span className="flex items-center gap-1.5 bg-brand-dark/40 px-3 py-1.5 rounded-sm border border-brand-gold/20">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                Higienização Industrial Lacrada
              </span>
              <span className="flex items-center gap-1.5 bg-brand-dark/40 px-3 py-1.5 rounded-sm border border-brand-gold/20">
                <Clock className="w-4 h-4 text-brand-gold" />
                Entrega Agendada em Porto Alegre & RS
              </span>
              <span className="flex items-center gap-1.5 bg-brand-dark/40 px-3 py-1.5 rounded-sm border border-brand-gold/20">
                <CreditCard className="w-4 h-4 text-brand-gold" />
                Parcelamento no Cartão
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-sm inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <a
                href="#produtos-recomendados"
                className="border border-brand-gold/60 hover:bg-brand-gold hover:text-brand-dark text-brand-gold font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm inline-flex items-center gap-2 transition-all duration-300"
              >
                <span>Ver Materiais Disponíveis</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Image / Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-brand-gold/40 shadow-2xl group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vZEeGiFjNIt9DAktn6E4JpbpoMAwBCf9pJP035bDpciMX8VdQMe9JI&s=10"
                alt={page.heroImageAlt}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] font-display uppercase tracking-widest text-brand-gold font-bold">
                  Fest Sul Locações • Porto Alegre
                </span>
                <h3 className="font-display text-lg font-bold text-white uppercase mt-1">
                  {page.title}
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content & Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Editorial SEO Text */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-10 rounded-sm border border-brand-gold/20 shadow-xs space-y-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-green uppercase tracking-wide border-b border-brand-gold/20 pb-4">
                Por que escolher a Fest Sul para {page.title}?
              </h2>

              {page.introText.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 font-sans text-sm sm:text-base leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}

              {/* Highlights / Features Grid */}
              {page.features && page.features.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-green mb-6">
                    Diferenciais Exclusivos de Nossa Locação
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {page.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-4 bg-[#F9F9F7] border border-brand-gold/15 rounded-sm flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-brand-green text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-display text-xs font-bold text-brand-green uppercase">
                            {feat.title}
                          </h4>
                          <p className="text-xs text-gray-600 font-sans mt-1 leading-snug">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Event Tips Card */}
            {page.eventTips && page.eventTips.length > 0 && (
              <div className="bg-brand-green/5 border border-brand-gold/25 p-6 sm:p-8 rounded-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-green">
                    Dicas de Organização para {page.title}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 font-sans">
                  {page.eventTips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5 bg-white p-3 rounded-xs border border-brand-gold/10">
                      <span className="text-brand-gold font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar CTA & Quick Contact */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct WhatsApp Quote Box */}
            <div className="bg-brand-green text-white p-6 sm:p-8 rounded-sm border border-brand-gold/30 shadow-md space-y-5 lg:sticky lg:top-24">
              <span className="text-[10px] font-display uppercase tracking-[0.2em] text-brand-gold font-bold block">
                Orçamento Rápido em Porto Alegre
              </span>

              <h3 className="font-display text-lg font-bold uppercase text-white leading-snug">
                Monte a Lista de Materiais para seu Evento
              </h3>

              <p className="text-xs text-gray-200 font-sans leading-relaxed">
                Envie a data, bairro do evento e quantidade estimada de convidados. Respondemos rapidamente com orçamento completo e condições de parcelamento no cartão.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Falar com Atendente</span>
                </a>

                <button
                  onClick={onOpenBudget}
                  className="w-full bg-transparent border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-bold text-xs uppercase tracking-widest py-3 rounded-sm transition-all duration-300 cursor-pointer"
                >
                  Ver Lista Salva
                </button>
              </div>

              <div className="border-t border-brand-gold/15 pt-4 text-[11px] text-gray-300 space-y-1 font-sans">
                <p>📍 Porto Alegre & Região Metropolitana</p>
                <p>📞 (51) 98987-9933</p>
                <p>💳 Aceitamos cartões de crédito com parcelamento</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products Showcase */}
      {featuredProducts.length > 0 && (
        <section id="produtos-recomendados" className="py-16 bg-white border-t border-brand-gold/15 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-display uppercase tracking-[0.2em] text-brand-gold font-bold">
                Acervo Selecionado
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-green uppercase mt-2">
                Materiais Recomendados para {page.title}
              </h2>
              <div className="w-12 h-[2px] bg-brand-gold mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-sans">
                Adicione itens à sua lista e solicite um orçamento consolidado sem compromisso.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(({ product, categoryTitle }) => {
                const itemWaUrl = `https://wa.me/5551989879933?text=${encodeURIComponent(
                  `Olá! Gostaria de solicitar orçamento para o item "${product.name}" em ${page.title}.`
                )}`;

                return (
                  <div
                    key={product.id}
                    className="bg-[#F9F9F7] border border-brand-gold/20 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden bg-white p-2">
                        <img
                          src={product.image}
                          alt={product.imageAlt || product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-2 left-2 bg-brand-dark/80 text-brand-gold text-[9px] uppercase tracking-wider px-2 py-1 rounded-xs font-display">
                          {categoryTitle}
                        </span>
                      </div>

                      <div className="p-4 space-y-2">
                        <h3 className="font-display text-xs font-bold text-brand-green uppercase line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-[11px] text-gray-600 font-sans leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 border-t border-gray-100 flex items-center justify-between mt-2">
                      <a
                        href={itemWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] uppercase font-bold tracking-wider py-2.5 rounded-sm transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <Phone className="w-3.5 h-3.5 text-white" />
                        <span>Solicitar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Accordion */}
      {page.faq && page.faq.length > 0 && (
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-xs font-display uppercase tracking-[0.2em] text-brand-gold font-bold">
              Perguntas Frequentes
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-green uppercase mt-2">
              Dúvidas sobre {page.title}
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto my-3" />
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={page.faq} />
          </div>
        </section>
      )}

      {/* Interlinking to other SEO Pages */}
      <section className="py-12 bg-white border-t border-brand-gold/15 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
              Mais Opções na Categoria {page.categoryGroup}
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-sans text-brand-green">
              {sameGroupPages.map((p) => (
                <a
                  key={p.id}
                  href={`/${p.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/${p.slug}`);
                  }}
                  className="bg-[#F7F7F5] border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-green hover:text-white px-3 py-1.5 rounded-sm transition-all duration-200"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
              Outros Tipos de Eventos & Públicos Atendidos
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-sans text-brand-green">
              {otherGroupPages.map((p) => (
                <a
                  key={p.id}
                  href={`/${p.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/${p.slug}`);
                  }}
                  className="bg-[#F7F7F5] border border-gray-200 hover:border-brand-gold hover:text-brand-gold px-3 py-1.5 rounded-sm transition-all duration-200"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Footer Navigation */}
      <InternalLinks onNavigate={onNavigate} />

      {/* Main Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
