import React from 'react';

const Section3 = ({ language }) => {
  const content = {
    en: {
      title1: 'VISA APPLICATION',
      title2: 'KOREA TODAY',
      info: [
        { title: 'Visa Announcement', description: '2025 Global Korea Scholarship Undergraduate Degree Program (GKS-U) First Round Result [Embassy Track] The Embassy is thrilled to announce that the 2025 Global Korea Scholarship Undergraduate Degree Program (GKS-U) has concluded....' },
        { title: 'Visa Requirement', description: 'Ambassador Lee wrote an article titled Korea and the Philippines on the cusp of a new chapter on Philstar Ambassador Lee wrote an article titled Korea and the Philippines on the cusp of a new chapter on Philstar...' },
        { title: 'Notice', description: 'Notice on Extension re: Simplification of Visa Application Requirements(until Dec.31,2025) The Embassy of the Republic of Korea in the Philippines wishes to inform you on the extension of simplification of visa application...' },
        { title: 'News', description: 'C-3(Short Term Visit)Visa Requirements for Adopted Minor Child of Filipino Spouse C-3(Short Term Visit)Visa Requirements for Adopted Minor Child of Filipino Spouse Applicable for minor child of Filipino spouse who is NOT a biological child of Korean spouse who has already been adopted by the Korean spouse Korea and the Philippines on the cusp of a new chapter...' },
      ],
    },
    kor: {
      title: '',
      info: [
        { 
          title: '비자 공지', 
          description: '2025 글로벌 코리아 장학금 학부 과정 (GKS-U) 1차 결과 [대사관 트랙] 대사관은 2025 글로벌 코리아 장학금 학부 과정 (GKS-U)이 마무리되었음을 기쁜 마음으로 알려드립니다....' 
        },
        { 
          title: '비자 요건', 
          description: '이 대사가 필스타에 "새로운 장을 여는 한국과 필리핀"이라는 제목의 기사를 작성했습니다. 이 대사는 필스타에 "새로운 장을 여는 한국과 필리핀"이라는 제목의 기사를 작성했습니다....' 
        },
        { 
          title: '공지사항', 
          description: '비자 신청 요건 간소화 연장 안내(2025년 12월 31일까지) 주필리핀 대한민국 대사관은 비자 신청 요건 간소화 연장이 이루어졌음을 알려드립니다....' 
        },
        { 
          title: '뉴스', 
          description: 'C-3(단기 방문) 비자 요건: 필리핀 배우자의 입양된 미성년 자녀 C-3(단기 방문) 비자 요건: 필리핀 배우자의 입양된 미성년 자녀 필리핀 배우자의 생물학적 자녀가 아닌, 이미 한국 배우자에 의해 입양된 미성년 자녀에게 해당합니다. 한국과 필리핀이 새로운 장을 열고 있습니다....' 
        },
      ]
      
    },
  };

  return (
    <section className="bg-gray-100 py-2">
      <div className="container mx-auto px-4">


        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">

          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">

            <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content[language].info.slice(0, 2).map((item, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title2}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content[language].info.slice(2, 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;

