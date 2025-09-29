import React from 'react';
import { BookOpen, Mail, Phone, MapPin, } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-emerald-400 ml-2" />
              <span className="text-2xl font-bold text-white mr-3" style={{ fontFamily: 'serif' }}>
                Ibn Maalik Institute
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Muslims worldwide to master Arabic and connect deeper with their religion through expert-led, interactive learning.
            </p>
            <div className="flex space-x-4">
             <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
            </div>
          </div>

      
         

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Durusul-Lugha Part 1</span></li>
              <li><span className="text-gray-400">Durusul-Lugha Part 2</span> <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full">Coming Soon</span></li>
              <li><span className="text-gray-400">Durusul-Lugha Part 3</span> <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full">Coming Soon</span></li>
              <li><span className="text-gray-300">Qur'an Recitation Bonus</span></li>
              <li><span className="text-gray-400">Kids Program</span> <span className="text-xs bg-emerald-500 text-white px-2 py-1 rounded-full">In Development</span></li>
            </ul>
          </div>


          {/* Get In Touch */}
            <div className="grid max-w-4xl mx-auto gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start lg:items-center">
                  <MessageCircle className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">WhatsApp (Preferred)</h4>
                    <p className="text-gray-600 mb-3">Get instant responses and personalized guidance. For faster response, we recommend contacting us via WhatsApp</p>
                    <a
                      href="https://wa.me/1234567890?text=Hi, I'm interested in joining Tarteel Academy!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600 mb-2">For detailed inquiries and enrollment</p>
                    <a href="mailto:info@tarteelacademy.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      info@ibnmaalikinstitute.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600 mb-2">International support available</p>
                    <a href="tel:+1234567890" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>WhatsApp: Within 1 hour</p>
                      <p>Email: Within 24 hours</p>
                      <p>Phone: Available 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Global Reach</h4>
                    <p className="text-gray-600">
                      Serving students worldwide
                    </p>
                  </div>
                </div>
              </div>
       

         
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
  © {new Date().getFullYear()} Tarteel Academy. All rights reserved. | Privacy Policy | Terms of Service
</div>

            
            {/* Payment Partners */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Secure payments by:</span>
              <div className="bg-white px-3 py-1 rounded">
                <span className="text-green-600 font-bold text-sm">Paystack</span>
              </div>
            </div>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;