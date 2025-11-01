'use client';

import { Search, Plus, Sparkles, TrendingUp, AlertCircle } from 'lucide-react';

const inventory = [
  {
    id: 1,
    name: 'Emerald',
    type: 'Precious Stone',
    quantity: 284,
    unit: 'carats',
    costPerUnit: '$1,507',
    totalValue: '$428,000',
    location: 'Vault A-12',
    status: 'optimal',
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    name: 'Ruby',
    type: 'Precious Stone',
    quantity: 157,
    unit: 'carats',
    costPerUnit: '$5,682',
    totalValue: '$892,000',
    location: 'Vault A-08',
    status: 'optimal',
    lastUpdated: '4 hours ago'
  },
  {
    id: 3,
    name: 'Sapphire',
    type: 'Precious Stone',
    quantity: 342,
    unit: 'carats',
    costPerUnit: '$1,503',
    totalValue: '$514,000',
    location: 'Vault B-15',
    status: 'optimal',
    lastUpdated: '1 day ago'
  },
  {
    id: 4,
    name: 'Diamond',
    type: 'Precious Stone',
    quantity: 89,
    unit: 'carats',
    costPerUnit: '$6,797',
    totalValue: '$604,921',
    location: 'Vault A-01',
    status: 'low',
    lastUpdated: '3 hours ago'
  },
  {
    id: 5,
    name: 'Topaz',
    type: 'Semi-Precious Stone',
    quantity: 523,
    unit: 'carats',
    costPerUnit: '$342',
    totalValue: '$178,866',
    location: 'Vault C-22',
    status: 'optimal',
    lastUpdated: '5 hours ago'
  },
];

export default function InventoryPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Management</h1>
          <p className="text-gray-600">Track and manage your gemstone inventory</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-shadow">
          <Plus className="w-5 h-5" />
          Add Gemstone
        </button>
      </div>

      {/* AI Valuation Status */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-emerald-50 rounded-lg border border-purple-100">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              AI-Powered Valuation Active
            </p>
            <p className="text-xs text-gray-600">
              Real-time market tracking and automatic valuation updates
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Items</p>
          <p className="text-2xl font-bold text-gray-900">1,395</p>
          <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +12% this month
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Value</p>
          <p className="text-2xl font-bold text-gray-900">$2.6M</p>
          <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +8% this month
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Low Stock Items</p>
          <p className="text-2xl font-bold text-gray-900">1</p>
          <p className="text-xs text-amber-600 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3 h-3" />
            Needs attention
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Avg. Value/Item</p>
          <p className="text-2xl font-bold text-gray-900">$1,863</p>
          <p className="text-xs text-gray-500 mt-1">Across all types</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search gemstones..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option>All Types</option>
          <option>Precious Stone</option>
          <option>Semi-Precious Stone</option>
        </select>
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option>All Status</option>
          <option>Optimal</option>
          <option>Low Stock</option>
        </select>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Gemstone</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Type</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Quantity</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Cost/Unit</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Total Value</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Location</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">Updated {item.lastUpdated}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.type}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.quantity}</p>
                      <p className="text-sm text-gray-500">{item.unit}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.costPerUnit}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{item.totalValue}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.location}</td>
                  <td className="px-6 py-4">
                    {item.status === 'optimal' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Optimal
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Low Stock
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
