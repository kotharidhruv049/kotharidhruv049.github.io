import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { companyInfo } from '../mock';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions or ready to start investing? Reach out to us and we'll be happy to help you.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-900 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Main Contact Card */}
          <Card className="p-12 bg-gradient-to-br from-blue-900 to-teal-800 text-white shadow-2xl border-none">
            <div className="text-center mb-8">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-teal-300" />
              <h3 className="text-3xl font-bold mb-2">Let's Connect</h3>
              <p className="text-teal-100">Feel free to reach out through any of the channels below</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-teal-200" />
                </div>
                <div className="font-semibold mb-2 text-lg">Email</div>
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="text-teal-200 hover:text-white transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-teal-200" />
                </div>
                <div className="font-semibold mb-2 text-lg">Phone</div>
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="text-teal-200 hover:text-white transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-teal-200" />
                </div>
                <div className="font-semibold mb-2 text-lg">Location</div>
                <p className="text-teal-200">{companyInfo.address}</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center">
              <p className="text-teal-100 leading-relaxed">
                We're here to help you make informed investment decisions. 
                Reach out anytime for a free consultation and personalized financial planning.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
