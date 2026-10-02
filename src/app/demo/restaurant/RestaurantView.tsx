'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantData } from '@/data/demos/restaurant';
import { DemoNavbar } from '@/demo-components/DemoNavbar';
import { DemoHero } from '@/demo-components/DemoHero';
import { DemoSocialProof } from '@/demo-components/DemoSocialProof';
import { DemoContactSection } from '@/demo-components/DemoContactSection';
import { DemoFooter } from '@/demo-components/DemoFooter';
import { WhatsAppCTA } from '@/demo-components/WhatsAppCTA';
import {
  UtensilsCrossed,
  Flame,
  Clock,
  Sparkles,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  X,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Truck,
  Store,
  ChevronRight,
} from 'lucide-react';
import { RestaurantMenuItem } from '@/data/demos/types';

export const RestaurantView: React.FC = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [formError, setFormError] = useState('');

  const navItems = [
    { label: 'Menu & Prices', href: '#menu-section' },
    { label: 'About Hearth', href: '#about-restaurant' },
    { label: 'Guest Feedback', href: '#reviews' },
    { label: 'Timing & Location', href: '#location-hours' },
  ];

  // Cart operations
  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[itemId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const totalItemCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  const cartItemsWithDetails = Object.entries(cart).map(([itemId, qty]) => {
    const item = restaurantData.menuItems.find((m) => m.id === itemId)!;
    return { item, quantity: qty, itemTotal: item.price * qty };
  });

  const subtotal = cartItemsWithDetails.reduce((sum, entry) => sum + entry.itemTotal, 0);
  const deliveryFee = orderType === 'delivery' ? 40 : 0;
  const grandTotal = subtotal + deliveryFee;

  const filteredMenuItems =
    activeCategory === 'all'
      ? restaurantData.menuItems
      : restaurantData.menuItems.filter((i) => i.category.toLowerCase() === activeCategory.toLowerCase());

  // Build live WhatsApp message preview
  const buildWhatsAppMessage = () => {
    let message = `*NEW ORDER — ${restaurantData.businessName.toUpperCase()}*\n`;
    message += `---------------------------------\n`;
    message += `👤 *Customer Name:* ${customerName.trim() || 'Rahul Sharma (Sample)'}\n`;
    message += `📱 *Phone:* ${customerPhone.trim() || '+91 98765 43210'}\n`;
    message += `📦 *Order Type:* ${orderType === 'delivery' ? 'Direct Doorstep Delivery' : 'Self Pickup / Takeaway'}\n`;
    if (orderType === 'delivery') {
      message += `📍 *Delivery Address:* ${deliveryAddress.trim() || 'Indiranagar, Bengaluru'}\n`;
    }
    message += `\n*Items Ordered (${totalItemCount}):*\n`;
    cartItemsWithDetails.forEach(({ item, quantity, itemTotal }) => {
      const tag = item.isVeg ? '[Veg]' : '[Non-Veg]';
      message += `• ${quantity}x ${item.name} ${tag} — ₹${itemTotal.toLocaleString()}\n`;
    });
    message += `\n*Bill Summary:*\n`;
    message += `• Subtotal: ₹${subtotal.toLocaleString()}\n`;
    if (orderType === 'delivery') {
      message += `• Delivery & Packaging: ₹${deliveryFee}\n`;
    }
    message += `• *Grand Total: ₹${grandTotal.toLocaleString()}*\n`;
    if (specialInstructions.trim()) {
      message += `\n📝 *Instructions:* ${specialInstructions.trim()}\n`;
    }
    message += `---------------------------------\n`;
    message += `(Sent via interactive digital menu prototype)`;
    return message;
  };

  // WhatsApp Order Submission
  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!customerPhone.trim()) {
      setFormError('Please enter your phone number.');
      return;
    }
    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      setFormError('Please enter your delivery address.');
      return;
    }
    setFormError('');

    const message = buildWhatsAppMessage();
    const cleanPhone = restaurantData.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]">
      {/* Local Business Navigation */}
      <DemoNavbar
        businessName={restaurantData.businessName}
        tagline={restaurantData.tagline}
        phone={restaurantData.contact.phone}
        displayPhone={restaurantData.contact.displayPhone}
        navItems={navItems}
        primaryCtaLabel={totalItemCount > 0 ? `Basket (${totalItemCount})` : 'Order on WhatsApp'}
        onPrimaryCtaClick={() => setIsCartOpen(true)}
        accentColor="amber"
        badgeText="Restaurant Demo Prototype"
      />

      {/* Hero Section */}
      <DemoHero
        businessName={restaurantData.businessName}
        badgeText="Interactive Demo — Replace with Your Business Details"
        headline="Woodfired Comfort Food &"
        highlightedText="Artisanal Handcrafted Plates"
        subheadline={restaurantData.shortDescription}
        rating={restaurantData.rating}
        reviewCount={restaurantData.reviewCount}
        primaryCtaText="Explore Food Menu"
        secondaryCtaText="Order on WhatsApp"
        onPrimaryCtaClick={() => {
          document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSecondaryCtaClick={() => setIsCartOpen(true)}
        locationText={`${restaurantData.contact.area}, ${restaurantData.contact.city}`}
        openingHoursPreview="Open Daily: 12:00 PM – 11:30 PM"
        accentColor="amber"
        heroImage={restaurantData.heroImage}
        quickFeatures={[
          { icon: <Flame className="w-4 h-4 text-amber-400" />, text: '72h Sourdough Stone Oven' },
          { icon: <Sparkles className="w-4 h-4 text-orange-400" />, text: 'Fresh Seasonal Farm Produce' },
          { icon: <Truck className="w-4 h-4 text-emerald-400" />, text: 'Direct WhatsApp Ordering (0% Commission)' },
        ]}
      />

      {/* Menu & Food Cards Section */}
      <section id="menu-section" className="py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Fresh Daily Menu
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Handcrafted Plates & Beverages
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Tap &ldquo;Add&rdquo; on any dish below to build your live WhatsApp order basket.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
              }`}
            >
              All Items ({restaurantData.menuItems.length})
            </button>
            {restaurantData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
                  activeCategory.toLowerCase() === cat.id.toLowerCase()
                    ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map((item) => {
              const qty = cart[item.id] || 0;

              return (
                <div
                  key={item.id}
                  className={`group flex flex-col justify-between rounded-3xl bg-[#121318] border border-white/10 overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:shadow-2xl ${
                    qty > 0 ? 'ring-2 ring-amber-400/50 bg-[#161822]' : ''
                  }`}
                >
                  <div>
                    {/* Food Photo Header */}
                    {item.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent opacity-80" />

                        {/* Overlaid Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`inline-flex items-center justify-center w-5 h-5 rounded-md bg-black/60 backdrop-blur-md border ${
                              item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                            }`}
                            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${
                                item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                              }`}
                            />
                          </span>

                          <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                            {item.isVeg ? 'Veg' : 'Non-Veg'}
                          </span>

                          {item.isChefSpecial && (
                            <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-black/60 text-amber-300 font-bold backdrop-blur-md inline-flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" /> Chef Special
                            </span>
                          )}
                        </div>

                        {item.prepTime && (
                          <div className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/15 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-zinc-400" />
                            {item.prepTime}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-5 sm:p-6 space-y-3">
                      {/* Top Row for dishes without images */}
                      {!item.image && (
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`inline-flex items-center justify-center w-4 h-4 rounded-sm border ${
                                item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                              }`}
                              title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                                }`}
                              />
                            </span>

                            <span className="text-[11px] font-semibold text-zinc-300">
                              {item.isVeg ? 'Veg' : 'Non-Veg'}
                            </span>

                            {item.isChefSpecial && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-medium inline-flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5" /> Chef Special
                              </span>
                            )}

                            {item.isPopular && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 font-medium">
                                Popular
                              </span>
                            )}
                          </div>

                          {item.prepTime && (
                            <span className="text-[11px] text-zinc-400 flex items-center gap-1 shrink-0">
                              <Clock className="w-3 h-3 text-zinc-500" />
                              {item.prepTime}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-white">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Price & Add / Quantity Stepper */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase text-zinc-500 font-medium block">
                        Price
                      </span>
                      <span className="text-lg font-extrabold text-white">
                        ₹{item.price.toLocaleString()}
                      </span>
                    </div>

                    {qty === 0 ? (
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-black shadow-md shadow-amber-500/20 transition-all active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/20 text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-xs sm:text-sm px-2 text-white">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Hearth & Fresh Philosophy */}
      <section id="about-restaurant" className="py-16 sm:py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                The Oakhaven Philosophy
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Authentic Fire. Slow Fermentation. Honest Ingredients.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We believe food tastes best when crafted without shortcuts. Our sourdough rests for a full 72 hours before hitting the 450°C stone oven, creating an airy blistered crust with irresistible chew.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-2xl font-black text-amber-400 block">72 Hours</span>
                  <span className="text-xs text-zinc-400">Natural Fermentation</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-2xl font-black text-amber-400 block">450°C</span>
                  <span className="text-xs text-zinc-400">Woodfired Oven Flame</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#121318] border border-amber-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                <span>Direct WhatsApp Kitchen Ordering</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Local customers can order directly from the kitchen via WhatsApp without steep platform commissions or cold deliveries. Every order is prepared fresh on confirmation.
              </p>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct hotline to kitchen manager</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom spice levels & dietary adjustments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Feedback & Reviews */}
      <div id="reviews">
        <DemoSocialProof
          businessName={restaurantData.businessName}
          rating={restaurantData.rating}
          reviewCount={restaurantData.reviewCount}
          reviews={restaurantData.reviews}
          accentColor="amber"
        />
      </div>

      {/* Timing, Address & Map */}
      <DemoContactSection
        businessName={restaurantData.businessName}
        contact={restaurantData.contact}
        openingHours={restaurantData.openingHours}
        accentColor="amber"
      />

      {/* Footer */}
      <DemoFooter
        businessName={restaurantData.businessName}
        tagline={restaurantData.tagline}
        phone={restaurantData.contact.displayPhone}
        email={restaurantData.contact.email}
        address={restaurantData.contact.address}
        city={restaurantData.contact.city}
      />

      {/* Floating Bottom Cart Bar (Appears when items in cart) */}
      <AnimatePresence>
        {totalItemCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full p-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center justify-between shadow-2xl shadow-amber-500/40 transition-transform active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-black/15 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-black" />
                </div>
                <div className="text-left">
                  <span className="text-xs uppercase tracking-wider block font-semibold">
                    {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} in basket
                  </span>
                  <span className="text-sm font-black">
                    Subtotal: ₹{subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-black">
                <span>View Order & Checkout</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Cart & Checkout Modal Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-[#121318] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-white"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:px-6 sm:py-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-amber-400" />
                      <span>Your Order Basket</span>
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      Live Demo
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {restaurantData.businessName} • Direct WhatsApp Order Dispatch
                  </p>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              {totalItemCount === 0 ? (
                <div className="p-10 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-zinc-500">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Your basket is empty</h4>
                    <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                      Add dishes from the menu to build your instant WhatsApp order.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-xs transition-transform active:scale-95"
                  >
                    Browse Menu Offerings
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendWhatsAppOrder} className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
                  {/* Items List */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                      Selected Dishes ({totalItemCount})
                    </span>
                    <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                      {cartItemsWithDetails.map(({ item, quantity, itemTotal }) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`w-2 h-2 rounded-full shrink-0 ${
                                  item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                                }`}
                              />
                              <p className="font-semibold text-white truncate text-xs sm:text-sm">
                                {item.name}
                              </p>
                            </div>
                            <p className="text-[11px] text-zinc-400 mt-0.5">
                              ₹{item.price} each • Total: ₹{itemTotal.toLocaleString()}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 rounded-lg bg-white/5 hover:bg-white/20 text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold text-xs text-white px-1">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 rounded-lg bg-amber-500 text-black"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery or Pickup Preference */}
                  <div>
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2">
                      Dining / Delivery Preference
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          orderType === 'delivery'
                            ? 'border-amber-400 bg-amber-500/10 text-amber-300'
                            : 'border-white/10 bg-white/5 text-zinc-400'
                        }`}
                      >
                        <Truck className="w-4 h-4 shrink-0" />
                        <div>
                          <span className="font-bold text-xs block text-white">Doorstep Delivery</span>
                          <span className="text-[10px] text-zinc-400">₹40 direct delivery</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderType('pickup')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          orderType === 'pickup'
                            ? 'border-amber-400 bg-amber-500/10 text-amber-300'
                            : 'border-white/10 bg-white/5 text-zinc-400'
                        }`}
                      >
                        <Store className="w-4 h-4 shrink-0" />
                        <div>
                          <span className="font-bold text-xs block text-white">Takeaway / Pickup</span>
                          <span className="text-[10px] text-zinc-400">Ready in 25 mins</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Customer Contact Details */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                      Your Information
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-zinc-400 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/40 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-zinc-400 block mb-1">
                          WhatsApp Contact Number *
                        </label>
                        <input
                          type="tel"
                          inputMode="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/40 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600"
                          required
                        />
                      </div>

                      {orderType === 'delivery' && (
                        <div className="sm:col-span-2">
                          <label className="text-[11px] text-zinc-400 block mb-1">
                            Delivery Address & Landmark *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Apt 402, Palm Heights, Indiranagar, near Metro"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/40 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600"
                            required
                          />
                        </div>
                      )}

                      <div className="sm:col-span-2">
                        <label className="text-[11px] text-zinc-400 block mb-1">
                          Special Cooking Instructions (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mild spice on pizza, extra napkins, contact-free drop"
                          value={specialInstructions}
                          onChange={(e) => setSpecialInstructions(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/40 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600"
                        />
                      </div>
                    </div>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Bill Breakdown */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
                    <div className="flex justify-between text-zinc-300">
                      <span>Items Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-zinc-300">
                        <span>Delivery & Packaging</span>
                        <span>₹{deliveryFee}</span>
                      </div>
                    )}
                    <div className="border-t border-white/10 pt-2 flex justify-between text-sm font-black text-white">
                      <span>Grand Total</span>
                      <span className="text-amber-400">₹{grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Live WhatsApp Message Preview Bubble */}
                  <div className="rounded-2xl border border-emerald-500/30 bg-[#075e54]/10 p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Live WhatsApp Order Preview</span>
                      </span>
                      <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                        Instant Kitchen Dispatch
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#1f2c34] text-xs font-mono text-zinc-200 whitespace-pre-line border border-white/10 leading-relaxed shadow-inner">
                      {buildWhatsAppMessage()}
                    </div>
                  </div>

                  {/* Order on WhatsApp CTA */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-amber-500/25 active:scale-95"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Order on WhatsApp (₹{grandTotal.toLocaleString()})</span>
                    </button>
                    <p className="text-center text-[11px] text-zinc-500 mt-2">
                      Opens WhatsApp with structured items and calculation for direct kitchen acknowledgment.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action */}
      <WhatsAppCTA
        phoneNumber={restaurantData.contact.whatsappNumber}
        defaultMessage={`Hi ${restaurantData.businessName}, I would like to inquire about today's specials and place an order.`}
        buttonLabel="WhatsApp Order"
        businessName={restaurantData.businessName}
      />
    </div>
  );
};
