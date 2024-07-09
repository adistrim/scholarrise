import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F9F8F4] text-[#0C231B] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b-2 text-[#FF5402] border-[#0C231B] pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:underline transition duration-300 ease-in-out">Donate</Link></li>
            <li><Link href="/about" className="hover:underline transition duration-300 ease-in-out">About Us</Link></li>
            <li><Link href="/work" className="hover:underline transition duration-300 ease-in-out">Work</Link></li>
            <li><Link href="/contact" className="hover:underline transition duration-300 ease-in-out">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b-2 text-[#FF5402] border-[#0C231B] pb-2 inline-block">Contact Information</h3>
          <address className="not-italic">
            <p className="mb-3">123 Education Lane</p>
            <p className="mb-3">ScholarTown, ST 12345</p>
            <p className="mb-3">Phone: <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a></p>
            <p>Email: <a href="mailto:info@scholarriseindia.org" className="hover:underline">info@scholarriseindia.org</a></p>
          </address>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b-2 text-[#FF5402] border-[#0C231B] pb-2 inline-block">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-[#0C231B] hover:text-[#4267B2] transition duration-300 ease-in-out"><FaFacebook size={28} /></a>
            <a href="#" className="text-[#0C231B] hover:text-[#1DA1F2] transition duration-300 ease-in-out"><FaTwitter size={28} /></a>
            <a href="#" className="text-[#0C231B] hover:text-[#E1306C] transition duration-300 ease-in-out"><FaInstagram size={28} /></a>
            <a href="#" className="text-[#0C231B] hover:text-[#0077B5] transition duration-300 ease-in-out"><FaLinkedin size={28} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 border-t border-[#0C231B] pt-6">
        <p>&copy; {new Date().getFullYear()} Scholar Rise India. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;