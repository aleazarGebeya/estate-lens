import React, { useState, useEffect } from 'react';
import { DollarSign, Percent } from 'lucide-react';
import { formatCurrency } from '../lib/utils';

const MortgageCalculator = () => {
  const [price, setPrice] = useState(850000);
  const [downPayment, setDownPayment] = useState(170000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      const monthly = (principal * x * monthlyRate) / (x - 1);
      setMonthlyPayment(monthly);
    }
  }, [price, downPayment, interestRate, loanTerm]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] -ml-32 -mb-32" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Mortgage Calculator</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Estimate your monthly payments and see how much you can afford.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <div className="text-sm text-gray-400 mb-2">Estimated Monthly Payment</div>
                  <div className="text-5xl font-bold text-blue-400">
                    {formatCurrency(Math.round(monthlyPayment))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-xs text-gray-500 mb-1">Loan Amount</div>
                    <div className="text-lg font-semibold">{formatCurrency(price - downPayment)}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-xs text-gray-500 mb-1">Total Interest</div>
                    <div className="text-lg font-semibold">{formatCurrency(Math.round(monthlyPayment * loanTerm * 12 - (price - downPayment)))}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold mb-2 block text-gray-700">Home Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="number" 
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-10 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold mb-2 block text-gray-700">Down Payment</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="number" 
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-10 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-2 block text-gray-700">Rate (%)</label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="number" 
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-10 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold mb-2 block text-gray-700">Loan Term</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[15, 20, 30].map((year) => (
                      <button
                        key={year}
                        onClick={() => setLoanTerm(year)}
                        className={`py-3 rounded-xl text-sm font-bold transition-all ${
                          loanTerm === year ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {year}y
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 mt-4">
                  Get Pre-Approved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;