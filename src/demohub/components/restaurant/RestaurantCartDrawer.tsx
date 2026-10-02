'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Ticket, MessageCircle } from 'lucide-react';

export const RestaurantCartDrawer: React.FC = () => {
  const { activeModal, closeModal, cart, updateCartQuantity, removeFromCart, clearCart, cartTotal, showNotification } = useDemo();
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);

  if (activeModal !== 'restaurant-cart') return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'CRUNCH25') {
      setDiscountPercent(25);
      showNotification('25% promo code applied!');
    } else {
      showNotification('Try code: CRUNCH25 for 25% off');
    }
  };

  const deliveryFee = cart.length > 0 ? 49 : 0;
  const discountAmount = Math.round((cartTotal * discountPercent) / 100);
  const tax = Math.round(cartTotal * 0.05); // 5% GST
  const finalTotal = Math.max(0, cartTotal - discountAmount + tax + deliveryFee);

  const handleCheckout = () => {
    setIsOrdered(true);
    showNotification('Order placed successfully! Chef is prepping your crispy chicken.');
  };

  const handleFinish = () => {
    setIsOrdered(false);
    clearCart();
    closeModal();
  };

  const waOrderText = `*NEW FOOD ORDER — CRUNCH RESTAURANT*\n` +
    cart.map(c => `• ${c.name} x${c.quantity} = ₹${c.price * c.quantity}`).join('\n') +
    `\n----------------------------\n` +
    `Subtotal: ₹${cartTotal.toLocaleString('en-IN')}\n` +
    (discountAmount > 0 ? `Discount (25%): -₹${discountAmount.toLocaleString('en-IN')}\n` : '') +
    `Delivery: ₹${deliveryFee}\n` +
    `GST (5%): ₹${tax}\n` +
    `*TOTAL: ₹${finalTotal.toLocaleString('en-IN')}*\n` +
    `----------------------------\n` +
    `📍 Deliver to: Home · Bandra West, Mumbai\n` +
    `⏰ ETA: 18-22 mins`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-neutral-900 border-l border-neutral-800 w-full max-w-md h-full flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-500" />
            <h3 className="font-crunch text-lg font-bold text-white">Your Crunch Basket</h3>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {isOrdered ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-crunch text-2xl font-black text-white">Order Confirmed!</h4>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                Order #CR-9428 has been dispatched to the kitchen. Hot and crispy in approximately 18 minutes!
              </p>
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 text-xs font-mono space-y-1 text-left max-w-xs mx-auto">
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Total Bill:</span>
                  <span className="font-bold text-emerald-400">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Payment:</span>
                  <span>UPI / Cash on Delivery</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Destination:</span>
                  <span>Bandra West, Mumbai</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(waOrderText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-crunch font-bold text-sm transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Order to Kitchen WhatsApp</span>
                </a>
                <button
                  onClick={handleFinish}
                  className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl font-crunch font-semibold text-xs transition-colors"
                >
                  Close & Clear Basket
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="text-4xl">🍗</div>
              <h4 className="font-crunch text-lg font-bold text-white">Your Basket is Empty</h4>
              <p className="text-xs text-neutral-400">Add crispy chicken buckets, burgers or family bundles!</p>
              <button
                onClick={closeModal}
                className="mt-3 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-crunch font-semibold text-xs rounded-xl"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3 divide-y divide-neutral-800/80">
                {cart.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex-1 space-y-0.5">
                      <div className="font-crunch text-sm font-bold text-white">{item.name}</div>
                      {item.options && (
                        <div className="text-[11px] text-neutral-400 font-mono">{item.options}</div>
                      )}
                      <div className="text-xs font-mono font-bold text-orange-400">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-neutral-950 px-2 py-1 rounded-xl border border-neutral-800">
                      <button
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="p-1 text-neutral-400 hover:text-white transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-xs font-bold text-white px-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="p-1 text-neutral-400 hover:text-white transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-neutral-500 hover:text-red-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="pt-3 flex gap-2">
                <div className="relative flex-1">
                  <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (CRUNCH25)"
                    className="w-full pl-9 pr-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-xs uppercase focus:outline-none focus:border-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-crunch font-semibold shrink-0"
                >
                  Apply
                </button>
              </form>

              {/* Bill Details */}
              <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>Item Subtotal</span>
                  <span className="text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-orange-400 font-bold">
                    <span>Discount (25%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-400">
                  <span>Delivery Fee</span>
                  <span className="text-white">₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>GST (5%)</span>
                  <span className="text-white">₹{tax}</span>
                </div>
                <div className="pt-2 border-t border-neutral-800 flex justify-between text-sm font-bold text-white">
                  <span>Total Amount</span>
                  <span className="text-orange-400 font-black">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout */}
        {!isOrdered && cart.length > 0 && (
          <div className="p-4 bg-neutral-950 border-t border-neutral-800 space-y-2">
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-crunch font-black text-sm uppercase tracking-wide rounded-xl shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Place Order · ₹{finalTotal.toLocaleString('en-IN')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
