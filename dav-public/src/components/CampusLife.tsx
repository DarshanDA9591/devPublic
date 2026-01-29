'use client';

import { motion } from 'framer-motion';

const facilities = [
  {
    title: 'Smart Classrooms',
    desc: 'Technology-enabled classrooms that make learning interactive and engaging.',
    image: '/smartClass.webp',
  },
  {
    title: 'Science & Computer Labs',
    desc: 'Well-equipped laboratories to encourage experimentation and innovation.',
    image: '/computerLab.jpg',
  },
  {
    title: 'Library & Reading Zones',
    desc: 'A calm and resource-rich environment that nurtures reading habits.',
    image: '/library.jpeg',
  },
  {
    title: 'Sports & Physical Education',
    desc: 'Spacious grounds and professional coaching for physical development.',
    image: '/sports.jpg',
  },
];

const CampusLife = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Campus Life & Facilities
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our campus provides a safe, inspiring, and well-equipped environment
            where students learn, grow, and thrive every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div
                className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampusLife;
