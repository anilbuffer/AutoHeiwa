import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function Vehicles() {
  const vehicles = [
    {
      id: 1,
      make: "Toyota",
      model: "Aqua S",
      year: 2019,
      km: "58k km",
      fob: "$14,200", 
      landed: "$19,000",
      maxBid: "$20,500",
      status: "Priority",
      color: "green"
    },
    {
      id: 2,
      make: "Honda",
      model: "Fit",
      year: 2020,
      km: "45k km",
      fob: "$13,500",
      landed: "$17,800",
      maxBid: "$19,200",
      status: "Consider",
      color: "yellow"
    },
    {
      id: 3,
      make: "Toyota",
      model: "C-HR",
      year: 2019,
      km: "62k km",
      fob: "$15,800",
      landed: "$21,200",
      maxBid: "$22,400",
      status: "Priority",
      color: "green"
    }
  ];

  return (
    <AppLayout>
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        <div>
          <h1 className="text-[28px] font-extrabold text-[#111827] mb-1">Vehicles</h1>
          <p className="text-gray-500 text-sm font-medium">Find vehicles that match your buying profile.</p>
        </div>

        {/* Filters Desktop */}
        <div className="hidden md:flex bg-[#1f2937] p-1.5 rounded-xl shadow-sm items-center gap-1 mt-4">
          {['Make', 'Model', 'Year', 'KM', 'FOB', 'Score'].map((filter) => (
            <div key={filter} className="flex-1 flex items-center justify-between px-4 py-2.5 hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors group">
              <span className="text-[13px] font-bold text-gray-200 group-hover:text-white transition-colors">{filter}</span>
              <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-300" />
            </div>
          ))}
        </div>

        {/* Filters Mobile */}
        <div className="flex md:hidden gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-[13px] font-semibold text-gray-500">32 vehicles found</p>
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-gray-400">Sort:</span>
            <span className="font-semibold text-gray-700 flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors">Score <ChevronDown size={14} /></span>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {vehicles.map((v) => (
            <div key={v.id} className="bg-[#1e2430] rounded-xl overflow-hidden flex flex-col shadow-sm">
              <div className="h-52 bg-[#333b48] relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400/50">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white tracking-wide">{v.make} {v.model}</h3>
                  <p className="text-[13px] font-medium text-gray-400 mt-1">{v.year} • {v.km}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 text-[13px] mb-8 flex-1">
                  <div className="text-gray-400 font-medium">Landed</div>
                  <div className="font-bold text-right text-white">{v.landed}</div>
                  <div className="text-blue-500 font-bold">Max Bid</div>
                  <div className="font-bold text-right text-blue-500">{v.maxBid}</div>
                </div>
                
                <div className="pt-5 border-t border-gray-700/50 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-2 text-[11px] uppercase font-bold tracking-wider ${v.color === 'green' ? 'text-green-500' : 'text-yellow-500'}`}>
                    <span className={`w-2 h-2 rounded-full ${v.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></span> {v.status}
                  </span>
                  <Link href={`/vehicles/${v.id}`} className="text-[13px] font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">
                    View <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AppLayout>
  );
}
