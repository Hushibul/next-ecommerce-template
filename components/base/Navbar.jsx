'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from '../button/Hamburger';

const MenuItems = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
  },
  {
    id: 3,
    name: 'Services',
    link: '/service',
  },
  {
    id: 4,
    name: 'Contact Us',
    link: '/contact-us',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <div className='border-t-[1px] border-b-[1px] border-slate-200 shadow-md py-2'>
      <nav className='container flex items-center justify-between'>
        <Link href={'/'}>
          <Image
            src={'/logo/OIG4.3.7yUpQZPEB5YqYy4gU3.jpg'}
            width={50}
            height={50}
            alt='Logo Image'
          />
        </Link>

        <ul className='hidden md:flex items-center gap-x-5'>
          {MenuItems.map((item) => (
            <li key={item?.id}>
              <Link
                className='text-lg text-black font-semibold hover:text-red-400 transition-colors duration-200'
                href={item?.link}
              >
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          className='px-3 py-2 rounded bg-primary dark:bg-secondary font-semibold text-white uppercase'
          href={'/login'}
        >
          Login
        </Link>

        <button onClick={handleClick} className='block md:hidden'>
          <Hamburger />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
