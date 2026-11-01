import React from 'react';
import { Zap, ShieldCheck, HardDrive, Cpu, Check, Server, ArrowRight } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  return (
    <section id="performance" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> Engineered for Extreme Velocity
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1340] tracking-tight">
            Speed is Revenue. We Don't Compromise.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#727586] leading-relaxed">
            Every 100ms improvement in site load speed increases conversion rates by up to 8%. XMart Orbit uses a pure LiteSpeed Enterprise + PCIe 5.0 NVMe stack to maximize performance.
          </p>
        </div>

        {/* 2-Column Performance Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Box 1: Web Server Benchmarks */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full">
                  Web Server Architecture
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">HTTP/3 Ready</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1B1340]">LiteSpeed Enterprise vs Apache & Nginx</h3>
              <p className="text-xs sm:text-sm text-[#727586] mt-2">
                Handling 10,000 simultaneous concurrent users on identical hardware:
              </p>

              {/* Benchmarks Bars */}
              <div className="space-y-4 my-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[#673DE6]">XMart Orbit (LiteSpeed + LSCache)</span>
                    <span className="text-emerald-600 font-mono">8,420 req/sec</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#673DE6] h-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-600">Standard Nginx Caching</span>
                    <span className="text-slate-500 font-mono">3,120 req/sec</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full w-[38%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-600">Standard Apache MPM-Event</span>
                    <span className="text-slate-500 font-mono">1,680 req/sec</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-slate-300 h-full w-[20%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Up to <strong className="text-purple-700 font-bold">5x faster TTFB</strong> for WordPress & WooCommerce</span>
              <span className="text-[#00B090] font-bold">Zero Dropped Packets</span>
            </div>
          </div>

          {/* Box 2: Storage I/O Comparison */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#00B090] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                  Hardware Storage
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">PCIe Gen 5.0</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1B1340]">Pure NVMe SSD vs Traditional Drives</h3>
              <p className="text-xs sm:text-sm text-[#727586] mt-2">
                Sequential read and write speeds comparison (MB/s):
              </p>

              {/* Benchmarks Bars */}
              <div className="space-y-4 my-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[#00B090]">XMart Orbit PCIe 5.0 NVMe SSD</span>
                    <span className="text-[#00B090] font-mono">7,500 MB/s</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#00B090] h-full w-[96%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-600">Standard SATA SSD (Other hosts)</span>
                    <span className="text-slate-500 font-mono">550 MB/s</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full w-[12%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-600">Mechanical HDD</span>
                    <span className="text-slate-500 font-mono">140 MB/s</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-slate-300 h-full w-[4%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Database queries complete in sub-millisecond timeframes</span>
              <span className="text-[#673DE6] font-bold">100% NVMe Always</span>
            </div>
          </div>

        </div>

        {/* 3 Pillars of Security & Isolation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#1B1340]">Multi-Layer DDoS Shield</h4>
            <p className="text-xs text-[#727586] mt-1.5 leading-relaxed">
              Automated traffic inspection mitigates SYN floods, UDP amplification, and layer-7 HTTP floods before they ever touch your server.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#1B1340]">CageFS Account Isolation</h4>
            <p className="text-xs text-[#727586] mt-1.5 leading-relaxed">
              Every hosting account runs in its own secure, virtualized container. Even if another site experiences a spike, your resources stay 100% protected.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
              <HardDrive className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#1B1340]">Daily Redundant Snapshots</h4>
            <p className="text-xs text-[#727586] mt-1.5 leading-relaxed">
              Encrypted snapshots are stored in physically isolated disaster recovery vaults. Restore single files or entire databases with 1 click anytime.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
