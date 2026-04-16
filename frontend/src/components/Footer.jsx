import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { companyInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-300">
              {companyInfo.shortName}
            </h3>
            <p className="text-teal-100 mb-4 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-sm text-teal-200 leading-relaxed">
              Your trusted partner for mutual funds, SIPs, and insurance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-teal-300">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'SIP Calculator', href: '#calculator' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-teal-100 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-teal-300">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Mutual Funds',
                'Systematic Investment Plans',
                'Insurance Solutions',
                'Financial Planning'
              ].map((service) => (
                <li key={service}>
                  <span className="text-teal-100 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-teal-300">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-teal-100 hover:text-white transition-colors text-sm break-all"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-teal-100 hover:text-white transition-colors text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span className="text-teal-100 text-sm">{companyInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-700/50"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-teal-200">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Instagram, href: '#' }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Social media link"
              >
                <Icon className="w-5 h-5 text-teal-200" />
              </a>
            ))}
          </div>

          <div className="text-sm text-teal-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <p className="text-xs text-teal-200 leading-relaxed">
              <strong>Disclaimer:</strong> Mutual fund investments are subject to market risks. 
              Read all scheme related documents carefully before investing. Past performance is 
              not indicative of future returns. Please consider your specific investment requirements, 
              risk tolerance, investment goal, time frame, and other relevant factors before making 
              any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
