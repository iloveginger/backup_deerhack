import FAQPage from "@/app/components/FAQ/FAQPage";
import { cabinetBold } from "@/app/utils/fonts";

const Faq = () => {
  return (
    <div className="flex flex-col items-center bg-dark-purple h-[100%]">
      <h1
        className={`bg-gradient-to-r text-center from-primary to-secondary text-4xl bg-clip-text text-transparent font-[800] mb-6 ${cabinetBold.className}`}
      >
        FAQ
      </h1>
      <FAQPage />
    </div>
  );
};

export default Faq;
