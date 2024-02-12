// pages/faq.tsx
"use client"
import React, { useState } from 'react';
import FAQSectionTitle from './FAQSectionTitle';
import FAQQuestion from './FAQQuestion';

interface Section {
  title: string;
  questions: Question[];
}

interface Question {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Section 1",
      questions: [
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
      ],
    },
    {
      title: "Section 2",
      questions: [
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 4", answer: "Answer 4" },
      ],
    },
    // Add more sections as needed
  ];

  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  return (
    <div className="container bg-violet">
      <div className='py-8  w-full'>

      <h1 className="text-3xl font-bold mb-4">FAQ</h1>
      <div className="flex">
        <div className=" md:w-full w-full">
          {sections.map((section, index) => (
            <FAQSectionTitle
            key={index}
            title={section.title}
            isActive={activeSectionIndex === index}
            onClick={() => setActiveSectionIndex(index)}
            />
            ))}
        </div>
        <div className="lg:w-3/4">
          {sections[activeSectionIndex].questions.map((question, index) => (
            <FAQQuestion key={index} question={question} />
            ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQPage;
