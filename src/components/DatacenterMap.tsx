import React, { useState } from 'react';
import {
  Globe,
  Activity,
  Server,
  Zap,
  CheckCircle,
  Play,
  RotateCcw,
  Shield,
  Wifi
} from 'lucide-react';
import { DATACENTERS } from '../data/hostingData';
import { DatacenterLocation } from '../types';

export const DatacenterMap: React.FC = () => {
  const [selectedDc, setSelectedDc] = useState<DatacenterLocation>(DATACENTERS[3]); // Frankfurt default
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    latency: number;
    jitter: number;
    ttfb: number;
    packetLoss: string;
  } | null>(null);

  const runSpeedTest = (dc: DatacenterLocation) => {
    setSelectedDc(dc);
    setIsTesting(true);
    setTestResult(null);

    setTimeout(() => {
      // Simulate realistic network variance
      const variance = Math.floor(Math.random() * 5) - 2;
      const latency = Math.max(12, dc.baseLatencyMs + variance);
      const ttfb = latency + 18 + Math.floor(Math.random() * 8);
      const jitter = (Math.random() * 1.5 + 0.3).toFixed(1);

      setTestResult({
        latency,
        jitter: parseFloat(jitter),
        ttfb,
        packetLoss: '0.00%',
      });
      setIsTesting(false);
    }, 600);
  };

  return (
    <section id="datacenters" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5" /> Global Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1340] tracking-tight">
            High-Speed Global Datacenters
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#727586] leading-relaxed">
            Deploy your website close to your visitors. Choose from 9 Tier-4 certified datacenters across 4 continents with ultra-low latency and 40 Gbps redundant backbones.
          </p>
        </div>

        {/* Interactive Grid & Testing Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Datacenter Selection List */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
              Select Deployment Region:
            </div>
            {DATACENTERS.map((dc) => {
              const isSelected = selectedDc.id === dc.id;
              return (
                <div
                  key={dc.id}
                  onClick={() => runSpeedTest(dc)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-[#673DE6] bg-[#F4F0FF]/80 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-purple-200 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-[#673DE6] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1D1E20]">{dc.name}</div>
                      <div className="text-[11px] text-[#727586]">
                        {dc.region} · {dc.tier}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      ~{dc.baseLatencyMs}ms
                    </span>
                    <div className="text-[10px] text-slate-400 mt-0.5">Click to test</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Network Benchmark Station */}
          <div className="lg:col-span-7 bg-[#1B1340] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-950/20 border border-purple-900/50">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-purple-800/60 gap-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#00B090] uppercase tracking-wider bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded">
                  Live Probe Connected
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white">
                  {selectedDc.name}
                </h3>
                <p className="text-xs text-purple-200 mt-0.5">
                  Hardware: {selectedDc.hardware}
                </p>
              </div>

              <button
                onClick={() => runSpeedTest(selectedDc)}
                disabled={isTesting}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md disabled:opacity-50 shrink-0"
              >
                {isTesting ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    <span>Measuring Route...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Route Ping Test</span>
                  </>
                )}
              </button>
            </div>

            {/* Test Results Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              <div className="bg-purple-950/70 p-4 rounded-2xl border border-purple-800/40">
                <div className="text-[11px] text-purple-300 font-medium flex items-center gap-1">
                  <Wifi className="w-3 h-3 text-cyan-400" /> Ping Roundtrip
                </div>
                <div className="text-2xl font-black font-mono text-white mt-1">
                  {isTesting ? '...' : `${testResult ? testResult.latency : selectedDc.baseLatencyMs} ms`}
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">Ultra-Low Jitter</div>
              </div>

              <div className="bg-purple-950/70 p-4 rounded-2xl border border-purple-800/40">
                <div className="text-[11px] text-purple-300 font-medium flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" /> Server TTFB
                </div>
                <div className="text-2xl font-black font-mono text-white mt-1">
                  {isTesting ? '...' : `${testResult ? testResult.ttfb : selectedDc.baseLatencyMs + 22} ms`}
                </div>
                <div className="text-[10px] text-purple-300 mt-1">Fast Byte Response</div>
              </div>

              <div className="bg-purple-950/70 p-4 rounded-2xl border border-purple-800/40">
                <div className="text-[11px] text-purple-300 font-medium flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400" /> Jitter Variance
                </div>
                <div className="text-2xl font-black font-mono text-white mt-1">
                  {isTesting ? '...' : `${testResult ? testResult.jitter : '0.8'} ms`}
                </div>
                <div className="text-[10px] text-purple-300 mt-1">BGP Multi-Homed</div>
              </div>

              <div className="bg-purple-950/70 p-4 rounded-2xl border border-purple-800/40">
                <div className="text-[11px] text-purple-300 font-medium flex items-center gap-1">
                  <Shield className="w-3 h-3 text-indigo-400" /> Packet Loss
                </div>
                <div className="text-2xl font-black font-mono text-[#00B090] mt-1">
                  0.00%
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">Zero Degradation</div>
              </div>
            </div>

            {/* Infrastructure Highlights */}
            <div className="space-y-3 bg-purple-950/40 p-4 rounded-2xl border border-purple-800/30 text-xs">
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="w-4 h-4 text-[#00B090] shrink-0" />
                <span>Tier-4 redundant N+2 power feeds with 72-hour on-site diesel generators.</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="w-4 h-4 text-[#00B090] shrink-0" />
                <span>Cloudflare Magic Transit DDoS scrubbing built into each carrier edge.</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <CheckCircle className="w-4 h-4 text-[#00B090] shrink-0" />
                <span>Choice of datacenter location is 100% free with all XMart Orbit hosting plans.</span>
              </div>
            </div>

            {/* Datacenter Switch Note */}
            <div className="mt-5 pt-4 border-t border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-purple-300">
                You can switch your server location anytime with 1 click in your XMart Orbit control panel.
              </span>
              <a
                href="#pricing-section"
                className="font-bold text-white hover:text-purple-200 flex items-center gap-1 shrink-0"
              >
                Deploy on this Node →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
