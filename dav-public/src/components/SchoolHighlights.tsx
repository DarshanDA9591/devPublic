'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    value: '25+',
    label: 'Years of Excellence',
  },
  {
    value: '3000+',
    label: 'Happy Students',
  },
  {
    value: '150+',
    label: 'Dedicated Faculty',
  },
  {
    value: '100%',
    label: 'Holistic Development',
  },
];

const SchoolHighlights = () => {
  return (
    <section className="bg-blue-900 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Journey in Numbers
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            A legacy built on trust, excellence, and a commitment to nurturing
            young minds for a brighter future.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">
                {item.value}
              </div>
              <p className="text-blue-100 text-sm md:text-base tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SchoolHighlights;
