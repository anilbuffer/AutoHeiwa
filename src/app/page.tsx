import AppLayout from "@/components/layout/AppLayout";
import { ArrowUpRight, ArrowDownRight, Users, Activity, CreditCard, DollarSign } from "lucide-react";

const stats = [
  { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up', icon: DollarSign },
  { name: 'Active Users', value: '2,350', change: '+180.1%', trend: 'up', icon: Users },
  { name: 'Sales', value: '+12,234', change: '+19%', trend: 'up', icon: CreditCard },
  { name: 'Active Now', value: '+573', change: '-2.4%', trend: 'down', icon: Activity },
];

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, here's what's happening today.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.name}</p>
                      <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 bg-secondary-50 dark:bg-secondary-900/50 rounded-full flex items-center justify-center text-secondary">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    {stat.trend === 'up' ? (
                      <ArrowUpRight size={16} className="text-emerald-500 mr-1" />
                    ) : (
                      <ArrowDownRight size={16} className="text-rose-500 mr-1" />
                    )}
                    <span className={stat.trend === 'up' ? 'text-emerald-500 font-medium' : 'text-rose-500 font-medium'}>
                      {stat.change}
                    </span>
                    <span className="text-gray-400 ml-2">vs last month</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart Area Mock */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700 p-6 min-h-[400px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
              <button className="text-sm text-secondary hover:text-secondary-600 font-medium">View Report</button>
            </div>
            <div className="w-full h-[300px] flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-gray-400 dark:text-gray-500">Chart Visualization Area</p>
            </div>
          </div>
          
          {/* Recent Activity Mock */}
          <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Sales</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
                      U{i}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">User {i}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">user{i}@example.com</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">+$299.00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
