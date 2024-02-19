import FAQPage from "@/app/components/FAQ/FAQPage";
import { cabinetBold } from "@/app/utils/fonts";

const Faq = () => {
  return (
    <div className="flex flex-col items-center bg-dark-purple h-[100%]">
      <h1
        className={`text-center text-3xl lg:text-5xl text-primary-gradient-color w-fit mx-auto ${cabinetBold.className}`}
      >
        FAQ
      </h1>
      <FAQPage />
    </div>
  );
};

export default Faq;
