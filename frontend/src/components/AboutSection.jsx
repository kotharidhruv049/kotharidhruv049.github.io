import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Award, CheckCircle } from 'lucide-react';
import { aboutContent } from '../mock';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1">
              About Us
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              {aboutContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {aboutContent.description}
              </p>

              {/* Why Choose Us */}
              <div className="space-y-3">
                <h3 className="font-semibold text-xl text-blue-900 mb-4">Why Choose DKFS?</h3>
                {[
                  'Personalized financial planning tailored to your goals',
                  'Transparent and unbiased investment advice',
                  'Regular portfolio monitoring and rebalancing',
                  'Hassle-free paperwork and documentation'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Certifications */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-blue-900 to-teal-800 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Award className="w-7 h-7 text-teal-200" />
                  </div>
                  <h3 className="text-2xl font-bold">Certifications & Registrations</h3>
                </div>
                
                <div className="space-y-4">
                  {aboutContent.certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-teal-200" />
                        </div>
                        <span className="font-medium">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-sm text-teal-100 leading-relaxed">
                    All certifications are verified and up-to-date. We adhere to the highest standards 
                    of regulatory compliance and professional ethics.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
