import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { Category, Product, BudgetItem } from "../types";

interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  budgetItems: BudgetItem[];
  onAddProduct: (product: Product, categoryTitle: string, quantity: number) => void;
  onRemoveProduct: (productId: string) => void;
}

export default function CategoryDetailModal({
  isOpen,
  onClose,
  category,
  budgetItems,
  onAddProduct,
  onRemoveProduct,
}: CategoryDetailModalProps) {
  if (!category) return null;

  const getItemQuantity = (productId: string) => {
    const found = budgetItems.find((item) => item.product.id === productId);
    return found ? found.quantity : 0;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 cursor-pointer"
            id="category-modal-backdrop"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden shadow-2xl border border-brand-gold/25 flex flex-col max-h-[85vh]"
              id="category-modal-content"
            >
              {/* Banner / Header Image */}
              <div className="relative h-48 sm:h-56 w-full flex-shrink-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent flex flex-col justify-end p-6" />
                
                {/* Header text */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-gold tracking-[0.15em] uppercase">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-200 mt-1 max-w-xl font-sans font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-brand-dark/60 hover:bg-brand-green text-white p-2 rounded-sm transition-all duration-200 border border-brand-gold/20"
                  aria-label="Close modal"
                  id="btn-close-category-modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Product List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6" id="category-modal-products-list">
                <h4 className="text-[10px] font-bold text-brand-green uppercase tracking-[0.2em] border-b border-brand-gold/10 pb-2 mb-4">
                  Materiais Disponíveis para Locação
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.products.map((product) => {
                    const quantity = getItemQuantity(product.id);
                    const isAdded = quantity > 0;

                    return (
                      <div
                        key={product.id}
                        className={`flex gap-4 p-3.5 rounded-sm border transition-all duration-300 ${
                          isAdded
                            ? "bg-brand-gray/40 border-brand-gold/50 shadow-sm"
                            : "bg-white border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-sm"
                        }`}
                      >
                        {/* Product Image */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden flex-shrink-0 border border-brand-gold/15 bg-white">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Product Details & Controls */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <h5 className="font-sans text-xs font-bold text-brand-green leading-snug">
                              {product.name}
                            </h5>
                            <p className="text-[10px] text-gray-500 font-sans mt-1 leading-normal line-clamp-2 font-light">
                              {product.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            {isAdded ? (
                              <div className="flex items-center border border-brand-gold/30 rounded-sm bg-white overflow-hidden shadow-xs">
                                <button
                                  onClick={() =>
                                    onAddProduct(product, category.title, Math.max(0, quantity - 1))
                                  }
                                  className="px-2 py-1 text-brand-green hover:bg-brand-gray transition-colors font-bold"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-2 text-xs font-bold text-brand-green min-w-8 text-center">
                                  {quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    onAddProduct(product, category.title, quantity + 1)
                                  }
                                  className="px-2 py-1 text-brand-green hover:bg-brand-gray transition-colors font-bold"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => onAddProduct(product, category.title, 12)}
                                className="bg-brand-green hover:bg-brand-dark text-white border border-brand-gold/20 text-[9px] font-bold tracking-widest uppercase py-2 px-3.5 rounded-sm flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
                              >
                                <ShoppingBag className="w-3 h-3 text-brand-gold" />
                                Adicionar
                              </button>
                            )}

                            {isAdded && (
                              <span className="text-[8px] text-brand-gold-dark font-sans flex items-center gap-1 font-bold bg-brand-gold/10 px-2 py-0.5 rounded-sm border border-brand-gold/15 uppercase tracking-wider">
                                <Check className="w-2.5 h-2.5 text-brand-gold" />
                                Selecionado
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-brand-gray p-4 flex-shrink-0 border-t border-brand-gold/10 flex justify-between items-center px-6">
                <p className="text-[9px] text-gray-500 font-sans max-w-sm uppercase tracking-wider leading-relaxed">
                  💡 *Sugestão:* Mínimo de 12 unidades por item para melhor atendimento e padronização.
                </p>
                <button
                  onClick={onClose}
                  className="bg-brand-green text-white hover:bg-brand-dark border border-brand-gold/20 font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
