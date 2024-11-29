import React, { useState } from "react";
import koreaFlag from "../assets/korean-flag.png";
import usaFlag from "../assets/flags/usa.png";

const LanguageSwitcher = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setLanguage(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-blue-500 text-white px-2 py-2 rounded flex items-center justify-between w-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {language === "en" ? (
          <>
            <img src={usaFlag} alt="English" className="w-5 h-3 mr-2" />
            EN
          </>
        ) : (
          <>
            <img src={koreaFlag} alt="Korean" className="w-5 h-3 mr-2" />
            KOR
          </>
        )}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-20 bg-blue-500 border rounded shadow-lg z-10">
          <div
            className="flex items-center px-2 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("en")}
          >
            <img src={usaFlag} alt="English" className="w-5 h-3 mr-2" />
            EN
          </div>
          <div
            className="flex items-center px-2 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("kor")}
          >
            <img src={koreaFlag} alt="Korean" className="w-5 h-3 mr-2" />
            KOR
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
