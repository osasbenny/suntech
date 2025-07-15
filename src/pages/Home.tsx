import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, Award, Star, MapPin } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Cedar Rapids, IA",
      rating: 5,
      text: "SunTech Solar made the entire process seamless. Our energy bills have been cut by 80% and the installation was professional and quick."
    },
    {
      name: "Mike Peterson",
      location: "Iowa City, IA",
      rating: 5,
      text: "Fantastic service and expertise. The team walked us through every step and the solar system has exceeded our expectations."
    },
    {
      name: "Lisa Chen",
      location: "Ames, IA",
      rating: 5,
      text: "Best investment we've made for our home. The installation was clean, professional, and the savings are incredible."
    }
  ];

  const stats = [
    { number: "500+", label: "Homes Powered", icon: Users },
    { number: "50MW", label: "Energy Generated", icon: Zap },
    { number: "15+", label: "Years Experience", icon: Shield },
    { number: "98%", label: "Customer Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-solar-blue via-solar-navy to-solar-blue overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Clean Energy for <span className="text-solar-yellow">Iowa's Future</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Transform your property with premium solar solutions. Local expertise, proven results, and Iowa's brightest energy future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center group"
                >
                  Get a Free Solar Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-solar-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  Call (563) 307-4849
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/slider_two.jpg"
                alt="Solar Installation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-solar-yellow text-solar-navy p-6 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Average Savings</p>
                <p className="text-3xl font-bold">$2,400/year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-blue rounded-lg mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-solar-navy">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
                Iowa's Premier Solar Installation Company
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At SunTech Solar Solutions, we're proud to be Iowa's trusted partner in renewable energy. With over 15 years of experience, we've helped hundreds of families and businesses across the state transition to clean, cost-effective solar power.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From residential rooftops to large-scale commercial installations, our team of certified professionals delivers exceptional service and cutting-edge technology tailored to Iowa's unique climate and energy needs.
              </p>
              <Link
                to="/about"
                className="bg-solar-blue hover:bg-solar-navy text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/7.jpg"
                alt="Solar Panel Installation"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -left-4 bg-solar-green text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Iowa Leader</p>
                <p className="text-2xl font-bold">Since 2017</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
              Complete Solar Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide comprehensive solar services for residential, commercial, and agricultural properties throughout Iowa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Solar",
                description: "Custom solar solutions for Iowa homes with premium panels and professional installation.",
                image: "/7.jpg"
              },
              {
                title: "Commercial Solar",
                description: "Large-scale solar installations for businesses looking to reduce energy costs and carbon footprint.",
                image: "/slider.jpg"
              },
              {
                title: "Agricultural Solar",
                description: "Specialized solar systems for farms and agricultural operations across rural Iowa.",
                image: "/slider_two.jpg"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-solar-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
                Serving All of Iowa
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We're proud to serve communities across the entire state of Iowa, from the Quad Cities to Sioux City, and everywhere in between. Our local knowledge and expertise ensure optimal solar solutions for Iowa's unique climate and energy landscape.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-solar-blue" />
                  <span>Des Moines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-solar-blue" />
                  <span>Cedar Rapids</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-solar-blue" />
                  <span>Iowa City</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-solar-blue" />
                  <span>Waterloo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-solar-blue" />
                  <span>Ames</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-solar-blue" />
                  <span>Dubuque</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-solar-navy mb-4">Iowa Service Area Map</h3>
              <p className="text-gray-600 mb-6">Interactive map showing our coverage across Iowa</p>
              <div className="bg-solar-blue/10 rounded-lg p-8">
                <MapPin className="w-16 h-16 text-solar-blue mx-auto mb-4" />
                <p className="text-solar-navy font-semibold">Statewide Coverage</p>
                <p className="text-sm text-gray-600">Professional solar installation across all of Iowa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-700">
              Don't just take our word for it - hear from satisfied customers across Iowa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-solar-yellow fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-solar-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-solar-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-solar-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of Iowa families and businesses who have made the switch to clean, renewable energy. Get your free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center group"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:5633074849"
              className="border-2 border-white text-white hover:bg-white hover:text-solar-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call (563) 307-4849
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;