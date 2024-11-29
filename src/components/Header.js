import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import kor from '../assets/image_2024-11-25_01-47-09.png';
import man from '../assets/manpower.png';
import lang from '../assets/9616562.png';

const Header = ({ language, setLanguage }) => {
  return (
    <header className="bg-slate-900 text-white p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6 md:space-x-20">
          <div className="flex items-center">
            <img src={kor} alt="Image 1" className="h-10 w-10 md:h-16 md:w-16" />
            <span className="hidden md:block text-xl font-bold w-20 text-center mx-2">
              General Consulate
            </span>
          </div>

          <div className="flex items-center">
            <img src={man} alt="Image 2" className="h-10 w-22 md:h-16 md:w-22" />
            <span className="hidden md:block text-xl font-bold text-center">
              Military Manpower <br /> Administration
            </span>
          </div>

          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JVtmF8eM9Qt6uG4PnRDZx-v6L4Ko2lUd4Q&s"
              alt="Image 3"
              className="h-10 w-22 md:h-16 md:w-22"
            />
            <span className="hidden md:block text-xl font-bold text-center px-4">
              KOICA <br /> Philippines
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={lang} alt="Image 4" className="h-8 w-8 md:h-6 md:w-6" />
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
