import React, { useState } from 'react';
import { RefreshCw, CheckCircle2, Shield, ArrowRight, Clock, Server, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MigrationTool: React.FC = () => {
  const { showNotification } = useApp();
  const [platform, setPlatform] = useState('wordpress');
  const [currentDomain, setCurrentDomain] = useState('');
  const [currentHost, setCurrentHost] = useState('GoDaddy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitMigration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentDomain) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showNotification(`Migration request queued for ${currentDomain}! Assigned Ticket #XO-MIG-8492`);
    }, 700);
  };

  return (
    <section id="migration-tool" className="py-16 lg:py-24 bg-[#F4F0FF]/30 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Migration Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full">
              <RefreshCw className="w-3.5 h-3.5" /> 100% Free Website Migration
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B1340] tracking-tight leading-tight">
              Switch to XMart Orbit with Zero Downtime
            </h2>

            <p className="text-sm sm:text-base text-[#727586] leading-relaxed">
              Unhappy with your current host’s sluggish speeds, frequent downtime, or hidden renewal price spikes? Our senior migration engineers will transfer your websites, emails, and databases completely free of charge.
            </p>

            <div className="space-y-3.5 pt-2 text-sm text-[#1D1E20]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="font-bold">Zero Downtime Guarantee:</strong> Your existing site stays fully live and accepting orders while we copy data.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="font-bold">Unlimited Websites:</strong> Whether you have 1 blog or 50 client eCommerce stores, we migrate all of them.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="font-bold">Completed in Under 24 Hours:</strong> Most migrations are completed and verified within 2 to 4 hours.
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#673DE6]" /> Avg. Transfer Time: 2.4 hrs
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-[#00B090]" /> 100% Data Integrity
              </span>
            </div>
          </div>

          {/* Right Column: Migration Request Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-purple-950/5">
              
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B1340]">Migration Request Received!</h3>
                  <p className="text-xs sm:text-sm text-[#727586] max-w-md mx-auto">
                    Our migration team has queued <strong>{currentDomain}</strong>. A migration specialist will reach out to verify DNS cutover with zero downtime.
                  </p>
                  <div className="p-3 bg-purple-50 text-[#673DE6] rounded-xl text-xs font-mono font-bold max-w-xs mx-auto">
                    Tracking Ticket: #XO-MIG-8492
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setCurrentDomain('');
                    }}
                    className="text-xs font-bold text-[#673DE6] hover:underline cursor-pointer"
                  >
                    Submit Another Website Migration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitMigration} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-[#1B1340]">Start Free Migration</h3>
                    <span className="text-[11px] font-bold text-[#00B090] bg-emerald-50 px-2 py-0.5 rounded">
                      Zero Cost
                    </span>
                  </div>

                  {/* Step 1: Select CMS */}
                  <div>
                    <label className="block text-xs font-bold text-[#1D1E20] mb-1.5">
                      Select Your Website Type:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'wordpress', label: 'WordPress' },
                        { id: 'cpanel', label: 'cPanel Backup' },
                        { id: 'other', label: 'Custom / Other' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPlatform(item.id)}
                          className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                            platform === item.id
                              ? 'border-[#673DE6] bg-[#F4F0FF] text-[#673DE6]'
                              : 'border-slate-200 text-slate-700 hover:border-purple-200'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Current Host */}
                  <div>
                    <label className="block text-xs font-bold text-[#1D1E20] mb-1.5">
                      Current Hosting Provider:
                    </label>
                    <select
                      value={currentHost}
                      onChange={(e) => setCurrentHost(e.target.value)}
                      className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                    >
                      <option value="GoDaddy">GoDaddy</option>
                      <option value="Bluehost">Bluehost</option>
                      <option value="HostGator">HostGator</option>
                      <option value="SiteGround">SiteGround</option>
                      <option value="Namecheap">Namecheap</option>
                      <option value="DreamHost">DreamHost</option>
                      <option value="Other">Other Provider</option>
                    </select>
                  </div>

                  {/* Step 3: Domain Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#1D1E20] mb-1.5">
                      Website Domain to Migrate:
                    </label>
                    <input
                      type="text"
                      required
                      value={currentDomain}
                      onChange={(e) => setCurrentDomain(e.target.value)}
                      placeholder="e.g., myshop.com"
                      className="w-full text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                    />
                  </div>

                  <p className="text-[11px] text-[#727586] leading-relaxed">
                    By submitting, your request is assigned to XMart Orbit’s white-glove migration engineering team. No password is sent in plain text.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Queuing Migration...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Migration</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
