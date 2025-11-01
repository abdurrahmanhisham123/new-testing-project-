'use client';

import { Search, Plus, Download, Sparkles, CheckCircle2, Clock, Send } from 'lucide-react';

const invoices = [
  {
    id: 'INV-2847',
    customer: 'Luxury Jewelers Ltd.',
    date: '2024-10-30',
    dueDate: '2024-11-29',
    items: 'Emerald (50ct), Ruby (25ct)',
    amount: '$142,250',
    status: 'paid',
    aiBalanced: true,
  },
  {
    id: 'INV-2846',
    customer: 'Diamond Palace Co.',
    date: '2024-10-28',
    dueDate: '2024-11-27',
    items: 'Diamond (15ct), Sapphire (30ct)',
    amount: '$198,500',
    status: 'pending',
    aiBalanced: true,
  },
  {
    id: 'INV-2845',
    customer: 'Royal Gem Traders',
    date: '2024-10-25',
    dueDate: '2024-11-24',
    items: 'Ruby (40ct), Topaz (100ct)',
    amount: '$262,000',
    status: 'paid',
    aiBalanced: true,
  },
  {
    id: 'INV-2844',
    customer: 'Elite Stones Inc.',
    date: '2024-10-22',
    dueDate: '2024-11-21',
    items: 'Emerald (35ct), Diamond (8ct)',
    amount: '$189,750',
    status: 'overdue',
    aiBalanced: false,
  },
  {
    id: 'INV-2843',
    customer: 'Precious Gems Gallery',
    date: '2024-10-20',
    dueDate: '2024-11-19',
    items: 'Sapphire (60ct), Topaz (80ct)',
    amount: '$118,640',
    status: 'paid',
    aiBalanced: true,
  },
];

export default function SalesPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales & Invoicing</h1>
          <p className="text-gray-600">Manage invoices and track sales</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-shadow">
          <Plus className="w-5 h-5" />
          Create Invoice
        </button>
      </div>

      {/* AI Auto-Balance Status */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-emerald-50 rounded-lg border border-purple-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                AI Auto-Balance Active
              </p>
              <p className="text-xs text-gray-600">
                Invoices automatically balanced and verified against inventory
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>4/5 invoices balanced</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900">$911,140</p>
          <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Paid Invoices</p>
          <p className="text-2xl font-bold text-emerald-600">3</p>
          <p className="text-xs text-gray-500 mt-1">$522,890 collected</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Pending</p>
          <p className="text-2xl font-bold text-amber-600">1</p>
          <p className="text-xs text-gray-500 mt-1">$198,500 expected</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Overdue</p>
          <p className="text-2xl font-bold text-red-600">1</p>
          <p className="text-xs text-gray-500 mt-1">$189,750 outstanding</p>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search invoices or customers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option>All Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="w-5 h-5 text-gray-600" />
          Export
        </button>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Invoice</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Customer</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Items</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Due Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">AI</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{invoice.id}</p>
                    <p className="text-sm text-gray-500">{invoice.date}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{invoice.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.items}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{invoice.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{invoice.dueDate}</td>
                  <td className="px-6 py-4">
                    {invoice.status === 'paid' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Paid
                      </span>
                    ) : invoice.status === 'pending' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <Clock className="w-3 h-3 mr-1" />
                        Overdue
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {invoice.aiBalanced ? (
                      <span className="inline-flex items-center text-xs text-purple-600">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Balanced
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">Manual</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                      View
                    </button>
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
