import Hero from "./sections/home/Hero";
import Footer from "./components/Footer/Footer";
import JudgesSection from "./sections/Judges/Judges";
import PrizesPage from "./pages/Prizes";
import ExpectationsPage from "./pages/Expectations";
import AboutTheEventPage from "./pages/AboutTheEventPage";
import DeerhackStatsPage from "./pages/DeerhackStatsPage";
import TrackPage from "./pages/TrackPage";
import BenefitsPage from "./pages/BenefitsPage";
import Faq from "./sections/FAQ/FAQ";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutTheEventPage />
      <BenefitsPage />
      <TrackPage/>
      <PrizesPage />
      <ExpectationsPage />
      <DeerhackStatsPage />
      <JudgesSection />
      <Faq />
      <Footer />
    </>
  );
}
