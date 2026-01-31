'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['growth', 'freedom', 'opportunity', 'creativity', 'life'];

const backgroundImages = [
  '/school-hero.jpg',
  '/infra6.jpg',
  '/p2.jpg',
  '/infra3.jpg',
  '/p6.jpg',
];

const notifications = [
  '📢 Admissions Open for Academic Year 2025–26',
  '🏫 Holistic Education with Modern Infrastructure',
  '🎓 Experienced Faculty & Student-Centric Learning',
];

const introText =
  "Education is not about reaching a destination;\nit is about becoming a better human every day.";

export default function Hero() {
  /* ---------------- INTRO TYPING ---------------- */
  const [introIndex, setIntroIndex] = useState(0);

  useEffect(() => {
    if (introIndex >= introText.length) return;
    const t = setTimeout(() => setIntroIndex((p) => p + 1), 100);
    return () => clearTimeout(t);
  }, [introIndex]);

  const introDisplayed = introText.slice(0, introIndex);

  /* ---------------- WORD TYPING ---------------- */
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let t: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < words[wordIndex].length) {
        t = setTimeout(
          () => setDisplayed(words[wordIndex].slice(0, displayed.length + 1)),
          300
        );
      } else {
        setTyping(false);
        t = setTimeout(() => setTyping(true), 11000);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(
          () => setDisplayed(words[wordIndex].slice(0, displayed.length - 1)),
          150
        );
      } else {
        setTyping(true);
        setWordIndex((p) => (p + 1) % words.length);
      }
    }

    return () => clearTimeout(t);
  }, [displayed, typing, wordIndex]);

  /* ---------------- BACKGROUND SLIDESHOW ---------------- */
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setBgIndex((p) => (p + 1) % backgroundImages.length),
      3000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">

      {/* 🔔 RIGHT → LEFT MOVING NOTIFICATION */}
<div className="absolute top-0 left-0 w-full bg-transparent py-2 overflow-hidden z-20 mt-6">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 whitespace-nowrap marquee-rtl font-semibold text-white-600 text-lg md:text-xl tracking-wide"

>
            {notifications.map((text, i) => (
              <span key={i}>{text}</span>
            ))}
            {notifications.map((text, i) => (
              <span key={`dup-${i}`}>{text}</span>
            ))}
          </div>
        </div>
      </div>

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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col gap-6 items-center pt-14">

        <div className="text-xl md:text-4xl font-semibold text-yellow-200 max-w-4xl whitespace-pre-line">
          {introDisplayed}
          <span className="animate-pulse ml-1">|</span>
        </div>

        <div className="text-2xl md:text-4xl font-bold">
          Education is <br />
          <span className="text-yellow-400 border-b-2 border-yellow-400">
            <span className="text-3xl md:text-5xl italic">{displayed}</span>
            <span className="animate-pulse ml-1">|</span>
          </span>
        </div>

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
}
