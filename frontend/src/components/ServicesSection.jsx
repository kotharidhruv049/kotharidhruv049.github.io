import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, PiggyBank, Shield, CheckCircle } from 'lucide-react';
import { services } from '../mock';

const iconMap = {
  1: TrendingUp,
  2: PiggyBank,
  3: Shield
};

const colorMap = {
  1: { bg: 'from-teal-50 to-blue-50', icon: 'text-teal-600', border: 'border-teal-200' },
  2: { bg: 'from-blue-50 to-teal-50', icon: 'text-blue-700', border: 'border-blue-200' },
  3: { bg: 'from-teal-50 to-blue-50', icon: 'text-teal-600', border: 'border-teal-200' }
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1">
              Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From wealth creation to wealth protection, we offer end-to-end financial services 
              designed to help you achieve your financial goals.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-900 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.id];
              const colors = colorMap[service.id];
              
              return (
                <Card 
                  key={service.id}
                  className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden relative`}
                >
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-300"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <CardTitle className="text-2xl text-blue-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-blue-900 to-teal-800 border-none text-white shadow-2xl">
              <p className="text-xl mb-4">
                Not sure which service is right for you?
              </p>
              <p className="text-teal-100 mb-6">
                Let's discuss your financial goals and create a personalized plan.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Free Consultation
              </button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
