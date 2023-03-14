import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomeCard from '@/components/Home'
import About from '@/components/About'
import Coffee from '@/components/Coffee'
import Booking from '@/components/Booking'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
// import IsOpen from '@/components/Navbar'
// import '@/styles/navbar.css'

const inter = Inter({ subsets: ['latin'] })

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}


export default function Home() {


  return (
    <>
      <Head>
        <title>JAWN Coffee</title>
        <meta name="description" content="Your favorite mobile coffee business " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section>
          <HomeCard/>
        </Section>

        <Section>
          <About/>
        </Section>

        <Section>
          <Coffee />
        </Section>
        
        <Booking />

      </main>
    </>
  )
}
