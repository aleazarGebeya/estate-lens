import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/mockData';
import { Property } from '../types/property';
import PropertyDetails from './PropertyDetails';
import { Filter, ChevronDown } from 'lucide-react';

const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Listings</h2>
            <p className="text-gray-600">Handpicked properties just for you in your area.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold flex items-center gap-2 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </button>
            <button className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold flex items-center gap-2 hover:bg-gray-50">
              Sort By: Recommended <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onViewDetails={setSelectedProperty}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-10 py-4 rounded-full border-2 border-gray-200 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all">
            View All Properties
          </button>
        </div>
      </div>

      {selectedProperty && (
        <PropertyDetails 
          property={selectedProperty} 
          isOpen={!!selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </section>
  );
};

export default PropertyGrid;