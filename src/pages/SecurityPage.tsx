import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Zap,
  RefreshCw,
  HardDrive,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Activity
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SecurityPage: React.FC = () => {
  const { navigateToPage, showNotification } = useApp();
  const [testDomain, setTestDomain] = useState('example.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<boolean | null>(null);

  const handleRunSecurityAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testDomain) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(true);
      showNotification(`Security audit complete for ${testDomain}: 0 critical vulnerabilities.`);
    }, 600);
  };

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Security</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <ShieldCheck className="w-3.5 h-3.5" /> Multi-Layer Defense Architecture
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Enterprise Security Built into Every Node
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          From automated Let’s Encrypt wildcard certificates to real-time Monarx malware scanning and Cloudflare edge scrubbing, your digital assets remain safe 24/7.
        </p>
      </section>

      {/* Interactive Free Security Scanner Simulation */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold">Free Website Security & SSL Audit</h3>
              <p className="text-xs text-slate-400 mt-0.5">Check any domain for active SSL encryption, HTTP/3 protocol, and malware threats.</p>
            </div>
            <span className="text-xs font-mono font-bold text-[#00B090] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded">
              Online Scanner
            </span>
          </div>

          <form onSubmit={handleRunSecurityAudit} className="mt-6 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={testDomain}
              onChange={(e) => setTestDomain(e.target.value)}
              placeholder="Enter domain (e.g., yoursite.com)"
              className="flex-1 bg-slate-950 border border-slate-700 text-xs text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]"
            />
            <button
              type="submit"
              disabled={isScanning}
              className="px-6 py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl transition-all cursor-pointer disabled:opacity-50"
            >
              {isScanning ? 'Auditing Headers...' : 'Run Security Check'}
            </button>
          </form>

          {scanResult && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Security Audit Passed for {testDomain}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-300 pt-1">
                <div>SSL Certificate: <strong className="text-white">Active (256-bit ECDSA)</strong></div>
                <div>HTTP/3 Protocol: <strong className="text-white">Supported</strong></div>
                <div>Monarx Scanner: <strong className="text-emerald-400">Clean (0 Webshells)</strong></div>
                <div>DDoS Scrubbing: <strong className="text-white">Cloudflare Edge</strong></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4 Pillars of XMart Orbit Security */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#673DE6] flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1340]">Unlimited Free SSL Lifetime</h3>
            <p className="text-xs sm:text-sm text-[#727586] mt-2 leading-relaxed">
              Every domain, addon domain, and subdomain hosted on XMart Orbit receives auto-renewing Let’s Encrypt wildcard SSL certificates with zero manual intervention.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00B090] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1340]">Monarx Real-Time Malware Defense</h3>
            <p className="text-xs sm:text-sm text-[#727586] mt-2 leading-relaxed">
              Unlike primitive signature scanners that slow down disks, Monarx continuously inspects PHP runtime memory to block malicious injections before execution.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1340]">Volumetric DDoS Protection</h3>
            <p className="text-xs sm:text-sm text-[#727586] mt-2 leading-relaxed">
              Our 40 Gbps carrier backbones route inbound packets through automated traffic scrubbing centers, filtering multi-gigabit attacks with zero packet loss.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#1B1340]">Isolated Disaster Recovery Snapshots</h3>
            <p className="text-xs sm:text-sm text-[#727586] mt-2 leading-relaxed">
              Your snapshots are duplicated to physically separate geographic recovery vaults. If you make a mistake editing code, roll back to yesterday with 1 click.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
