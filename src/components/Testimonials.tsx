import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "London, UK",
      image: "https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Tarteel Academy transformed my Arabic in just 3 months! The live tutoring sessions were incredibly interactive, and the instructors genuinely cared about my progress. I can now read and understand Arabic texts with confidence."
    },
    {
      name: "Fatima Al-Zahra",
      location: "Toronto, Canada",
      image: "https://images.pexels.com/photos/8349218/pexels-photo-8349218.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "The live tutoring and follow-ups kept me motivated throughout the entire course. The bonus Qur'an recitation lessons were absolutely beautiful. I've never felt more connected to my prayers."
    },
    {
      name: "Omar Ibrahim",
      location: "Sydney, Australia",
      image: "https://images.pexels.com/photos/8471820/pexels-photo-8471820.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "As a busy professional, I needed flexible learning that actually worked. Tarteel Academy delivered beyond expectations. The small cohort size meant I got personal attention, and the instructors were patient with all my questions."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied students who have transformed their Arabic skills with Tarteel Academy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-emerald-200 mb-4" />
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8164654/pexels-photo-8164654.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Student Testimonial Video"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
                <button className="bg-white rounded-full p-4 hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <p className="mt-4 font-medium text-gray-800">Sarah's 90-Day Transformation</p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8349218/pexels-photo-8349218.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Student Success Story"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
                <button className="bg-white rounded-full p-4 hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <p className="mt-4 font-medium text-gray-800">From Beginner to Fluent</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted by Students Worldwide</h3>
            <p className="text-emerald-100">Join our growing community of Arabic learners</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">4.9★</div>
              <div className="text-emerald-100 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-emerald-100 text-sm">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-emerald-100 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-emerald-100 text-sm">Completion Rate</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/1234567890?text=Hi, I'd like to join the next cohort!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors font-semibold text-lg"
          >
            Join These Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;