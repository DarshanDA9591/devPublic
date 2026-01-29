'use client';

import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-maroon-800 to-yellow-400 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="bg-white/95 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Begin Your Child’s Learning Journey With Us
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            We invite parents and students to visit our campus, interact with
            our educators, and experience a nurturing environment built for
            excellence and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              Contact Us
            </a>

            <a
              href="#admissions"
              className="bg-blue-900 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 transition transform hover:scale-105"
            >
              Apply for Admission
            </a>

            <a
              href="tel:+919999999999"
              className="bg-white text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg border border-blue-900 hover:bg-gray-100 transition transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactCTA;
