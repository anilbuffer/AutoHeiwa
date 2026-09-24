import AppLayout from "@/components/layout/AppLayout";
import { Settings2, Building2 } from "lucide-react";

export default function MyProfile() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Profile</h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium">
            <Building2 size={18} /> Auckland Auto Group
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Settings2 size={20} className="text-blue-600 dark:text-blue-400" />
              Buying Preferences
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Edit</button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Makes</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Toyota</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Honda</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">Mazda</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Year</h3>
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

      </div>
    </AppLayout>
  );
}
