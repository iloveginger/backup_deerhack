import { cabinetExtraBold } from "@/app/utils/fonts";
import Link from "next/link";
const GoBackToHome = () => {
  return (
    <div>
      <Link
        className={`bg-secondary w-48 ${cabinetExtraBold.className} text-center py-3 px-4 text-lg rounded-md`}
        href="/"
      >
        Go Back to home
      </Link>
    </div>
  );
};

export default GoBackToHome;
