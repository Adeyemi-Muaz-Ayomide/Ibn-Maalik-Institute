import React from 'react';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Name */}
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-emerald-600 ml-2" />
            <span 
              className="text-xl md:text-2xl font-bold text-emerald-800 mr-3" 
              style={{ fontFamily: 'serif' }}
            >
              Ibn Maalik Institute
            </span>
          </div>

          {/* Enroll Button */}
          <a
            href="https://wa.me/1234567890?text=Hi, I'm interested in joining Ibn Maalik Institute!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors font-semibold"
          >
            Enroll Now
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;
