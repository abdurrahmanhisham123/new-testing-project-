'use client';

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  ShoppingBag,
  AlertCircle,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$847,392',
    change: '+12.5%',
    changeType: 'increase',
    icon: DollarSign,
  },
  {
    name: 'Inventory Value',
    value: '$2,438,921',
    change: '+3.2%',
    changeType: 'increase',
    icon: Package,
  },
  {
    name: 'Monthly Sales',
    value: '1,284',
    change: '+8.1%',
    changeType: 'increase',
    icon: ShoppingBag,
  },
  {
    name: 'Pending Reconciliations',
    value: '0',
    change: 'All Clear',
    changeType: 'neutral',
    icon: CheckCircle2,
  },
];

const recentActivity = [
  {
    action: 'Invoice #INV-2847 auto-balanced',
    time: '2 minutes ago',
    type: 'ai',
  },
  {
    action: 'Inventory valuation updated',
    time: '15 minutes ago',
    type: 'system',
  },
  {
    action: 'Payment reconciled - Supplier #SUP-442',
    time: '1 hour ago',
    type: 'ai',
  },
  {
    action: 'New gemstones added to inventory',
    time: '2 hours ago',
    type: 'manual',
  },
];

const inventoryHighlights = [
  { name: 'Emeralds', quantity: 284, value: '$428,000', status: 'optimal' },
  { name: 'Rubies', quantity: 157, value: '$892,000', status: 'optimal' },
  { name: 'Sapphires', quantity: 342, value: '$514,000', status: 'optimal' },
  { name: 'Diamonds', quantity: 89, value: '$604,921', status: 'low' },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your business overview.</p>
      </div>

      {/* AI Status Banner */}
      <div className="mb-8 p-4 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant is Active</h3>
              <p className="text-sm text-white/90">
                Auto-balancing accounts and monitoring transactions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <span className="text-sm">All systems operational</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-purple-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              {stat.changeType === 'increase' ? (
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              ) : stat.changeType === 'decrease' ? (
                <TrendingDown className="w-5 h-5 text-red-500" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <p
              className={`text-sm font-medium ${
                stat.changeType === 'increase'
                  ? 'text-emerald-600'
                  : stat.changeType === 'decrease'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'ai'
                    ? 'bg-purple-100'
                    : activity.type === 'system'
                    ? 'bg-emerald-100'
                    : 'bg-gray-100'
                }`}>
                  {activity.type === 'ai' ? (
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Highlights */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Highlights</h3>
          <div className="space-y-3">
            {inventoryHighlights.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.quantity} units</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{item.value}</p>
                  {item.status === 'low' && (
                    <div className="flex items-center gap-1 text-amber-600">
                      <AlertCircle className="w-3 h-3" />
                      <span className="text-xs">Low Stock</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
