import React from 'react';
import { Heart, Users, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-16">
          <h2 className="text-4xl text-center font-bold text-gray-900 mb-4">About Our Institute</h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mx-auto">
            We make Arabic learning simple, structured, and inspiring for Muslims like you worldwide. Our goal is to help you not only study Arabic, but live it, We help you speak with confidence, understand the Qur'an deeply, and grow into disciplined students rooted in the Qur'an, Sunnah, and Islam's classical heritage. 
          
            Every lesson builds your fluency and confidence, from your first Arabic word to mastering complex scholarly texts.
          </p>
        </div>


          {/* Content Section */}
        <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
            
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

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div> */}
            {/* <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Students Worldwide</div>
            </div> */}
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