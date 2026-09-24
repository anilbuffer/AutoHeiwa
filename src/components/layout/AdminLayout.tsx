import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Car, Users, Settings, HelpCircle, Bell, Search, Menu, ChevronDown, ChevronRight } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getBreadcrumb = () => {
    if (pathname === '/admin') return 'Dashboard';
    if (pathname.includes('/admin/vehicles')) return 'Vehicles';
    if (pathname.includes('/admin/dealers')) return 'Dealers';
    if (pathname.includes('/admin/settings')) return 'Settings';
    return 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-gray-50/50 dark:bg-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 dark:bg-slate-950 border-r border-slate-800 hidden md:flex md:flex-col justify-between text-slate-300">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl leading-none">A</span>
              </div>
              <div>
                <span className="block text-sm font-bold text-white leading-tight">AUTOHEIWA</span>
                <span className="block text-xs font-semibold text-slate-400 tracking-wider">ADMIN PORTAL</span>
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            <Link href="/admin" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/admin' ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-slate-800 hover:text-white'}`}>
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
            <Link href="/admin/vehicles" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${pathname.includes('/admin/vehicles') ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Car size={20} />
              Vehicles
            </Link>
            <Link href="/admin/dealers" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${pathname.includes('/admin/dealers') ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Users size={20} />
              Dealers
            </Link>
            <Link href="/admin/settings" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${pathname.includes('/admin/settings') ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Settings size={20} />
              Settings
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 space-y-1">
          <Link href="/admin/help" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 hover:text-white rounded-md font-medium transition-colors">
            <HelpCircle size={20} />
            Help
          </Link>
          <div className="flex items-center gap-3 px-3 py-2 mt-2 text-sm font-medium text-white">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <Users size={16} />
            </div>
            Admin
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
              Admin Portal <ChevronRight size={16} /> <span className="text-gray-900 dark:text-white">{getBreadcrumb()}</span>
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
                Admin
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
