import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyGrid from './components/PropertyGrid';
import MortgageCalculator from './components/MortgageCalculator';
import AgentProfile from './components/AgentProfile';
import MarketTrends from './components/MarketTrends';
import NeighborhoodGuide from './components/NeighborhoodGuide';
import Footer from './components/Footer';
import PropertyComparison from './components/PropertyComparison';
import { properties } from './data/mockData';
import { Scale } from 'lucide-react';

function App() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <PropertyGrid />
      <MarketTrends />
      <NeighborhoodGuide />
      <MortgageCalculator />
      <AgentProfile />
      
      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Estatify made finding our dream home a breeze. Their platform is intuitive and the agent we worked with was incredible.",
                author: "Emily Thompson",
                role: "First-time Homebuyer"
              },
              {
                text: "The market trends data helped me make an informed investment decision. I highly recommend their neighborhood guides.",
                author: "James Wilson",
                role: "Real Estate Investor"
              },
              {
                text: "The most seamless luxury real estate experience I've ever had. Every detail was handled with professional care.",
                author: "Sophia Laurent",
                role: "Luxury Client"
              }
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="text-6xl text-blue-600/10 absolute top-6 left-8 font-serif">"</div>
                <p className="mb-8 relative z-10 text-gray-600 leading-relaxed italic">{t.text}</p>
                <div className="not-italic flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.author}</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Comparison Toggle */}
      <button 
        onClick={() => setShowComparison(true)}
        className="fixed bottom-8 right-8 z-40 bg-gray-900 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-110 transition-transform"
      >
        <Scale className="w-6 h-6" />
        <span className="font-bold pr-2">Compare Properties</span>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold">
          2
        </div>
      </button>

      <PropertyComparison 
        properties={[properties[0], properties[1]]} 
        isOpen={showComparison} 
        onClose={() => setShowComparison(false)} 
      />

      <Footer />
    </main>
  );
}

export default App;