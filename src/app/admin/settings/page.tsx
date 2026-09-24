import AdminLayout from "@/components/layout/AdminLayout";
import { Calculator } from "lucide-react";

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400">Calculation Assumptions</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Global Variables</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Values used in maximum bid calculations across the platform.</p>
            </div>
          </div>
          
          <div className="p-0">
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              
              <div className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">FX Rate</p>
                  <p className="text-xs text-gray-500 mt-0.5">Base currency conversion</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">1 NZD = 90 JPY</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Freight</p>
                  <p className="text-xs text-gray-500 mt-0.5">Standard shipping and logistics</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">NZ$2,500</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Compliance</p>
                  <p className="text-xs text-gray-500 mt-0.5">NZ certification and compliance</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">NZ$1,200</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">GST</p>
                  <p className="text-xs text-gray-500 mt-0.5">Goods and Services Tax</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">15%</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Target Margin</p>
                  <p className="text-xs text-gray-500 mt-0.5">Default minimum dealer profit</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">NZ$3,000</p>
                </div>
              </div>

            </div>
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700 flex justify-end">
            <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Edit Assumptions
            </button>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
