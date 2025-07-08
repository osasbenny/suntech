import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-solar-blue to-solar-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Ready to start your solar journey? We're here to help with all your questions and provide expert guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-solar-navy mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="solar-quote">Solar Quote Request</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="financing">Financing Options</option>
                      <option value="maintenance">Maintenance Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your solar needs or ask any questions you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-solar-orange hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-solar-navy mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-blue rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-solar-navy">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a
                      href="tel:5633074849"
                      className="text-solar-blue hover:text-solar-navy font-semibold transition-colors duration-200"
                    >
                      (563) 307-4849
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-blue rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-solar-navy">Email</h3>
                    <p className="text-gray-600 mb-2">Send us your questions anytime</p>
                    <a
                      href="mailto:info@suntechsolarsolutions.net"
                      className="text-solar-blue hover:text-solar-navy font-semibold transition-colors duration-200"
                    >
                      info@suntechsolarsolutions.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-blue rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-solar-navy">Address</h3>
                    <p className="text-gray-600 mb-2">Visit our office in Des Moines</p>
                    <div className="text-gray-700">
                      <p>4328 Willow Creek Dr</p>
                      <p>Des Moines, IA 50321</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-solar-blue rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-solar-navy">Business Hours</h3>
                    <p className="text-gray-600 mb-2">We're here when you need us</p>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment only</p>
                      <p className="text-sm text-solar-blue font-medium">Emergency service available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-solar-navy mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">We proudly serve communities across Iowa, including:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Des Moines</div>
                  <div>• Cedar Rapids</div>
                  <div>• Iowa City</div>
                  <div>• Waterloo</div>
                  <div>• Ames</div>
                  <div>• Dubuque</div>
                  <div>• Sioux City</div>
                  <div>• Council Bluffs</div>
                  <div>• Cedar Falls</div>
                  <div>• Burlington</div>
                  <div>• Mason City</div>
                  <div>• Fort Dodge</div>
                </div>
                <p className="text-sm text-gray-600 mt-4">Don't see your city? We serve all of Iowa! Give us a call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-solar-navy mb-4">Find Us</h2>
            <p className="text-lg text-gray-700">Located in the heart of Des Moines, serving all of Iowa</p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-solar-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-solar-navy mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">4328 Willow Creek Dr, Des Moines, IA 50321</p>
                <a
                  href="https://maps.google.com/maps?q=4328+Willow+Creek+Dr,+Des+Moines,+IA+50321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-solar-blue hover:bg-solar-navy text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                >
                  View in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-solar-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Don't wait to start saving with solar. Contact us today for your free consultation and take the first step toward energy independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5633074849"
              className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center group"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: (563) 307-4849
            </a>
            <a
              href="mailto:info@suntechsolarsolutions.net"
              className="border-2 border-white text-white hover:bg-white hover:text-solar-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;