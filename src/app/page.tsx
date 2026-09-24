import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="max-w-[1400px] mx-auto space-y-8">
        
        {/* Header Section */}
        <div>
          <h1 className="text-[28px] font-extrabold text-[#111827] mb-1">Good morning, David</h1>
          <p className="text-gray-500 text-sm font-medium">Find vehicles that match your buying profile.</p>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-[13px] font-bold text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
            Auckland Auto Group
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] flex flex-col justify-center transition-transform hover:-translate-y-1">
            <p className="text-[32px] font-extrabold text-[#111827] leading-tight">32</p>
            <p className="text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Opportunities</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] flex flex-col justify-center transition-transform hover:-translate-y-1">
            <p className="text-[32px] font-extrabold text-blue-600 leading-tight">06</p>
            <p className="text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Priority Buys</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] flex flex-col justify-center transition-transform hover:-translate-y-1">
            <p className="text-[32px] font-extrabold text-[#111827] leading-tight">NZ$18,450</p>
            <p className="text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Median Landed Cost</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] flex flex-col justify-center transition-transform hover:-translate-y-1">
            <p className="text-[32px] font-extrabold text-[#111827] leading-tight">31 days</p>
            <p className="text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Avg. Market Days</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          
          {/* Recommended Vehicles */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-[18px] font-extrabold text-[#111827]">Recommended Vehicles</h2>
              <Link href="/vehicles" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                View All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-5">
              {/* Vehicle Card 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] overflow-hidden flex flex-col sm:flex-row transition-shadow hover:shadow-md group cursor-pointer">
                <div className="w-full sm:w-1/3 h-52 sm:h-auto bg-[#f4f7f6] relative">
                  {/* Mock Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-blue-600 transition-colors">Toyota Aqua S</h3>
                    <p className="text-[13px] font-medium text-gray-500 mt-1">2019 • 58,200 km • Grade 4.5</p>
                    
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-5 mb-5 text-[13px]">
                      <div className="text-gray-500 font-medium">FOB</div>
                      <div className="font-bold text-right text-[#111827]">¥1,420,000</div>
                      <div className="text-gray-500 font-medium">Landed</div>
                      <div className="font-bold text-right text-[#111827]">NZ$19,000</div>
                      <div className="text-gray-500 font-medium">Retail</div>
                      <div className="font-bold text-right text-[#111827]">NZ$24,500</div>
                    </div>
                  </div>
                  
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Max Bid</div>
                      <div className="text-lg font-extrabold text-blue-600">NZ$20,500</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold bg-green-50 text-green-700 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Priority
                      </span>
                      <Link href="/vehicles/1" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                        Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vehicle Card 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] overflow-hidden flex flex-col sm:flex-row transition-shadow hover:shadow-md group cursor-pointer">
                <div className="w-full sm:w-1/3 h-52 sm:h-auto bg-[#f4f7f6] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-blue-600 transition-colors">Honda Fit Hybrid</h3>
                    <p className="text-[13px] font-medium text-gray-500 mt-1">2020 • 45,000 km • Grade 4.0</p>
                    
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-5 mb-5 text-[13px]">
                      <div className="text-gray-500 font-medium">FOB</div>
                      <div className="font-bold text-right text-[#111827]">¥1,350,000</div>
                      <div className="text-gray-500 font-medium">Landed</div>
                      <div className="font-bold text-right text-[#111827]">NZ$17,800</div>
                      <div className="text-gray-500 font-medium">Retail</div>
                      <div className="font-bold text-right text-[#111827]">NZ$22,000</div>
                    </div>
                  </div>
                  
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Max Bid</div>
                      <div className="text-lg font-extrabold text-blue-600">NZ$19,200</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold bg-yellow-50 text-yellow-700 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Consider
                      </span>
                      <Link href="/vehicles/2" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                        Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opportunity Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] p-7 sticky top-6">
              <h2 className="text-[18px] font-extrabold text-[#111827] mb-8">Opportunity Overview</h2>
              
              <div className="flex justify-center mb-10">
                {/* Minimalist donut chart placeholder */}
                <div className="relative w-36 h-36">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-sm">
                    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#f1f5f9" strokeWidth="18" />
                    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#eab308" strokeWidth="18" strokeDasharray="238.76" strokeDashoffset="110" />
                    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#22c55e" strokeWidth="18" strokeDasharray="238.76" strokeDashoffset="180" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-[28px] font-extrabold text-[#111827] leading-none">32</span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Total</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                    <span className="text-[13px] font-bold text-gray-600">Priority</span>
                  </div>
                  <span className="text-[15px] font-extrabold text-[#111827]">06</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <span className="text-[13px] font-bold text-gray-600">Consider</span>
                  </div>
                  <span className="text-[15px] font-extrabold text-[#111827]">14</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gray-200 shadow-sm"></div>
                    <span className="text-[13px] font-bold text-gray-600">Review</span>
                  </div>
                  <span className="text-[15px] font-extrabold text-[#111827]">12</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-lg transition-colors shadow-sm">
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
