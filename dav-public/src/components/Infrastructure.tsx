import { motion } from 'framer-motion';
import Image from 'next/image';

const infraData = [
  {
    img: '/infra1.jpg',
    title: 'Dance Studio',
    desc: 'A vibrant space for creativity and expression through dance.'
  },
  {
    img: '/infra2.jpg',
    title: 'Karaate Dojo',
    desc: 'Expansive sports arenas and facilities for holistic physical development.'
  },
  {
    img: '/infra3.jpg',
    title: 'Library',
    desc: 'A vast collection of books and digital resources in a serene environment.'
  },
  {
    img: '/infra4.jpg',
    title: 'Yoga & Meditation Center',
    desc: 'A tranquil space for mindfulness and relaxation.'
  },
  {
    img: '/infra5.jpg',
    title: 'Music Room',
    desc: 'A colorful space filled with instruments and resources to inspire creativity.'
  },
  {
    img: '/infra6.jpg',
    title: 'Band Auditorium',
    desc: 'A modern auditorium for performances, lectures, and events.'
  }
];

const Infrastructure = () => (
  <section id="infrastructure" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">World-Class Infrastructure</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {infraData.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={320}
              height={200}
              className="rounded-xl mb-4 object-cover"
            />
            <h3 className="text-2xl text-blue-900 font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-center">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Infrastructure;
