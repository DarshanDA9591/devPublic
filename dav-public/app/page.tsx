import { Hero, About, Infrastructure, Academics, Gallery, Chatbot, Footer } from "../src/components";
import ProgressOfWisdom from "@/components/ProgressOfWisdom";
import WhoWeAre from '@/components/WhoWeAre';
import WhyChooseUs from '@/components/WhyChooseUs';
import SchoolHighlights from '@/components/SchoolHighlights';
import CampusLife from '@/components/CampusLife';
import AdmissionsProcess from '@/components/AdmissionsProcess';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import ContactCTA from '@/components/ContactCTA';



export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-white font-sans">
      <Hero />
      <ProgressOfWisdom />
      <About />
      <WhoWeAre />
      <Infrastructure />
      <WhyChooseUs />
      <CampusLife />
      <SchoolHighlights />
      <AdmissionsProcess />
      <Academics />
      <Gallery />
      <Chatbot />
      <Testimonials />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}
