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
      fob: "$14,200", // roughly converting for display if needed or keeping FOB
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
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Vehicles</h1>
          <p className="text-gray-500 dark:text-gray-400">Find vehicles that match your buying profile.</p>
        </div>

        {/* Filters Desktop */}
        <div className="hidden md:flex bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm items-center gap-2">
          {['Make', 'Model', 'Year', 'KM', 'FOB', 'Score'].map((filter) => (
            <div key={filter} className="flex-1 flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{filter}</span>
              <ChevronDown size={16} className="text-gray-400" />
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
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
          <button className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">32 vehicles found</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Sort:</span>
            <span className="font-medium text-gray-900 dark:text-white flex items-center gap-1 cursor-pointer">Score <ChevronDown size={14} /></span>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div key={v.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{v.make} {v.model}</h3>
                  <p className="text-sm text-gray-500 mt-1">{v.year} • {v.km}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 text-sm mb-6 flex-1">
                  <div className="text-gray-500">Landed</div>
                  <div className="font-medium text-right text-gray-900 dark:text-gray-200">{v.landed}</div>
                  <div className="text-gray-500 font-medium text-blue-600 dark:text-blue-400">Max Bid</div>
                  <div className="font-bold text-right text-blue-600 dark:text-blue-400">{v.maxBid}</div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${v.color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${v.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></span> {v.status}
                  </span>
                  <Link href={`/vehicles/${v.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    View <ArrowRight size={16} />
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
