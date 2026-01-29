'use client';


import { motion } from 'framer-motion';

const features = [
  {
    title: 'Holistic Education',
    desc: 'We focus on academic excellence while nurturing values, creativity, and emotional intelligence.',
    icon: '🎓',
  },
  {
    title: 'Experienced Faculty',
    desc: 'Our dedicated educators inspire curiosity, critical thinking, and lifelong learning.',
    icon: '👩‍🏫',
  },
  {
    title: 'Modern Infrastructure',
    desc: 'Well-equipped classrooms, labs, and learning spaces support a dynamic education experience.',
    icon: '🏫',
  },
  {
    title: 'Student-Centric Approach',
    desc: 'Every child is guided with care, encouragement, and individual attention.',
    icon: '🌱',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-24 px-6 md:px-20">
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
            Why Choose Our School
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are committed to creating a nurturing environment where students
            grow academically, socially, and ethically.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
