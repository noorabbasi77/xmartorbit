import React, { useState } from 'react';
import { X, Headphones, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TicketModal: React.FC = () => {
  const { isTicketModalOpen, setIsTicketModalOpen, showNotification } = useApp();
  
  const [department, setDepartment] = useState('technical');
  const [priority, setPriority] = useState('medium');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isTicketModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showNotification(`Ticket created: #XO-SUP-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsTicketModalOpen(false)}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-[#1B1340] text-white p-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00B090] flex items-center justify-center font-bold text-xs text-white">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">Submit Technical Support Ticket</h3>
              <p className="text-[11px] text-purple-200">24/7/365 Direct Access to Infrastructure Engineers</p>
            </div>
          </div>

          <button
            onClick={() => setIsTicketModalOpen(false)}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#1B1340]">Ticket Dispatched to Tier-3 Support</h4>
            <p className="text-xs sm:text-sm text-[#727586] max-w-xs mx-auto">
              A systems engineer has been assigned. You will receive an initial response within our guaranteed 15-minute SLA.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSubject('');
                setMessage('');
                setIsTicketModalOpen(false);
              }}
              className="px-6 py-2.5 bg-[#673DE6] text-white text-xs font-bold rounded-xl"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#1D1E20] mb-1">
                  Department:
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                >
                  <option value="technical">Technical Support</option>
                  <option value="migration">Website Migration</option>
                  <option value="billing">Billing & Domains</option>
                  <option value="enterprise">Cloud & Dedicated SLA</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1D1E20] mb-1">
                  Priority Level:
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                >
                  <option value="low">Low (General Query)</option>
                  <option value="medium">Medium (Standard Request)</option>
                  <option value="high">High (Service Disruption)</option>
                  <option value="urgent">Critical (Production Outage)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1D1E20] mb-1">
                Subject:
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., DNS propagation or SSL configuration query"
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1D1E20] mb-1">
                Issue Description:
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please describe what you are experiencing, relevant error codes, or website URLs..."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Routing to Engineers...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Ticket</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
