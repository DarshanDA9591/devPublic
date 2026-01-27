"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navOptions = [
  { label: 'About', href: '#about' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Academics', href: '#academics' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#footer' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="fixed top-0 left-0 w-screen z-50 bg-gradient-to-r from-blue-900 via-maroon-800 to-yellow-400 shadow-xl backdrop-blur-md bg-opacity-90"
      style={{ height: '12vh', left: 0, right: 0, maxWidth: '100vw', overflowX: 'clip' }}
    >
      <div className="w-full flex justify-between items-center py-4 px-4 md:container md:mx-auto md:px-6 max-w-full overflow-x-clip">
<div className="flex items-center">
  <Image
    src="/DAV-School-Logo.png"
    alt="School Logo"
    width={68}
    height={68}
    className="rounded-full border-2 border-yellow-400 shadow-lg mr-3 bg-white object-contain"
  />

  <Link href="#hero" className="flex flex-col justify-center leading-none">
    <span className="text-xl md:text-2xl font-serif font-semibold tracking-wide text-white drop-shadow-lg hover:text-yellow-300 transition">
      D.A.V <br />Public School
    </span>

    <span className="text-[10px] md:text-xs text-yellow-300 tracking-widest uppercase leading-none">
      Knowledge • Character • Excellence
    </span>
  </Link>
</div>


        <nav className="hidden md:flex gap-8">
          {navOptions.map((opt, i) => (
            <motion.a
              key={opt.href}
              href={opt.href}
              className="text-lg font-semibold text-white px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition shadow-md"
              whileHover={{ scale: 1.1, backgroundColor: '#FFD700', color: '#1e3a8a' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {opt.label}
            </motion.a>
          ))}
        </nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex-shrink-0">
          <button
            className="text-white focus:outline-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open navigation menu"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-blue-900 via-maroon-800 to-yellow-400 px-6 pb-6 pt-2 flex flex-col gap-4 shadow-xl w-full"
            style={{ left: 0, right: 0 }}
          >
            {navOptions.map((opt) => (
              <a
                key={opt.href}
                href={opt.href}
                className="text-lg font-semibold text-white px-4 py-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition text-center"
                onClick={() => setOpen(false)}
              >
                {opt.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
