// src/components/FAQ.js

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import plus and minus icons
import '../Styled/Faq.css'; // Import your CSS file
import { IoIosPhonePortrait } from "react-icons/io";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    { question: 'Why Paybills', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'Why Paybills', answer: 'You use React by creating components and managing their state.' },
    { question: 'Why Paybills', answer: 'You use React by creating components and managing their state.' },
    { question: 'Why Paybills', answer: 'You use React by creating components and managing their state.' },
    { question: 'Why Paybills', answer: 'JSX is a syntax extension that looks similar to HTML and is used with React.' },
  ];

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
  <>
   <div className="containers">
     <div className="faq-container">
      <h1>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <h2>{faq.question}</h2>
            {expanded === index ? (
              <FaMinus className="icons" />
            ) : (
              <FaPlus className="icons" />
            )}
          </div>
          <div
            className={`faq-answer ${expanded === index ? 'show' : 'hide'}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    
   </div>
   <div className="context">
    <div className="iconss">
    <IoIosPhonePortrait color='#fff' size={25}/>
    </div>
    <h3>Download the App</h3>
   </div>
  </>
  );
};

export default FAQ;

