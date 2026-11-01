import React, { useState } from 'react';
import {
  Layout,
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  Check,
  ArrowRight,
  ChevronRight,
  Palette,
  ShoppingBag,
  Search
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

const TEMPLATES = [
  { id: 1, name: 'SaaS Innovate', category: 'Tech & Agency', color: 'bg-purple-600', preview: 'Clean modern software landing page with dark navigation' },
  { id: 2, name: 'Artisan Gourmet', category: 'Restaurant & Food', color: 'bg-amber-600', preview: 'Warm photography-rich dining menu and reservation flow' },
  { id: 3, name: 'Luxe Apparel', category: 'eCommerce Store', color: 'bg-rose-600', preview: 'Minimalist product catalog with cart and instant checkout' },
  { id: 4, name: 'Studio Apex', category: 'Portfolio & Creative', color: 'bg-indigo-600', preview: 'Grid showcase with high-res galleries and case study modals' },
  { id: 5, name: 'Vanguard Legal', category: 'Business & Finance', color: 'bg-slate-700', preview: 'Trustworthy consultation appointment booking system' },
  { id: 6, name: 'Pulse Fitness', category: 'Health & Wellness', color: 'bg-emerald-600', preview: 'High-energy training schedule and membership tiers' },
];

export const WebsiteBuilderPage: React.FC = () => {
  const { navigateToPage, addToCart, showNotification } = useApp();
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tech & Agency', 'eCommerce Store', 'Restaurant & Food', 'Portfolio & Creative', 'Business & Finance'];

  const filteredTemplates = selectedCategory === 'All'
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.category === selectedCategory);

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Website Builder</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Layout className="w-3.5 h-3.5" /> No-Code Drag-and-Drop Creator
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Build Your Dream Website in Minutes
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Create a mobile-optimized website without touching a single line of code. Includes free domain, free SSL, AI writing assistant, and 150+ designer templates.
        </p>

        {/* Device Preview Switcher */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-2 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                deviceView === 'desktop' ? 'bg-white shadow-xs text-[#673DE6]' : 'text-slate-600'
              }`}
            >
              <Monitor className="w-4 h-4" /> Desktop
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-2 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                deviceView === 'tablet' ? 'bg-white shadow-xs text-[#673DE6]' : 'text-slate-600'
              }`}
            >
              <Tablet className="w-4 h-4" /> Tablet
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-2 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                deviceView === 'mobile' ? 'bg-white shadow-xs text-[#673DE6]' : 'text-slate-600'
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Builder Mockup */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 font-mono text-slate-300">XMart Orbit Visual Builder v3.2</span>
            </div>
            <span className="text-emerald-400 font-mono text-[11px]">Auto-saved 2s ago</span>
          </div>

          {/* Interactive Screen container sizing based on device toggle */}
          <div className="py-6 flex justify-center bg-slate-950/80 rounded-2xl my-4 overflow-hidden">
            <div
              className={`transition-all duration-300 bg-white rounded-xl shadow-xl overflow-hidden ${
                deviceView === 'desktop'
                  ? 'w-full max-w-3xl min-h-[340px]'
                  : deviceView === 'tablet'
                  ? 'w-[480px] min-h-[340px]'
                  : 'w-[320px] min-h-[340px]'
              }`}
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <span className="font-bold text-xs text-slate-800">YourBrand Portfolio</span>
                <span className="text-[10px] bg-purple-100 text-[#673DE6] px-2 py-0.5 rounded font-bold">100% Mobile Ready</span>
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-black text-[#1B1340]">Drag Any Block Anywhere</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Click on text to edit directly. Upload your logo, add eCommerce product carousels, or embed contact maps.
                </p>
                <div className="pt-2 flex justify-center gap-2">
                  <button
                    onClick={() => showNotification('Block added to page!')}
                    className="px-4 py-1.5 bg-[#673DE6] text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    + Add New Section
                  </button>
                  <button
                    onClick={() => showNotification('AI text generated for hero section!')}
                    className="px-4 py-1.5 bg-purple-50 text-[#673DE6] text-xs font-bold rounded-lg border border-purple-200 cursor-pointer"
                  >
                    Generate AI Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 pt-2 gap-2">
            <span>Website Builder is included 100% free with all XMart Orbit hosting plans.</span>
            <button
              onClick={() => addToCart(HOSTING_PLANS[1], 48)}
              className="text-[#673DE6] hover:text-white font-bold flex items-center gap-1 cursor-pointer"
            >
              Get Started with Builder →
            </button>
          </div>
        </div>
      </section>

      {/* Templates Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1B1340]">150+ Professional Responsive Templates</h2>
          <p className="text-xs sm:text-sm text-[#727586] mt-1">Select a foundation tailored for your industry.</p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#673DE6] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((tmpl) => (
            <div
              key={tmpl.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-full h-36 ${tmpl.color} rounded-xl flex items-center justify-center text-white font-bold text-base shadow-inner`}>
                  {tmpl.name}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1B1340]">{tmpl.name}</span>
                  <span className="text-[10px] font-bold text-[#673DE6] bg-purple-50 px-2 py-0.5 rounded">
                    {tmpl.category}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{tmpl.preview}</p>
              </div>

              <button
                onClick={() => {
                  addToCart(HOSTING_PLANS[1], 12);
                  showNotification(`Template "${tmpl.name}" selected! Opening plan setup.`);
                }}
                className="mt-4 w-full py-2 bg-slate-100 hover:bg-[#673DE6] hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Use This Template
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
