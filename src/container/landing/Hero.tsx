import clsxm from "@/constant/clsxm"
import { FaStar } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import Tilt from "react-parallax-tilt"
import Button from "../../components/button/Button"
export default function Hero() {
  return (
    <section id='hero' className='md:pt-48 pt-28 md:h-screen'>
            <div className='md:flex w-full md:justify-around'>
              <div className="">
                <Tilt flipVertically={false}>
                  <div className="md:hidden relative z-0">
                    <div className={clsxm(
                      `bg-[#EACB29] w-[300px] h-[300px] relative rounded-full mx-auto`,
                    )}>

                    </div>
                    <Image src={'/landing/hero-phone.png'} width={300} height={300} alt='phone' className='mt-[1px] mx-auto -translate-y-full'></Image>
                  </div>
                </Tilt>
                <h1 className={clsxm(
                  `text-4xl lg:text-6xl font-bold leading-normal`,
                  'text-center md:text-left',
                  '-mt-72 md:mt-0 relative z-10'
                  )}>Save money <br />fast from app.
                </h1>
                <p className={clsxm(
                  'md:text-xl font-normal py-4 md:my-10',
                  'text-center md:text-left text-md relative z-10'
                )}>
                  Transfer business money easily through finance app <br /> without any hassle. This app can help you control.
                </p>
                <Button
                  href={{href: ''}}
                  className={clsxm(
                    'relative z-10',
                    'flex mx-auto md:mx-0'
                  )}
                  size="lg"
                >
                  Get Started
                </Button>
                <div className={clsxm(
                  'mt-5 md:mt-16 space-x-3 relative z-10',
                  'flex justify-center md:justify-start'
                )}>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                </div>
                <p className='text-sm md:text-lg font-normal leading mt-5 md:mt-10 text-center md:text-left'>&#8221; Transfer business money easily through finance app <br /> without any hassle. This app can help you control Transfer <br /> business money easily through finance &#8221;</p>
                <div className={clsxm(
                  'mt-10 flex',
                  'hidden md:block'
                )}>
                  <Image src={'/landing/person.png'} width={51} height={51} alt='person' className=''></Image>
                  <div className='mx-5 space-y-1.5'>
                    <h6 className='text-md font-semibold'>Thariq Agfi Hermawan</h6>
                    <p>From Sepuluh Nopemeber Institute of Technology</p>
                  </div>
                </div>
              </div>
              <Tilt flipVertically={false}>
                <div className="hidden md:block">
                  <div className='bg-[#EACB29] lg:w-[604px] lg:h-[604px] relative rounded-full lg:block hidden'></div>
                  <Image src={'/landing/hero-phone.png'} width={604} height={643} alt='phone' className='relative lg:-translate-y-full mt-[1px]'></Image>
                </div>
              </Tilt>
            </div>
          </section>
  )
}