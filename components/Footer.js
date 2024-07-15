"use client";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#F9F8F4] text-[#0C231B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[#FF5402]">Quick Links</h3>
            <ul className="space-y-3">
              {['Donate', 'About', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#FF5402] transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[#FF5402]">Contact Information</h3>
            <address className="not-italic space-y-3">
              <p>123 Education Lane</p>
              <p>ScholarTown, ST 12345</p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-[#FF5402] transition duration-300">(123) 456-7890</a></p>
              <p>Email: <a href="mailto:info@scholarriseindia.org" className="hover:text-[#FF5402] transition duration-300">info@scholarriseindia.org</a></p>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[#FF5402]">Stay Connected</h3>
            <p className="mb-4">Follow us on social media for updates and news about our initiatives.</p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, label: 'Facebook' },
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaLinkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a 
                  key={label} 
                  href="#" 
                  aria-label={label}
                  className="text-[#0C231B] hover:text-[#FF5402] transition-colors duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-[#0C231B] pt-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className='text-sm'>&copy; {new Date().getFullYear()} Scholar Rise India. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;