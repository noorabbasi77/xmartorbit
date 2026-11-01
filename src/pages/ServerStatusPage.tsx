import React from 'react';
import {
  Activity,
  CheckCircle2,
  Server,
  Globe,
  Clock,
  Shield,
  ChevronRight,
  Wifi
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DATACENTERS } from '../data/hostingData';

const SERVICES = [
  { name: 'LiteSpeed Web Server Fleet', status: 'Operational', uptime: '100.00%' },
  { name: 'Global Anycast DNS Cluster', status: 'Operational', uptime: '100.00%' },
  { name: 'NVMe Storage Mesh (PCIe 5.0)', status: 'Operational', uptime: '100.00%' },
  { name: 'MySQL / MariaDB Cluster Nodes', status: 'Operational', uptime: '99.99%' },
  { name: 'Control Panel API & Staging Engine', status: 'Operational', uptime: '100.00%' },
  { name: 'Cloudflare Enterprise Scrubbing Edge', status: 'Operational', uptime: '100.00%' },
  { name: 'Business Webmail & IMAP Endpoints', status: 'Operational', uptime: '99.98%' },
  { name: 'Automated Snapshot Disaster Vaults', status: 'Operational', uptime: '100.00%' },
];

export const ServerStatusPage: React.FC = () => {
  const { navigateToPage } = useApp();

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Server Network Status</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00B090] uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All Systems Operational
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Real-Time Global Infrastructure Status
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Continuous uptime verification and live telemetry from 9 Tier-4 datacenter facilities across North America, Europe, Asia, and South America.
        </p>

        {/* 90-Day Uptime KPI Banner */}
        <div className="mt-8 max-w-3xl mx-auto p-5 bg-[#1B1340] text-white rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div>
            <div className="text-xs text-purple-200">Past 90 Days Overall Network Uptime:</div>
            <div className="text-3xl font-black font-mono text-[#00B090] mt-0.5">99.994%</div>
          </div>
          <div className="text-right text-xs text-purple-200">
            <div>Incident History: <strong className="text-white">0 Major Outages</strong></div>
            <div className="text-[11px] text-purple-300 mt-0.5">SLA Guaranteed: 99.9% Uptime</div>
          </div>
        </div>
      </section>

      {/* Datacenter Latency Status Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-sm text-[#1B1340]">Datacenter Node Health & Network Latency</h3>
            <span className="text-xs text-slate-500">Updated every 60 seconds</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 text-[#1D1E20]">
                  <th className="py-3 px-6 font-bold">Region & Location</th>
                  <th className="py-3 px-4 font-bold">Hardware Specification</th>
                  <th className="py-3 px-4 font-bold">Tier Standard</th>
                  <th className="py-3 px-4 font-bold">Avg. Ping</th>
                  <th className="py-3 px-6 font-bold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DATACENTERS.map((dc) => (
                  <tr key={dc.id} className="hover:bg-slate-50/60">
                    <td className="py-3.5 px-6 font-bold text-[#1B1340] flex items-center gap-2">
                      <Server className="w-4 h-4 text-[#673DE6]" />
                      <span>{dc.name}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">{dc.hardware}</td>
                    <td className="py-3.5 px-4 text-slate-700">{dc.tier}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-600">{dc.baseLatencyMs} ms</td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00B090] bg-emerald-50 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Operational
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Core Components Breakdown */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-black text-[#1B1340]">Core Service Components</h2>
            <p className="text-xs text-[#727586] mt-1">Status of individual services powering client web applications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((srv, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1B1340]">{srv.name}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[11px] text-[#00B090] font-semibold mt-1">{srv.status}</div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between">
                  <span>90-day uptime:</span>
                  <strong className="text-slate-700 font-mono">{srv.uptime}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
