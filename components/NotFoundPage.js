"use client";
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F9F8F4] via-[#E6E4D5] to-[#FFD1B8] flex items-center justify-center p-4">
            <motion.main
                className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <FaSearch className="text-[#FF5402] text-5xl md:text-6xl mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0C231B] mb-4">
                        404 - Page Not Found
                    </h1>
                    <p className="text-xl text-[#0C231B] max-w-2xl mx-auto">
                        Oops! The page you&apos;re looking for seems to have wandered off.
                    </p>
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <button
                        onClick={() => router.push('/home')}
                        className="bg-[#FF5402] text-white px-6 py-2 rounded-full hover:bg-[#0C231B] transition-colors"
                    >
                        Go Home Now
                    </button>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default NotFoundPage;