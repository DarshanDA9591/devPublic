'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Enquiry & Interaction',
    desc: 'Parents are welcome to visit the school, interact with our team, and understand our learning approach.',
  },
  {
    step: '02',
    title: 'Application Submission',
    desc: 'Fill out the admission form and submit the required documents for verification.',
  },
  {
    step: '03',
    title: 'Assessment & Review',
    desc: 'Students may undergo a simple interaction or assessment appropriate to their age group.',
  },
  {
    step: '04',
    title: 'Confirmation & Enrollment',
    desc: 'Selected students receive confirmation and complete the enrollment process.',
  },
];

const AdmissionsProcess = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Admissions Process
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our admission process is simple, transparent, and designed to ensure
            a smooth transition for students and parents.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">

          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-yellow-400 text-4xl font-extrabold mb-4">
                {item.step}
              </div>

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

export default AdmissionsProcess;
