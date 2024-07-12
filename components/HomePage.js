"use client";
import Image from 'next/image';
import { Jacques_Francois_Shadow } from 'next/font/google';
import { motion } from 'framer-motion';
import Link from 'next/link';

const jacques_francois_shadow = Jacques_Francois_Shadow({ subsets: ['latin'], weight: '400' });

export default function HomePage() {
    return (
        <>
            <motion.main
                className="bg-[#F9F8F4] py-8 sm:py-12 md:py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <section className="container mx-auto px-4 flex flex-col md:flex-row items-center text-center md:text-left">
                    <motion.div
                        className="mb-8 md:mb-0 md:w-1/2 flex flex-col items-center md:items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className={`text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mt-4 ${jacques_francois_shadow.className}`}>Scholar Rise India</h1>
                        <div>
                            <motion.hr
                                className="border-t-2 border-orange-500 w-full sm:w-[20rem] my-4"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            />
                            <motion.p
                                className="text-lg lg:text-xl mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Paving the Path to Academic Achievement!
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative w-full md:w-2/5 h-[20rem] sm:h-[28rem] md:h-[36rem] overflow-hidden mt-8 md:mt-0 md:absolute md:right-8 md:top-12 lg:right-24 lg:top-52"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <Image src="/images/students-frame.jpg" alt="Students" fill style={{ objectFit: "contain" }} />
                    </motion.div>
                </section>
            </motion.main>

            <div className='bg-[#F9F8F4]'>
                <motion.section
                    className="bg-[#0C231B] rounded-t-[2rem] sm:rounded-[3rem] min-h-screen overflow-hidden -z-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.div
                        className="container mx-auto px-4 sm:px-8 md:px-[1rem] py-8 sm:py-12 md:py-[3rem]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <div className="flex flex-col items-center md:items-start md:w-3/4 lg:w-2/5">
                            <h2 className="text-3xl text-center md:text-start font-bold text-[#F9F8F4] mb-4">Empowering India&apos;s Future</h2>
                            <p className="text-[#D1D1D1] px-3 sm:px-0 text-center md:text-start mb-4">
                                We believe in the transformative power of education. Our mission is to identify and nurture talented students across India, providing them with the resources and support they need to excel academically and professionally.
                            </p>
                            <div>
                                <Link href="/apply-for-scholarship">
                                    <motion.button
                                        className="bg-orange-500 text-[#F9F8F4] my-[1rem] py-2 px-4 rounded-full border-2 border-[#D1D1D1] hover:bg-orange-600 flex items-center space-x-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Apply for Scholarship <span className="ml-2">&rarr;</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <div className='min-h-screen'>
                        <motion.div
                            className="container mx-auto px-4 sm:px-8 md:px-[1rem] py-8 sm:py-12 md:py-[3rem]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <h2 className="text-3xl font-bold text-[#F9F8F4] mb-6 text-center">Our Programs</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: 'Undergraduate Scholarships',
                                        description: 'Full-ride scholarships for exceptional students pursuing undergraduate degrees in STEM, humanities, and social sciences at top Indian universities.'
                                    },
                                    {
                                        title: 'Postgraduate Fellowships',
                                        description: 'Comprehensive support for postgraduate studies, including tuition, living expenses, and research funding for students aiming to push the boundaries of their fields.'
                                    },
                                    {
                                        title: 'Research Grants',
                                        description: 'Funding opportunities for innovative research projects that address critical challenges in India, fostering collaboration between academia and industry.'
                                    }
                                ].map((program, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#143832] p-6 rounded-lg text-[#D1D1D1]"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                                    >
                                        <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                                        <p>{program.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="container mx-auto px-4 sm:px-8 md:px-[1rem] py-8 sm:py-12 md:py-[3rem]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                        >
                            <h2 className="text-3xl font-bold text-[#F9F8F4] mb-6 text-center">Our Impact</h2>
                            <div className="flex flex-wrap justify-center gap-8 mb-12">
                                {[
                                    { number: '500+', text: 'Scholarships Awarded' },
                                    { number: '50+', text: 'Partner Institutions' },
                                    { number: '95%', text: 'Graduate Employment Rate' },
                                    { number: '₹1 Cr+', text: 'Scholarship Funding Disbursed' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 2 + index * 0.2 }}
                                    >
                                        <p className="text-4xl font-bold text-orange-500">{stat.number}</p>
                                        <p className="text-[#D1D1D1]">{stat.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="container mx-auto px-4 sm:px-8 md:px-[1rem] py-8 sm:py-12 md:py-[3rem]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.2 }}
                        >
                            <h2 className="text-3xl font-bold text-[#F9F8F4] mb-6 text-center">Voices of Our Scholars</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        name: "Someone Sharma",
                                        program: "Computer Science, IIT Delhi",
                                        quote: "Scholar Rise India didn't just fund my education; they believed in my potential and provided mentorship that shaped my career. Today, I'm leading AI research at a top tech firm, all thanks to their support."
                                    },
                                    {
                                        name: "Someone Verma",
                                        program: "Biotechnology, IISc Bangalore",
                                        quote: "The research grant from Scholar Rise India enabled me to pursue groundbreaking work in sustainable agriculture. Their holistic approach to nurturing talent has been instrumental in my journey as a scientist."
                                    }
                                ].map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#143832] p-6 rounded-lg text-[#D1D1D1]"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 2.4 + index * 0.2 }}
                                    >
                                        <p className="italic mb-4">{testimonial.quote}</p>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm">{testimonial.program}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="absolute right-4 sm:right-16 md:right-[8rem] lg:right-[32rem] bottom-8 sm:bottom-16 md:top-[36rem] lg:top-[37rem] w-1/3 sm:w-1/4 md:w-1/5 h-[6rem] sm:h-[8rem] md:h-[10rem] overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="relative w-full h-full">
                            <Image src="/images/squares.png" alt="Squares" fill style={{ objectFit: "contain" }} />
                        </div>
                    </motion.div>
                </motion.section>
            </div>
        </>
    );
}