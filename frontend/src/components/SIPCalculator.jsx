import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Calculator, TrendingUp, IndianRupee } from 'lucide-react';

export const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [tenure, setTenure] = useState(10);
  const [results, setResults] = useState({
    totalInvestment: 0,
    estimatedReturns: 0,
    totalValue: 0
  });

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, returnRate, tenure]);

  const calculateSIP = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = tenure * 12;
    
    // SIP Future Value Formula: FV = P × [(1 + r)^n - 1] / r × (1 + r)
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvestment = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvestment;
    
    setResults({
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue)
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1">
              Investment Calculator
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              SIP Calculator
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Plan your investments and see how your wealth can grow over time with the power of compounding.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-900 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Input Section */}
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 shadow-xl">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">Investment Details</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Adjust the parameters to calculate your potential returns
                </CardDescription>
              </CardHeader>

              <CardContent className="px-0 pb-0 space-y-8">
                {/* Monthly Investment */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold text-slate-700">
                      Monthly Investment
                    </Label>
                    <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-lg border-2 border-teal-200">
                      <IndianRupee className="w-4 h-4 text-teal-600" />
                      <Input
                        type="number"
                        value={monthlyInvestment}
                        onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                        className="w-24 border-none p-0 h-auto focus-visible:ring-0 font-bold text-blue-900"
                      />
                    </div>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                    min={500}
                    max={100000}
                    step={500}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Expected Return Rate */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold text-slate-700">
                      Expected Return Rate (p.a.)
                    </Label>
                    <div className="bg-white px-4 py-2 rounded-lg border-2 border-teal-200">
                      <Input
                        type="number"
                        value={returnRate}
                        onChange={(e) => setReturnRate(Number(e.target.value))}
                        className="w-16 border-none p-0 h-auto focus-visible:ring-0 font-bold text-blue-900"
                      />
                      <span className="text-sm font-bold text-teal-600">%</span>
                    </div>
                  </div>
                  <Slider
                    value={[returnRate]}
                    onValueChange={(value) => setReturnRate(value[0])}
                    min={1}
                    max={30}
                    step={0.5}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Investment Tenure */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold text-slate-700">
                      Investment Tenure
                    </Label>
                    <div className="bg-white px-4 py-2 rounded-lg border-2 border-teal-200">
                      <Input
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-16 border-none p-0 h-auto focus-visible:ring-0 font-bold text-blue-900"
                      />
                      <span className="text-sm font-bold text-teal-600">Yr</span>
                    </div>
                  </div>
                  <Slider
                    value={[tenure]}
                    onValueChange={(value) => setTenure(value[0])}
                    min={1}
                    max={30}
                    step={1}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-blue-900 to-teal-800 text-white border-none shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-8 h-8 text-teal-300" />
                    <h3 className="text-2xl font-bold">Expected Returns</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-sm text-teal-200 mb-2">Total Investment</div>
                      <div className="text-3xl font-bold">{formatCurrency(results.totalInvestment)}</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-sm text-teal-200 mb-2">Estimated Returns</div>
                      <div className="text-3xl font-bold text-teal-300">{formatCurrency(results.estimatedReturns)}</div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 shadow-lg">
                      <div className="text-sm text-teal-100 mb-2">Total Value</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.totalValue)}</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <p className="text-xs text-teal-100 leading-relaxed">
                      * This is an approximate calculation for illustration purposes only. 
                      Actual returns may vary based on market conditions and fund performance.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-blue-900">Start your SIP journey today!</span> 
                  {' '}Regular investments, even small amounts, can create substantial wealth over time 
                  through the power of compounding.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
