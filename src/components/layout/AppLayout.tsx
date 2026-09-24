"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Car, User, HelpCircle, Bell, Search, Menu, ChevronDown, ChevronRight } from 'lucide-react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getBreadcrumb = () => {
    if (pathname === '/') return 'Dashboard';
    if (pathname.includes('/vehicles')) return 'Vehicles';
    if (pathname.includes('/profile')) return 'My Profile';
    return 'Dashboard';
  };

  const getPageTitle = () => {
    if (pathname === '/') return 'Overview';
    if (pathname.includes('/vehicles')) return 'Vehicles';
    if (pathname.includes('/profile')) return 'My Profile';
    if (pathname.includes('/help')) return 'Help';
    return 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#111827] text-gray-300 hidden md:flex md:flex-col justify-between shrink-0">
        <div>
          <div className="h-[72px] flex items-center px-5 border-b border-gray-800">
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-white font-bold text-xl leading-none">A</span>
              </div>
              <div className="flex-1">
                <span className="block text-[14px] font-bold text-white tracking-wide leading-tight">AUTOHEIWA</span>
                <span className="block text-[10px] font-semibold text-gray-400 tracking-wider">DEALER PORTAL</span>
              </div>
              <button className="text-gray-400 hover:text-white shrink-0">
                <Menu size={20} />
              </button>
            </div>
          </div>
          
          <nav className="pt-4 pb-2 space-y-1">
            <Link href="/" className={`flex items-center gap-3 px-4 py-2.5 mx-3 rounded-lg text-sm font-medium transition-colors ${pathname === '/' ? 'bg-[#1f2937] text-white' : 'text-gray-400 hover:bg-[#1f2937]/50 hover:text-white'}`}>
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            
            <Link href="/vehicles" className={`flex items-center gap-3 px-4 py-2.5 mx-3 rounded-lg text-sm font-medium transition-colors ${pathname.includes('/vehicles') ? 'bg-[#1f2937] text-white' : 'text-gray-400 hover:bg-[#1f2937]/50 hover:text-white'}`}>
              <Car size={18} />
              Vehicles
            </Link>

            <Link href="/profile" className={`flex items-center gap-3 px-4 py-2.5 mx-3 rounded-lg text-sm font-medium transition-colors ${pathname.includes('/profile') ? 'bg-[#1f2937] text-white' : 'text-gray-400 hover:bg-[#1f2937]/50 hover:text-white'}`}>
              <User size={18} />
              My Profile
            </Link>
            
            <Link href="/help" className={`flex items-center gap-3 px-4 py-2.5 mx-3 rounded-lg text-sm font-medium transition-colors ${pathname.includes('/help') ? 'bg-[#1f2937] text-white' : 'text-gray-400 hover:bg-[#1f2937]/50 hover:text-white'}`}>
              <HelpCircle size={18} />
              Help
            </Link>
          </nav>
        </div>

        <div className="p-3 mb-4 mx-3 bg-[#1f2937] rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-700 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <User size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">Dealer</div>
              <div className="text-xs text-gray-400 mt-0.5">Auckland Auto Group</div>
            </div>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 sm:px-8 py-5 flex items-start justify-between shrink-0">
          <div>
            <div className="text-[13px] text-gray-500 flex items-center gap-2 font-medium mb-1">
              Dealer Portal <ChevronRight size={14} className="text-gray-400" /> <span className="text-gray-900">{getBreadcrumb()}</span>
            </div>
            <h1 className="text-[28px] font-extrabold text-[#111827] tracking-tight">{getPageTitle()}</h1>
          </div>
          
          <div className="flex items-center gap-4 mt-1">
            <div className="relative hidden sm:flex items-center">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-gray-400" />
              <input 
                type="text" 
                placeholder="Search vehicles, customers..." 
                className="pl-9 pr-12 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all w-[320px] text-[13px] placeholder:text-gray-400 font-medium"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <div className="flex items-center justify-center bg-gray-100 border border-gray-200 text-gray-500 rounded h-5 px-1.5 text-[11px] font-bold">
                  ⌘K
                </div>
              </div>
            </div>
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
              <Bell size={20} />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#f8fafc] p-6 sm:p-8">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
