import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        className="flex-1 flex justify-center md:justify-end items-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/chairman.jpg"
          alt="About School"
          width={200}
          height={200}
          className="rounded-2xl shadow-xl object-cover border-4 border-yellow-400 bg-white"
          style={{ marginTop: 0, marginLeft: 0 }}
        />
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Chairman’s Message</h2>
        <p className="text-lg text-gray-700 mb-4">Our vision is to nurture leaders of tomorrow through holistic education, innovation, and strong values.</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><span className="font-semibold text-maroon-800">Vision:</span> Inspire excellence and global citizenship.</li>
          <li><span className="font-semibold text-maroon-800">Mission:</span> Foster creativity, critical thinking, and compassion.</li>
          <li><span className="font-semibold text-maroon-800">Values:</span> Integrity, respect, and lifelong learning.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default About;
