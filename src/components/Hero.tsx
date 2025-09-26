import React from 'react';
import { Play, Star, Users, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted by Students Worldwide
            </div>
            {/* <p class="mt-4 text-xl md:text-3xl text-emerald-600 px-3 py-1 rounded font-amiri">
  معهد ابن مالك
</p> */}

            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Arabic,{' '}
              <span className="text-emerald-600">Connect Deeper</span>{' '}
              with your Religion.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">             
              {/* Transform your Arabic from beginner to fluent speaker. Expert tutors, live classes, limitless possibilities - all at Ibn Maalik Institute. */}
              A structured path to connect your arabic with the Qur’an, the Sunnah, and the sciences that preserve our religion—from anywhere in the world
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/1234567890?text=Hi, I want to join the next cohort!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
              >
                Begin your Journey Today
              </a>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-colors font-semibold text-lg flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Intro Video
              </button>
            </div>

            
            {/* Stats */}
            
          </div>
          

          {/* Right Column - Image/Video */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Arabic Learning Session"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="bg-white rounded-full p-6 hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-emerald-600" />
                </button>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-emerald-600 mr-2" />
                <div>
                  <div className="font-semibold text-sm">Live Classes</div>
                  <div className="text-xs text-gray-500">Interactive Learning</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-amber-500 mr-2" />
                <div>
                  <div className="font-semibold text-sm">Global Access</div>
                  <div className="text-xs text-gray-500">Learn Anywhere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;