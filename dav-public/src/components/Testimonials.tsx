'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Parent of Grade 5 Student',
    role: 'Parent',
    message:
      'The school has provided a nurturing environment where our child has grown academically and emotionally. We truly appreciate the dedicated faculty.',
  },
  {
    name: 'Student – Grade 10',
    role: 'Student',
    message:
      'The teachers encourage us to think creatively and confidently. Learning here is engaging and enjoyable every day.',
  },
  {
    name: 'Parent of Grade 8 Student',
    role: 'Parent',
    message:
      'The focus on values, discipline, and holistic development makes this school truly special.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Voices from parents and students who are part of our learning journey.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                “{item.message}”
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-blue-900">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
