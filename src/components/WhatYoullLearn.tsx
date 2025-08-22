import React from 'react';
import { BookOpen, Volume2, Star, Clock, Users, Gift } from 'lucide-react';

const WhatYoullLearn: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Arabic curriculum designed to take you from beginner to confident speaker
          </p>
        </div>

        {/* Main Course */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-emerald-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
            <div className="flex items-center mb-4 lg:mb-0">
              <BookOpen className="w-8 h-8 text-emerald-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Arabic Course: Durusul-Lugha (Part 1)</h3>
                <p className="text-gray-600">Foundational Arabic language skills</p>
              </div>
            </div>
            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
              Current Cohort
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Course Highlights:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Essential Arabic grammar and vocabulary</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reading and writing Arabic script</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Conversation practice with native speakers</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Islamic terminology and expressions</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Course Details:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">3 months intensive program</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Live interactive sessions</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Comprehensive study materials</span>
                </li>
                <li className="flex items-center">
                  <Volume2 className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Audio pronunciations included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coming Soon Courses */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
            <BookOpen className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Durusul-Lugha (Part 2)</h3>
            <p className="text-gray-600">Intermediate Arabic grammar and advanced vocabulary</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
            <BookOpen className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Durusul-Lugha (Part 3)</h3>
            <p className="text-gray-600">Advanced Arabic literature and complex grammatical structures</p>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white mb-8">
          <div className="text-center">
            <Gift className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Qur'an Recitation Bonus</h3>
            <p className="text-xl mb-6 text-amber-100">
              Every student in this cohort will learn these Surahs - FREE!
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-bold">Suratu Qaf</h4>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-bold">Dhariyaat</h4>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-bold">Tur</h4>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-bold">Najm</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Kids Program Banner */}
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">Coming Soon for Kids</h3>
          <p className="text-emerald-700 text-lg mb-6">
            Build Arabic Skills from an Early Age - Specialized program for children
          </p>
          <div className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold">
            <span className="mr-2">🎯</span>
            Ages 8-15 Program in Development
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;