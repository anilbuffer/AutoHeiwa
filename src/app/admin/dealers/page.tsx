import AdminLayout from "@/components/layout/AdminLayout";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdminDealers() {
  const dealers = [
    { id: 1, name: "Auckland Auto Group", opportunities: 12 },
    { id: 2, name: "Hamilton Motors", opportunities: 8 },
    { id: 3, name: "Christchurch Cars", opportunities: 14 },
  ];

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dealers</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage demo dealer profiles and view their buying intelligence.</p>
        </div>

        {/* Dealers Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-4 font-medium">Dealer</th>
                  <th className="px-6 py-4 font-medium">Opportunities</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {dealers.map((d) => (
                  <tr key={d.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{d.name}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{d.opportunities}</td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/dealers/${d.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                        View Profile <ArrowRight size={16} />
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
