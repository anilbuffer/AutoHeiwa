import AdminLayout from "@/components/layout/AdminLayout";
import Link from "next/link";
import { ArrowLeft, Settings2 } from "lucide-react";

export default function AdminDealerProfile() {
  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Link */}
        <div>
          <Link href="/admin/dealers" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Dealers
          </Link>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Auckland Auto Group</h1>
          <p className="text-gray-500 dark:text-gray-400">Dealer Buying Profile</p>
        </div>

        {/* Dealer Profile Data */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Settings2 size={20} className="text-blue-600 dark:text-blue-400" />
              Buying Preferences
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Edit Profile</button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Preferred Makes</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Toyota</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Honda</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Mazda</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Models</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Aqua</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Prius</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Fit</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">C-HR</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Year Range</h3>
                <p className="text-base font-medium text-gray-900 dark:text-white">2018 – 2022</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Maximum KM</h3>
                <p className="text-base font-medium text-gray-900 dark:text-white">80,000</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Fuel</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Hybrid</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Petrol</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Target Retail</h3>
                <p className="text-base font-medium text-gray-900 dark:text-white">NZ$18,000 – NZ$25,000</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Target Margin</h3>
                <p className="text-base font-medium text-gray-900 dark:text-white">NZ$3,000+</p>
              </div>

            </div>
          </div>
        </div>

        {/* Current Opportunities */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Current Opportunities</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">12 matching vehicles</p>
          
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm font-medium text-gray-900 dark:text-white flex items-center gap-2 cursor-pointer hover:border-blue-500 transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Toyota Aqua
            </div>
            <div className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm font-medium text-gray-900 dark:text-white flex items-center gap-2 cursor-pointer hover:border-blue-500 transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Honda Fit
            </div>
            <div className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm font-medium text-gray-900 dark:text-white flex items-center gap-2 cursor-pointer hover:border-blue-500 transition-colors">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Toyota Prius
            </div>
            <Link href="/admin/vehicles" className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              View all 12 vehicles →
            </Link>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
