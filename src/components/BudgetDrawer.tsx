import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Minus, Trash2, Send, Calendar } from "lucide-react";
import { BudgetItem } from "../types";
import { useState } from "react";

interface BudgetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BudgetItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearBudget: () => void;
}

export default function BudgetDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBudget,
}: BudgetDrawerProps) {
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const formatWhatsAppMessage = () => {
    let message = "*FESTSUL LOCAÇÕES - SOLICITAÇÃO DE ORÇAMENTO*\n\n";
    message += "Olá! Gostaria de verificar a disponibilidade dos seguintes materiais para locação:\n\n";
    
    items.forEach((item) => {
      message += `• *${item.product.name}* (${item.quantity} un.)\n  _Categoria: ${item.categoryTitle}_\n\n`;
    });

    if (eventDate) {
      // Reformat date from YYYY-MM-DD to DD/MM/YYYY for readability
      const [year, month, day] = eventDate.split("-");
      message += `📅 *Data do Evento:* ${day}/${month}/${year}\n`;
    }
    
    if (eventLocation) {
      message += `📍 *Local/Cidade:* ${eventLocation}\n`;
    }

    message += "\nAguardo o retorno com as informações de valores e frete. Obrigado(a)!";
    return encodeURIComponent(message);
  };

  const whatsappNumber = "5551989879933";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formatWhatsAppMessage()}`;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
            id="budget-drawer-backdrop"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 flex flex-col border-l border-brand-gold/30"
            id="budget-drawer-panel"
          >
            {/* Header */}
            <div className="bg-brand-green text-white p-5 flex justify-between items-center border-b border-brand-gold/20">
              <div>
                <h3 className="font-display text-sm font-bold tracking-[0.2em] text-brand-gold">
                  MEU ORÇAMENTO
                </h3>
                <p className="text-[10px] text-gray-300 font-sans mt-1 uppercase tracking-wider">
                  {items.length === 0
                    ? "Nenhum material selecionado"
                    : `${items.length} ${items.length === 1 ? "categoria" : "categorias"} (${totalItems} itens)`}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-brand-gold transition-all p-1.5 rounded-sm hover:bg-brand-dark/40"
                id="btn-close-budget-drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4" id="budget-items-list">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 rounded-sm bg-brand-gray flex items-center justify-center text-brand-green/40 mb-4 border border-brand-gold/20">
                    <Trash2 className="w-6 h-6 text-brand-gold/80" />
                  </div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-green">
                    Seu orçamento está vazio
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 max-w-xs font-sans leading-relaxed">
                    Navegue pela nossa lista de materiais, clique em "Adicionar ao Orçamento" e monte seu pedido personalizado.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 bg-brand-green text-white font-bold text-[10px] tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-brand-dark transition-all duration-300 border border-brand-gold/20 cursor-pointer"
                  >
                    Ver Materiais
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center pb-2 border-b border-brand-gold/10">
                    <span className="text-[10px] font-bold text-brand-green tracking-widest uppercase">
                      Materiais Escolhidos
                    </span>
                    <button
                      onClick={onClearBudget}
                      className="text-[10px] text-red-600 hover:text-red-800 flex items-center gap-1 font-sans font-bold uppercase tracking-wider"
                      id="btn-clear-budget"
                    >
                      <Trash2 className="w-3 h-3" />
                      Limpar Tudo
                    </button>
                  </div>

                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-3 bg-brand-gray/50 p-3 rounded-sm border border-brand-gold/10"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-sm border border-brand-gold/15 bg-white"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <span className="text-[8px] uppercase tracking-[0.15em] text-brand-gold font-bold">
                              {item.categoryTitle}
                            </span>
                            <h5 className="font-sans text-xs font-bold text-brand-green truncate">
                              {item.product.name}
                            </h5>
                          </div>

                          <div className="flex justify-between items-center mt-1">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-brand-gold/25 rounded-sm bg-white overflow-hidden">
                              <button
                                onClick={() =>
                                  onUpdateQuantity(
                                    item.product.id,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                                className="px-2 py-1 text-brand-green hover:bg-brand-gray transition-colors font-bold"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-bold text-brand-green">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  onUpdateQuantity(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-2 py-1 text-brand-green hover:bg-brand-gray transition-colors font-bold"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Context Info (Date & Location) */}
                  <div className="bg-brand-gray/40 p-4 rounded-sm border border-brand-gold/15 space-y-3 mt-4">
                    <h5 className="text-[10px] font-bold text-brand-green flex items-center gap-1.5 border-b border-brand-gold/10 pb-1.5 uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      Detalhes do seu Evento
                    </h5>
                    
                    <div className="grid grid-cols-1 gap-2.5">
                      <div>
                        <label className="block text-[8px] text-gray-500 font-sans uppercase tracking-[0.2em] mb-1 font-bold">
                          Data Estimada
                        </label>
                        <input
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full text-xs font-medium text-brand-green bg-white border border-brand-gold/20 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[8px] text-gray-500 font-sans uppercase tracking-[0.2em] mb-1 font-bold">
                          Cidade / Local do Evento
                        </label>
                        <input
                          type="text"
                          value={eventLocation}
                          onChange={(e) => setEventLocation(e.target.value)}
                          placeholder="Ex: Porto Alegre - RS, Canoas..."
                          className="w-full text-xs font-medium text-brand-green bg-white border border-brand-gold/20 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-gold placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer with CTA */}
            {items.length > 0 && (
              <div className="p-5 border-t border-brand-gold/20 bg-brand-gray/60 space-y-3 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
                <p className="text-[9px] text-center text-gray-500 leading-relaxed font-sans uppercase tracking-wider">
                  Ao clicar abaixo, você será direcionado para o WhatsApp com a sua lista organizada de materiais.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-center font-bold text-[10px] tracking-widest uppercase py-4 rounded-sm shadow-md flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  id="btn-send-budget-whatsapp"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar para WhatsApp</span>
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
