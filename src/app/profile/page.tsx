import AppLayout from "@/components/layout/AppLayout";
import { Settings2, Building2 } from "lucide-react";

export default function MyProfile() {
  return (
    <AppLayout>
      <div className="max-w-[1000px] mx-auto space-y-8">
        
        <div>
          <h1 className="text-[28px] font-extrabold text-[#111827] mb-1">My Profile</h1>
          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
            <Building2 size={16} /> Auckland Auto Group
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] overflow-hidden">
          <div className="p-7 border-b border-gray-100 flex items-center justify-between bg-white">
            <h2 className="text-[18px] font-extrabold text-[#111827] flex items-center gap-2">
              <Settings2 size={20} className="text-blue-600" />
              Buying Preferences
            </h2>
            <button className="text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-colors">Edit Preferences</button>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
              
              <div>
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Makes</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-[#f8fafc] border border-gray-100 text-[#111827] rounded-lg text-[13px] font-bold shadow-sm">Toyota</span>
                  <span className="px-4 py-1.5 bg-[#f8fafc] border border-gray-100 text-[#111827] rounded-lg text-[13px] font-bold shadow-sm">Honda</span>
                  <span className="px-4 py-1.5 bg-[#f8fafc] border border-gray-100 text-[#111827] rounded-lg text-[13px] font-bold shadow-sm">Mazda</span>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Year</h3>
                <p className="text-lg font-extrabold text-[#111827]">2018 – 2022</p>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Maximum KM</h3>
                <p className="text-lg font-extrabold text-[#111827]">80,000</p>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Fuel</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-[#f8fafc] border border-gray-100 text-[#111827] rounded-lg text-[13px] font-bold shadow-sm">Hybrid</span>
                  <span className="px-4 py-1.5 bg-[#f8fafc] border border-gray-100 text-[#111827] rounded-lg text-[13px] font-bold shadow-sm">Petrol</span>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Target Retail</h3>
                <p className="text-lg font-extrabold text-[#111827]">NZ$18,000 – NZ$25,000</p>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Target Margin</h3>
                <p className="text-lg font-extrabold text-[#111827]">NZ$3,000+</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
