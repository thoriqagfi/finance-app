import * as React from 'react';
import Link from 'next/link';
import Button from '@/components/button/Button';
export const links = [
  { href: '/', label: 'Home'},
  { href: '/demos', label: 'Demos'},
  { href: '/about', label: 'About'},
  { href: '/blog', label: 'Blog'},
  { href: '/jobs', label: 'Jobs'},
  { href: '/contact', label: 'Contact'},
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [changeColor, setChangeColor] = React.useState(false);
  React.useEffect(() => {
    const handleScrollY = () => {
      window.scrollY > 50 ? setChangeColor(true) : setChangeColor(false);
    }
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY)
    }
  });

  return (
    <>
      <header className={changeColor ? `bg-white fixed top-0 z-50 w-full text-black shadow-md` : `fixed top-0 z-50 w-full bg-transparent text-black`}>
        <div className='mx-auto flex py-6 justify-between px-10'>
          <Link href='/' className='text-lg font-semibold my-auto'>Finance App</Link>
          {/* Navigation */}
          <nav className='hidden md:block my-auto'>
            <ul className='hidden font-medium space-x-6 md:flex lg:space-x-6 xl:space-x-20'>
              {links.map(({href, label}) => (
                <li key={`${href}`}>
                  <Link href={href} className='hover:text-gray-500'>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div className='hidden md:block'>
            <Link href={'/'} className='bg-[#2A5EE4] text-white rounded-md px-3 py-2 text-center hover:bg-[#2a5fe4c4]'>
              Download App
            </Link>
          </div> */}

          <Button
            className=''
            disabled={false}
            isLoading={false}
            size='base'
            variant='blue'
            href={'/signup'}
            isLink={true}
          >
            Sign Up
          </Button>

        </div>
      </header>
    </>
  )
}