import React from 'react';
import {
  Globe,
  ShieldCheck,
  Lock,
  Server,
  Heart,
  CreditCard,
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';

export const Footer: React.FC = () => {
  const { navigateToPage, setAuthModalTab, setIsAuthModalOpen, setIsTicketModalOpen } = useApp();

  const handleLink = (page: PageId) => {
    navigateToPage(page);
  };

  return (
    <footer className="bg-[#1B1340] text-slate-300 pt-16 pb-12 border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust & Certification Banner */}
        <div className="pb-12 border-b border-purple-900/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 text-[#00B090] flex items-center justify-center shrink-0 border border-purple-700/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">99.9% Uptime SLA</div>
              <div className="text-[11px] text-purple-200">Tier-4 redundant hardware</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 text-[#00B090] flex items-center justify-center shrink-0 border border-purple-700/40">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Free Lifetime SSL</div>
              <div className="text-[11px] text-purple-200">256-bit automated encryption</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 text-amber-400 flex items-center justify-center shrink-0 border border-purple-700/40">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">30-Day Money-Back</div>
              <div className="text-[11px] text-purple-200">100% risk-free trial</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 text-cyan-400 flex items-center justify-center shrink-0 border border-purple-700/40">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">24/7/365 Support</div>
              <div className="text-[11px] text-purple-200">Certified hosting architects</div>
            </div>
          </div>
        </div>

        {/* Main 5-Column Navigation Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          
          {/* Brand Info Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <button
              onClick={() => handleLink('home')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2F1C6A] to-[#673DE6] flex items-center justify-center text-white font-black text-xs">
                XO
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                XMart<span className="text-[#673DE6]">Orbit</span>
              </span>
            </button>

            <p className="text-purple-200/80 leading-relaxed text-[11px]">
              <strong className="text-white">XMart Orbit Private Limited</strong> provides enterprise NVMe web hosting, cloud infrastructure, domain registration, and WordPress acceleration worldwide.
            </p>

            <div className="space-y-1.5 text-[11px] text-purple-200/90 pt-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#00B090]" />
                <a href="https://xmartorbit.com" className="hover:text-white underline underline-offset-2">
                  https://xmartorbit.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00B090]" />
                <span>support@xmartorbit.com</span>
              </div>
            </div>
          </div>

          {/* Hosting */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Hosting Solutions</h4>
            <ul className="space-y-2 text-purple-200/80">
              <li><button onClick={() => handleLink('web-hosting')} className="hover:text-white transition-colors cursor-pointer text-left">Web Hosting</button></li>
              <li><button onClick={() => handleLink('web-hosting')} className="hover:text-white transition-colors cursor-pointer text-left">Premium Web Hosting</button></li>
              <li><button onClick={() => handleLink('cloud-hosting')} className="hover:text-white transition-colors cursor-pointer text-left">Cloud Hosting</button></li>
              <li><button onClick={() => handleLink('wordpress-hosting')} className="hover:text-white transition-colors cursor-pointer text-left">Managed WordPress</button></li>
              <li><button onClick={() => handleLink('vps-hosting')} className="hover:text-white transition-colors cursor-pointer text-left">VPS Hosting (KVM)</button></li>
              <li><button onClick={() => handleLink('reseller-hosting')} className="hover:text-white transition-colors cursor-pointer text-left">Reseller Hosting</button></li>
            </ul>
          </div>

          {/* Domains */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Domain Services</h4>
            <ul className="space-y-2 text-purple-200/80">
              <li><button onClick={() => handleLink('domains')} className="hover:text-white transition-colors cursor-pointer text-left">Domain Name Search</button></li>
              <li><button onClick={() => handleLink('domains')} className="hover:text-white transition-colors cursor-pointer text-left">Domain Transfer</button></li>
              <li><button onClick={() => handleLink('domains')} className="hover:text-white transition-colors cursor-pointer text-left">Domain Pricing & TLDs</button></li>
              <li><button onClick={() => handleLink('domains')} className="hover:text-white transition-colors cursor-pointer text-left">WHOIS Lookup Tool</button></li>
              <li><button onClick={() => handleLink('domains')} className="hover:text-white transition-colors cursor-pointer text-left">Free Domain Privacy</button></li>
              <li><button onClick={() => handleLink('domains')} className="hover:text-white transition-colors cursor-pointer text-left">.com Domain ($4.99)</button></li>
            </ul>
          </div>

          {/* Tools & Platform */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Technology & Tools</h4>
            <ul className="space-y-2 text-purple-200/80">
              <li><button onClick={() => handleLink('website-builder')} className="hover:text-white transition-colors cursor-pointer text-left">Website Builder</button></li>
              <li><button onClick={() => handleLink('elementor-export')} className="text-emerald-400 hover:text-white font-bold transition-colors cursor-pointer text-left flex items-center gap-1">Elementor JSON Templates ★</button></li>
              <li><button onClick={() => handleLink('email-hosting')} className="hover:text-white transition-colors cursor-pointer text-left">Business Email</button></li>
              <li><button onClick={() => handleLink('security')} className="hover:text-white transition-colors cursor-pointer text-left">Security Shield & SSL</button></li>
              <li><button onClick={() => handleLink('status')} className="hover:text-white transition-colors cursor-pointer text-left">Server Network Status</button></li>
              <li><button onClick={() => handleLink('support')} className="hover:text-white transition-colors cursor-pointer text-left">Knowledge Base</button></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Company & Legal</h4>
            <ul className="space-y-2 text-purple-200/80">
              <li>
                <button
                  onClick={() => {
                    setAuthModalTab('clientArea');
                    setIsAuthModalOpen(true);
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Client Area Portal
                </button>
              </li>
              <li><button onClick={() => handleLink('about')} className="hover:text-white transition-colors cursor-pointer text-left">About XMart Orbit</button></li>
              <li><button onClick={() => handleLink('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Contact Us</button></li>
              <li><button onClick={() => handleLink('terms')} className="hover:text-white transition-colors cursor-pointer text-left">Terms of Service</button></li>
              <li><button onClick={() => handleLink('privacy')} className="hover:text-white transition-colors cursor-pointer text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleLink('terms')} className="hover:text-white transition-colors cursor-pointer text-left">Refund & SLA Policy</button></li>
            </ul>
          </div>

        </div>

        {/* Accepted Payment Provider Badges */}
        <div className="pt-8 pb-8 border-t border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-purple-200/70">
            Accepted Payment Methods with Instant Account Provisioning:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {['Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay', 'UPI', 'Crypto'].map((method) => (
              <span
                key={method}
                className="px-2.5 py-1 rounded bg-purple-950/80 border border-purple-800/60 text-[11px] font-bold text-slate-200 tracking-wide"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-6 border-t border-purple-950 text-center text-xs text-purple-300/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            © 2026 <strong className="text-purple-200">XMart Orbit Private Limited</strong>. All rights reserved.
          </div>
          <div className="text-[11px]">
            Official corporate domain: <a href="https://xmartorbit.com" className="hover:text-white underline">https://xmartorbit.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
