"use client";
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaGraduationCap, FaUsers } from 'react-icons/fa';
import DonationImpactCard from './DonationImpactCard';

const DonatePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F9F8F4] to-[#E6E4D5]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h1
                    className="text-5xl font-bold text-[#0C231B] mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Support <span className='text-[#FF5402]'>Our Cause</span>
                </motion.h1>

                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-xl text-[#0C231B] text-center max-w-3xl mx-auto">
                        Your donation can make a significant difference in the lives of underprivileged students across India. 
                        Help us create a brighter future through education.
                    </p>
                </motion.section>

                <motion.section
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
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
                    className="bg-white rounded-lg shadow-xl p-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-[#0C231B] mb-4">Why Donate?</h2>
                    <p className="text-[#0C231B] mb-4">
                        Education is a powerful tool for change. By donating to Scholar Rise India, you&apos;re not just 
                        supporting individual students; you&apos;re investing in the future of our nation.
                    </p>
                    <p className="text-[#0C231B]">
                        Your contribution, no matter the size, can help provide textbooks, fund scholarships, 
                        improve learning facilities, and support our dedicated team of educators and mentors.
                    </p>
                </motion.section>

                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-[#0C231B] mb-8 text-center">How Your Donation Helps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a
                        href="#"
                        className="inline-block bg-[#FF5402] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5202f1] transition duration-300 transform hover:scale-105"
                    >
                        Donate Now
                    </a>
                </motion.section>

                <motion.section
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <p className="text-[#0C231B] text-lg">
                        For large donations or corporate partnerships, please contact us at:
                        <br />
                        <a href="mailto:donations@scholarriseindia.org" className="text-[#FF5402] hover:underline">
                            donations@scholarriseindia.org
                        </a>
                    </p>
                </motion.section>
            </main>
        </div>
    );
};

export default DonatePage;
