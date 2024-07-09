import Image from 'next/image';
import { Jacques_Francois_Shadow } from 'next/font/google';

const jacques_francois_shadow = Jacques_Francois_Shadow({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <main className="bg-[#F9F8F4] py-16 ">
        <section className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="mb-8 md:mb-0 md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className={`text-8xl font-bold mt-4 ${jacques_francois_shadow.className}`}>Scholar Rise India</h1>
            <hr className="border-t-2 border-orange-500 w-[30rem] my-4" />
            <p className="text-xl mt-2">Paving the Path to Academic Achievement!</p>
          </div>
          <div className="absolute right-24 top-52 md:w-2/5 h-[36rem] overflow-hidden">
            <div className="relative w-full h-full">
              <Image src="/images/students.png" alt="Students" layout="fill" objectFit="contain" />
            </div>
          </div>
        </section>
      </main>
      <section className="bg-[#0C231B] rounded-t-[3rem] h-screen overflow-hidden">
            <div className="mb-8 md:mb-0 md:w-2/5 flex flex-col items-center md:items-start container mx-[5rem] my-[3rem]">
                <p className="text-[#D1D1D1] mx-auto mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-orange-500 text-[#F9F8F4] my-[1rem] py-2 px-4 rounded-full border-2 border-[#D1D1D1] hover:bg-orange-600 flex items-center space-x-2">
                    Apply for Scholarship <span className="ml-2">&rarr;</span>
                </button>
            </div>
            <div className="absolute right-[32rem] top-[37rem] md:w-1/5 h-[10rem] overflow-hidden">
                <div className="relative w-full h-full">
                    <Image src="/images/squares.png" alt="Students" layout="fill" objectFit="contain" />
                </div>
            </div>
        </section>
    </>
  );
}
