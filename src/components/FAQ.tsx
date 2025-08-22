import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What platform are the classes held on?",
      answer: "Our live classes are conducted on Zoom and Google Meet for maximum accessibility. We provide all necessary links and technical support to ensure a smooth learning experience."
    },
    {
      question: "Do I need prior Arabic knowledge to join?",
      answer: "Not at all! Our Durusul-Lugha Part 1 program is specifically designed for complete beginners. We start from the basics and build your knowledge systematically."
    },
    {
      question: "Is there follow-up support after lessons?",
      answer: "Yes! We provide continuous support including practice materials, homework feedback, pronunciation guides, and access to our student community for ongoing practice."
    },
    {
      question: "How many students are in each cohort?",
      answer: "We limit each cohort to a maximum of 25 students to ensure personalized attention and meaningful interaction with instructors and fellow students."
    },
    {
      question: "What if I miss a live class?",
      answer: "All live sessions are recorded and made available to students within 24 hours. You'll also receive session notes and can schedule catch-up sessions if needed."
    },
    {
      question: "Are there any additional costs beyond the course fee?",
      answer: "No hidden costs! Your course fee includes all study materials, live sessions, recordings, bonus Qur'an lessons, and ongoing support. No textbooks to buy separately."
    },
    {
      question: "What's included in the free Qur'an recitation bonus?",
      answer: "Every student learns proper recitation of Suratu Qaf, Dhariyaat, Tur, and Najm with Tajweed rules, pronunciation guides, and practice sessions - completely free with your enrollment."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 7-day money-back guarantee from the start date of your cohort. If you're not completely satisfied within the first week, we'll provide a full refund."
    },
    {
      question: "How long are the live sessions?",
      answer: "Each live session is 90 minutes long, held twice per week for 3 months. This gives you 24 intensive sessions plus bonus Qur'an lessons."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes! Upon successful completion of the program, you'll receive a digital certificate of completion that you can share on social media or include in your portfolio."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about joining Tarteel Academy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Get personalized answers from our team.
            </p>
            <a
              href="https://wa.me/1234567890?text=Hi, I have some questions about the Arabic course!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;