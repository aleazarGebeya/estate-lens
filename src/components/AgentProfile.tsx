import React from 'react';
import { Star, Phone, Mail } from 'lucide-react';
import { agents } from '../data/mockData';
import { motion } from 'framer-motion';

const AgentProfile = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Top Agents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Work with the industry's most dedicated professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agents.map((agent) => (
            <motion.div 
              key={agent.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6"
            >
              <div className="relative shrink-0">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full sm:w-48 h-64 sm:h-full object-cover rounded-2xl"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {agent.rating}
                </div>
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                    <div className="flex gap-2">
                       <button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
                        <Phone className="w-4 h-4 text-gray-600" />
                       </button>
                       <button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
                        <Mail className="w-4 h-4 text-gray-600" />
                       </button>
                    </div>
                  </div>
                  <p className="text-blue-600 text-sm font-semibold mb-4">{agent.role}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <div className="text-xl font-bold text-gray-900">{agent.listings}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Listings</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <div className="text-xl font-bold text-gray-900">98%</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Success</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors">View Profile</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;