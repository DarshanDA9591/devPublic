import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4 space-y-20">

      {/* ================= Chairman Section ================= */}
      <div className="flex flex-col md:flex-row items-center gap-12">
<motion.div
  className="flex-1 flex justify-center md:justify-end"
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="flex flex-col sm:flex-row gap-20">
    {/* Main Chairman Image */}
    <Image
    src="/image-14.jpeg"
      alt="Chairman"
      width={320}
      height={220}
      className="rounded-2xl shadow-xl object-cover border-4 border-yellow-400 bg-white"
    />

    {/* Extra Image (for balance) */}
{/* Extra Image (for balance) */}
<div className="flex flex-col items-center">
  <Image
    src="/chairman.jpg"
    alt="School Campus"
    width={220}
    height={220}
    className="rounded-2xl shadow-lg object-cover border-2 border-yellow-300 bg-white"
  />
  <p className="mt-2 text-sm font-semibold text-blue-900">
    Sri. N.SACHIDANANDA MURTHY – CHAIRMAN
  </p>
</div>

  </div>
</motion.div>



        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Chairman’s Message
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Our vision is to nurture leaders of tomorrow through holistic
            education, innovation, and strong values.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-maroon-800">Vision:</span>{' '}
              Inspire excellence and global citizenship.
            </li>
            <li>
              <span className="font-semibold text-maroon-800">Mission:</span>{' '}
              Foster creativity, critical thinking, and compassion.
            </li>
            <li>
              <span className="font-semibold text-maroon-800">Values:</span>{' '}
              Integrity, respect, and lifelong learning.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* ================= Leadership Team ================= */}
      <div>
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Leadership Team
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: 'Sri R.ANAND – SECRETARY',
              image: '/R.ANAND-SECRETARY.jpg',
              message:
                'Ensuring operational excellence and a supportive learning environment for all.',
            },
            {
              name: 'Mrs JAYASHREE. S. MURTHY – C.E.O',
              image: '/JAYASHREE.S.MURTHY-C.E.O (1).jpg',
              message:
                'Driving strategic growth while upholding the core values of education.',
            },
            {
              name: 'Principal Dr. Kavya Shree Basappa',
              image: '/Principal-Kavya-Shree-Basappa.jpg',
              message:
                'Leading academic excellence with discipline, care, and innovation.',
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={160}
                  height={160}
                  className="rounded-xl object-cover border-4 border-yellow-400 bg-white"
                />
              </div>

              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                {person.name}
              </h4>

              <p className="text-gray-600 text-sm">
                {person.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default About;
