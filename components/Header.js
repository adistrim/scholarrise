import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#F9F8F4] bg-opacity-90 backdrop-blur-0  ">
      <div className="container mx-auto flex items-center justify-between py-[1rem] px-8">
        <div className="flex items-center">
          <Link href="/">
            <div className="hover:opacity-75 cursor-pointer">
              <Image src="/logos/scholarrise.png" alt="Logo" width={80} height={80} />
            </div>
          </Link>
        </div>
        <nav className="flex space-x-8 text-lg">
          <Link href="/">
            <p className="hover:text-gray-700 font-bold cursor-pointer">Home</p>
          </Link>
          <Link href="/coming-soon">
            <p className="hover:text-gray-700 cursor-pointer">Donate</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-gray-700 cursor-pointer">About Us</p>
          </Link>
          <Link href="/coming-soon">
            <p className="hover:text-gray-700 cursor-pointer">Work</p>
          </Link>
          <Link href="/coming-soon">
            <p className="hover:text-gray-700 cursor-pointer">Contact Us</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
