import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, ArrowRight, Server, Globe, Key, FileText, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, authModalTab, setAuthModalTab, showNotification } = useApp();
  
  const [email, setEmail] = useState('demo@xmartorbit.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    showNotification('Welcome back! Successfully logged into XMart Orbit Client Area.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsAuthModalOpen(false)}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-[#1B1340] text-white p-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#673DE6] flex items-center justify-center font-black text-xs text-white">
              XO
            </div>
            <div>
              <h3 className="font-bold text-base">XMart Orbit Client Portal</h3>
              <p className="text-[11px] text-purple-200">Secure SSO & Infrastructure Management</p>
            </div>
          </div>

          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers if not logged in */}
        {!isLoggedIn ? (
          <div>
            <div className="flex border-b border-slate-200 text-xs font-bold">
              <button
                onClick={() => setAuthModalTab('login')}
                className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-colors ${
                  authModalTab === 'login'
                    ? 'border-[#673DE6] text-[#673DE6] bg-slate-50'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setAuthModalTab('register')}
                className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-colors ${
                  authModalTab === 'register'
                    ? 'border-[#673DE6] text-[#673DE6] bg-slate-50'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Create Account
              </button>
              <button
                onClick={() => setAuthModalTab('clientArea')}
                className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-colors ${
                  authModalTab === 'clientArea'
                    ? 'border-[#673DE6] text-[#673DE6] bg-slate-50'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Client Area Demo
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1D1E20] mb-1">
                  Email Address:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-[#1D1E20]">
                    Password:
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); showNotification('Password reset link sent to ' + email); }} className="text-[11px] text-[#673DE6] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{authModalTab === 'register' ? 'Register Account' : 'Sign In to Client Area'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400 pt-2">
                Protected by XMart Orbit Two-Factor Authentication (2FA) & IP Anomaly Guard.
              </div>
            </form>
          </div>
        ) : (
          /* Logged In Client Area Portal View */
          <div className="p-6 space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] text-slate-400">Logged in as:</span>
                <div className="text-xs font-bold text-[#1D1E20]">{email}</div>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-rose-600 hover:underline font-semibold"
              >
                Sign Out
              </button>
            </div>

            {/* Client Area Stats */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                <div className="text-lg font-black text-[#673DE6]">2</div>
                <div className="text-[10px] font-semibold text-slate-600">Active Services</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="text-lg font-black text-[#00B090]">3</div>
                <div className="text-[10px] font-semibold text-slate-600">Domains</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-lg font-black text-slate-700">0</div>
                <div className="text-[10px] font-semibold text-slate-600">Due Invoices</div>
              </div>
            </div>

            {/* Active Services List */}
            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                Your Active Hosting:
              </div>

              <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#1D1E20]">Premium Web Hosting (Frankfurt)</div>
                  <div className="text-[11px] text-slate-400">mydomain.com · Renews 2028-11-01</div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#1D1E20]">KVM 2 VPS Node (Singapore)</div>
                  <div className="text-[11px] text-slate-400">103.24.112.44 · Renews 2027-05-15</div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsAuthModalOpen(false);
                showNotification('Redirected to hosting control panel');
              }}
              className="w-full py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl"
            >
              Open XMart Orbit Control Panel
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
