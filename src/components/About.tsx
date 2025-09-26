import React from 'react';
import { Heart, Users, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Institute</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to helping Muslims worldwide learn Arabic effectively, 
            with structured lessons and personalized support.
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/8471884/pexels-photo-8471884.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder Introduction"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-8 rounded-xl bg-black bg-opacity-30 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>      
          </div> */}

          {/* Content Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Ibn Maalik Institute, we believe that learning Arabic opens doors to deeper spiritual 
                connection and understanding. Our structured approach combines traditional teaching 
                methods with modern technology to create an immersive learning experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every lesson is designed to build confidence and fluency, whether you're taking 
                your first steps in Arabic or looking to perfect your recitation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Passionate Teaching</h4>
                  <p className="text-gray-600 text-sm">Expert instructors who care about your success</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Small Cohorts</h4>
                  <p className="text-gray-600 text-sm">Personalized attention in every class</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Live Tutoring</h4>
                  <p className="text-gray-600 text-sm">Interactive sessions with real-time feedback</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Follow-up Support</h4>
                  <p className="text-gray-600 text-sm">Continuous guidance beyond class hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Students Worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-emerald-100">Max Cohort Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-emerald-100">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;