import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { companyInfo, mockContactSubmit } from '../mock';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await mockContactSubmit(formData);
      toast.success(response.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              Let's Start Your Wealth Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions or ready to start investing? Reach out to us and we'll get back to you within 24 hours.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-900 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-white shadow-xl border-2 border-blue-100">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-blue-900 mb-2">Send us a message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form and we'll be in touch shortly
                </CardDescription>
              </CardHeader>

              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-2 border-slate-200 focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-2 border-slate-200 focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="border-2 border-slate-200 focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your financial goals and how we can help..."
                      required
                      rows={5}
                      className="border-2 border-slate-200 focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <Card className="p-8 bg-gradient-to-br from-blue-900 to-teal-800 text-white shadow-2xl border-none">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href={`mailto:${companyInfo.email}`} className="text-teal-200 hover:text-teal-100 transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href={`tel:${companyInfo.phone}`} className="text-teal-200 hover:text-teal-100 transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <p className="text-teal-200">{companyInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-sm text-teal-100">
                    We're here to help you make informed investment decisions. 
                    Reach out anytime for a free consultation.
                  </p>
                </div>
              </Card>

              {/* Why Contact Us */}
              <Card className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200">
                <h3 className="font-semibold text-lg text-blue-900 mb-4">What to expect</h3>
                <div className="space-y-3">
                  {[
                    'Quick response within 24 hours',
                    'Free initial consultation',
                    'Personalized investment strategy',
                    'No hidden charges or obligations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
