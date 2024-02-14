import Hero from "./sections/home/Hero";
import Footer from "./components/Footer/Footer";
import JudgesSection from "./sections/Judges/Judges";
import PrizesPage from "./pages/Prizes";
import ExpectationsPage from "./pages/Expectations";
import AboutTheEventPage from "./pages/AboutTheEventPage";
import DeerhackStatsPage from "./pages/DeerhackStatsPage";
import BenefitsPage from "./pages/BenefitsPage";
import SponsorPage from "./pages/page";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutTheEventPage />
      <BenefitsPage />
      <PrizesPage />
      <ExpectationsPage />
      <DeerhackStatsPage />
      <JudgesSection />
      <SponsorPage/>
      <Footer />
    </>
  );
}
