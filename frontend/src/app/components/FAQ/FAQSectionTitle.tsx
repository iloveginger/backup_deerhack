import { ReactElement } from "react";

interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
  link :ReactElement;
}

const FAQSectionTitle: React.FC<Props> = ({ title, isActive, onClick,link }) => {
  return (
    <div
      className={`cursor-pointer flex flex-row items-center ${isActive ? "text-secondary" : "text-white"}`}
      onClick={onClick}
    >
      <span className="fill-black">
        {link}

      </span>
      <h2 className="p-4 ">{title}</h2>
    </div>
  );
};

export default FAQSectionTitle;
