"use client";
import { motion } from 'framer-motion';
import { FaLeaf, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import FeatureCard from './FeatureCard';
import LeaderCard from './LeaderCard';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F9F8F4] to-[#E6E4D5]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h1
                    className="text-5xl font-bold text-[#0C231B] mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About <span className='text-[#FF5402]'>Scholar Rise India</span>
                </motion.h1>

                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-xl text-[#0C231B] text-center max-w-3xl mx-auto">
                        Scholar Rise India is dedicated to empowering underprivileged students through education,
                        fostering a brighter future for individuals and communities across India.
                    </p>
                </motion.section>

                <motion.section
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <FeatureCard
                        icon={<FaLeaf className="text-5xl text-[#FF5402]" />}
                        title="Sustainable Education"
                        description="We provide long-term educational support to ensure lasting impact."
                    />
                    <FeatureCard
                        icon={<FaGraduationCap className="text-5xl text-[#FF5402]" />}
                        title="Quality Learning"
                        description="Our programs focus on delivering high-quality education to all students."
                    />
                    <FeatureCard
                        icon={<FaHandsHelping className="text-5xl text-[#FF5402]" />}
                        title="Community Engagement"
                        description="We work closely with local communities to tailor our approach."
                    />
                </motion.section>

                <motion.section
                    className="bg-white rounded-lg shadow-xl p-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-[#0C231B] mb-4">Our Story</h2>
                    <p className="text-[#0C231B] mb-4">
                        Founded in 2010, Scholar Rise India began as a small initiative in rural Maharashtra.
                        Today, we&apos;ve grown into a nationwide organization, touching the lives of thousands of students annually.
                    </p>
                    <p className="text-[#0C231B]">
                        Our team of dedicated educators, volunteers, and administrators works tirelessly to
                        bridge the education gap and create opportunities for those who need it most.
                    </p>
                </motion.section>

                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-[#0C231B] mb-8 text-center">Our Leaders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <LeaderCard
                            name="Priya Sharma"
                            role="Co-founder & Executive Director"
                            image="/people/priya-sharma.jpg"
                            bio="With over 15 years of experience in education and social work, Priya brings passion and expertise to Scholar Rise India. Her vision drives our mission forward."
                        />
                        <LeaderCard
                            name="Rahul Patel"
                            role="Co-founder & Program Director"
                            image="/people/rahul-patel.jpg"
                            bio="Rahul's background in community development and his innovative approach to education have been instrumental in shaping our impactful programs. He is a true leader in the field."
                        />
                    </div>
                </motion.section>

                <motion.section
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Link
                        href="/donate"
                        className="inline-block bg-[#FF5402] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5202f1] transition duration-300 transform hover:scale-105"
                    >
                        Join Our Mission
                    </Link>
                </motion.section>
            </main>
        </div>
    );
};

export default AboutPage;