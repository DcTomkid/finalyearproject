import React from 'react';
import { ArrowRight, Play, Shield, Clock, CreditCard } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Welcome to{' '}
                <span className="text-yellow-400">ESUTPay</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                Your Trusted School Fees Payment System
              </p>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              Say goodbye to long queues and stressful payments. ESUTPay simplifies and secures your school fee transactions with just a few clicks. Whether you're a student, parent, or university administrator, our platform is designed to make fee payments fast, transparent, and hassle-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="text-sm text-blue-100">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-green-400" />
                <span className="text-sm text-blue-100">24/7 Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-6 w-6 text-green-400" />
                <span className="text-sm text-blue-100">Multiple Options</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Payment Dashboard</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Tuition Fee</span>
                      <span className="font-bold text-blue-900">₦45,000</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Accommodation</span>
                      <span className="font-bold text-green-700">Paid ✓</span>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Library Fee</span>
                      <span className="font-bold text-yellow-700">₦2,500</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};