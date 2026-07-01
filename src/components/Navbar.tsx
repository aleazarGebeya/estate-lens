import React, { useState } from 'react';
import { Search, Menu, X, Home, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Estatify
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Properties</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Neighborhoods</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Agents</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Market Trends</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-5 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">Log In</button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Get Started</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
          <a href="#" className="block text-base font-medium text-gray-900">Properties</a>
          <a href="#" className="block text-base font-medium text-gray-900">Neighborhoods</a>
          <a href="#" className="block text-base font-medium text-gray-900">Agents</a>
          <a href="#" className="block text-base font-medium text-gray-900">Market Trends</a>
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full py-3 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl">Log In</button>
            <button className="w-full py-3 text-sm font-medium text-white bg-blue-600 rounded-xl">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;