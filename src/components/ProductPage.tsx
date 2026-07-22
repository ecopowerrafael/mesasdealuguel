import React, { useState } from "react";
import { Product, Category } from "../types";
import Breadcrumbs from "./Breadcrumbs";
import InternalLinks from "./InternalLinks";
import Footer from "./Footer";
import { Star, ShieldCheck, Check, ArrowLeft, Plus, Phone } from "lucide-react";

interface ProductPageProps {
  product: Product;
  category: Category;
  onAddToBudget: (product: Product, categoryTitle: string, quantity: number) => void;
  onOpenBudget: () => void;
  onNavigate: (path: string) => void;
}

export default function ProductPage({
  product,
  category,
  onAddToBudget,
  onOpenBudget,
  onNavigate,
}: ProductPageProps) {
  const [quantity, setQuantity] = useState<number>(50);
  const [added, setAdded] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToBudget(product, category.title, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const whatsappNumber = "5551989879933";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20consultar%20a%20disponibilidade%20para%20locação%20de%20${quantity}%20unidades%20do%20item%20"${encodeURIComponent(
    product.name
  )}"`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.longDescription || product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Fest Sul Locações",
    },
    offers: {
      "@type": "Offer",
      url: `https://festsullocacoes.com.br/produto/${product.slug}`,
      priceCurrency: "BRL",
      price: product.priceEstimate || "0.00",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Fest Sul Locações para Eventos",
      },
    },
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviewCount || 25,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: category.title, path: `/${category.slug}` },
          { label: product.name },
        ]}
        onNavigate={onNavigate}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <button
          onClick={() => onNavigate(`/${category.slug}`)}
          className="inline-flex items-center text-xs font-sans text-gray-500 hover:text-brand-gold mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Voltar para Categoria: {category.title}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 sm:p-10 rounded-sm border border-brand-gold/15 shadow-xs">
          {/* Product Image */}
          <div className="relative group overflow-hidden rounded-sm bg-gray-50 border border-gray-100 flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.imageAlt || product.name}
              title={product.name}
              loading="eager"
              width={product.imageWidth || 600}
              height={product.imageHeight || 600}
              className="w-full h-auto max-h-[480px] object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-brand-green text-brand-gold text-[10px] uppercase font-display tracking-widest px-3 py-1 font-bold shadow-xs">
              Higienizado & Pronta Entrega
            </span>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-semibold">
                Aluguel de {category.title} em Porto Alegre
              </span>

              <h1 className="font-display text-2xl sm:text-3xl font-bold text-brand-green mt-2 mb-4 leading-tight">
                {product.name}
              </h1>

              {product.rating && (
                <div className="flex items-center space-x-2 mb-6 text-xs text-gray-600 font-sans">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                  <span>({product.reviewCount} avaliações de clientes RS)</span>
                </div>
              )}

              <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
                {product.longDescription || product.description}
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-4 bg-[#F7F7F5] p-4 rounded-sm mb-6 border border-gray-200/60 text-xs text-gray-700 font-sans">
                {product.material && (
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px]">Material:</span>
                    <span className="font-semibold text-brand-green">{product.material}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px]">Dimensões / Cap.:</span>
                    <span className="font-semibold text-brand-green">{product.dimensions}</span>
                  </div>
                )}
                {product.priceEstimate && (
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px]">Estimativa de Locação:</span>
                    <span className="font-semibold text-brand-green">
                      A partir de R$ {product.priceEstimate.toFixed(2)} / un.
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-gray-400 block uppercase tracking-wider text-[10px]">Status:</span>
                  <span className="font-semibold text-emerald-600">Disponível para Reserva</span>
                </div>
              </div>

              {product.specs && (
                <div className="mb-8">
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-brand-green mb-3">
                    Diferenciais e Qualidade Fest Sul:
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-600 font-sans">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Quantity Selector & Actions */}
            <div className="pt-6 border-t border-gray-100">
              <label className="block text-xs uppercase font-sans tracking-wider text-gray-500 mb-2 font-semibold">
                Quantidade estimada para seu evento:
              </label>
              <div className="flex items-center space-x-4 mb-6">
                <input
                  type="number"
                  min="1"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-28 px-3 py-2 border border-gray-300 rounded-sm font-sans text-sm focus:outline-hidden focus:border-brand-gold text-center font-bold text-brand-green"
                />
                <span className="text-xs text-gray-500 font-sans">unidades</span>
              </div>

              <div className="flex flex-col space-y-3">
                {/* Primary CTA: WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center space-x-2.5 shadow-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Secondary CTA: See All Items */}
                  <button
                    onClick={() => onNavigate("/")}
                    className="py-3 px-4 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-display text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Ver Todos os Itens Disponíveis para Locação</span>
                  </button>

                  {/* Tertiary Option: Add to Cart */}
                  <button
                    onClick={handleAdd}
                    className={`py-3 px-4 border border-brand-gold font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                      added
                        ? "bg-brand-gold text-brand-green"
                        : "bg-white text-brand-green hover:bg-brand-gold/10"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Adicionar ao Carrinho</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Context Section */}
        <section className="mt-12 bg-white p-8 rounded-sm border border-brand-gold/15">
          <h2 className="font-display text-lg font-bold text-brand-green mb-4">
            Sobre o Aluguel de {product.name} em Porto Alegre
          </h2>
          <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4">
            Na Fest Sul, a locação de <strong>{product.name}</strong> inclui rigorosa lavagem e esterilização industrial, acondicionamento em colmeia ou caixa de proteção e pontualidade na entrega no local da recepção em Porto Alegre, Canoas, Novo Hamburgo, São Leopoldo, Gravataí e Caxias do Sul.
          </p>
        </section>

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-brand-green mb-6">
            Outros itens relacionados na categoria {category.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.products
              .filter((p) => p.id !== product.id)
              .map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate(`/produto/${rel.slug}`)}
                  className="bg-white p-4 rounded-sm border border-gray-200 hover:border-brand-gold cursor-pointer transition-all hover:shadow-md group"
                >
                  <img
                    src={rel.image}
                    alt={rel.imageAlt || rel.name}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-full h-40 object-contain mb-3 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-display text-xs font-bold text-brand-green group-hover:text-brand-gold transition-colors line-clamp-2">
                    {rel.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">
                    {rel.description}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </main>

      <InternalLinks onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
