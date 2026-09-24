import AdminLayout from "@/components/layout/AdminLayout";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function AdminVehicles() {
  const vehicles = [
    { id: 1, name: "Toyota Aqua", dealer: "Auckland", score: 91, status: "Priority", color: "green" },
    { id: 2, name: "Honda Fit", dealer: "Hamilton", score: 87, status: "Priority", color: "green" },
    { id: 3, name: "Mazda Axela", dealer: "Auckland", score: 74, status: "Consider", color: "yellow" },
    { id: 4, name: "Nissan Note", dealer: "Christch.", score: 61, status: "Review", color: "gray" },
  ];

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Vehicles</h1>
          <p className="text-gray-500 dark:text-gray-400">All auction vehicles and opportunity intelligence.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {['Make', 'Model', 'Year', 'Score', 'Status'].map((filter) => (
            <div key={filter} className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors shadow-sm gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{filter}</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          ))}
        </div>

        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">38 vehicles</p>

        {/* Vehicles Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-4 font-medium">Vehicle</th>
                  <th className="px-6 py-4 font-medium">Dealer</th>
                  <th className="px-6 py-4 font-medium">Score</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {vehicles.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{v.name}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{v.dealer}</td>
                    <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{v.score}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        v.color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                        v.color === 'yellow' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          v.color === 'green' ? 'bg-green-500' : 
                          v.color === 'yellow' ? 'bg-yellow-500' : 
                          'bg-gray-500'
                        }`}></span> {v.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/vehicles/${v.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                        View <ArrowRight size={16} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
