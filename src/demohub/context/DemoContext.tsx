'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PrototypeRoute, DeviceMode, CartItem } from '../types';

interface DemoContextType {
  currentRoute: PrototypeRoute;
  deviceMode: DeviceMode;
  isDemoBarOpen: boolean;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  activeModal: string | null;
  notification: string | null;
  navigateTo: (route: PrototypeRoute) => void;
  setDeviceMode: (mode: DeviceMode) => void;
  setIsDemoBarOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
  showNotification: (msg: string) => void;
}

const DemoContext = createContext<DemoContextType | null>(null);

function getRouteFromPath(path: string): PrototypeRoute {
  const cleanPath = path.toLowerCase();
  if (cleanPath.includes('/salon')) return 'salon';
  if (cleanPath.includes('/restaurant')) return 'restaurant';
  if (cleanPath.includes('/clinic')) return 'clinic';
  return 'hub';
}

function getPathForRoute(route: PrototypeRoute): string {
  switch (route) {
    case 'salon':
      return '/demo/salon';
    case 'restaurant':
      return '/demo/restaurant';
    case 'clinic':
      return '/demo/clinic';
    case 'hub':
    default:
      return '/demo';
  }
}

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<PrototypeRoute>(() => {
    if (typeof window === 'undefined') return 'hub';
    return getRouteFromPath(window.location.pathname + window.location.search + window.location.hash);
  });

  const [deviceMode, setDeviceMode] = useState<DeviceMode>('fullscreen');
  const [isDemoBarOpen, setIsDemoBarOpen] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Initial cart seeded with 3 items as seen in image badge "3" with Indian ₹ prices
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'crispy-chicken-bucket',
      name: 'Crispy Chicken Bucket (6 Pcs)',
      price: 549,
      quantity: 1,
      options: '6 pcs Original Crispy + Garlic Dip'
    },
    {
      id: 'spicy-crunch-burger',
      name: 'Spicy Crunch Burger',
      price: 249,
      quantity: 1,
      options: 'Extra Jalapeño & Crunch Sauce'
    },
    {
      id: 'korean-bbq-wings',
      name: 'Korean BBQ Glazed Wings (8 Pcs)',
      price: 329,
      quantity: 1,
      options: '8 pcs Glazed Sesame'
    }
  ]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      const nextRoute = getRouteFromPath(window.location.pathname + window.location.search + window.location.hash);
      setCurrentRoute(nextRoute);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((route: PrototypeRoute) => {
    setCurrentRoute(route);
    const targetUrl = getPathForRoute(route);
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== targetUrl) {
        window.location.href = targetUrl;
      }
    }
  }, []);

  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setNotification(`Added "${item.name}" to cart`);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(p => p.id !== id));
  }, []);

  const updateCartQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => {
      return prev.map(p => {
        if (p.id === id) {
          const newQty = p.quantity + delta;
          return newQty > 0 ? { ...p, quantity: newQty } : null;
        }
        return p;
      }).filter(Boolean) as CartItem[];
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const openModal = useCallback((modalId: string) => {
    setActiveModal(modalId);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const showNotification = useCallback((msg: string) => {
    setNotification(msg);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3200);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <DemoContext.Provider
      value={{
        currentRoute,
        deviceMode,
        isDemoBarOpen,
        cart,
        cartCount,
        cartTotal,
        activeModal,
        notification,
        navigateTo,
        setDeviceMode,
        setIsDemoBarOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        openModal,
        closeModal,
        showNotification,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
