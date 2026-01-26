import { Hero, About, Infrastructure, Academics, Gallery, Chatbot, Footer } from "../components";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-white font-sans">
      <Hero />
      <About />
      <Infrastructure />
      <Academics />
      <Gallery />
      <Chatbot />
      <Footer />
    </div>
  );
}
