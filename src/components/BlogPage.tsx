import React, { useState } from "react";
import { BlogPost } from "../types";
import Breadcrumbs from "./Breadcrumbs";
import InternalLinks from "./InternalLinks";
import Footer from "./Footer";
import { Search, Calendar, Clock, User, Sparkles, ArrowRight } from "lucide-react";

interface BlogPageProps {
  posts: BlogPost[];
  onNavigate: (path: string) => void;
}

export default function BlogPage({ posts, onNavigate }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categoriesList = ["Todos", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#F7F7F5] min-h-screen pt-20">
      <Breadcrumbs items={[{ label: "Blog & Dicas" }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-brand-green text-white py-12 px-4 sm:px-8 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <span className="text-xs font-display uppercase tracking-[0.25em] text-brand-gold font-bold inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Guia de Organização de Eventos no RS
          </span>
          <h1 className="font-display text-2xl sm:text-4xl font-bold mb-4">
            Blog Fest Sul Locações
          </h1>
          <p className="text-sm font-sans text-gray-200 leading-relaxed font-light">
            Confira artigos completos, guias de cálculo de louças e taças, etiqueta de mesa posta e tendências de mobiliário para casamentos e formaturas em Porto Alegre.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 bg-white p-6 rounded-sm border border-brand-gold/15">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F7F7F5] border border-gray-200 rounded-sm text-xs text-brand-green focus:outline-hidden focus:border-brand-gold font-sans"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-sans rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-green text-brand-gold font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onNavigate(`/blog/${post.slug}`)}
              className="bg-white rounded-sm border border-brand-gold/15 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-brand-green/90 text-brand-gold text-[10px] font-display uppercase tracking-widest px-3 py-1">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-gray-400 font-sans mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-base font-bold text-brand-green group-hover:text-brand-gold transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-gray-600 font-sans leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 text-xs font-sans text-brand-green font-semibold">
                <span className="flex items-center gap-1 text-[11px] text-gray-500">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1 text-brand-gold group-hover:translate-x-1 transition-transform">
                  Ler Artigo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>

      <InternalLinks onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
