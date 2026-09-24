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

  return (
    <div className="flex h-screen bg-gray-50/50 dark:bg-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex md:flex-col justify-between">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl leading-none">A</span>
              </div>
              <div>
                <span className="block text-sm font-bold text-gray-900 dark:text-white leading-tight">AUTOHEIWA</span>
                <span className="block text-xs font-semibold text-gray-500 tracking-wider">DEALER PORTAL</span>
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            <Link href="/" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'}`}>
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
            <Link href="/vehicles" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${pathname.includes('/vehicles') ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'}`}>
              <Car size={20} />
              Vehicles
            </Link>
            <Link href="/profile" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${pathname.includes('/profile') ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'}`}>
              <User size={20} />
              My Profile
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-1">
          <Link href="/help" className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white rounded-md font-medium transition-colors">
            <HelpCircle size={20} />
            Help
          </Link>
          <div className="flex items-center gap-3 px-3 py-2 mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <User size={16} />
            </div>
            Dealer
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <button className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white mr-2">
              <Menu size={24} />
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 font-medium">
              Dealer Portal <ChevronRight size={16} /> <span className="text-gray-900 dark:text-white">{getBreadcrumb()}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-900 border-transparent rounded-lg focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all w-48 text-sm"
              />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white dark:ring-gray-800"></span>
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200 dark:border-gray-700 cursor-pointer">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:block">
                Auckland Auto Group
              </div>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
