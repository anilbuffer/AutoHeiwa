"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Car, 
  User, 
  HelpCircle, 
  Bell, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  TrendingUp,
  Clock,
  Building2,
  SlidersHorizontal,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GLOBAL_SETTINGS } from '@/lib/data';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getBreadcrumbs = () => {
    if (pathname === '/') return [{ label: 'Dashboard', href: '/' }];
    if (pathname === '/vehicles') return [{ label: 'Auction Vehicles', href: '/vehicles' }];
    if (pathname.startsWith('/vehicles/')) return [
      { label: 'Auction Vehicles', href: '/vehicles' },
      { label: 'Vehicle Intelligence & Bid', href: pathname }
    ];
    if (pathname === '/profile') return [{ label: 'Dealer Profile & Criteria', href: '/profile' }];
    if (pathname === '/help') return [{ label: 'Knowledge Base & Concierge', href: '/help' }];
    return [{ label: 'Dashboard', href: '/' }];
  };

  const navItems = [
    { label: 'Overview', href: '/', icon: LayoutDashboard, badge: null },
    { label: 'Live Vehicles', href: '/vehicles', icon: Car, badge: '32 Lots' },
    { label: 'Buying Criteria', href: '/profile', icon: User, badge: null },
    { label: 'Concierge & Help', href: '/help', icon: HelpCircle, badge: null },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased overflow-hidden">
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-[270px] bg-[#0F172A] text-slate-300 flex flex-col justify-between shrink-0 border-r border-slate-800/80 transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div>
          {/* Brand Logo & Header */}
          <div className="h-[76px] flex items-center justify-between px-5 border-b border-slate-800/80 bg-[#0B1120]">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-950/40 group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-lg tracking-wider">和</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-black text-white tracking-wider leading-none">AUTOHEIWA</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-red-500/20 text-red-400 border border-red-500/30">NZ</span>
                </div>
                <span className="block text-[10px] font-semibold text-slate-400 tracking-widest mt-1">AUCTION INTELLIGENCE</span>
              </div>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-slate-400 hover:text-white p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Portal Switcher Banner */}
          <div className="p-3 mx-3 mt-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1.5 px-1">
              <span>PORTAL MODE</span>
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Dealer Active
              </span>
            </div>
            <Link 
              href="/admin" 
              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-700/60 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors group"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-blue-400" /> Switch to Admin Portal
              </span>
              <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Live JPY/NZD Rate Pill */}
          <div className="px-4 py-2 mx-3 mt-2 flex items-center justify-between bg-slate-900/60 rounded-lg border border-slate-800 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <TrendingUp size={12} className="text-emerald-400" />
              <span>¥ / NZ$:</span>
              <span className="font-bold text-white">{GLOBAL_SETTINGS.fxRateJpyNzd}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
              Live Feed
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 px-3 space-y-1">
            <div className="px-3 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Dealer Operations
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600/20 to-red-600/5 text-white border-l-4 border-red-500 font-bold shadow-sm'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-red-400' : 'text-slate-400'} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Tokyo Auction Feeds Status */}
          <div className="mx-3 mt-6 p-3 bg-slate-900/40 rounded-xl border border-slate-800/60 text-xs">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-slate-400" /> Auction Countdown
              </span>
              <span className="text-red-400 font-bold">02h 45m</span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">USS Tokyo</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 24,190 lots
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">USS Yokohama</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 18,650 lots
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* User / Dealership Footer */}
        <div className="p-3 m-3 bg-[#0B1120] rounded-xl border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
              DM
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-bold text-white truncate">David Miller</div>
              <div className="text-[11px] text-slate-400 truncate flex items-center gap-1">
                <Building2 size={11} /> Auckland Auto
              </div>
            </div>
          </div>
          <Link 
            href="/login" 
            title="Switch User / Logout"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <ExternalLink size={14} />
          </Link>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Bar */}
        <header className="h-[72px] bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.02)] z-20">
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <Menu size={20} />
            </button>
            <div className="min-w-0">
              <div className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">Dealer Portal</span>
                {getBreadcrumbs().map((b, idx) => (
                  <React.Fragment key={idx}>
                    <ChevronRight size={12} className="text-slate-400 shrink-0" />
                    <Link href={b.href} className="hover:text-slate-900 truncate">
                      {b.label}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
              <div className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 mt-0.5">
                Auckland Auto Group 
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 size={11} /> Commercial VIP Tier
                </span>
              </div>
            </div>
          </div>

          {/* Header Right Actions */}
          <div className="flex items-center gap-3">
            {/* Quick Search */}
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Toyota, Aqua, Hybrid, lot #..." 
                className="pl-9 pr-12 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all w-[280px] text-xs placeholder:text-slate-400 font-medium"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-white border border-slate-200 text-slate-400 rounded px-1.5 py-0.5 text-[10px] font-bold shadow-2xs">
                ⌘K
              </span>
            </div>

            {/* Switch to Admin Quick Pill */}
            <Link 
              href="/admin"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
            >
              <ShieldCheck size={14} className="text-blue-600" />
              <span>Admin View</span>
            </Link>

            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2.5 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 rounded-xl hover:bg-slate-50 bg-white"
              >
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white shadow-xs"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
                    <span className="text-xs font-bold text-slate-900">Auction Intelligence Alerts</span>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">3 New</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <p className="font-bold text-slate-800 flex items-center gap-1">
                        <Sparkles size={12} className="text-red-600" /> Priority Buy Identified
                      </p>
                      <p className="text-slate-600 mt-0.5 text-[11px]">2019 Toyota Aqua S at USS Tokyo (Lot #40822) has NZ$4,000 spread.</p>
                      <span className="text-[10px] text-slate-400 font-semibold mt-1 block">18 mins ago</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <p className="font-bold text-slate-800">FX Rate Improvement</p>
                      <p className="text-slate-600 mt-0.5 text-[11px]">JPY/NZD moved to 91.24. Landed costs lowered by ~NZ$180 per unit.</p>
                      <span className="text-[10px] text-slate-400 font-semibold mt-1 block">45 mins ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar */}
            <Link 
              href="/profile"
              className="flex items-center gap-2.5 pl-2 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold text-xs shadow-sm border border-slate-200">
                AAG
              </div>
            </Link>
          </div>
        </header>

        {/* Scrollable Page Canvas */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-4 sm:p-7 lg:p-9">
          <div className="max-w-[1520px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
