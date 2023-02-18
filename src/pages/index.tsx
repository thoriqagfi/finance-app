import Head from 'next/head'
import Image from 'next/image'
import { Inter, Jost } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../layouts/Layout';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({subsets: ['latin']});

const achievementCards = [
  {
    key: 1,
    image: "/landing/document-code.png",
    background: "#2A5EE4",
    title: "Made for developers",
  },
  {
    key: 2,
    image: "/landing/video.png",
    background: "#EACB29",
    title: "Helpful video tutorials",
  },
  {
    key: 3,
    image: "/landing/scroll.png",
    background: "#AC1FDD",
    title: "120+ coded blocks",
  }
]

const testimonialsCard = [
  {
    key: 1,
    image: '/landing/testimonials-1.png',
    name: 'Thariq Agfi Hermawan',
    position: 'From Sepuluh Nopemeber Institute of Technology',
  },
  {
    key: 2,
    image: '/landing/testimonials-2.png',
    name: 'Thariq Agfi Hermawan',
    position: 'From Sepuluh Nopemeber Institute of Technology',
  },
  {
    key: 3,
    image: '/landing/testimonials-3.png',
    name: 'Thariq Agfi Hermawan',
    position: 'From Sepuluh Nopemeber Institute of Technology',
  }
]
export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>FinanceKu</title>
          <meta name="description" content="FinanceKu App: Solusi tabunganmu!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={inter.className && `w-full`}>
          {/* Hero */}
          <section id='hero' className='pt-48 h-screen'>
            <div className='md:flex w-full justify-around'>
              <div>
                <h1 className={`text-4xl lg:text-6xl font-bold leading-normal`}>Save money <br />fast from app.</h1>
                <p className='text-xl font-normal my-10'>Transfer business money easily through finance app <br /> without any hassle. This app can help you control.</p>
                <Link href='/' className='bg-[#2A5EE4] hover:bg-[#2a5fe4b6] text-white px-4 lg:px-6 text-md font-medium py-4 rounded-md'> Check our features</Link>
                <div className='mt-16 flex space-x-3'>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                  <FaStar className='text-[#EACB29]'/>
                </div>
                <p className='text-lg font-normal leading mt-10'>“Transfer business money easily through finance app <br /> without any hassle. This app can help you control Transfer <br /> business money easily through finance ”</p>
                <div className='mt-10 flex'>
                  <Image src={'/landing/person.png'} width={51} height={51} alt='person' className=''></Image>
                  <div className='mx-5 space-y-1.5'>
                    <h6 className='text-md font-semibold'>Thariq Agfi Hermawan</h6>
                    <p>From Sepuluh Nopemeber Institute of Technology</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='bg-[#EACB29] lg:w-[604px] lg:h-[604px] relative rounded-full lg:block hidden'></div>
                <Image src={'/landing/hero-phone.png'} width={604} height={643} alt='phone' className='relative lg:-translate-y-full mt-[1px]'></Image>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section id='achievements' className='h-50vh mx-auto'>
            <h3 className='text-[30px] text-center font-bold'>Trusted by nearly 5000+ paying customers</h3>
            <Image src={'/landing/customer.png'} width={976} height={42} alt='customer' className='mx-auto py-12'></Image>
            <h2 className='text-center text-[40px] font-bold py-10'>3,582 customers are using FinanceKu</h2>
            <div className='flex justify-center xl:gap-x-10 cursor-pointer'>
              {
                achievementCards.map(({key,image,background,title}) => (
                  <div className='shadow-xl py-3 px-8 rounded-lg' key={key}>
                    <div className='flex pt-3'>
                      <div className={`bg-[${background}] bg-opacity-20 rounded-full my-auto p-2`}>
                        <Image src={image} width={22.5} height={22.5} alt='code'></Image>
                      </div>
                      <h4 className='text-lg font-bold mx-3 my-auto'>{title}</h4>
                    </div>
                    <p className='my-4 text-md'>
                      “Transfer business money easily through <br /> finance app without any hassle. This app can <br /> help you control.Transfer business money <br /> easily through finance ”
                    </p>
                  </div>
                ))
              }
            </div>
          </section>

          {/* Features */}
          <section id='features-1' className='h-full'>
            {/* Feature 1 */}
            <div className='lg:flex justify-center bg-[#0C225B] h-[50vh] mt-32 lg:gap-x-20'>
              <div className='relative z-0 bg-[#2AA1E4] lg:h-[503px] lg:w-[503px] rounded-full mt-16'>
                <Image src={'/landing/features-1.png'} width={397} height={488} alt='feature-1' className='-translate-y-12 mx-auto'></Image>
              </div>
              <div className='my-auto space-y-5'>
                <h3 className=' text-white text-[30px] font-bold leading-normal'>The easiest way to view <br /> your total balance</h3>
                <p className='text-[#A3A3A3] text-lg'>Transfer business money easily through finance app without <br /> any hassle. This app can help you control.Transfer business <br /> money easily through finance </p>
              </div>
            </div>
          </section>
          <section id='features-2'>
            {/* Feature 2 */}
            <div className='relative h-[60vh] z-10 bg-white lg:flex justify-center lg:gap-x-20 pt-24'>
              <div className='my-auto space-y-5'>
                <h3 className=' text-black text-[30px] font-bold leading-normal'>Keep track of your <br /> expenses by the app</h3>
                <p className='text-[#393939] text-lg'>Transfer business money easily through finance app without <br /> any hassle. This app can help you control.Transfer business <br /> money easily through finance </p>
              </div>
              <div className='bg-[#EACB29] w-[503px] h-[503px] rounded-full translate-y-10'>
                <Image src={'/landing/features-2.png'} width={398} height={500} alt='feature-2' className='-translate-y-12 mx-auto'></Image>
              </div>
            </div>
          </section>

          {/* Testiomonials */}
          <section className='bg-white h-[80vh] relative z-20 pt-32'>
            <h2 className='text-center font-bold text-[40px]'>Trusted by <span className='text-[#2A5EE4]'>30+</span> world class <br />companies & design teams</h2>
            <div className='flex justify-center mt-20 gap-x-6'>
              {
                testimonialsCard.map(({key,image,name,position}) => (
                  <div key={key} className='space-y-2 shadow-xl rounded-lg px-5 text-center py-5'>
                    <Image src={image} width={80} height={80} alt={position} className='mx-auto'></Image>
                    <p className='py-7 leading-relaxed'>Transfer business money easily through <br /> finance app without any hassle. This app can <br /> help you control.Transfer business money <br /> easily through finance </p>
                    <p className='font-bold'>{name}</p>
                    <p className=''>{position}</p>
                  </div>
                ))
              }
            </div>
          </section>
          
          {/* Subscribe */}
          <section className='bg-[#2A5EE4] h-[80vh] flex justify-center'>
            <div className='flex flex-col justify-center items-center space-y-10'>
              <h2 className='text-4xl font-bold text-center text-white'>Get latest case studies</h2>
              <p className='text-[#A3A3A3] text-lg text-center'>Transfer business money easily through finance app without <br /> any hassle. This app can help you control.Transfer business <br /> money easily through finance </p>
              <form action="/api/form" method='post' className='flex'>
                <input 
                  type="email"
                  name="email"
                  pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                  title='Email'
                  className='mx-auto bg-white shadow-xl rounded-l-xl py-3 px-5 text-lg relative'
                />
                <div className='bg-white text-center py-3 rounded-r-xl px-6'>
                  <button type="submit" className='relative px-4 rounded-lg py-2 bg-[#EACB29] font-medium text-sm'>Subscribe now</button>
                </div>
              </form>

              <div className='flex gap-x-16'>
                <div className='text-center space-y-2'>
                  <h3 className='font-bold text-[30px] text-white'>+6</h3>
                  <p className='text-white font-semibold'>Years in business</p>
                  <p className='text-[#BEBEBE]'>Creating the successful path</p>
                </div>
                <div className='text-center space-y-2'>
                  <h3 className='font-bold text-[30px] text-white'>4821</h3>
                  <p className='text-white font-semibold'>Case studies delivere</p>
                  <p className='text-[#BEBEBE]'>in last 6 years</p>
                </div>
              </div>
            </div>
          </section>

          {/* Download App */}
          <section id='download-app' className='h-[30vh] flex justify-evenly items-center'>
            <div>
              <h2 className='text-[30px] font-bold'>Download our mobile app</h2>
              <p className='text-[16px] leading-relaxed text-[#232323]'>Transfer business money easily through finance app without any hassle. <br /> This app can help you control.Transfer business money easily through <br /> finance</p>
            </div>
            <div className='flex items-center gap-x-10'>
              <div className='bg-[#121212] px-6 py-3 flex rounded-lg gap-x-4 cursor-pointer'>
                <Image src={'/landing/apple.png'} width={50} height={50} alt='apple'></Image>
                <div className='text-white space-y-1'>
                  <p>Download on the</p>
                  <p className='font-bold'>App Store</p>
                </div>
              </div>
              <div className='bg-[#121212] px-6 py-3 flex rounded-lg gap-x-4 cursor-pointer'>
                <Image src={'/landing/google-play.png'} width={50} height={50} alt='google-play'></Image>
                <div className='text-white space-y-1'>
                  <p>Download on the</p>
                  <p className='font-bold'>Google Play</p>
                </div>
              </div>
            </div>
          </section>
        </main>

      </Layout>
      
    </>
  )
}
