import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  'growth',
  'freedom',
  'opportunity',
  'creativity',
  'life',
];

const typingSpeed = 300;
const pauseTime = 10000;

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

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

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-maroon-800 to-yellow-400 text-white overflow-hidden pt-0 mt-0">
      {/* Background image restored */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/school-hero.jpg"
          alt="School campus background"
          className="object-cover w-full h-full opacity-40"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-transparent" />
      </div>
      <div className="z-10 text-center px-4 w-full flex flex-col items-center justify-center gap-6">
        <div className="text-base md:text-lg font-semibold text-yellow-200 tracking-wide mb-2 mt-8 md:mt-12 animate-fadein">
          Education is not preparation for life; <br/>Education is life itself.
        </div>
        <div className="text-2xl md:text-4xl font-bold text-white mb-8 animate-fadein">
          Education is
          <span className="inline-block min-w-[120px] mx-2 text-yellow-400 border-b-2 border-yellow-400">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#admissions" className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105">Admissions Open</a>
          <a href="#contact" className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
