import Head from 'next/head'
import Image from 'next/image'
import { Inter, Jost } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../layouts/Layout';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { achievementsCard, testimonialsCard } from '@/constant/landing';
import AchievementCard from '@/components/card/AchievementCard';
import TestimonialCard from '@/components/card/TestimonialCard';
import clsxm from '@/constant/clsxm';
import Hero from '@/container/landing/Hero';
import Achievements from '@/container/landing/Achievements';
import Features from '@/container/landing/Features';
import Testimonials from '@/container/landing/Testimonials';
import Subscribe from '@/container/landing/Subscribe';
import Download from '@/container/landing/Download';

const inter = Inter({ subsets: ['latin'] });

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
          <Hero/>
          <Achievements/>
          <Features/>
          <Testimonials/>
          <Subscribe/>
          <Download />
        </main>

      </Layout>
      
    </>
  )
}
