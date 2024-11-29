import React, { useState } from 'react';

const SubmitForm = ({ language }) => {
  const content = {
    en: {
      title: 'Check and print progress status',
      Passport_No: 'Passport_No',
      fullName: 'Full Name',
      dateOfBirth: 'Date of Birth',
      confirmCode: 'Confirm Code',
      submit: 'Search',
    },
    kor: {
      title: '양식 제출',
      Passport_No: '전화번호',
      fullName: '성명',
      dateOfBirth: '생년월일',
      confirmCode: '확인 코드',
      submit: '제출',
    },
  };

  const [confirmCode, setConfirmCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const filePath = `${process.env.PUBLIC_URL}/pdf/${confirmCode}.pdf`;
  
    try {
      // Check if the file exists using a HEAD request
      const response = await fetch(filePath, { method: 'HEAD' });
  
      // Verify the response status is 200
      if (response.ok) {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = `${confirmCode}.pdf`;
        link.click();
      } else {
        // Show an alert if the file doesn't exist
        alert('File does not exist. Please check the confirmation code and try again.');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Error checking file existence:', error);
      alert('An error occurred while checking the file. Please try again later.');
    }
  };
  


  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="Passport_No" className="block text-gray-700 text-sm font-bold mb-2">
                {content[language].Passport_No}
              </label>
              <input
                type="text"
                id="Passport_No"
                name="Passport_No"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder="Enter your password number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700 text-sm font-bold mb-2">
                {content[language].fullName}
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='Enter your full name'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
                {content[language].dateOfBirth}
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmcode" className="block text-gray-700 text-sm font-bold mb-2">
                {content[language].confirmCode}
              </label>
              <input
                type="text"
                id="confirmcode"
                name="confirmcode"
                value={confirmCode}
                onChange={(e) => setConfirmCode(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='Enter your confirmation code'
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {content[language].submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubmitForm;
