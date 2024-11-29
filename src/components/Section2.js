import React, { useEffect } from 'react';
import main from '../assets/sections2.JPG';
import koreaFlag from '../assets/korean-flag.png'; 
import manilaFlag from '../assets/manila-flag.png';

const Section2 = ({ language }) => {
  const content = {
    en: {
      countries: ['Seoul', 'Manila'],
    },
    kor: {
      countries: ['서울', '마닐라'],
    },
  };

  const timezones = ['Asia/Seoul', 'Asia/Manila'];
  const flags = [koreaFlag, manilaFlag]; 

  useEffect(() => {
    function updateClocks() {
      document.querySelectorAll('.clock').forEach((clock, index) => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
          timeZone: timezones[index],
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

        const date = now.toLocaleDateString('en-US', {
          timeZone: timezones[index],
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        clock.innerHTML = `${time} <br /> ${date}`;
      });
    }

    const interval = setInterval(updateClocks, 1000);
    updateClocks();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-2">
      <div className="container mx-auto">
        <div className="relative">
          <img
            src={main}
            alt="Large Photo"
            className="w-full h-full rounded-lg shadow-lg"
          />
          <div className="absolute top-4 sm:top-10 px-4 sm:px-40 w-full h-full flex justify-between items-start">
            {content[language].countries.map((country, index) => (
              <div key={index} className="text-center">
                <img
                  src={flags[index]}
                  alt={`Flag of ${country}`}
                  className="w-16 h-10 sm:w-40 sm:h-24 mx-auto"
                />
                <p className="text-white text-sm sm:text-base font-bold">{country}</p>
                <div className="clock text-white text-xs sm:text-base"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
