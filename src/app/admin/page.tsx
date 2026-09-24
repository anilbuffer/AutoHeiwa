import AdminLayout from "@/components/layout/AdminLayout";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Platform overview</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Monitor vehicles, dealers and buying opportunities.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">38</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Total Vehicles</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">09</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Priority Buys</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">03</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Dealers</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Opportunities</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Opportunity Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Opportunity Overview</h2>
              
              <div className="flex justify-center mb-8">
                {/* Minimalist donut chart placeholder */}
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E7EB" strokeWidth="20" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAB308" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="130" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22C55E" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="190" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">38</span>
                    <span className="text-xs text-gray-500 font-medium">Total</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">09</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Consider</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Review</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">14</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Opportunities */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Opportunities</h2>
                <Link href="/admin/vehicles" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View All <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Toyota Aqua</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Priority
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-right">91</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Honda Fit</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Priority
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-right">87</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Mazda Axela</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Consider
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-right">74</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Nissan Note</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span> Review
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-right">61</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
