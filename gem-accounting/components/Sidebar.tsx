'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Receipt,
  FileText,
  Sparkles,
  Gem
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Sales & Invoicing', href: '/sales', icon: Receipt },
  { name: 'Purchases', href: '/purchases', icon: ShoppingCart },
  { name: 'Financial Statements', href: '/financials', icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-3 h-16 px-6 border-b border-gray-200">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Gem className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Gem Accounting</h1>
          <div className="flex items-center gap-1 text-xs text-purple-600">
            <Sparkles className="w-3 h-3" />
            <span>AI-Powered</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                    ${isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* AI Assistant Badge */}
      <div className="p-4 m-3 bg-gradient-to-br from-purple-50 to-emerald-50 rounded-lg border border-purple-100">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-xs font-semibold text-gray-900">AI Assistant Active</span>
        </div>
        <p className="text-xs text-gray-600">
          Auto-balancing and reconciliation enabled
        </p>
      </div>
    </div>
  );
}
