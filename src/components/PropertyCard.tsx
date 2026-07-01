import React from 'react';
import { Bed, Bath, Square, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { Property } from '../types/property';
import { formatCurrency } from '../lib/utils';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard = ({ property, onViewDetails }: PropertyCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full shadow-sm text-gray-900">
            {property.status}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button 
            onClick={() => onViewDetails(property)}
            className="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 flex items-center gap-1 shadow-lg"
           >
            Quick View <ArrowUpRight className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-blue-600">
            {formatCurrency(property.price)}
          </span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          {property.location}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2 text-gray-600">
            <Bed className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Bath className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Square className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium">{property.sqft} ft²</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;