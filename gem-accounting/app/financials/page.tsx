'use client';

import { useState } from 'react';
import { Download, Sparkles, TrendingUp, TrendingDown, CheckCircle2, Calendar } from 'lucide-react';

const balanceSheetData = {
  assets: {
    current: [
      { name: 'Cash and Cash Equivalents', amount: 842500 },
      { name: 'Accounts Receivable', amount: 388250 },
      { name: 'Inventory', amount: 2438921 },
    ],
    nonCurrent: [
      { name: 'Property and Equipment', amount: 450000 },
      { name: 'Long-term Investments', amount: 320000 },
    ],
  },
  liabilities: {
    current: [
      { name: 'Accounts Payable', amount: 284320 },
      { name: 'Short-term Debt', amount: 150000 },
    ],
    nonCurrent: [
      { name: 'Long-term Debt', amount: 500000 },
    ],
  },
  equity: [
    { name: 'Common Stock', amount: 1000000 },
    { name: 'Retained Earnings', amount: 2505351 },
  ],
};

const incomeStatementData = {
  revenue: [
    { name: 'Gemstone Sales', amount: 3247500, change: 12.5 },
    { name: 'Consultation Services', amount: 142800, change: 8.2 },
  ],
  costOfGoodsSold: [
    { name: 'Inventory Purchases', amount: 1428900, change: 10.1 },
    { name: 'Direct Labor', amount: 245000, change: 5.3 },
  ],
  operatingExpenses: [
    { name: 'Marketing & Sales', amount: 184500, change: 15.2 },
    { name: 'Administrative', amount: 142000, change: 3.8 },
    { name: 'Rent & Utilities', amount: 84000, change: 2.1 },
  ],
};

export default function FinancialsPage() {
  const [activeTab, setActiveTab] = useState<'balance' | 'income'>('balance');

  const totalAssets =
    balanceSheetData.assets.current.reduce((sum, item) => sum + item.amount, 0) +
    balanceSheetData.assets.nonCurrent.reduce((sum, item) => sum + item.amount, 0);

  const totalLiabilities =
    balanceSheetData.liabilities.current.reduce((sum, item) => sum + item.amount, 0) +
    balanceSheetData.liabilities.nonCurrent.reduce((sum, item) => sum + item.amount, 0);

  const totalEquity = balanceSheetData.equity.reduce((sum, item) => sum + item.amount, 0);

  const totalRevenue = incomeStatementData.revenue.reduce((sum, item) => sum + item.amount, 0);
  const totalCOGS = incomeStatementData.costOfGoodsSold.reduce((sum, item) => sum + item.amount, 0);
  const totalOpEx = incomeStatementData.operatingExpenses.reduce((sum, item) => sum + item.amount, 0);
  const grossProfit = totalRevenue - totalCOGS;
  const operatingIncome = grossProfit - totalOpEx;
  const netIncome = operatingIncome;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Statements</h1>
          <p className="text-gray-600">View balance sheet and income statement</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
            <Calendar className="w-4 h-4 text-gray-600" />
            <select className="bg-transparent text-sm font-medium text-gray-900 focus:outline-none">
              <option>October 2024</option>
              <option>September 2024</option>
              <option>August 2024</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 text-gray-600" />
            Export PDF
          </button>
        </div>
      </div>

      {/* AI Balance Status */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-emerald-50 rounded-lg border border-purple-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                AI Auto-Balance Verified
              </p>
              <p className="text-xs text-gray-600">
                All accounts reconciled and balanced automatically
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Accuracy</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Assets</p>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalAssets)}</p>
          <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +8.5% vs last month
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Net Income</p>
          <p className="text-2xl font-bold text-emerald-600">{formatCurrency(netIncome)}</p>
          <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +12.3% vs last month
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Gross Margin</p>
          <p className="text-2xl font-bold text-gray-900">{((grossProfit / totalRevenue) * 100).toFixed(1)}%</p>
          <p className="text-xs text-gray-500 mt-1">Healthy margin</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Operating Margin</p>
          <p className="text-2xl font-bold text-gray-900">{((operatingIncome / totalRevenue) * 100).toFixed(1)}%</p>
          <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +2.1% vs last month
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('balance')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'balance'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Balance Sheet
            </button>
            <button
              onClick={() => setActiveTab('income')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'income'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Income Statement
            </button>
          </nav>
        </div>
      </div>

      {/* Balance Sheet */}
      {activeTab === 'balance' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Assets */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assets</h3>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Current Assets</h4>
              <div className="space-y-2">
                {balanceSheetData.assets.current.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(item.amount)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                  <span className="text-sm font-medium text-gray-900">Total Current Assets</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatCurrency(balanceSheetData.assets.current.reduce((sum, item) => sum + item.amount, 0))}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Non-Current Assets</h4>
              <div className="space-y-2">
                {balanceSheetData.assets.nonCurrent.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(item.amount)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                  <span className="text-sm font-medium text-gray-900">Total Non-Current Assets</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatCurrency(balanceSheetData.assets.nonCurrent.reduce((sum, item) => sum + item.amount, 0))}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-t-2 border-gray-900 mt-4 pt-4">
              <span className="text-base font-bold text-gray-900">Total Assets</span>
              <span className="text-base font-bold text-gray-900">{formatCurrency(totalAssets)}</span>
            </div>
          </div>

          {/* Liabilities & Equity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Liabilities & Equity</h3>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Current Liabilities</h4>
              <div className="space-y-2">
                {balanceSheetData.liabilities.current.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(item.amount)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                  <span className="text-sm font-medium text-gray-900">Total Current Liabilities</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatCurrency(balanceSheetData.liabilities.current.reduce((sum, item) => sum + item.amount, 0))}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Non-Current Liabilities</h4>
              <div className="space-y-2">
                {balanceSheetData.liabilities.nonCurrent.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(item.amount)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                  <span className="text-sm font-medium text-gray-900">Total Liabilities</span>
                  <span className="text-sm font-semibold text-gray-900">{formatCurrency(totalLiabilities)}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Equity</h4>
              <div className="space-y-2">
                {balanceSheetData.equity.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(item.amount)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                  <span className="text-sm font-medium text-gray-900">Total Equity</span>
                  <span className="text-sm font-semibold text-gray-900">{formatCurrency(totalEquity)}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-t-2 border-gray-900 mt-4 pt-4">
              <span className="text-base font-bold text-gray-900">Total Liabilities & Equity</span>
              <span className="text-base font-bold text-gray-900">{formatCurrency(totalLiabilities + totalEquity)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Income Statement */}
      {activeTab === 'income' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-3xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Income Statement</h3>

          {/* Revenue */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Revenue</h4>
            <div className="space-y-2">
              {incomeStatementData.revenue.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-xs text-emerald-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +{item.change}%
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(item.amount)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                <span className="text-sm font-semibold text-gray-900">Total Revenue</span>
                <span className="text-sm font-bold text-gray-900">{formatCurrency(totalRevenue)}</span>
              </div>
            </div>
          </div>

          {/* COGS */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Cost of Goods Sold</h4>
            <div className="space-y-2">
              {incomeStatementData.costOfGoodsSold.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">({formatCurrency(item.amount)})</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                <span className="text-sm font-semibold text-gray-900">Total COGS</span>
                <span className="text-sm font-bold text-gray-900">({formatCurrency(totalCOGS)})</span>
              </div>
            </div>
          </div>

          {/* Gross Profit */}
          <div className="flex justify-between items-center py-3 bg-emerald-50 px-4 rounded-lg mb-6">
            <span className="text-base font-bold text-gray-900">Gross Profit</span>
            <span className="text-base font-bold text-emerald-600">{formatCurrency(grossProfit)}</span>
          </div>

          {/* Operating Expenses */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Operating Expenses</h4>
            <div className="space-y-2">
              {incomeStatementData.operatingExpenses.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">{item.name}</span>
                  <span className="text-sm font-medium text-gray-900">({formatCurrency(item.amount)})</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-2">
                <span className="text-sm font-semibold text-gray-900">Total Operating Expenses</span>
                <span className="text-sm font-bold text-gray-900">({formatCurrency(totalOpEx)})</span>
              </div>
            </div>
          </div>

          {/* Net Income */}
          <div className="flex justify-between items-center py-4 bg-gradient-to-r from-emerald-500 to-purple-600 px-4 rounded-lg">
            <span className="text-lg font-bold text-white">Net Income</span>
            <span className="text-lg font-bold text-white">{formatCurrency(netIncome)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
