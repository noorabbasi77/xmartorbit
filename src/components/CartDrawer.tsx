import React, { useState } from 'react';
import {
  X,
  Trash2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Lock,
  Tag
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DATACENTERS } from '../data/hostingData';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateBillingMonths,
    toggleAddon,
    updateDatacenter,
    formatPrice,
    clearCart,
    showNotification,
  } = useApp();

  const [promoCode, setPromoCode] = useState('');
  const [promoDiscountPercent, setPromoDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'XMARTPRO' || clean === 'HOSTING2026' || clean === 'ORBIT10') {
      setPromoDiscountPercent(10);
      setPromoApplied(true);
      showNotification('Promo code applied! You saved an extra 10%');
    } else {
      showNotification('Invalid coupon code. Try code "XMARTPRO" for 10% off.');
    }
  };

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => {
    const planTotal = item.pricePerMonth * item.billingMonths;
    const domainTotal = item.domainPrice || 0;
    const addonsTotal = item.addons.reduce((a, b) => a + b.price * item.billingMonths, 0);
    return acc + planTotal + domainTotal + addonsTotal;
  }, 0);

  const discountAmount = (subtotal * promoDiscountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleCompleteOrder = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#673DE6]" />
            <h3 className="font-bold text-base text-[#1B1340]">Your Shopping Cart</h3>
            <span className="text-xs bg-[#EDE5FF] text-[#673DE6] px-2 py-0.5 rounded-full font-bold">
              {cart.length}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {checkoutComplete ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#1B1340]">Order Confirmed!</h4>
              <p className="text-xs sm:text-sm text-[#727586] max-w-sm mx-auto">
                Thank you for choosing XMart Orbit Private Limited. Your cloud server is being provisioned instantly. Check your email for login credentials.
              </p>
              <div className="p-3 bg-purple-50 text-[#673DE6] rounded-xl text-xs font-mono font-bold max-w-xs mx-auto">
                Invoice ID: #XO-INV-99214
              </div>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  setIsCartOpen(false);
                }}
                className="px-6 py-2.5 bg-[#673DE6] text-white text-xs font-bold rounded-xl"
              >
                Return to Site
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#1B1340]">Your cart is currently empty</h4>
              <p className="text-xs text-[#727586] max-w-xs mx-auto">
                Explore our web hosting, cloud solutions, or domain registration deals.
              </p>
              <a
                href="#pricing-section"
                onClick={() => setIsCartOpen(false)}
                className="inline-flex px-5 py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl"
              >
                Browse Hosting Plans
              </a>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-4">
                {cart.map((item) => {
                  const itemTotal = item.pricePerMonth * item.billingMonths;
                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-bold text-[#1B1340]">{item.planName}</div>
                          <div className="text-[11px] text-[#727586] mt-0.5">
                            {formatPrice(item.pricePerMonth)} / month
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Billing Period Selector */}
                      <div className="pt-2">
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">
                          Billing Duration:
                        </label>
                        <div className="grid grid-cols-4 gap-1">
                          {([48, 24, 12, 1] as const).map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => updateBillingMonths(item.id, m)}
                              className={`py-1.5 px-2 text-[11px] font-bold rounded-lg border text-center transition-all ${
                                item.billingMonths === m
                                  ? 'border-[#673DE6] bg-[#EDE5FF] text-[#673DE6]'
                                  : 'border-slate-200 text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              {m} {m === 1 ? 'Mo' : 'Mos'}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Datacenter Location Dropdown */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">
                          Server Deployment Node:
                        </label>
                        <select
                          value={item.datacenterLocation}
                          onChange={(e) => updateDatacenter(item.id, e.target.value)}
                          className="w-full text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-2"
                        >
                          {DATACENTERS.map((dc) => (
                            <option key={dc.id} value={`${dc.name} (${dc.tier})`}>
                              {dc.name} · ~{dc.baseLatencyMs}ms
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Associated Domain */}
                      {item.domainName && (
                        <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-semibold text-[#1B1340]">{item.domainName}</span>
                            <div className="text-[10px] text-purple-700">Domain Registration (1 Year)</div>
                          </div>
                          <span className="font-bold text-[#673DE6]">
                            {item.domainPrice === 0 ? 'FREE' : formatPrice(item.domainPrice || 0)}
                          </span>
                        </div>
                      )}

                      {/* Add-ons for this plan */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400">
                          Recommended Add-ons:
                        </span>

                        <div className="flex items-center justify-between py-1">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={item.addons.some((a) => a.id === 'backup')}
                              onChange={() =>
                                toggleAddon(item.id, {
                                  id: 'backup',
                                  name: 'Automated Daily Backups',
                                  price: 1.49,
                                })
                              }
                              className="rounded text-[#673DE6]"
                            />
                            <span>Daily Backups ({formatPrice(1.49)}/mo)</span>
                          </label>
                        </div>

                        <div className="flex items-center justify-between py-1">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={item.addons.some((a) => a.id === 'ip')}
                              onChange={() =>
                                toggleAddon(item.id, {
                                  id: 'ip',
                                  name: 'Dedicated IPv4 Address',
                                  price: 2.99,
                                })
                              }
                              className="rounded text-[#673DE6]"
                            />
                            <span>Dedicated IPv4 ({formatPrice(2.99)}/mo)</span>
                          </label>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500">Plan Duration Cost ({item.billingMonths} mos):</span>
                        <strong className="text-sm font-black text-[#1B1340]">
                          {formatPrice(itemTotal)}
                        </strong>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Promo Coupon Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter coupon code (try XMARTPRO)"
                    className="w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20 uppercase font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <div className="text-xs text-[#00B090] font-bold flex items-center gap-1.5 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Coupon code XMARTPRO applied (-10% discount)</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && !checkoutComplete && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {promoDiscountPercent > 0 && (
                <div className="flex justify-between text-[#00B090] font-semibold">
                  <span>Coupon Discount ({promoDiscountPercent}%):</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500">
                <span>Free SSL & DDoS Shield:</span>
                <span className="text-[#00B090] font-bold">FREE</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-base font-black text-[#1B1340]">
                <span>Total Due Today:</span>
                <span className="text-xl text-[#673DE6]">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleCompleteOrder}
              disabled={isCheckingOut}
              className="w-full py-3.5 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>Provisioning Account...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Proceed to Instant Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B090]" />
              <span>256-Bit SSL Encrypted Checkout · 30-Day Money-Back Guarantee</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
