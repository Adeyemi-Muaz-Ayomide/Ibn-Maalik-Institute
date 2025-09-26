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
            Join hundreds of satisfied students who have transformed their Arabic skills with Ibn Maalik Institute.
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