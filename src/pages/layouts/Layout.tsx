import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutOpt = {
  children: React.ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function Layout({
  children,
  withFooter = true,
  withNavbar = true,
}: LayoutOpt) {
  return (
    <div className='overflow-x-hidden bg-white w-full text-black'>
      {withNavbar && <Navbar/>}
      {children}
      {withFooter && <Footer/>}
    </div>
  );
}