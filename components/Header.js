"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/coming-soon", label: "Donate" },
        { href: "/about", label: "About Us" },
        { href: "/coming-soon", label: "Work" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <header className={`sticky top-0 z-50 bg-[#F9F8F4] transition-all duration-300 ${scrolled ? 'shadow-md bg-opacity-90 backdrop-blur-sm' : ''}`}>
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
                <Link href="/">
                    <div className="hover:opacity-75 cursor-pointer transition-opacity duration-300">
                        <Image src="/logos/scholarrise.png" alt="Logo" width={60} height={60} />
                    </div>
                </Link>
                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-lg">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <p className={`font-semibold cursor-pointer transition-colors duration-300 ${pathname === link.href ? "text-[#FF5402]" : "hover:text-[#FF5402]"}`}>
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </nav>
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#F9F8F4] shadow-lg"
                    >
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <motion.p
                                    className={`py-3 px-4 font-semibold cursor-pointer ${pathname === link.href ? "text-[#FF5402]" : "hover:text-[#FF5402]"}`}
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.label}
                                </motion.p>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;