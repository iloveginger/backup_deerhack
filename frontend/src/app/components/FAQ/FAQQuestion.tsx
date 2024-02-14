"use client";
import React, { useState } from "react";
import { cabinetBold, cabinetRegular } from "@/app/utils/fonts";
import PlusHorizontalSVG from "@/app/assets/images/plusHorizontal";
import PlusVerticalSVG from "@/app/assets/images/plusVertical";

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
    <div className="flex flex-col justify-center items-end bg-dark-purple text-white text-xl border-b border-secondary">
      <button
        className={`flex items-center justify-between text-left py-2 w-full mb-2 ${cabinetBold.className}`}
        onClick={toggleAnswerVisibility}
      >
        {question.question}
        <span className="relative w-6 h-6">
          <PlusHorizontalSVG
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500  ease-in-out transform`}
          />
          <PlusVerticalSVG
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform ${isAnswerVisible ? "-rotate-90" : "rotate-0"}`}
          />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all opacity-0 ease-in-out duration-500 ${isAnswerVisible ? "max-h-screen mb-2 opacity-100" : "max-h-0 -mb-2"}`}
      >
        {isAnswerVisible && (
          <p
            className={`mt-2 text-sm ${cabinetRegular.className} transition-opacity ease-in-out duration-400`}
          >
            {question.answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQQuestion;
