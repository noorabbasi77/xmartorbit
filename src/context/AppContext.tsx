import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency, CartItem, HostingPlan, PageId } from '../types';
import { CURRENCIES, HOSTING_PLANS } from '../data/hostingData';

interface AppContextType {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  navigateToPage: (page: PageId) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdAmount: number) => string;
  cart: CartItem[];
  addToCart: (plan: HostingPlan, billingMonths?: 48 | 24 | 12 | 1, domain?: string, domainPrice?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateBillingMonths: (itemId: string, months: 48 | 24 | 12 | 1) => void;
  toggleAddon: (itemId: string, addon: { id: string; name: string; price: number }) => void;
  updateDatacenter: (itemId: string, dc: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authModalTab: 'login' | 'register' | 'clientArea';
  setAuthModalTab: (tab: 'login' | 'register' | 'clientArea') => void;
  isTicketModalOpen: boolean;
  setIsTicketModalOpen: (open: boolean) => void;
  activeNotification: string | null;
  showNotification: (msg: string) => void;
}

const PAGE_SEO: Record<PageId, { title: string; desc: string }> = {
  home: {
    title: 'XMart Orbit – High-Performance Web Hosting, Cloud & Domains',
    desc: 'Power your website with XMart Orbit Private Limited. Ultra-fast NVMe SSD web hosting, free SSL, 1-click WordPress, and 24/7 expert support.',
  },
  domains: {
    title: 'Domain Name Search & Registration from $0.99 – XMart Orbit',
    desc: 'Register domain names (.com, .net, .org, .online, .io) with free WHOIS privacy, DNS management, and 2 custom mailboxes. Transfer domains easily.',
  },
  'web-hosting': {
    title: 'Ultra-Fast NVMe Web Hosting with LiteSpeed – XMart Orbit',
    desc: 'Host your websites on enterprise AMD EPYC servers with LiteSpeed Enterprise, free SSL, daily backups, and 99.9% uptime guarantee.',
  },
  'cloud-hosting': {
    title: 'Dedicated Cloud Hosting with Isolated Resources – XMart Orbit',
    desc: 'Scale your business with dedicated CPU & RAM cloud instances, free dedicated IP, automated snapshots, and 24/7 VIP priority support.',
  },
  'wordpress-hosting': {
    title: 'Managed WordPress Hosting with 5x LiteSpeed Acceleration – XMart Orbit',
    desc: 'Optimized WordPress hosting with 1-click staging, automated updates with smart rollback, Redis object caching, and WooCommerce readiness.',
  },
  'vps-hosting': {
    title: 'KVM VPS Hosting with Full Root Access & Dedicated IPv4 – XMart Orbit',
    desc: 'High-performance self-managed virtual servers with PCIe 5.0 NVMe storage, unmetered bandwidth, and choice of Linux distributions.',
  },
  'reseller-hosting': {
    title: 'White-Label Reseller Hosting & Free WHMCS License – XMart Orbit',
    desc: 'Launch your own web hosting business with white-label nameservers, unlimited cPanel/hPanel sub-accounts, and automated client billing.',
  },
  'website-builder': {
    title: 'Drag-and-Drop Responsive Website Builder – XMart Orbit',
    desc: 'Create mobile-ready business websites in minutes without code. 150+ designer templates, visual editor, and integrated eCommerce.',
  },
  'email-hosting': {
    title: 'Professional Business Email Hosting @yourcompany – XMart Orbit',
    desc: 'Secure email hosting with spam and virus filters, calendar/contacts sync, and 50GB cloud mailboxes compatible with Outlook, iOS, and Android.',
  },
  security: {
    title: 'Website Security Shield, Free SSL & DDoS Mitigation – XMart Orbit',
    desc: 'Comprehensive multi-layer cloud security with Monarx real-time malware scanner, Cloudflare edge scrubbing, and automated disaster recovery backups.',
  },
  support: {
    title: '24/7/365 Expert Support Desk & Knowledge Base – XMart Orbit',
    desc: 'Reach certified cloud engineers via live chat (< 3m reply) or technical support tickets. Browse 500+ guides and troubleshooting tutorials.',
  },
  status: {
    title: 'Real-Time Server Status & Global Latency Monitor – XMart Orbit',
    desc: 'Live operational status and 99.99% uptime metrics across 9 Tier-4 global datacenters in North America, Europe, Asia, and South America.',
  },
  about: {
    title: 'About XMart Orbit Private Limited – Cloud Infrastructure & Team',
    desc: 'Learn about XMart Orbit Private Limited, our mission to power over 120,000+ businesses worldwide, Tier-4 datacenter standards, and executive leadership.',
  },
  contact: {
    title: 'Contact XMart Orbit Private Limited – Sales & Corporate Offices',
    desc: 'Get in touch with our enterprise sales consultants, corporate management, or global technical support headquarters.',
  },
  privacy: {
    title: 'Privacy Policy & Data Protection – XMart Orbit Private Limited',
    desc: 'Read our transparent privacy policy, GDPR compliance, cookie directives, and data encryption practices.',
  },
  terms: {
    title: 'Terms of Service, SLA & Refund Policy – XMart Orbit Private Limited',
    desc: 'Official terms of service, 99.9% uptime SLA commitments, and 30-day money-back guarantee policy.',
  },
  'elementor-export': {
    title: 'Download WordPress Elementor Templates & Kit – XMart Orbit',
    desc: 'Download converted WordPress Elementor JSON templates for XMart Orbit hosting. Publish and edit easily inside Elementor page builder.',
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    try {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (PAGE_SEO[hash]) return hash;
    } catch {
      // fallback
    }
    return 'home';
  });

  const [currency, setCurrency] = useState<Currency>('USD');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('xmart_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'register' | 'clientArea'>('login');
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  // Sync hash and update document title & description dynamically for Google SEO
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (PAGE_SEO[hash]) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const seo = PAGE_SEO[currentPage] || PAGE_SEO.home;
    document.title = seo.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.desc);
    }
  }, [currentPage]);

  useEffect(() => {
    try {
      localStorage.setItem('xmart_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showNotification = (msg: string) => {
    setActiveNotification(msg);
    setTimeout(() => {
      setActiveNotification(null);
    }, 4000);
  };

  const formatPrice = (usdAmount: number): string => {
    const config = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = usdAmount * config.rate;
    if (currency === 'INR') {
      return `${config.symbol}${Math.round(converted)}`;
    }
    return `${config.symbol}${converted.toFixed(2)}`;
  };

  const addToCart = (
    plan: HostingPlan,
    billingMonths: 48 | 24 | 12 | 1 = 48,
    domain?: string,
    domainPrice?: number
  ) => {
    const pricePerMonth = plan.monthlyPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];
    const newItem: CartItem = {
      id: `${plan.id}-${Date.now()}`,
      planId: plan.id,
      planName: plan.name,
      category: plan.category,
      billingMonths,
      pricePerMonth,
      domainName: domain,
      domainPrice: domainPrice || (billingMonths >= 12 ? 0 : 4.99),
      datacenterLocation: 'USA - New York (Tier-4)',
      addons: [],
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
    showNotification(`Added ${plan.name} to your cart!`);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    showNotification('Item removed from cart');
  };

  const updateBillingMonths = (itemId: string, months: 48 | 24 | 12 | 1) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const plan = HOSTING_PLANS.find((p) => p.id === item.planId);
          const newPrice = plan ? plan.monthlyPrices[months.toString() as '48' | '24' | '12' | '1'] : item.pricePerMonth;
          return {
            ...item,
            billingMonths: months,
            pricePerMonth: newPrice,
          };
        }
        return item;
      })
    );
  };

  const toggleAddon = (itemId: string, addon: { id: string; name: string; price: number }) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const exists = item.addons.some((a) => a.id === addon.id);
          const updatedAddons = exists
            ? item.addons.filter((a) => a.id !== addon.id)
            : [...item.addons, addon];
          return { ...item, addons: updatedAddons };
        }
        return item;
      })
    );
  };

  const updateDatacenter = (itemId: string, dc: string) => {
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, datacenterLocation: dc } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigateToPage,
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        removeFromCart,
        updateBillingMonths,
        toggleAddon,
        updateDatacenter,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalTab,
        setAuthModalTab,
        isTicketModalOpen,
        setIsTicketModalOpen,
        activeNotification,
        showNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
