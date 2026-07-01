import React from 'react';
import { 
  X, Bed, Bath, Square, MapPin, Calendar, 
  Share2, Heart, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { Property } from '../types/property';
import { formatCurrency } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyDetailsProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetails = ({ property, isOpen, onClose }: PropertyDetailsProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-900 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-3/5 overflow-y-auto custom-scrollbar">
              <div className="relative aspect-video">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" /> Verified Listing
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h2>
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Bed, label: 'Beds', value: property.beds },
                    { icon: Bath, label: 'Baths', value: property.baths },
                    { icon: Square, label: 'Sqft', value: property.sqft },
                    { icon: Calendar, label: 'Built', value: property.yearBuilt },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center">
                      <item.icon className="w-5 h-5 text-gray-400 mb-1" />
                      <span className="text-lg font-bold text-gray-900">{item.value}</span>
                      <span className="text-xs text-gray-500">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description} This exquisite property offers a unique blend of modern architecture and natural beauty. 
                    Featuring high-end finishes and state-of-the-art appliances.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 bg-gray-50 p-8 border-l border-gray-100 flex flex-col">
              <div className="mb-8">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatCurrency(property.price)}
                </div>
                <div className="text-sm text-gray-500">
                  Estimated Mortgage: {formatCurrency(Math.round(property.price / 360))} / mo
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={property.agent.image} 
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-600/10"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{property.agent.name}</h4>
                    <p className="text-xs text-gray-500">{property.agent.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs font-semibold">{property.agent.rating} (120+ reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">Request a Tour</button>
                  <button className="w-full border border-gray-200 bg-white text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors">Contact Agent</button>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Virtual Tour Available</span>
                  <span className="text-green-600 font-semibold">Live Now</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 hover:bg-gray-50">
                    <Heart className="w-4 h-4" /> Save
                  </button>
                  <button className="flex-1 py-3 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 hover:bg-gray-50">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PropertyDetails;