import React from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25aacbe0-6bc8-4c1d-aca0-eb20154c1647/luxury-villa-1-e1ba2d6e-1770385466232.webp"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            Premium Real Estate Experience
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Find Your Dream <br /> Home in <span className="text-blue-400 italic font-serif">Style.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-lg">
            Discover a curated collection of premium properties in the world's most desirable locations.
          </p>

          <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl">
            <div className="flex items-center gap-2 flex-1 px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 py-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search city or ZIP..."
                className="w-full bg-transparent border-none focus:ring-0 text-sm py-2"
              />
            </div>
            <div className="flex items-center gap-2 px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-100 py-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <select className="bg-transparent border-none focus:ring-0 text-sm py-2 appearance-none pr-8">
                <option>All Types</option>
                <option>Villa</option>
                <option>Apartment</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full w-full md:w-auto hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Search Properties
            </button>
          </div>

          <div className="mt-8 flex items-center gap-8 text-white">
            <div>
              <div className="text-2xl font-bold">12k+</div>
              <div className="text-xs text-gray-300">Properties</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-2xl font-bold">450+</div>
              <div className="text-xs text-gray-300">Agents</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-xs text-gray-300">Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;