import React from "react";
import { BlogPost } from "../types";
import Breadcrumbs from "./Breadcrumbs";
import InternalLinks from "./InternalLinks";
import Footer from "./Footer";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Phone } from "lucide-react";

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
  onOpenBudget: () => void;
}

export default function BlogPostPage({ post, onNavigate, onOpenBudget }: BlogPostPageProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    author: {
      "@type": "Organization",
      name: post.author || "Fest Sul Locações",
    },
    publisher: {
      "@type": "Organization",
      name: "Fest Sul Locações para Eventos",
      logo: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=200",
      },
    },
    datePublished: "2026-07-01",
    description: post.excerpt,
  };

  const whatsappNumber = "5551989879933";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Li%20o%20artigo%20"${encodeURIComponent(
    post.title
  )}"%20no%20blog%20da%20Fest%20Sul%20e%20gostaria%20de%20solicitar%20um%20orçamento%20de%20locação.`;

  return (
    <div className="bg-[#F7F7F5] min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog & Dicas", path: "/blog" },
          { label: post.title },
        ]}
        onNavigate={onNavigate}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <button
          onClick={() => onNavigate("/blog")}
          className="inline-flex items-center text-xs font-sans text-gray-500 hover:text-brand-gold mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Voltar para o Blog
        </button>

        <article className="bg-white p-6 sm:p-12 rounded-sm border border-brand-gold/15 shadow-xs">
          <span className="inline-block bg-brand-green/10 text-brand-green font-display text-[10px] uppercase tracking-widest px-3 py-1 font-bold mb-4">
            {post.category}
          </span>

          <h1 className="font-display text-2xl sm:text-4xl font-bold text-brand-green mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-sans pb-6 mb-8 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-brand-gold" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-gold" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-gold" />
              {post.readTime}
            </span>
          </div>

          <div className="mb-8 rounded-sm overflow-hidden border border-gray-100">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              width={1200}
              height={675}
              className="w-full h-auto max-h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-base text-gray-700 font-sans leading-relaxed italic mb-8 border-l-4 border-brand-gold pl-4 py-1 bg-gray-50">
            {post.excerpt}
          </p>

          {/* Article HTML Content */}
          <div
            className="prose prose-sm sm:prose font-sans text-gray-700 leading-relaxed space-y-4 max-w-none [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-green [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-brand-green [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1.5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Keywords / Tags */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold font-display uppercase tracking-wider text-brand-green">
                <Tag className="w-4 h-4 text-brand-gold" />
                <span>Palavras-Chave Relacionadas:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="bg-[#F7F7F5] text-gray-600 text-xs px-3 py-1 rounded-sm border border-gray-200"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Banner */}
          <div className="mt-12 p-8 sm:p-10 bg-brand-green text-white rounded-sm border border-brand-gold/30 text-center shadow-sm">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2">
              Precisa de Louças, Taças ou Mesas para seu Evento em Porto Alegre?
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-sans mb-6 max-w-lg mx-auto font-light leading-relaxed">
              Fale diretamente com nossa equipe no WhatsApp para atendimento imediato ou consulte todos os itens do nosso catálogo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
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
        </article>
      </main>

      <InternalLinks onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
