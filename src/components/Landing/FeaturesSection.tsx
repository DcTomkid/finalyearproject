import React from 'react';
import { Shield, Smartphone, BarChart3, MessageCircle } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'ESUTPay uses encrypted technology to protect all your transactions.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Accessible on mobile phones, tablets, and desktop devices.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Reports',
      description: 'Track your payments and get automatic updates on your dashboard.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Responsive Support',
      description: 'Our support team is always available to assist you with any issues.',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make ESUTPay the preferred choice for school fee payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-xl shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center">
                      🔐 {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Seamless Payments?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ESUTPay community and transform how you handle school fee payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg">
                Get Started Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};