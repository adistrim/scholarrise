"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandHoldingHeart, FaGraduationCap, FaUsers, FaTimes, FaHeart } from 'react-icons/fa';
import DonationImpactCard from './DonationImpactCard';
import { useState } from 'react';

const PopupModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-gradient-to-br from-[#F9F8F4] to-[#E6E4D5] p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <motion.h2 
                                className="text-3xl font-bold text-[#0C231B]"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Coming Soon!
                            </motion.h2>
                            <motion.button
                                onClick={onClose}
                                className="text-[#0C231B] hover:text-[#FF5402] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaTimes size={24} />
                            </motion.button>
                        </div>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-[#0C231B] text-lg">
                                Our donation system is currently under development. Thank you for your interest in supporting our cause.
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.button 
                                onClick={onClose}
                                className="bg-[#FF5402] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#ff5202f1] transition-colors flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaHeart />
                                <span>I&apos;ll be back!</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const DonatePage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#F9F8F4] to-[#E6E4D5]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-[#0C231B] mb-4">
                        Support <span className='text-[#FF5402]'>Our Cause</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#0C231B] max-w-3xl mx-auto">
                        Your donation can make a significant difference in the lives of underprivileged students across India.
                        Help us create a brighter future through education.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    <motion.section
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-lg shadow-xl p-8 h-full">
                            <h2 className="text-3xl font-bold text-[#0C231B] mb-4">Why Donate?</h2>
                            <p className="text-[#0C231B] mb-4">
                                Education is a powerful tool for change. By donating to Scholar Rise India, you&apos;re not just
                                supporting individual students; you&apos;re investing in the future of our nation.
                            </p>
                            <p className="text-[#0C231B]">
                                Your contribution, no matter the size, can help provide textbooks, fund scholarships,
                                improve learning facilities, and support our dedicated team of educators and mentors.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="bg-[#FF5402] text-white rounded-lg shadow-xl p-8 h-full flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">Donate Now</h2>
                            <p className="mb-6">Your support can change lives. Every contribution counts.</p>
                            <button
                                onClick={openPopup}
                                className="inline-block bg-white text-[#FF5402] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#f0f0f0] transition duration-300 transform hover:scale-105"
                            >
                                Make a Donation
                            </button>
                        </div>
                    </motion.section>
                </div>

                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-[#0C231B] mb-8 text-center">How Your Donation Helps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-[#FF5402] mb-2">₹1,000</h3>
                            <p className="text-[#0C231B]">Provides textbooks and school supplies for one student for a year</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-[#FF5402] mb-2">₹5,000</h3>
                            <p className="text-[#0C231B]">Sponsors a student&apos;s tuition fees for one semester</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-[#FF5402] mb-2">₹10,000</h3>
                            <p className="text-[#0C231B]">Funds a community library with educational resources</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <DonationImpactCard
                        icon={<FaHandHoldingHeart className="text-5xl text-[#FF5402]" />}
                        title="Empower Dreams"
                        description="Your donation provides essential resources and support to help students achieve their educational goals."
                    />
                    <DonationImpactCard
                        icon={<FaGraduationCap className="text-5xl text-[#FF5402]" />}
                        title="Foster Education"
                        description="Contribute to quality learning programs that create lasting impact in underserved communities."
                    />
                    <DonationImpactCard
                        icon={<FaUsers className="text-5xl text-[#FF5402]" />}
                        title="Build Communities"
                        description="Your support helps strengthen entire communities by investing in their future leaders."
                    />
                </motion.section>

                <motion.section
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <p className="text-[#0C231B] text-lg mb-2">
                        For large donations or corporate partnerships, please contact us at:
                    </p>
                    <a href="mailto:donations@scholarriseindia.org" className="text-[#FF5402] text-xl font-semibold hover:underline">
                        donations@scholarriseindia.org
                    </a>
                </motion.section>
            </main >
            <PopupModal isOpen={isPopupOpen} onClose={closePopup} />
        </div >
    );
};

export default DonatePage;