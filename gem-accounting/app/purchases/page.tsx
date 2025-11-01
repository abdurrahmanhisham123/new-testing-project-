'use client';

import { Search, Plus, Sparkles, CheckCircle2, Clock, AlertCircle, Star } from 'lucide-react';

const purchases = [
  {
    id: 'PO-1284',
    supplier: 'Global Gem Suppliers',
    date: '2024-10-28',
    items: 'Emerald (100ct), Sapphire (75ct)',
    amount: '$185,500',
    status: 'delivered',
    paymentStatus: 'paid',
    rating: 5,
    aiReconciled: true,
  },
  {
    id: 'PO-1283',
    supplier: 'Premium Stone Co.',
    date: '2024-10-25',
    items: 'Ruby (60ct), Diamond (20ct)',
    amount: '$428,900',
    status: 'delivered',
    paymentStatus: 'paid',
    rating: 5,
    aiReconciled: true,
  },
  {
    id: 'PO-1282',
    supplier: 'Artisan Gems Ltd.',
    date: '2024-10-20',
    items: 'Topaz (200ct), Sapphire (50ct)',
    amount: '$143,400',
    status: 'in-transit',
    paymentStatus: 'pending',
    rating: 4,
    aiReconciled: false,
  },
  {
    id: 'PO-1281',
    supplier: 'Diamond Direct Inc.',
    date: '2024-10-18',
    items: 'Diamond (30ct)',
    amount: '$239,100',
    status: 'delivered',
    paymentStatus: 'pending',
    rating: 5,
    aiReconciled: true,
  },
  {
    id: 'PO-1280',
    supplier: 'Emerald Exporters',
    date: '2024-10-15',
    items: 'Emerald (150ct), Ruby (40ct)',
    amount: '$298,750',
    status: 'delivered',
    paymentStatus: 'paid',
    rating: 4,
    aiReconciled: true,
  },
];

const suppliers = [
  {
    name: 'Global Gem Suppliers',
    contact: 'John Smith',
    email: 'john@globalgems.com',
    totalOrders: 24,
    totalValue: '$2.4M',
    rating: 5,
  },
  {
    name: 'Premium Stone Co.',
    contact: 'Sarah Johnson',
    email: 'sarah@premiumstone.com',
    totalOrders: 18,
    totalValue: '$1.8M',
    rating: 5,
  },
  {
    name: 'Diamond Direct Inc.',
    contact: 'Michael Chen',
    email: 'michael@diamonddirect.com',
    totalOrders: 15,
    totalValue: '$1.5M',
    rating: 5,
  },
];

export default function PurchasesPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Purchases & Suppliers</h1>
          <p className="text-gray-600">Manage purchase orders and supplier relationships</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-shadow">
          <Plus className="w-5 h-5" />
          New Purchase Order
        </button>
      </div>

      {/* AI Reconciliation Status */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-emerald-50 rounded-lg border border-purple-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                AI Auto-Reconciliation Active
              </p>
              <p className="text-xs text-gray-600">
                Automatic matching of purchase orders with inventory and payments
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>4/5 orders reconciled</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Spent</p>
          <p className="text-2xl font-bold text-gray-900">$1.30M</p>
          <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Active Suppliers</p>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-xs text-gray-500 mt-1">Verified partners</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">In Transit</p>
          <p className="text-2xl font-bold text-amber-600">1</p>
          <p className="text-xs text-gray-500 mt-1">$143,400 pending</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Avg. Order Value</p>
          <p className="text-2xl font-bold text-gray-900">$259K</p>
          <p className="text-xs text-gray-500 mt-1">Per order</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Recent Purchases */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Purchase Orders</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900">Order</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900">Supplier</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900">Amount</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900">AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {purchases.map((purchase) => (
                    <tr key={purchase.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-medium text-sm text-gray-900">{purchase.id}</p>
                        <p className="text-xs text-gray-500">{purchase.date}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-gray-900">{purchase.supplier}</p>
                        <p className="text-xs text-gray-500">{purchase.items}</p>
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">{purchase.amount}</td>
                      <td className="px-4 py-3">
                        <div className="space-y-1">
                          {purchase.status === 'delivered' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Delivered
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              <Clock className="w-3 h-3 mr-1" />
                              In Transit
                            </span>
                          )}
                          {purchase.paymentStatus === 'paid' ? (
                            <span className="block text-xs text-emerald-600">Paid</span>
                          ) : (
                            <span className="block text-xs text-amber-600">Payment Pending</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {purchase.aiReconciled ? (
                          <span className="inline-flex items-center text-xs text-purple-600">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Done
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Suppliers */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Suppliers</h2>
          <div className="space-y-3">
            {suppliers.map((supplier, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{supplier.name}</p>
                    <p className="text-xs text-gray-500">{supplier.contact}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-gray-900">{supplier.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-2">{supplier.email}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">{supplier.totalOrders} orders</span>
                  <span className="font-semibold text-gray-900">{supplier.totalValue}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">
            View All Suppliers
          </button>
        </div>
      </div>
    </div>
  );
}
