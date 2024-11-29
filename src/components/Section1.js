import React, { useState, useEffect } from 'react';
import main from '../assets/section1.jpg';

const Section1 = ({ language }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const content = {
    en: {
      dropdowns: [
        {
          title: "General Guide",
          subItems: [
            "Visa Navigator",
            "Visa by Categories",
            "How to apply",
            "Application Form",
            "Visa Fees",
            "Entry & Stay",
            "Find a Diplomatic Mission",
          ],
        },
        {
          title: "Application",
          subItems: [
            "Confirmation of Visa Issuance",
            "e-Visa (Individual)",
            "e-Form (Visa)",
            "Work and Visit Visa Lottery",
            "Change of Passport Information",
          ],
        },
        {
          title: "Check Application Status",
          subItems: [
            "Check Application Status & Print",
            "Work and Visit Lottery Results",
          ],
        },
        {
          title: "Immigrant Investor",
          subItems: [
            "Public Business",
            "Tourism and Leisure Facility Investment Immigration System",
            "Global Talent Visa Center",
            "Financial Institution",
            "Notice",
            "FAQ",
          ],
        },
        {
          title: "Korea Visa Application Center",
          subItems: ["KOICA"],
        },
        {
          title: "Help Center",
          subItems: [
            "Notice",
            "FAQ",
            "Archive",
            "How to Use Our Website",
            "Survey",
          ],
        },
      ],
    },
    kor: {
      dropdowns: [
        {
          title: "일반 가이드",
          subItems: [
            "비자 내비게이터",
            "비자 종류별 안내",
            "신청 방법",
            "신청서 양식",
            "비자 수수료",
            "입국 및 체류",
            "외교 공관 찾기",
          ],
        },
        {
          title: "신청",
          subItems: [
            "비자 발급 확인",
            "전자 비자 (개인)",
            "전자 신청서 (비자)",
            "근로 및 방문 비자 추첨",
            "여권 정보 변경",
          ],
        },
        {
          title: "신청 상태 확인",
          subItems: ["신청 상태 확인 및 출력", "근로 및 방문 추첨 결과"],
        },
        {
          title: "투자 이민자",
          subItems: [
            "공공 사업",
            "관광 및 여가 시설 투자 이민 제도",
            "글로벌 인재 비자 센터",
            "금융 기관",
            "공지사항",
            "FAQ",
          ],
        },
        {
          title: "한국 비자 신청 센터",
          subItems: ["KOICA"],
        },
        {
          title: "도움말 센터",
          subItems: ["공지사항", "FAQ", "자료실", "웹사이트 사용 방법", "설문조사"],
        },
      ],
    },
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Reset activeDropdown when language changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [language]);

  return (
    <section className="bg-gray-100 py-2">
      <div className="container mx-auto  flex flex-col md:flex-row items-stretch">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex-shrink-0 pr-2">
          <div className="h-full">
            <img
              src={main}
              alt="Section 1 Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Dropdowns */}
        <div className="w-full md:w-1/2 flex-shrink-0 pl-2">
          <div className="bg-blue-900 p-8 rounded-lg shadow-lg h-full relative">
            {content[language].dropdowns.map((dropdown, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  activeDropdown !== null && activeDropdown !== index ? "hidden" : ""
                }`}
              >
                {/* Main Dropdown Button */}
                <button
                  className="w-full text-left text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                  onClick={() => toggleDropdown(index)}
                >
                  {dropdown.title}
                </button>

                {/* Sub-items */}
                {activeDropdown === index && (
                  <div className="mt-2 rounded text-white p-2">
                    {dropdown.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="mb-2">
                        <span className="w-full text-right hover:bg-blue-600 p-2 rounded focus:outline-none">
                          {subItem}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
