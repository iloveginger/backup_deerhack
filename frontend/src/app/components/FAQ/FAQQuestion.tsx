// components/FAQQuestion.tsx
import React, { useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

interface Props {
  question: Question;
}

const FAQQuestion: React.FC<Props> = ({ question }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div>
      <button
        className="flex items-center w-full text-left py-2 px-4 bg-gray-200 hover:bg-gray-300"
        onClick={toggleAnswerVisibility}
      >
        <span className="mr-2">+</span>
        {question.question}
      </button>
      {isAnswerVisible && (
        <p className="ml-6 mt-2">{question.answer}</p>
      )}
    </div>
  );
};

export default FAQQuestion;
