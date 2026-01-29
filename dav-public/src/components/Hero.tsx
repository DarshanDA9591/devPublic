import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  'growth',
  'freedom',
  'opportunity',
  'creativity',
  'life',
];

const backgroundImages = [
  '/school-hero.jpg',
  '/infra6.jpg',
  '/p2.jpg',
  '/infra3.jpg',
  '/p6.jpg',
];

const typingSpeed = 300;
const pauseTime = 11000;

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
const introText =
  "Education is not about reaching a destination;\nit is about becoming a better human every day.";


const [introDisplayed, setIntroDisplayed] = useState('');

useEffect(() => {
  let index = 0;
  setIntroDisplayed('');

  const interval = setInterval(() => {
    setIntroDisplayed((prev) => prev + introText.charAt(index));
    index++;

    if (index >= introText.length) {
      clearInterval(interval);
    }
  }, 100); // typing speed (adjust if needed)

  return () => clearInterval(interval);
}, []);


  // Typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(words[wordIndex].slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), pauseTime);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(words[wordIndex].slice(0, displayed.length - 1));
        }, typingSpeed / 2);
      } else {
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  // Background image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-maroon-800 to-yellow-400 text-white overflow-hidden">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          <motion.img
            key={bgIndex}
            src={backgroundImages[bgIndex]}
            alt="School campus background"
            className="object-cover w-full h-full absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center gap-6">
        
<div className="text-xl md:text-4xl font-semibold text-yellow-200 tracking-wide text-center max-w-4xl whitespace-pre-line">
  {introDisplayed}
  <span className="animate-pulse ml-1">|</span>
</div>



<div className="text-2xl md:text-4xl font-bold text-white animate-fadein">
  Education is <br />
  <span className="inline-block min-w-[120px] ml-1 -translate-x-2 md:-translate-x-4 transform text-yellow-400 border-b-2 border-yellow-400">
    <span className="text-3xl md:text-5xl font-semibold italic tracking-wide">
      {displayed}
    </span>
    <span className="animate-pulse ml-1">|</span>
  </span>
</div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="#admissions"
            className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Admissions Open
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
