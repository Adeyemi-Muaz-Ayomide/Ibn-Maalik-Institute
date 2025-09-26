import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-emerald-600 ml-2" />
            <span className="text-2xl font-bold text-emerald-800 mr-3" style={{ fontFamily: 'serif' }}>
              Ibn Maalik Institute
            </span>
          </div>
          
      

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/1234567890?text=Hi, I'm interested in joining Tarteel Academy!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors font-semibold"
            >
              Join Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</a>
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Courses</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Pricing</a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</a>
            <a
              href="https://wa.me/1234567890?text=Hi, I'm interested in joining Tarteel Academy!"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 my-2 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors font-semibold text-center"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;