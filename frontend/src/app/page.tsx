import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-dark-purple">
      <p className="bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent text-5xl">
        Hello to The DeerHack 2024!
      </p>
      <Footer />
    </main>
  );
}
