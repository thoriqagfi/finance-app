import * as React from 'react';
import Image from 'next/image';
import { links } from './Navbar';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-white h-[10vh] w-11/12 mx-auto'>
      <hr className='bg-[#9A9A9A] h-[2px]' />
      <div className='flex justify-between pt-5'>
        <p className='font-bold'>Finance App</p>
        <div className='flex justify-center gap-x-10'>
        <ul className='hidden font-medium space-x-6 md:flex lg:space-x-6 xl:space-x-20'>
              {links.map(({href, label}) => (
                <li key={`${href}`}>
                  <Link href={href} className='hover:text-gray-500'>{label}</Link>
                </li>
              ))}
            </ul>
        </div>
        <div className='gap-x-4 flex'>
          <Image src={'/footer/google.png'} width={24} height={24} alt='google'></Image>
          <Image src={'/footer/framer.png'} width={24} height={24} alt='framer'></Image>
          <Image src={'/footer/facebook.png'} width={24} height={24} alt='facebook'></Image>
          <Image src={'/footer/whatsapp.png'} width={24} height={24} alt='whatsapp'></Image>
          <Image src={'/footer/youtube.png'} width={24} height={24} alt='youtube'></Image>
        </div>
      </div>
    </footer>
  )
}