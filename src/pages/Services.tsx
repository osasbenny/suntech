import React from 'react';
import { Home, Building, Tractor, Battery, Settings, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar Installations",
      description: "Custom solar solutions for Iowa homes with premium panels, professional installation, and comprehensive warranties.",
      features: [
        "Free home energy assessment",
        "Custom system design",
        "Premium solar panels",
        "Professional installation",
        "25-year warranty",
        "Financing options available"
      ],
      image: "/7.jpg"
    },
    {
      icon: Building,
      title: "Commercial Solar Installations",
      description: "Large-scale solar solutions for businesses, schools, and government facilities across Iowa.",
      features: [
        "Commercial energy audit",
        "ROI analysis and projections",
        "Large-scale system design",
        "Expedited permitting",
        "Ongoing maintenance",
        "Tax incentive guidance"
      ],
      image: "/slider.jpg"
    },
    {
      icon: Tractor,
      title: "Agricultural Solar Systems",
      description: "Specialized solar solutions for farms and agricultural operations, including agrivoltaics and ground-mount systems.",
      features: [
        "Agricultural site assessment",
        "Agrivoltaic solutions",
        "Ground-mount systems",
        "Irrigation system integration",
        "USDA financing assistance",
        "Rural electric co-op coordination"
      ],
      image: "/slider_two.jpg"
    },
    {
      icon: Battery,
      title: "Battery Storage Solutions",
      description: "Advanced energy storage systems to maximize your solar investment and provide backup power during outages.",
      features: [
        "Battery capacity assessment",
        "Backup power planning",
        "Tesla Powerwall installation",
        "Grid-tied and off-grid options",
        "Smart energy management",
        "Emergency backup systems"
      ],
      image: "/pexels-kindel-media-9875405.jpg"
    },
    {
      icon: Settings,
      title: "Energy Monitoring & Maintenance",
      description: "Comprehensive monitoring and maintenance services to ensure optimal performance of your solar system.",
      features: [
        "Real-time performance monitoring",
        "Preventive maintenance",
        "System cleaning and inspection",
        "Performance optimization",
        "Issue diagnosis and repair",
        "Warranty support"
      ],
      image: "/7.jpg"
    },
    {
      icon: DollarSign,
      title: "Solar Incentive & Tax Credit Guidance",
      description: "Expert guidance on federal and state incentives, tax credits, and financing options to maximize your savings.",
      features: [
        "Federal tax credit assistance",
        "State incentive programs",
        "Local rebate applications",
        "Financing options",
        "Net metering guidance",
        "ROI calculations"
      ],
      image: "/slider_two.jpg"
    }
  ];

  const benefits = [
    {
      title: "Reduce Energy Bills",
      description: "Save 70-90% on electricity costs with our efficient solar systems",
      icon: DollarSign
    },
    {
      title: "Increase Home Value",
      description: "Solar installations typically increase property value by 3-4%",
      icon: Home
    },
    {
      title: "Environmental Impact",
      description: "Reduce carbon footprint and contribute to a cleaner environment",
      icon: Settings
    },
    {
      title: "Energy Independence",
      description: "Generate your own clean energy and reduce grid dependency",
      icon: Battery
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-solar-blue to-solar-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Solar Solutions for Iowa
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              From residential rooftops to commercial installations and agricultural systems, we provide comprehensive solar services tailored to Iowa's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-solar-blue rounded-lg mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-solar-navy">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <ArrowRight className="w-4 h-4 text-solar-blue mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/quote"
                    className="bg-solar-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center group"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
              Why Choose Solar?
            </h2>
            <p className="text-lg text-gray-700">
              The benefits of solar energy extend far beyond just savings on your electricity bill
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-blue rounded-lg mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-solar-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-700">
              Simple, straightforward steps to get your solar system up and running
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free assessment of your property and energy needs"
              },
              {
                step: "02",
                title: "Custom Design",
                description: "Personalized solar system design and proposal"
              },
              {
                step: "03",
                title: "Installation",
                description: "Professional installation by certified technicians"
              },
              {
                step: "04",
                title: "Activation",
                description: "System testing, utility connection, and monitoring setup"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-orange rounded-full text-white font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-solar-navy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-solar-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom solar proposal tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center group"
            >
              Get Free Quote
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

export default Services;