import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { ArrowLeft, Sparkles, ChevronDown, Info } from "lucide-react";

export default function VehicleDetail() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Back Link */}
        <div>
          <Link href="/vehicles" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Vehicles
          </Link>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Toyota Aqua S</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">2019 • 58,200 km • Auction Grade 4.5</p>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gray-200 dark:bg-gray-800 rounded-xl aspect-[16/9] flex items-center justify-center border border-gray-200 dark:border-gray-700">
            <span className="text-gray-400">VEHICLE PHOTO</span>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> PRIORITY BUY
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Recommended Max Bid</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">NZ$20,500</p>
                  <p className="text-sm text-gray-500 mt-1">¥1,845,000</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-500">Estimated Retail</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">NZ$24,500</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Set Maximum Bid
            </button>
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
              Strong buying opportunity. This vehicle is priced below similar NZ listings and maintains a healthy estimated margin after import costs.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="space-y-6">
            {/* Vehicle Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Vehicle Details</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 font-medium">Make</p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">Toyota</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 font-medium">Model</p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">Aqua S</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 font-medium">Year</p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">2019</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 font-medium">KM</p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">58,200</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 font-medium">Auction</p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">4.5</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 font-medium">Auction Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-1">24 Sep 2026</p>
                </div>
              </div>
            </div>

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
              <p className="text-sm text-gray-500 mb-4">Similar vehicles currently listed in New Zealand.</p>
              
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

              <div className="mt-6 flex items-center gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800/50">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">78%</div>
                <div className="text-sm font-medium text-green-800 dark:text-green-300">
                  Better than 78% of similar listings
                </div>
              </div>
            </div>

            {/* Maximum Bid Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Your Maximum Buy Price</h2>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">NZ$20,500</p>
                  <p className="text-sm font-medium text-gray-500 mt-1">¥1,845,000</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  This is the recommended maximum bid based on estimated retail value and target margin.
                </p>
              </div>
              
              <details className="group">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Info size={16} /> How is this calculated?
                  </span>
                  <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-2 space-y-3 text-sm">
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
                  <div className="h-4"></div>
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
              </details>
            </div>
            
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
