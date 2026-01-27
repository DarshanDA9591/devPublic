import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-blue-900 text-white py-10 px-4 mt-20"
  >
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2">
      {/* Desktop: All in one row, Mobile: stacked */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 w-full justify-between">
        <div className="mb-6 md:mb-0">
          <div className="font-bold text-xl mb-2">D.A.V Public School</div>
          <div># 25/D, 3rd Stage, Industrial Suburb,<br/> Vishweshwaranagar, Mysuru</div>
          <div>Phone: 821 2488429</div>
          <div>Email: info@davpublicschoolmysuru.ac.in</div>
        </div>
        <div className="mt-4 md:mt-0 w-full max-w-xs md:max-w-sm md:ml-4">
          <iframe
            title="DAV Public School Mysuru Map"
            src="https://www.google.com/maps?q=25/D, 3rd Stage, Industrial Suburb, Vishweshwaranagar, Mysuru&output=embed"
            width="120%"
            height="120"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 md:ml-4">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition"><FaFacebook size={28} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition"><FaTwitter size={28} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition"><FaInstagram size={28} /></a>
        </div>
      </div>
    </div>
    <div className="text-center text-sm text-gray-300 mt-6">&copy; 2026 Grand School. All rights reserved.</div>
  </motion.footer>
);

export default Footer;
