import { motion } from 'framer-motion';

const academics = [
  { year: 'BEST', title: 'Library System', desc: 'A modern library with digital and print resources for all Classes.', img: '/p2.jpg' },
  { year: 'BEST', title: 'Computer Lab', desc: 'State-of-the-art computer lab with high-speed internet and latest technology.', img: '/p3.jpg' },
  { year: 'BEST', title: 'Science Lab', desc: 'Fully equipped science lab for hands-on experiments and discovery.', img: '/p4.jpg' },
];

const Academics = () => (
  <section id="academics" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Academics & Activities</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {academics.map((item, idx) => (
          <motion.div
            key={item.title}
            className="bg-gradient-to-br from-blue-100 to-yellow-50 rounded-2xl shadow-lg p-8 w-full max-w-sm text-center hover:shadow-2xl transition flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            <div className="text-3xl font-bold text-blue-900 mb-2">{item.year}</div>
            <div className="text-xl font-semibold mb-1 text-blue-900">{item.title}</div>
            <div className="text-gray-700">{item.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Academics;
