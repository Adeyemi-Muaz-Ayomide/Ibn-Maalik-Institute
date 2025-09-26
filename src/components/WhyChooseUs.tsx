import React from 'react';
import { Video, Users, BookOpen, Heart, Globe, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: "Live, Interactive Classes",
      description: "Not pre-recorded videos - real-time learning with expert instructors who respond to your questions instantly.",
      color: "text-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Structured Learning Path",
      description: "Follow the proven Durusul-Lugha curriculum that has helped thousands of students master Arabic systematically.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Small Cohort = Personal Attention",
      description: "With only 25 students maximum, you get individualized feedback and support throughout your learning journey.",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Free Qur'an Surah Lessons",
      description: "Learn beautiful Quranic recitation alongside your Arabic studies - connecting language with spirituality.",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Affordable, Global Access",
      description: "World-class Arabic education accessible from anywhere in the world at a fraction of traditional costs.",
      color: "text-amber-600"
    },
    {
      icon: Award,
      title: "Continuous Follow-up Support",
      description: "Your learning doesn't stop after class - get ongoing support, practice materials, and community access.",
      color: "text-emerald-600"
    }
  ];

  return (
    <section className="pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ibn Maalik Institute?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another online arabic school - we're your dedicated partners in mastering Arabic with excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        {/* <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">How We Compare</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="py-4 px-6 font-semibold text-emerald-600 text-center">Ibn Maalik Institute</th>
                  <th className="py-4 px-6 font-semibold text-gray-500 text-center">Other Platforms</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Live Interactive Classes</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-emerald-600 font-bold text-xl">✓</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400 font-bold text-xl">✗</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Small Class Sizes (Max 25)</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-emerald-600 font-bold text-xl">✓</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400 font-bold text-xl">✗</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Personal Follow-up Support</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-emerald-600 font-bold text-xl">✓</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400 font-bold text-xl">✗</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Free Qur'an Recitation Bonus</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-emerald-600 font-bold text-xl">✓</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400 font-bold text-xl">✗</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Affordable Pricing</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-emerald-600 font-bold">$40-50</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-500">$200+</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

      
      </div>
    </section>
  );
};

export default WhyChooseUs;