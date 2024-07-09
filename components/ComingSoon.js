"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const ComingSoonPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F9F8F4] to-[#E6E4D5] flex items-center justify-center">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <motion.h1
                    className="text-5xl font-bold text-[#0C231B] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Coming Soon
                </motion.h1>

                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-xl text-[#0C231B] max-w-2xl mx-auto">
                        Stay tuned!
                    </p>
                </motion.section>

                <motion.section
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="#"
                        className="inline-block bg-[#FF5402] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5202f1] transition duration-300 transform hover:scale-105"
                    >
                        Notify Me
                    </a>
                </motion.section>
            </main>
        </div>
    );
};

export default ComingSoonPage;
