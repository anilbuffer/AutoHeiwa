import AdminLayout from "@/components/layout/AdminLayout";
import Link from "next/link";
import { ArrowLeft, Sparkles, ChevronDown, Info } from "lucide-react";

export default function AdminVehicleDetail() {
  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Back Link */}
        <div>
          <Link href="/admin/vehicles" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Vehicles
          </Link>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Toyota Aqua S</h1>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Vehicle Information</h2>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-900 dark:text-white">2019</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">58,200 km</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">Grade 4.5</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white pt-2 border-t border-gray-100 dark:border-gray-700">FOB ¥1,420,000</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 flex flex-col justify-between border-t-4 border-t-green-500">
            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Opportunity</h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">Score: 91</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> PRIORITY BUY
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div>
                  <p className="text-sm font-medium text-gray-500">Est. Retail</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">NZ$24,500</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Max Bid</p>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-1">NZ$20,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50 p-6 flex gap-4">
          <div className="mt-1">
            <Sparkles className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              AI Recommendation
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              Strong buying opportunity for Auckland Auto Group. This vehicle is priced below similar NZ listings and maintains a healthy estimated margin after import costs.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="space-y-6">
            {/* Price vs KM Chart (Mock) */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Price vs Kilometres</h2>
              <div className="h-48 border-l border-b border-gray-300 dark:border-gray-600 relative mt-4 ml-6">
                <div className="absolute -left-8 bottom-0 text-xs text-gray-500">18k</div>
                <div className="absolute -left-8 bottom-1/4 text-xs text-gray-500">20k</div>
                <div className="absolute -left-8 bottom-2/4 text-xs text-gray-500">22k</div>
                <div className="absolute -left-8 bottom-full text-xs text-gray-500">25k</div>
                
                <div className="absolute bottom-[-20px] left-[10%] text-xs text-gray-500">40k</div>
                <div className="absolute bottom-[-20px] left-[40%] text-xs text-gray-500">50k</div>
                <div className="absolute bottom-[-20px] left-[70%] text-xs text-gray-500">60k</div>
                <div className="absolute bottom-[-20px] left-[95%] text-xs text-gray-500">70k</div>

                {/* Plot points */}
                <div className="absolute bottom-[80%] left-[60%] w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="absolute bottom-[50%] left-[20%] w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="absolute bottom-[50%] left-[90%] w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="absolute bottom-[10%] left-[30%] w-3 h-3 bg-gray-400 rounded-full"></div>
                
                {/* Target point */}
                <div className="absolute bottom-[25%] left-[65%] w-4 h-4 bg-blue-500 transform rotate-45"></div>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-400 rounded-full"></div> <span className="text-gray-600 dark:text-gray-400">NZ comparable</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 transform rotate-45"></div> <span className="text-gray-600 dark:text-gray-400">Heiwa vehicle</span></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Market Evidence */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Market Evidence</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-900/50 rounded-t-lg">
                    <tr>
                      <th className="px-4 py-3 font-medium rounded-tl-lg">Source</th>
                      <th className="px-4 py-3 font-medium">Year</th>
                      <th className="px-4 py-3 font-medium">KM</th>
                      <th className="px-4 py-3 font-medium">Price</th>
                      <th className="px-4 py-3 font-medium rounded-tr-lg">Days Listed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-200">Trade Me</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2019</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">61,000</td>
                      <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">$19,990</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">24</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-200">Turners</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2019</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">55,000</td>
                      <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">$21,500</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">18</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-200">AutoTrader</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">2020</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">48,000</td>
                      <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">$22,900</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Margin Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Margin Breakdown</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>FOB converted to NZD</span>
                  <span>$15,778</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Freight</span>
                  <span>$2,500</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Compliance</span>
                  <span>$1,200</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span>GST & Fees</span>
                  <span>$1,022</span>
                </div>
                <div className="flex justify-between font-medium text-gray-900 dark:text-gray-200 pt-1">
                  <span>Estimated Landed Cost</span>
                  <span>$20,500</span>
                </div>
                <div className="h-2"></div>
                <div className="flex justify-between font-medium text-gray-900 dark:text-gray-200">
                  <span>Estimated Retail</span>
                  <span>$24,500</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span>Target Margin</span>
                  <span>$3,000</span>
                </div>
                <div className="flex justify-between font-bold text-blue-600 dark:text-blue-400 pt-1 text-base">
                  <span>Recommended Max Bid</span>
                  <span>$20,500</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
