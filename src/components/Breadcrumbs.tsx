import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
}

export default function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, "", path);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://festsullocacoes.com.br/",
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: item.label,
      item: item.path ? `https://festsullocacoes.com.br${item.path}` : "https://festsullocacoes.com.br/",
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 sm:px-8 bg-white/80 border-b border-gray-200/60 backdrop-blur-xs text-xs font-sans"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="max-w-7xl mx-auto flex items-center space-x-2 flex-wrap text-gray-500">
        <li className="flex items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/");
            }}
            className="flex items-center hover:text-brand-gold transition-colors text-gray-600 font-medium"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Início</span>
          </a>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-gray-400" />
              {isLast ? (
                <span className="font-bold text-brand-green truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.path || "#"}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.onClick) {
                      item.onClick();
                    } else if (item.path) {
                      handleNav(item.path);
                    }
                  }}
                  className="hover:text-brand-gold transition-colors font-medium text-gray-600 truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
