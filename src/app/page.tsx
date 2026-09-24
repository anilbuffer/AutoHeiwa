import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { ChevronRight, TrendingUp, Clock, AlertCircle, ArrowRight } from "lucide-react";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Good morning, David</h1>
          <p className="text-gray-500 dark:text-gray-400">Find vehicles that match your buying profile.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
            Auckland Auto Group
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">32</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Opportunities</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">06</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Priority Buys</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">NZ$18,450</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Median Landed Cost</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">31 days</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Avg. Market Days</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Recommended Vehicles */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recommended Vehicles</h2>
              <Link href="/vehicles" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                View All <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {/* Vehicle Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 h-48 sm:h-auto bg-gray-200 dark:bg-gray-700 relative">
                  {/* Mock Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Toyota Aqua S</h3>
                    <p className="text-sm text-gray-500 mt-1">2019 • 58,200 km • Grade 4.5</p>
                    
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4 mb-4 text-sm">
                      <div className="text-gray-500">FOB</div>
                      <div className="font-medium text-right text-gray-900 dark:text-gray-200">¥1,420,000</div>
                      <div className="text-gray-500">Landed</div>
                      <div className="font-medium text-right text-gray-900 dark:text-gray-200">NZ$19,000</div>
                      <div className="text-gray-500">Retail</div>
                      <div className="font-medium text-right text-gray-900 dark:text-gray-200">NZ$24,500</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Max Bid</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">NZ$20,500</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Priority Buy
                      </span>
                      <Link href="/vehicles/1" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                        View Details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vehicle Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 h-48 sm:h-auto bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Honda Fit Hybrid</h3>
                    <p className="text-sm text-gray-500 mt-1">2020 • 45,000 km • Grade 4.0</p>
                    
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4 mb-4 text-sm">
                      <div className="text-gray-500">FOB</div>
                      <div className="font-medium text-right text-gray-900 dark:text-gray-200">¥1,350,000</div>
                      <div className="text-gray-500">Landed</div>
                      <div className="font-medium text-right text-gray-900 dark:text-gray-200">NZ$17,800</div>
                      <div className="text-gray-500">Retail</div>
                      <div className="font-medium text-right text-gray-900 dark:text-gray-200">NZ$22,000</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Max Bid</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">NZ$19,200</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Consider
                      </span>
                      <Link href="/vehicles/2" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                        View Details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opportunity Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Opportunity Overview</h2>
              
              <div className="flex justify-center mb-8">
                {/* Minimalist donut chart placeholder */}
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E7EB" strokeWidth="20" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAB308" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="120" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22C55E" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="190" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">32</span>
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
                  <span className="text-sm font-bold text-gray-900 dark:text-white">06</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Consider</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">14</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Review</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">12</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  View All Opportunities
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
