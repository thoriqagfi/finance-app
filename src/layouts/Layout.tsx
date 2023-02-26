import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutOpt = {
  children: React.ReactNode;
  navbar?: boolean;
  footer?: boolean;
};

export default function Layout({
  children,
  footer = true,
  navbar = true,
}: LayoutOpt) {
  return (
    <div className='overflow-x-hidden bg-white w-full text-black'>
      {navbar && <Navbar/>}
      {children}
      {footer && <Footer/>}
    </div>
  );
}