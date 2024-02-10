import Hero from "./sections/home/Hero";
import Footer from "./components/Footer/Footer";
import PrizesPage from "./pages/page";
import JudgesSection from "./sections/Judges/Judges";

export default function Home() {
  return (
    <>
      <Hero/>
      <PrizesPage/>
      <JudgesSection/>
      <Footer/>
      </>
  );
}
