import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import SubmitForm from './components/SubmitForm';
import Section4 from './components/Section4';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="flex flex-col min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        <Section1 language={language} />
        <Section2 language={language} />
        <Section3 language={language} />
        <SubmitForm language={language} />
        <Section4 language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
