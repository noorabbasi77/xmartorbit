import React, { useState } from 'react';
import {
  Download,
  FileCode,
  Copy,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
  HelpCircle,
  Code2,
  FileCheck,
  Palette,
  Image as ImageIcon
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ElementorExportPage: React.FC = () => {
  const { navigateToPage, showNotification } = useApp();
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<'homepage' | 'pricing' | 'settings'>('homepage');

  const templates = [
    {
      id: 'homepage',
      name: 'Homepage & Hero Section Elementor Template',
      filename: 'xmart-orbit-homepage.json',
      path: '/elementor/xmart-orbit-homepage.json',
      desc: 'Complete high-converting Hero with headline, checklist, CTA, and Frankfurt datacenter card.',
      size: '4.8 KB',
    },
    {
      id: 'pricing',
      name: '3-Tier NVMe Hosting Cards Elementor Template',
      filename: 'xmart-orbit-pricing-cards.json',
      path: '/elementor/xmart-orbit-pricing-cards.json',
      desc: 'Single, Premium, and Business web hosting cards with feature checklists, badges, and buttons.',
      size: '6.2 KB',
    },
    {
      id: 'settings',
      name: 'Global Theme Style & Colors (Elementor Kit)',
      filename: 'xmart-orbit-site-settings.json',
      path: '/elementor/xmart-orbit-site-settings.json',
      desc: 'System colors (#673DE6, #2F1C6A, #00B090), typography (DM Sans), and container widths.',
      size: '1.9 KB',
    },
  ];

  const handleDownload = (filename: string, path: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification(`Downloading ${filename} for WordPress Elementor!`);
  };

  const handleCopyCode = async (id: string, path: string) => {
    try {
      const res = await fetch(path);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopiedIndex(id);
      showNotification('Elementor JSON copied to clipboard! You can paste it in WordPress.');
      setTimeout(() => setCopiedIndex(null), 3000);
    } catch {
      showNotification('Failed to copy. Please use the Direct Download button.');
    }
  };

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">WordPress Elementor Export</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <FileCode className="w-3.5 h-3.5" /> WordPress & Elementor Integration
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Publish & Edit in WordPress Elementor
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Ye tamaam files aur sections Elementor JSON format mein tayyar hain. Aap inhein WordPress mein import karke visual drag-and-drop editor mein asani se edit aur publish kar sakte hain.
        </p>
      </section>

      {/* Downloadable Elementor Templates Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-[#1B1340]">Download Elementor JSON Templates</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Directly compatible with Elementor Free and Elementor Pro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((tmpl) => (
            <div
              key={tmpl.id}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#673DE6] flex items-center justify-center mb-4">
                  <FileCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1B1340] leading-snug">{tmpl.name}</h3>
                <p className="text-xs text-slate-500 mt-2">{tmpl.desc}</p>
                <div className="mt-3 text-[11px] font-mono text-slate-400">
                  File: {tmpl.filename} ({tmpl.size})
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                <button
                  onClick={() => handleDownload(tmpl.filename, tmpl.path)}
                  className="w-full py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .json</span>
                </button>

                <button
                  onClick={() => handleCopyCode(tmpl.id, tmpl.path)}
                  className="w-full py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedIndex === tmpl.id ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied JSON!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy JSON Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Urdu & English Guide */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center">
            <span className="text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full">
              Asaan Guide / Step-by-Step Instructions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B1340] mt-3">
              WordPress Elementor Mein Import Karne Ka Tareeqa
            </h2>
          </div>

          <div className="space-y-4">
            
            <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#673DE6] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1B1340]">Step 1: JSON File Download Karein</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Upar diye gaye buttons se <code className="bg-slate-100 text-[#673DE6] px-1.5 py-0.5 rounded font-mono">xmart-orbit-homepage.json</code> ya <code className="bg-slate-100 text-[#673DE6] px-1.5 py-0.5 rounded font-mono">xmart-orbit-pricing-cards.json</code> apne computer par save kar lein.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#673DE6] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1B1340]">Step 2: WordPress Admin Panel Mein Jayein</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Apne WordPress Dashboard mein login karein. Left menu mein <strong>Templates &gt; Saved Templates</strong> par click karein.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#673DE6] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1B1340]">Step 3: "Import Templates" Par Click Karein</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Page ke top par <strong>"Import Templates"</strong> button nazar aayega. Us par click karke download ki hui <code>.json</code> file select karein aur <strong>"Import Now"</strong> daba dein.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#673DE6] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                4
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1B1340]">Step 4: Elementor Editor Mein Insert & Edit Karein</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Ab Pages &gt; Add New par jayein aur <strong>"Edit with Elementor"</strong> dabayein. Page par grey folder icon (Add Template) par click karein, <strong>"My Templates"</strong> tab mein jayein, aur <strong>"Insert"</strong> click karein.
                </p>
                <div className="mt-2 text-xs font-semibold text-[#00B090] bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  Mubarak ho! Tamam design, headlines, cards aur colors Elementor mein load ho jayenge. Aap kisi bhi text ya photo par click karke usko direct visual drag & drop se badal sakte hain!
                </div>
              </div>
            </div>

          </div>

          {/* Color Palette Cheat Sheet for Elementor Site Settings */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <h4 className="font-bold text-sm text-[#1B1340] mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#673DE6]" />
              Elementor Global Color Palette Reference:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#673DE6] shrink-0" />
                <div>
                  <strong className="block text-[#1B1340]">Primary Purple</strong>
                  <span className="font-mono text-slate-500">#673DE6</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#2F1C6A] shrink-0" />
                <div>
                  <strong className="block text-[#1B1340]">Deep Purple</strong>
                  <span className="font-mono text-slate-500">#2F1C6A</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#1B1340] shrink-0" />
                <div>
                  <strong className="block text-[#1B1340]">Dark Purple</strong>
                  <span className="font-mono text-slate-500">#1B1340</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#00B090] shrink-0" />
                <div>
                  <strong className="block text-[#1B1340]">Success Green</strong>
                  <span className="font-mono text-slate-500">#00B090</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
