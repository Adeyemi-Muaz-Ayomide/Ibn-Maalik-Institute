import React from 'react';
import { Heart, Users, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Institute</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to making Arabic learning simple, structured, and inspiring for Muslims around the world. Our mission is to help students not only study Arabic, but live it — speaking with confidence, understanding the Qur’an more deeply, and building a lasting connection with the language.
          </p>
        </div>


          {/* Content Section */}
        <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Ibn Maalik Institute, we believe that learning Arabic opens doors to deeper spiritual 
                connection and understanding. Our structured approach combines traditional teaching 
                methods with modern technology to create an immersive learning experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our goal is to raise disciplined students who are grounded in the Qur’an, Sunnah, and the classical heritage of Islam
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