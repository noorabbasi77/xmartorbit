import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Server,
  Layout,
  Mail,
  ShieldCheck,
  Headphones,
  ChevronDown,
  Menu,
  X,
  ShoppingCart,
  User,
  ExternalLink,
  Flame,
  ArrowRight,
  Search,
  RefreshCw,
  Lock,
  Cpu,
  Layers,
  Zap,
  HelpCircle,
  Activity,
  FileText,
  ChevronRight,
  FileCode
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Currency, PageId } from '../types';

export const Header: React.FC = () => {
  const {
    currentPage,
    navigateToPage,
    currency,
    setCurrency,
    cart,
    setIsCartOpen,
    setIsAuthModalOpen,
    setAuthModalTab,
    setIsTicketModalOpen,
  } = useApp();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Flash sale countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleNavClick = (page: PageId) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    navigateToPage(page);
  };

  const totalCartCount = cart.length;

  return (
    <>
      {/* Top Flash Sale Announcement Banner */}
      <div className="bg-[#1B1340] text-white text-xs sm:text-sm py-2 px-4 transition-all border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-[#00B090]">
              <Flame className="w-4 h-4 text-amber-400" /> Flash Sale
            </span>
            <span className="text-purple-200">
              Save up to <strong className="text-white font-bold">78%</strong> on NVMe Web Hosting + Free Domain & SSL
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-mono text-xs bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/60">
              <span className="text-purple-300">Ends in:</span>
              <span className="text-white font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>

            <button
              onClick={() => handleNavClick('web-hosting')}
              className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-purple-200 hover:text-white transition-colors underline decoration-purple-400 underline-offset-2 cursor-pointer"
            >
              Claim Deal <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 gap-4">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 shrink-0 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2F1C6A] via-[#673DE6] to-[#8C65FF] flex items-center justify-center text-white shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 2.21 0.72 4.25 1.94 5.91l2.12-2.12C5.38 14.61 5 13.35 5 12c0-3.866 3.134-7 7-7 2.1 0 3.98 0.92 5.27 2.39l2.16-2.16C17.65 3.33 15.01 2 12 2z" fill="currentColor" opacity="0.9" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.8" transform="rotate(-30 12 12)" strokeDasharray="3 3" opacity="0.8" />
                  <circle cx="18" cy="8.5" r="1.5" fill="#00B090" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-extrabold tracking-tight text-[#1B1340]">
                    XMart<span className="text-[#673DE6]">Orbit</span>
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#727586] -mt-1">
                  Private Limited
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links with Mega Menus */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-[#1D1E20]">
              
              {/* DOMAINS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('domains')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('domains')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    currentPage === 'domains' || activeMenu === 'domains'
                      ? 'text-[#673DE6] bg-[#F4F0FF]'
                      : 'text-[#1D1E20] hover:text-[#673DE6] hover:bg-slate-50'
                  }`}
                >
                  <span>Domains</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'domains' ? 'rotate-180 text-[#673DE6]' : 'text-slate-400'}`} />
                </button>

                {activeMenu === 'domains' && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                      Domain Services
                    </div>
                    <div className="mt-1 space-y-1">
                      <button
                        onClick={() => handleNavClick('domains')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <Search className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20] flex items-center gap-2">
                            Domain Name Search
                            <span className="text-[10px] font-bold bg-[#EDE5FF] text-[#673DE6] px-1.5 py-0.5 rounded">
                              From $0.99
                            </span>
                          </div>
                          <p className="text-xs text-[#727586] mt-0.5">Search and register your ideal domain with instant activation.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('domains')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <RefreshCw className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20]">Domain Transfer</div>
                          <p className="text-xs text-[#727586] mt-0.5">Migrate existing domains to XMart Orbit with zero renewal gap.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('domains')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20]">Domain Pricing & TLDs</div>
                          <p className="text-xs text-[#727586] mt-0.5">Explore competitive pricing for over 400+ domain extensions.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('domains')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <Lock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20] flex items-center gap-2">
                            Domain Privacy Protection
                            <span className="text-[10px] font-bold bg-emerald-50 text-[#00B090] px-1.5 py-0.5 rounded">
                              Free
                            </span>
                          </div>
                          <p className="text-xs text-[#727586] mt-0.5">Hide WHOIS personal details and keep your data safe from spam.</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* HOSTING MEGA DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('hosting')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('web-hosting')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    ['web-hosting', 'cloud-hosting', 'wordpress-hosting', 'vps-hosting', 'reseller-hosting'].includes(currentPage) || activeMenu === 'hosting'
                      ? 'text-[#673DE6] bg-[#F4F0FF]'
                      : 'text-[#1D1E20] hover:text-[#673DE6] hover:bg-slate-50'
                  }`}
                >
                  <span>Hosting</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'hosting' ? 'rotate-180 text-[#673DE6]' : 'text-slate-400'}`} />
                </button>

                {activeMenu === 'hosting' && (
                  <div className="absolute top-full -left-20 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                          Web & WordPress
                        </div>
                        <div className="mt-1 space-y-1">
                          <button
                            onClick={() => handleNavClick('web-hosting')}
                            className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                              <Server className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#1D1E20] flex items-center gap-2">
                                Web Hosting
                                <span className="text-[10px] font-bold bg-[#EDE5FF] text-[#673DE6] px-1.5 py-0.5 rounded">
                                  Save 77%
                                </span>
                              </div>
                              <p className="text-xs text-[#727586]">Fast, reliable NVMe hosting for all websites.</p>
                            </div>
                          </button>

                          <button
                            onClick={() => handleNavClick('wordpress-hosting')}
                            className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                              <Globe className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#1D1E20]">Managed WordPress</div>
                              <p className="text-xs text-[#727586]">LiteSpeed-tuned stack with 1-click staging.</p>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                          Cloud, VPS & Business
                        </div>
                        <div className="mt-1 space-y-1">
                          <button
                            onClick={() => handleNavClick('cloud-hosting')}
                            className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#1D1E20] flex items-center gap-2">
                                Cloud Hosting
                                <span className="text-[10px] font-bold bg-[#EDE5FF] text-[#673DE6] px-1.5 py-0.5 rounded">
                                  Dedicated
                                </span>
                              </div>
                              <p className="text-xs text-[#727586]">Dedicated RAM/CPU + isolated cloud instances.</p>
                            </div>
                          </button>

                          <button
                            onClick={() => handleNavClick('vps-hosting')}
                            className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                              <Server className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#1D1E20]">VPS Hosting (KVM)</div>
                              <p className="text-xs text-[#727586]">Full root access with dedicated IPv4 & high IOPS.</p>
                            </div>
                          </button>

                          <button
                            onClick={() => handleNavClick('reseller-hosting')}
                            className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                              <Layers className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#1D1E20]">Reseller Hosting</div>
                              <p className="text-xs text-[#727586]">White-label hosting to launch your own brand.</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* WEBSITE DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('website')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('website-builder')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    currentPage === 'website-builder' || activeMenu === 'website'
                      ? 'text-[#673DE6] bg-[#F4F0FF]'
                      : 'text-[#1D1E20] hover:text-[#673DE6] hover:bg-slate-50'
                  }`}
                >
                  <span>Website</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'website' ? 'rotate-180 text-[#673DE6]' : 'text-slate-400'}`} />
                </button>

                {activeMenu === 'website' && (
                  <div className="absolute top-full left-0 w-88 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="space-y-1">
                      <button
                        onClick={() => handleNavClick('website-builder')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <Layout className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20] flex items-center gap-2">
                            Website Builder
                            <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded">
                              No Code
                            </span>
                          </div>
                          <p className="text-xs text-[#727586] mt-0.5">Drag-and-drop intuitive designer with 150+ templates.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('wordpress-hosting')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20]">WordPress Website Builder</div>
                          <p className="text-xs text-[#727586] mt-0.5">Visual block editor integrated into WordPress.</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* EMAIL */}
              <button
                onClick={() => handleNavClick('email-hosting')}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'email-hosting'
                    ? 'text-[#673DE6] bg-[#F4F0FF]'
                    : 'text-[#1D1E20] hover:text-[#673DE6] hover:bg-slate-50'
                }`}
              >
                <span>Email</span>
              </button>

              {/* SECURITY */}
              <button
                onClick={() => handleNavClick('security')}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'security'
                    ? 'text-[#673DE6] bg-[#F4F0FF]'
                    : 'text-[#1D1E20] hover:text-[#673DE6] hover:bg-slate-50'
                }`}
              >
                <span>Security</span>
              </button>

              {/* SUPPORT DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('support')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('support')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    ['support', 'status', 'about', 'contact'].includes(currentPage) || activeMenu === 'support'
                      ? 'text-[#673DE6] bg-[#F4F0FF]'
                      : 'text-[#1D1E20] hover:text-[#673DE6] hover:bg-slate-50'
                  }`}
                >
                  <span>Support</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'support' ? 'rotate-180 text-[#673DE6]' : 'text-slate-400'}`} />
                </button>

                {activeMenu === 'support' && (
                  <div className="absolute top-full right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="space-y-1">
                      <button
                        onClick={() => handleNavClick('support')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20]">Knowledge Base & Help</div>
                          <p className="text-xs text-[#727586] mt-0.5">Browse 500+ tutorials and troubleshooting steps.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('status')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <Activity className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20] flex items-center gap-2">
                            Server Network Status
                            <span className="text-[10px] font-bold bg-emerald-50 text-[#00B090] px-1.5 py-0.5 rounded">
                              99.99%
                            </span>
                          </div>
                          <p className="text-xs text-[#727586] mt-0.5">Real-time uptime across 9 global data centers.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('contact')}
                        className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F0FF] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-[#673DE6] group-hover:bg-[#673DE6] group-hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1D1E20]">Contact Sales & HQ</div>
                          <p className="text-xs text-[#727586] mt-0.5">Reach out to our executive or sales consultation desk.</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action Controls: Currency, Cart, Login, Client Area, Get Started */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Currency Selector */}
              <div className="relative group">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                  aria-label="Currency Selector"
                  className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#1D1E20] py-2 pl-2.5 pr-6 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20 transition-colors"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="INR">INR (₹)</option>
                </select>
                <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-600 hover:text-[#673DE6] hover:bg-[#F4F0FF] rounded-lg transition-colors cursor-pointer"
                title="View Cart"
                aria-label="View shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#673DE6] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Login Button */}
              <button
                onClick={() => {
                  setAuthModalTab('login');
                  setIsAuthModalOpen(true);
                }}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1E20] hover:text-[#673DE6] px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>Login</span>
              </button>

              {/* Elementor Export Button */}
              <button
                onClick={() => handleNavClick('elementor-export')}
                className={`hidden xl:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer border ${
                  currentPage === 'elementor-export'
                    ? 'bg-[#673DE6] text-white border-[#673DE6]'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Elementor Kit</span>
              </button>

              {/* Client Area Button */}
              <button
                onClick={() => {
                  setAuthModalTab('clientArea');
                  setIsAuthModalOpen(true);
                }}
                className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-[#673DE6] bg-[#F4F0FF] hover:bg-[#EDE5FF] px-3.5 py-2 rounded-lg transition-colors cursor-pointer border border-[#673DE6]/20"
              >
                <span>Client Area</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </button>

              {/* Get Started CTA */}
              <button
                onClick={() => handleNavClick('web-hosting')}
                className="inline-flex items-center justify-center bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-md shadow-purple-600/20 hover:shadow-lg hover:shadow-purple-600/30 transition-all cursor-pointer whitespace-nowrap"
              >
                Get Started
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
                aria-label="Open Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2">
            
            {/* Mobile Domains */}
            <div>
              <button
                onClick={() => handleNavClick('domains')}
                className="w-full flex items-center justify-between text-left font-semibold text-[#1D1E20] py-2 border-b border-slate-100"
              >
                <span>Domains</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mobile Hosting */}
            <div>
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'hosting' ? null : 'hosting')}
                className="w-full flex items-center justify-between text-left font-semibold text-[#1D1E20] py-2 border-b border-slate-100"
              >
                <span>Hosting Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'hosting' ? 'rotate-180 text-[#673DE6]' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'hosting' && (
                <div className="pl-4 py-2 space-y-2 text-sm text-[#727586]">
                  <button onClick={() => handleNavClick('web-hosting')} className="block py-1 hover:text-[#673DE6] w-full text-left">Web Hosting</button>
                  <button onClick={() => handleNavClick('cloud-hosting')} className="block py-1 hover:text-[#673DE6] w-full text-left">Cloud Hosting</button>
                  <button onClick={() => handleNavClick('wordpress-hosting')} className="block py-1 hover:text-[#673DE6] w-full text-left">Managed WordPress</button>
                  <button onClick={() => handleNavClick('vps-hosting')} className="block py-1 hover:text-[#673DE6] w-full text-left">VPS Hosting (KVM)</button>
                  <button onClick={() => handleNavClick('reseller-hosting')} className="block py-1 hover:text-[#673DE6] w-full text-left">Reseller Hosting</button>
                </div>
              )}
            </div>

            {/* Mobile Website */}
            <div>
              <button
                onClick={() => handleNavClick('website-builder')}
                className="w-full flex items-center justify-between text-left font-semibold text-[#1D1E20] py-2 border-b border-slate-100"
              >
                <span>Website Builder</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mobile Email */}
            <div>
              <button
                onClick={() => handleNavClick('email-hosting')}
                className="w-full flex items-center justify-between text-left font-semibold text-[#1D1E20] py-2 border-b border-slate-100"
              >
                <span>Business Email</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mobile Security */}
            <div>
              <button
                onClick={() => handleNavClick('security')}
                className="w-full flex items-center justify-between text-left font-semibold text-[#1D1E20] py-2 border-b border-slate-100"
              >
                <span>Website Security</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mobile Support */}
            <div>
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'support' ? null : 'support')}
                className="w-full flex items-center justify-between text-left font-semibold text-[#1D1E20] py-2 border-b border-slate-100"
              >
                <span>Support & Info</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'support' ? 'rotate-180 text-[#673DE6]' : 'text-slate-400'}`} />
              </button>
              {mobileSubmenu === 'support' && (
                <div className="pl-4 py-2 space-y-2 text-sm text-[#727586]">
                  <button onClick={() => handleNavClick('support')} className="block py-1 hover:text-[#673DE6] w-full text-left">Knowledge Base</button>
                  <button onClick={() => handleNavClick('status')} className="block py-1 hover:text-[#673DE6] w-full text-left">Server Status</button>
                  <button onClick={() => handleNavClick('about')} className="block py-1 hover:text-[#673DE6] w-full text-left">About Us</button>
                  <button onClick={() => handleNavClick('contact')} className="block py-1 hover:text-[#673DE6] w-full text-left">Contact Us</button>
                </div>
              )}
            </div>

            {/* Mobile Auth actions */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => handleNavClick('elementor-export')}
                className="w-full py-2.5 px-4 text-center text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileCode className="w-4 h-4 text-emerald-600" />
                <span>Download Elementor Templates</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalTab('login');
                  setIsAuthModalOpen(true);
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#1D1E20] bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer"
              >
                Login to Account
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalTab('clientArea');
                  setIsAuthModalOpen(true);
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#673DE6] bg-[#F4F0FF] rounded-xl border border-[#673DE6]/20 cursor-pointer"
              >
                Client Area Portal
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
