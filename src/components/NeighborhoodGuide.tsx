import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';
import { neighborhoods } from '../data/mockData';
import { motion } from 'framer-motion';

const NeighborhoodGuide = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neighborhood Guides</h2>
            <p className="text-gray-600">
              Get an insider's look at the best places to live.
            </p>
          </div>
          <button className="text-blue-600 font-bold hover:underline flex items-center gap-2">
            See all guides <MapPin className="w-4 h-4" />
          </button>
        </div>

        <div>
          {neighborhoods.map((neighborhood) => (
            <div key={neighborhood.id} className="relative h-[500px] rounded-[3rem] overflow-hidden group">
              <img 
                src={neighborhood.image} 
                alt={neighborhood.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <h3 className="text-4xl font-bold mb-4">{neighborhood.name}</h3>
                  <p className="text-lg text-gray-300 mb-8 max-w-xl">{neighborhood.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {[
                      { label: 'Safety', value: neighborhood.stats.safety },
                      { label: 'Schools', value: neighborhood.stats.schools },
                      { label: 'Transit', value: neighborhood.stats.transit },
                      { label: 'Vibe', value: neighborhood.stats.entertainment },
                    ].map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-gray-400 text-[10px] font-bold uppercase mb-2">
                          {stat.label}
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="flex-1 h-1 bg-white/20 rounded-full">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${stat.value}%` }}
                               transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                               className="h-full bg-blue-500"
                             />
                           </div>
                           <span className="text-xs font-bold">{stat.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodGuide;