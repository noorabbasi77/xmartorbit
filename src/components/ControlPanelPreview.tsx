import React, { useState } from 'react';
import {
  LayoutDashboard,
  Globe,
  Lock,
  Database,
  FolderGit2,
  History,
  CheckCircle2,
  Zap,
  RefreshCw,
  HardDrive,
  Cpu,
  Layers,
  Shield,
  Play
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ControlPanelPreview: React.FC = () => {
  const { showNotification } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'wordpress' | 'security' | 'php' | 'backups'>('overview');
  
  // Interactive mock state within control panel
  const [forceHttps, setForceHttps] = useState(true);
  const [lsCacheEnabled, setLsCacheEnabled] = useState(true);
  const [phpVersion, setPhpVersion] = useState('8.3');
  const [isRestoring, setIsRestoring] = useState(false);

  const handlePurgeCache = () => {
    showNotification('LiteSpeed Server Cache purged successfully across all edge nodes!');
  };

  const handleCreateBackup = () => {
    showNotification('Instant snapshot backup created: snapshot-2026-11-01.tar.gz');
  };

  const handleRestoreYesterday = () => {
    setIsRestoring(true);
    setTimeout(() => {
      setIsRestoring(false);
      showNotification('Website and MySQL database restored successfully from yesterday 03:00 AM backup!');
    }, 800);
  };

  return (
    <section id="control-panel" className="py-16 lg:py-24 bg-[#F4F0FF]/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <LayoutDashboard className="w-3.5 h-3.5" /> Next-Gen Control Panel
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1340] tracking-tight">
            Managing Your Websites Has Never Been Simpler
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#727586] leading-relaxed">
            Forget slow and complicated legacy cPanel. XMart Orbit’s custom-engineered panel is modern, blazing-fast, and designed for both beginners and experienced developers.
          </p>
        </div>

        {/* Interactive Mockup Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-purple-950/10 overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Panel Bar */}
          <div className="bg-[#1B1340] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-purple-900/60">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#673DE6] flex items-center justify-center font-bold text-xs text-white">
                XO
              </div>
              <div>
                <span className="text-xs font-bold tracking-wide">XMart Orbit Panel</span>
                <span className="text-slate-400 text-xs ml-2">/ mydomain.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                LiteSpeed Active
              </span>
              <button
                onClick={handlePurgeCache}
                className="px-2.5 py-1 bg-purple-900 hover:bg-purple-800 text-purple-200 hover:text-white rounded-lg transition-colors flex items-center gap-1 cursor-pointer text-[11px]"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Purge Cache</span>
              </button>
            </div>
          </div>

          {/* Control Panel Tab Navigation */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 flex overflow-x-auto gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 text-xs font-bold border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'overview'
                  ? 'border-[#673DE6] text-[#673DE6] bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard & Metrics</span>
            </button>

            <button
              onClick={() => setActiveTab('wordpress')}
              className={`py-3 px-3 text-xs font-bold border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'wordpress'
                  ? 'border-[#673DE6] text-[#673DE6] bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>WordPress Management</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`py-3 px-3 text-xs font-bold border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'security'
                  ? 'border-[#673DE6] text-[#673DE6] bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>SSL & Security Shield</span>
            </button>

            <button
              onClick={() => setActiveTab('php')}
              className={`py-3 px-3 text-xs font-bold border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'php'
                  ? 'border-[#673DE6] text-[#673DE6] bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>PHP & Databases</span>
            </button>

            <button
              onClick={() => setActiveTab('backups')}
              className={`py-3 px-3 text-xs font-bold border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === 'backups'
                  ? 'border-[#673DE6] text-[#673DE6] bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <History className="w-4 h-4" />
              <span>Backups & Staging</span>
            </button>
          </div>

          {/* Interactive Tab Panels */}
          <div className="p-6 sm:p-8 bg-white min-h-[380px]">
            
            {/* 1. OVERVIEW & METRICS */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Disk Space (NVMe)</span>
                      <HardDrive className="w-4 h-4 text-[#673DE6]" />
                    </div>
                    <div className="mt-2 text-xl font-bold text-[#1D1E20]">14.2 GB / 100 GB</div>
                    <div className="mt-2 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#673DE6] h-full w-[14%]" />
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1.5">85.8 GB free remaining</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Monthly Bandwidth</span>
                      <Zap className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="mt-2 text-xl font-bold text-[#1D1E20]">248.6 GB / Unlimited</div>
                    <div className="mt-2 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00B090] h-full w-[25%]" />
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1.5">Unmetered tier</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Inodes Allocation</span>
                      <Layers className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div className="mt-2 text-xl font-bold text-[#1D1E20]">84,120 / 600,000</div>
                    <div className="mt-2 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full w-[14%]" />
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1.5">14% used</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>PHP Memory Limit</span>
                      <Cpu className="w-4 h-4 text-cyan-500" />
                    </div>
                    <div className="mt-2 text-xl font-bold text-[#1D1E20]">512 MB</div>
                    <div className="mt-2 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full w-[28%]" />
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1.5">High WooCommerce tier</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F4F0FF]/60 border border-[#EDE5FF] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#673DE6] text-white flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1B1340]">LiteSpeed Cache Accelerator</div>
                      <p className="text-xs text-[#727586]">Server-level page and database caching is currently active.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePurgeCache}
                      className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl text-[#1D1E20] cursor-pointer"
                    >
                      Clear Edge Cache
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. WORDPRESS */}
            {activeTab === 'wordpress' && (
              <div className="space-y-5 animate-in fade-in">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#1D1E20]">WordPress Core 6.7.1</span>
                      <span className="text-[11px] font-bold text-[#00B090] bg-emerald-50 px-2 py-0.5 rounded">
                        Up to date
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">PHP 8.3 · LiteSpeed Enterprise · MySQL 8.0</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => showNotification('Redirecting to WordPress Admin single-sign-on...')}
                      className="px-4 py-2 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl cursor-pointer"
                    >
                      1-Click WP Admin Login
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1D1E20]">Staging Environment</span>
                      <button
                        onClick={() => showNotification('Created staging clone at staging.mydomain.com')}
                        className="text-xs font-bold text-[#673DE6] hover:underline"
                      >
                        Create Clone
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Safely test new plugins, theme updates, or custom code before pushing to production.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1D1E20]">Automatic Core & Plugin Updates</span>
                      <input
                        type="checkbox"
                        checked={true}
                        readOnly
                        aria-label="Automatic Core and Plugin Updates Enabled"
                        className="w-4 h-4 text-[#673DE6] rounded cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Nightly security patches applied with automatic rollback if errors are detected.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SECURITY */}
            {activeTab === 'security' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-900">Let’s Encrypt Wildcard SSL Active</div>
                      <div className="text-[11px] text-emerald-700">Auto-renews in 78 days · 256-bit ECDSA encryption</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-800">Installed</span>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#1D1E20]">Force HTTPS Strict Redirection</div>
                    <p className="text-xs text-slate-500 mt-0.5">Automatically routes all HTTP traffic to HTTPS via 301 header.</p>
                  </div>
                  <button
                    onClick={() => {
                      setForceHttps(!forceHttps);
                      showNotification(`Force HTTPS is now ${!forceHttps ? 'Enabled' : 'Disabled'}`);
                    }}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                      forceHttps ? 'bg-[#00B090] justify-end' : 'bg-slate-300 justify-start'
                    }`}
                  >
                    <div className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#1D1E20]">Monarx Real-Time Malware Defense</div>
                    <p className="text-xs text-slate-500 mt-0.5">Continuous memory scanning blocks webshells, injection, and backdoors.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00B090] bg-emerald-50 px-2 py-0.5 rounded">
                    0 Threats Detected
                  </span>
                </div>
              </div>
            )}

            {/* 4. PHP & DATABASES */}
            {activeTab === 'php' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-[#1D1E20]">Select Active PHP Version</div>
                    <p className="text-xs text-slate-500 mt-0.5">Switch PHP version instantly with no server restart required.</p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {['8.1', '8.2', '8.3', '8.4'].map((ver) => (
                      <button
                        key={ver}
                        onClick={() => {
                          setPhpVersion(ver);
                          showNotification(`Switched PHP version to PHP ${ver}`);
                        }}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                          phpVersion === ver
                            ? 'bg-[#673DE6] text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        PHP {ver}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#1D1E20]">MySQL Database Management</div>
                    <p className="text-xs text-slate-500 mt-0.5">Access phpMyAdmin or manage users and privileges directly.</p>
                  </div>
                  <button
                    onClick={() => showNotification('Opening phpMyAdmin database manager in secure tab...')}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#1D1E20] text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Open phpMyAdmin
                  </button>
                </div>
              </div>
            )}

            {/* 5. BACKUPS & RESTORE */}
            {activeTab === 'backups' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 gap-3">
                  <div>
                    <div className="text-xs font-bold text-[#1D1E20]">Create On-Demand Snapshot</div>
                    <p className="text-xs text-slate-500 mt-0.5">Take an instant full backup of your files, email, and databases.</p>
                  </div>
                  <button
                    onClick={handleCreateBackup}
                    className="px-4 py-2 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Generate Snapshot
                  </button>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Recent Automatic Backups Available:
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
                    <div>
                      <strong className="text-[#1D1E20]">Daily Automated Snapshot #1</strong>
                      <div className="text-[11px] text-slate-400">Created: Yesterday at 03:00 AM (2.4 GB)</div>
                    </div>
                    <button
                      onClick={handleRestoreYesterday}
                      disabled={isRestoring}
                      className="px-3 py-1.5 text-xs font-bold text-[#673DE6] hover:bg-[#F4F0FF] rounded-lg border border-[#673DE6]/20 cursor-pointer disabled:opacity-50"
                    >
                      {isRestoring ? 'Restoring...' : '1-Click Restore'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-2 text-xs">
                    <div>
                      <strong className="text-[#1D1E20]">Weekly Full Archive #48</strong>
                      <div className="text-[11px] text-slate-400">Created: 7 days ago (2.3 GB)</div>
                    </div>
                    <button
                      onClick={() => showNotification('Weekly backup ready for direct download.')}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Download ZIP
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Card Footer */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#727586]">
              All features shown above are included standard with XMart Orbit Web & Cloud Hosting plans.
            </span>
            <a
              href="#pricing-section"
              className="font-bold text-[#673DE6] hover:text-[#2F1C6A] flex items-center gap-1 shrink-0"
            >
              Get Started with XMart Orbit Panel →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
