import React, { useState } from 'react';
import {
  Server,
  Terminal,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronRight,
  Cpu,
  HardDrive,
  Activity,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

const VPS_TIERS = [
  { id: 'vps-kvm1', name: 'KVM 1 VPS', vCpu: '1 vCPU Core', ram: '2 GB RAM', storage: '50 GB NVMe', bandwidth: '1 TB Bandwidth', price48: 3.99, orig48: 9.99 },
  { id: 'vps-kvm2', name: 'KVM 2 VPS', vCpu: '2 vCPU Cores', ram: '4 GB RAM', storage: '100 GB NVMe', bandwidth: '2 TB Bandwidth', price48: 5.99, orig48: 14.99, popular: true },
  { id: 'vps-kvm4', name: 'KVM 4 VPS', vCpu: '4 vCPU Cores', ram: '8 GB RAM', storage: '200 GB NVMe', bandwidth: '4 TB Bandwidth', price48: 10.99, orig48: 24.99 },
  { id: 'vps-kvm8', name: 'KVM 8 VPS', vCpu: '8 vCPU Cores', ram: '16 GB RAM', storage: '400 GB NVMe', bandwidth: '8 TB Bandwidth', price48: 19.99, orig48: 49.99 },
];

export const VpsHostingPage: React.FC = () => {
  const { formatPrice, addToCart, navigateToPage } = useApp();
  const [selectedOs, setSelectedOs] = useState('ubuntu');

  const baseVpsPlan = HOSTING_PLANS.find((p) => p.id === 'vps-kvm2') || HOSTING_PLANS[0];

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">VPS Hosting</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Terminal className="w-3.5 h-3.5" /> KVM Virtualization & Full Root Access
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          High-Performance KVM VPS Hosting
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Dedicated IPv4, full root SSH access, PCIe 5.0 NVMe storage, and your choice of Linux distribution. Scale resources instantly.
        </p>
      </section>

      {/* OS Picker Strip */}
      <div className="max-w-4xl mx-auto px-4 mb-10 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-bold text-slate-500 mr-2">Choice of Linux OS:</span>
        {[
          { id: 'ubuntu', label: 'Ubuntu 24.04 LTS' },
          { id: 'debian', label: 'Debian 12 Bookworm' },
          { id: 'almalinux', label: 'AlmaLinux 9' },
          { id: 'rocky', label: 'Rocky Linux 9' },
          { id: 'docker', label: 'Docker Template' },
        ].map((os) => (
          <button
            key={os.id}
            onClick={() => setSelectedOs(os.id)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
              selectedOs === os.id
                ? 'border-[#673DE6] bg-[#F4F0FF] text-[#673DE6]'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {os.label}
          </button>
        ))}
      </div>

      {/* VPS 4-Tier Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {VPS_TIERS.map((vps) => (
            <div
              key={vps.id}
              className={`p-6 rounded-3xl bg-white border flex flex-col justify-between transition-all ${
                vps.popular
                  ? 'border-2 border-[#673DE6] shadow-xl shadow-purple-600/10'
                  : 'border-slate-200 hover:border-purple-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B1340]">{vps.name}</h3>
                  {vps.popular && (
                    <span className="text-[10px] font-bold bg-[#673DE6] text-white px-2 py-0.5 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>

                <div className="my-4 pb-4 border-b border-slate-100">
                  <div className="text-xs text-slate-400 line-through">{formatPrice(vps.orig48)}/mo</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-black text-[#1B1340]">{formatPrice(vps.price48)}</span>
                    <span className="text-xs text-slate-500">/mo</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs py-2">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>vCPU</span>
                    <strong className="text-[#1D1E20] font-mono">{vps.vCpu}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>RAM</span>
                    <strong className="text-[#1D1E20] font-mono">{vps.ram}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Storage</span>
                    <strong className="text-[#1D1E20] font-mono">{vps.storage}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Bandwidth</span>
                    <strong className="text-[#1D1E20] font-mono">{vps.bandwidth}</strong>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#00B090]" />
                    <span>Dedicated IPv4 + /64 IPv6</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#00B090]" />
                    <span>Full Root Access & SSH</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#00B090]" />
                    <span>Automated Snapshots</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => addToCart(baseVpsPlan, 48)}
                className="mt-6 w-full py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Deploy {vps.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
