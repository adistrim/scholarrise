"use client";
import Image from 'next/image';
import { Jacques_Francois_Shadow } from 'next/font/google';
import { motion } from 'framer-motion';

const jacques_francois_shadow = Jacques_Francois_Shadow({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <motion.main 
        className="bg-[#F9F8F4] py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          <motion.div 
            className="mb-8 md:mb-0 md:w-1/2 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={`text-8xl font-bold mt-4 ${jacques_francois_shadow.className}`}>Scholar Rise India</h1>
            <motion.hr 
              className="border-t-2 border-orange-500 w-[30rem] my-4"
              initial={{ width: 0 }}
              animate={{ width: "30rem" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.p 
              className="text-xl mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Paving the Path to Academic Achievement!
            </motion.p>
          </motion.div>
          <motion.div 
            className="absolute right-24 top-52 md:w-2/5 h-[36rem] overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="relative w-full h-full">
              <Image src="/images/students-frame.jpg" alt="Students" fill style={{objectFit: "contain"}} />
            </div>
          </motion.div>
        </section>
      </motion.main>
      <motion.section 
        className="bg-[#0C231B] rounded-t-[3rem] h-screen overflow-hidden -z-20 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div 
          className="mb-8 md:mb-0 md:w-2/5 flex flex-col items-center md:items-start container mx-[5rem] my-[3rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-[#D1D1D1] mx-auto mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <motion.button 
            className="bg-orange-500 text-[#F9F8F4] my-[1rem] py-2 px-4 rounded-full border-2 border-[#D1D1D1] hover:bg-orange-600 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Scholarship <span className="ml-2">&rarr;</span>
          </motion.button>
        </motion.div>
        <motion.div 
          className="absolute right-[32rem] top-[37rem] md:w-1/5 h-[10rem] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="relative w-full h-full">
            <Image src="/images/squares.png" alt="Squares" fill style={{objectFit: "contain"}} />
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}