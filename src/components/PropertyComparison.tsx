import React from 'react';
import { Check, X, Scale } from 'lucide-react';
import { Property } from '../types/property';
import { formatCurrency } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyComparisonProps {
  properties: Property[];
  isOpen: boolean;
  onClose: () => void;
}

const PropertyComparison = ({ properties, isOpen, onClose }: PropertyComparisonProps) => {
  if (properties.length < 2) return null;

  const specs = [
    { label: 'Price', key: 'price', format: (v: number) => formatCurrency(v) },
    { label: 'Beds', key: 'beds' },
    { label: 'Baths', key: 'baths' },
    { label: 'Area', key: 'sqft', suffix: ' sqft' },
    { label: 'Type', key: 'type' },
    { label: 'Built', key: 'yearBuilt' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/90 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-xl text-blue-600">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Property Comparison</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 text-gray-400 font-medium w-1/4">Feature</th>
                    {properties.map(p => (
                      <th key={p.id} className="text-left py-4 px-6 w-1/4">
                        <img src={p.image} className="w-full aspect-video object-cover rounded-xl mb-3" />
                        <div className="font-bold text-gray-900">{p.title}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                      <td className="py-4 px-6 font-bold text-gray-500 text-sm uppercase tracking-wider">{spec.label}</td>
                      {properties.map(p => (
                        <td key={p.id} className="py-4 px-6 font-semibold text-gray-900">
                          {(spec as any).format ? (spec as any).format((p as any)[spec.key]) : (p as any)[spec.key]}
                          {spec.suffix && spec.suffix}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 px-6 font-bold text-gray-500 text-sm uppercase tracking-wider">Features</td>
                    {properties.map(p => (
                      <td key={p.id} className="py-4 px-6">
                        <div className="flex flex-wrap gap-1">
                          {p.features.slice(0, 3).map((f, fi) => (
                            <span key={fi} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">{f}</span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-gray-50 flex justify-end gap-4">
              <button onClick={onClose} className="px-8 py-3 rounded-xl font-bold text-gray-600 hover:text-gray-900">Close</button>
              <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-200">Contact Sales Team</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PropertyComparison;