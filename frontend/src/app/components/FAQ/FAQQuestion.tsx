import { cabinetBlack, cabinetRegular } from "@/app/utils/fonts";
import React, { useState } from "react";

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
    <div className="flex flex-col justify-center items-end bg-dark-purple text-white">
      <button
        className={`flex items-center justify-between text-left py-2 w-full px-4 mb-5 ${cabinetRegular.className}`}
        onClick={toggleAnswerVisibility}
      >
        {question.question}
        <span className="">+</span>
      </button>
      {isAnswerVisible && (
        <div className={`px-4 ${cabinetRegular.className}`}>
          <p className="ml-6 mt-2">{question.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQQuestion