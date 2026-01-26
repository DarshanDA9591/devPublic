import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/infra1.jpg',
  '/infra2.jpg',
  '/infra3.jpg',
  '/p2.jpg',
  '/p6.jpg',
  '/infra6.jpg',
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={src}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setLightbox(src)}
            >
              <Image src={src} alt={`Gallery ${idx + 1}`} width={400} height={300} className="object-cover w-full h-48" />
            </motion.div>
          ))}
        </div>
        {lightbox && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setLightbox(null)}>
            <Image src={lightbox} alt="Preview" width={800} height={600} className="rounded-2xl max-h-[80vh] object-contain" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
