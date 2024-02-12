import Hero from "./sections/home/Hero";
import Footer from "./components/Footer/Footer";
import JudgesSection from "./sections/Judges/Judges";
import PrizesPage from "./pages/Prizes";
import ExpectationsPage from "./pages/Expectations";
import AboutTheEventPage from "./pages/AboutTheEventPage";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTheEventPage/>
      <PrizesPage />
      <ExpectationsPage />
      <JudgesSection />
      <Footer />
    </>
  );
}
