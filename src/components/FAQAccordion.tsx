import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export default function FAQAccordion({
  items,
  title = "Perguntas Frequentes (FAQ)",
  subtitle = "Tire suas dúvidas sobre o processo de locação, higienização, entrega e prazos em Porto Alegre e Região Metropolitana.",
  showSearch = false,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-sm border border-brand-gold/20 shadow-xs my-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-brand-gold" />
          <span className="text-xs uppercase font-sans tracking-[0.2em] text-brand-gold font-bold">
            Dúvidas Frequentes
          </span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-green">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 font-sans mt-2 leading-relaxed font-light">
          {subtitle}
        </p>
      </div>

      {showSearch && (
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Buscar dúvida... ex: entrega, lavagem, quebra, prazo"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F7F7F5] border border-gray-200 rounded-sm text-xs text-brand-green focus:outline-hidden focus:border-brand-gold font-sans"
          />
        </div>
      )}

      {filteredItems.length === 0 ? (
        <p className="text-xs text-gray-500 py-6 text-center italic">
          Nenhuma pergunta encontrada com o termo "{searchQuery}".
        </p>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200/80 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full px-5 py-4 text-left font-display text-xs sm:text-sm font-bold flex items-center justify-between transition-colors cursor-pointer ${
                    isOpen
                      ? "bg-brand-green/5 text-brand-green border-b border-brand-gold/20"
                      : "bg-gray-50 hover:bg-gray-100/80 text-brand-green"
                  }`}
                >
                  <span className="pr-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-xs sm:text-sm font-sans text-gray-600 leading-relaxed space-y-2 border-t border-gray-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
