import React from 'react';
import { Users, Award, Zap, Shield, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Local Expertise",
      description: "Born and raised in Iowa, we understand the unique energy needs and weather patterns of our beautiful state."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We use only the highest quality solar panels and equipment, backed by comprehensive warranties and professional installation."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide ongoing support and maintenance to ensure your solar system performs optimally."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay current with the latest solar technology and energy storage solutions to maximize your investment."
    }
  ];

  const achievements = [
    { number: "500+", label: "Successful Installations" },
    { number: "15+", label: "Years in Business" },
    { number: "50MW", label: "Energy Generated" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-solar-blue to-solar-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SunTech Solar Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Iowa's trusted solar energy partner since 2009, committed to bringing clean, renewable energy to every corner of our great state.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                To make clean, renewable energy accessible and affordable for every Iowa family and business, while contributing to a sustainable future for generations to come.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe that solar energy isn't just about reducing electricity bills—it's about energy independence, environmental stewardship, and building stronger communities across Iowa.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-solar-blue">{achievement.number}</p>
                    <p className="text-gray-600">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/pexels-kindel-media-9875405.jpg"
                alt="Solar Installation Team"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-solar-green text-white p-6 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Established</p>
                <p className="text-3xl font-bold">2009</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-700">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-solar-blue rounded-lg mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-solar-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iowa Roots Section */}
      <section className="py-20 bg-solar-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Proud Iowa Roots
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Founded in Des Moines in 2009, SunTech Solar Solutions has grown from a small local business to Iowa's leading solar installation company. Our deep roots in the community drive our commitment to exceptional service and long-term relationships.
              </p>
              <p className="text-lg text-gray-200 mb-8">
                We understand Iowa's unique climate challenges and opportunities, from harsh winters to sunny summers. This local knowledge allows us to design solar systems that perform optimally year-round in our beautiful state.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <Award className="w-12 h-12 text-solar-yellow mx-auto mb-2" />
                  <p className="text-sm">Iowa Business Award</p>
                  <p className="text-xs text-gray-300">2022</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-solar-yellow mx-auto mb-2" />
                  <p className="text-sm">Community Choice</p>
                  <p className="text-xs text-gray-300">2023</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-solar-yellow mx-auto mb-2" />
                  <p className="text-sm">Clean Energy Leader</p>
                  <p className="text-xs text-gray-300">2024</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/slider.jpg"
                alt="Iowa Solar Farm"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -left-4 bg-solar-yellow text-solar-navy p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Serving Iowa</p>
                <p className="text-2xl font-bold">15+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;