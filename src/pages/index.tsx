import { Inter } from '@next/font/google'
import Head from 'next/head'
import Layout from '../layouts/Layout';
import Hero from '@/container/landing/Hero';
import Achievements from '@/container/landing/Achievements';
import Features from '@/container/landing/Features';
import Testimonials from '@/container/landing/Testimonials';
import Subscribe from '@/container/landing/Subscribe';
import Download from '@/container/landing/Download';

// const inter = Inter({ subsets: ['latin'] });

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
        <main className={`w-full`} data-testid='home'>
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
