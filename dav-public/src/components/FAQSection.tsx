'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is the admission process?',
    answer:
      'The admission process includes enquiry, application submission, interaction or assessment, and confirmation of admission.',
  },
  {
    question: 'Which curriculum does the school follow?',
    answer:
      'Our school follows a well-structured curriculum that focuses on academic excellence, values, and holistic development.',
  },
  {
    question: 'What are the school timings?',
    answer:
      'School timings vary by grade level. Detailed timing information is shared with parents during admission.',
  },
  {
    question: 'Does the school provide transportation facilities?',
    answer:
      'Yes, safe and reliable transportation facilities are available across major routes.',
  },
  {
    question: 'How does the school ensure student safety?',
    answer:
      'We maintain strict safety protocols including campus security, trained staff, and regular monitoring.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Answers to common questions from parents and guardians.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold text-blue-900">
                  {faq.question}
                </span>
                <span className="text-yellow-500 text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
