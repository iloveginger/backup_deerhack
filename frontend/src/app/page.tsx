import Hero from "./sections/home/Hero";
import Footer from "./components/Footer/Footer";
import JudgesSection from "./sections/Judges/Judges";
import PrizesPage from "./pages/Prizes";
import ExpectationsPage from "./pages/Expectations";

export default function Home() {
  return (
    <>
      <Hero />
      <PrizesPage />
      <ExpectationsPage />
      <JudgesSection />
      <Footer />
    </>
  );
}
