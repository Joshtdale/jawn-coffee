import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomeCard from '@/components/Home'
import About from '@/components/About'
import Coffee from '@/components/Coffee'
import Booking from '@/components/Booking'
import { useState, useEffect } from 'react'
// import IsOpen from '@/components/Navbar'
// import '@/styles/navbar.css'

const inter = Inter({ subsets: ['latin'] })

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
        <HomeCard />
        <About />
        <Coffee />
        <Booking />

      </main>
    </>
  )
}
