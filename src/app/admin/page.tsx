"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import Link from "next/link";
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Users, 
  Car, 
  Database, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  Layers, 
  DollarSign, 
  AlertCircle,
  ExternalLink,
  Sliders,
  Building2
} from "lucide-react";
import { VEHICLES, DEALERS, GLOBAL_SETTINGS } from "@/lib/data";

export default function AdminDashboard() {
  const [filterDealer, setFilterDealer] = useState<string>("All");

  const recentLots = VEHICLES.filter(v => {
    if (filterDealer === "All") return true;
    return v.dealer === filterDealer;
  });

  return (
    <AdminLayout>
      <div className="space-y-8 pb-16">
        
        {/* Admin Header Briefing */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1B2A4A]/10 text-[#1B2A4A] border border-[#1B2A4A]/20">
                Broker Command Operations
              </span>
              <span className="text-xs text-slate-400 font-medium">AutoHeiwa Enterprise Platform</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Platform & Dealer Operations
            </h1>
            <p className="text-slate-500 text-sm font-medium mt-0.5">
              Real-time monitoring of 48,000+ Japanese auction lots, dealer match algorithms, and FX landed pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-400 font-medium block text-[10px]">GLOBAL FX BASELINE</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 font-mono">
                1 NZD = {GLOBAL_SETTINGS.fxRateJpyNzd} JPY
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1 rounded">Synced</span>
              </span>
            </div>
            <Link 
              href="/admin/settings"
              className="px-4 py-2.5 bg-[#1B2A4A] hover:bg-[#0B1322] text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
            >
              <Sliders size={14} /> Adjust Assumptions
            </Link>
          </div>
        </div>

        {/* 4 Hero KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover-lift">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Live Scraped Lots</span>
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#1B2A4A] flex items-center justify-center font-bold text-xs">
                <Database size={16} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">48,250</span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">4 Feeds Online</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">USS Tokyo, Yokohama, CAA & HAA</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-white to-emerald-50/30 p-5 sm:p-6 rounded-2xl border border-emerald-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover-lift">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Priority Margin Flags</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                <Sparkles size={16} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-emerald-700 tracking-tight">09</span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-1.5 py-0.5 rounded">High Spread</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 font-medium">Spread exceeds NZ$3,500 target</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover-lift">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Dealerships</span>
              <div className="w-8 h-8 rounded-lg bg-[#1B2A4A]/10 text-[#1B2A4A] flex items-center justify-center font-bold text-xs">
                <Users size={16} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">03</span>
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">100% Active</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">Auckland, Hamilton & Christchurch</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover-lift">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Gross Dealer Margin</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <DollarSign size={16} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">NZ$284k</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">Projected total dealer profit pipeline</p>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Opportunity Distribution & Feed Health (1 Span) */}
          <div className="space-y-6">
            
            {/* Donut Chart Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-black text-slate-900 tracking-tight">
                  Opportunity Spread
                </h2>
                <span className="text-xs font-bold text-slate-400">Total 38 Qualified</span>
              </div>

              {/* Minimalist SVG Gauge */}
              <div className="flex justify-center my-6">
                <div className="relative w-36 h-36">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E2E8F0" strokeWidth="16" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="transparent" 
                      stroke="#10B981" 
                      strokeWidth="16" 
                      strokeDasharray="238.7" 
                      strokeDashoffset="180" 
                      strokeLinecap="round"
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="transparent" 
                      stroke="#F59E0B" 
                      strokeWidth="16" 
                      strokeDasharray="238.7" 
                      strokeDashoffset="115" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-black text-slate-900 leading-none">38</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Lots</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="font-bold text-slate-800">Priority Buys (Score 90+)</span>
                  </div>
                  <span className="font-black text-emerald-700">09</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="font-bold text-slate-800">Consider (Score 75-89)</span>
                  </div>
                  <span className="font-black text-amber-700">15</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span className="font-bold text-slate-600">Review / Moderate</span>
                  </div>
                  <span className="font-black text-slate-700">14</span>
                </div>
              </div>
            </div>

            {/* Dealership Pipeline Summary */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-slate-900">Dealer Allocation</h3>
                <Link href="/admin/dealers" className="text-xs font-bold text-[#B30D12] hover:underline">
                  View All →
                </Link>
              </div>

              <div className="space-y-3">
                {DEALERS.map((dealer) => (
                  <div key={dealer.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-slate-900">{dealer.name}</span>
                      <span className="text-[10px] font-bold text-[#1B2A4A] bg-[#1B2A4A]/10 px-2 py-0.5 rounded">
                        {dealer.tier}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500 mt-2 text-[11px]">
                      <span>{dealer.activeOpportunities} Active Matches</span>
                      <span className="font-bold text-emerald-600">{dealer.priorityBuys} Priority</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* High-Value Opportunities Table (2 Spans) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  Recent Auction Opportunities
                </h2>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                  {recentLots.length}
                </span>
              </div>

              {/* Filter by Dealer */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-400">Filter Dealer:</span>
                <select
                  value={filterDealer}
                  onChange={(e) => setFilterDealer(e.target.value)}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none cursor-pointer"
                >
                  <option value="All">All Dealerships</option>
                  {DEALERS.map(d => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Opportunities Table */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="px-5 py-3.5">Vehicle</th>
                      <th className="px-5 py-3.5">Matched Dealer</th>
                      <th className="px-5 py-3.5">FOB / Landed</th>
                      <th className="px-5 py-3.5">Max Bid</th>
                      <th className="px-5 py-3.5">AI Score</th>
                      <th className="px-5 py-3.5 text-right">Review</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {recentLots.map((v) => (
                      <tr key={v.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={v.image} 
                              alt={v.model} 
                              className="w-11 h-9 object-cover rounded-lg shrink-0 border border-slate-200" 
                            />
                            <div>
                              <div className="font-black text-slate-900">{v.year} {v.make} {v.model}</div>
                              <div className="text-[11px] text-slate-400">{v.auctionHouse} • Lot #{v.lotNumber}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 font-bold text-slate-800">
                          {v.dealer}
                        </td>
                        <td className="px-5 py-4">
                          <div className="font-mono text-slate-700">¥{(v.fobJpy).toLocaleString()}</div>
                          <div className="text-[11px] font-bold text-slate-900">NZ${(v.landedNzd).toLocaleString()} Landed</div>
                        </td>
                        <td className="px-5 py-4 font-black text-[#B30D12]">
                          NZ${(v.maxBidNzd).toLocaleString()}
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                            v.status === 'Priority' 
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}>
                            <Sparkles size={11} /> {v.score}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Link 
                            href={`/admin/vehicles/${v.id}`} 
                            className="px-3 py-1.5 bg-[#1B2A4A] hover:bg-[#0B1322] text-white rounded-lg text-xs font-bold inline-flex items-center gap-1"
                          >
                            Inspect <ArrowRight size={12} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-medium">Displaying recent active opportunity lots</span>
              <Link 
                href="/admin/vehicles"
                className="text-xs font-bold text-[#B30D12] hover:text-[#940B0F] flex items-center gap-1"
              >
                View Complete Auction Database <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}
