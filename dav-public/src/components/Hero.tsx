'use client';

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

const introText =
  "Education is not about reaching a destination;\nit is about becoming a better human every day.";

const Hero = () => {
  /* ---------------- INTRO TYPING (SAFE) ---------------- */
  const [introIndex, setIntroIndex] = useState(0);

  useEffect(() => {
    if (introIndex >= introText.length) return;

    const timeout = setTimeout(() => {
      setIntroIndex((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [introIndex]);

  const introDisplayed = introText.slice(0, introIndex);

  /* ---------------- WORD TYPING ---------------- */
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(words[wordIndex].slice(0, displayed.length + 1));
        }, 300);
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), 11000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(words[wordIndex].slice(0, displayed.length - 1));
        }, 150);
      } else {
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  /* ---------------- BACKGROUND SLIDESHOW ---------------- */
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={bgIndex}
            src={backgroundImages[bgIndex]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col gap-6 items-center">

        {/* Intro Text */}
        <div className="text-xl md:text-4xl font-semibold text-yellow-200 max-w-4xl whitespace-pre-line">
          {introDisplayed}
          <span className="animate-pulse ml-1">|</span>
        </div>

        {/* Animated Word */}
        <div className="text-2xl md:text-4xl font-bold">
          Education is <br />
          <span className="text-yellow-400 border-b-2 border-yellow-400">
            <span className="text-3xl md:text-5xl italic">
              {displayed}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold">
            Admissions Open
          </a>
          <a className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold">
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
