import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-end overflow-auto bg-gray-950">
      <Hero />
      <Footer />
    </main>
  );
}
