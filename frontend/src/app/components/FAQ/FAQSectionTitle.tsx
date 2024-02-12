// components/FAQSectionTitle.tsx
import React from 'react';

interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const FAQSectionTitle: React.FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <div className={`lg:w-1/4 cursor-pointer ${isActive ? 'bg-yellow-500 text-white' : 'bg-white text-black'}`} onClick={onClick}>
      <h2 className="p-4">{title}</h2>
    </div>
  );
};

export default FAQSectionTitle;
