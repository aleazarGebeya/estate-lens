import React from 'react';
import { Home, Mail, Phone, Instagram, Facebook, Twitter, ArrowUp, Send, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Estatify</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium real estate services for modern living. Find your perfect home with the help of our local experts.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Find a Property</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Search Agents</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Neighborhood Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mortgage Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                123 Luxury Way, Beverly Hills, CA 90210
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                contact@estatify.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Subscribe to get the latest property news and market trends.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 Estatify. All rights reserved. Built for modern luxury.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;