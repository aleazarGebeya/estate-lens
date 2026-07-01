import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const MarketTrends = () => {
  const trends = [
    { label: 'Median Price', value: '$845k', change: '+12.4%', up: true },
    { label: 'Inventory', value: '1.2k', change: '-4.2%', up: false },
    { label: 'Days on Market', value: '24d', change: '-15%', up: false },
    { label: 'New Listings', value: '458', change: '+8.1%', up: true },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-2 uppercase tracking-widest text-xs">
                <TrendingUp className="w-4 h-4" /> Market Insights
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Real Estate Trends</h2>
              <p className="text-gray-500 mt-2">Real-time data for your local market.</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-600">
              Full Report <Info className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {trends.map((trend, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-3xl">
                <div className="text-xs text-gray-500 mb-1 font-bold uppercase">{trend.label}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{trend.value}</div>
                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  trend.up ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {trend.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {trend.change}
                </div>
              </div>
            ))}
          </div>

          <div className="h-48 w-full flex items-end gap-1.5 px-2">
            {[40, 65, 45, 80, 55, 90, 75, 60, 85, 95, 70, 88].map((height, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="flex-1 bg-blue-100 rounded-t-lg relative group"
              >
                <div className="absolute inset-x-0 bottom-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg h-[40%]" />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;