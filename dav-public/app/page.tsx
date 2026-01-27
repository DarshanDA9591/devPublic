import { Hero, About, Infrastructure, Academics, Gallery, Chatbot, Footer } from "../src/components";
import ProgressOfWisdom from "@/components/ProgressOfWisdom";
import WhoWeAre from '@/components/WhoWeAre';
 

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-white font-sans">
      <Hero />
      <ProgressOfWisdom />
      <About />
      <WhoWeAre />
      <Infrastructure />
      <Academics />
      <Gallery />
      <Chatbot />
      <Footer />
    </div>
  );
}
