import React from 'react';
import { Check, Zap, Users, Clock, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Cohort Info</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose your path to Arabic fluency with our affordable and comprehensive programs
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full font-semibold">
            <Users className="w-5 h-5 mr-2" />
            Only 25 spots available - First come, first served
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Early Bird Pricing */}
          <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-300 transform hover:scale-105 transition-all">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-6 py-2 rounded-full font-bold">
              EARLY BIRD SPECIAL
            </div>
            <div className="text-center pt-4">
              <Zap className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Bird</h3>
              <p className="text-gray-600 mb-6">First 10 people only</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-amber-600">$40</span>
                <span className="text-gray-600 ml-2">for 3 months</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-amber-600 mr-3" />
                  <span>Complete Durusul-Lugha Part 1</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-amber-600 mr-3" />
                  <span>Live interactive sessions</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-amber-600 mr-3" />
                  <span>FREE Qur'an recitation lessons</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-amber-600 mr-3" />
                  <span>Personalized follow-up support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-amber-600 mr-3" />
                  <span>Study materials included</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-amber-600 mr-3" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
              <a
                href="https://paystack.com/pay/tarteel-early-bird"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-600 text-white py-4 rounded-full hover:bg-amber-700 transition-colors font-bold text-lg"
              >
                Reserve Your Spot Now - $40
              </a>
              <p className="text-sm text-amber-700 mt-3 font-semibold">⚡ Limited to first 10 students only!</p>
            </div>
          </div>

          {/* Standard Pricing */}
          <div className="relative bg-white rounded-2xl p-8 border-2 border-emerald-300 shadow-xl transform hover:scale-105 transition-all">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full font-bold">
              STANDARD PLAN
            </div>
            <div className="text-center pt-4">
              <Star className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
              <p className="text-gray-600 mb-6">Full program access</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-emerald-600">$50</span>
                <span className="text-gray-600 ml-2">for 3 months</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Complete Durusul-Lugha Part 1</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Live interactive sessions</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>FREE Qur'an recitation lessons</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Personalized follow-up support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Study materials included</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
              <a
                href="https://paystack.com/pay/tarteel-standard"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 text-white py-4 rounded-full hover:bg-emerald-700 transition-colors font-bold text-lg"
              >
                Reserve Your Spot Now - $50
              </a>
              <p className="text-sm text-emerald-700 mt-3">💎 Premium learning experience</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What's Included in Both Plans</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">3-Month Program</h4>
              <p className="text-gray-600 text-sm">Comprehensive Arabic learning journey with structured progression</p>
            </div>
            <div className="text-center">
              <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Small Cohorts</h4>
              <p className="text-gray-600 text-sm">Maximum 25 students for personalized attention and interaction</p>
            </div>
            <div className="text-center">
              <Check className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Lifetime Support</h4>
              <p className="text-gray-600 text-sm">Continuous guidance and community access beyond the program</p>
            </div>
          </div>
        </div>      
      </div>
    </section>
  );
};

export default Pricing;