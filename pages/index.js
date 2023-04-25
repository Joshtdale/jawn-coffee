import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomeCard from '@/components/Home'
import About from '@/components/About'
import Coffee from '@/components/Coffee'
import Booking from '@/components/Booking'
import Merch from '@/components/Merch'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
// import IsOpen from '@/components/Navbar'
// import '@/styles/navbar.css'

const inter = Inter({ subsets: ['latin'] })





function Section({ children }) { // fades in element when first in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // console.log(children.type.name)


  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}
      >
        {children}
      </span>
    </section>
  );
}


export default function Home() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();


    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <>
      <Head>
        <title>JAWN Coffee</title>
        <meta name="description" content="Your favorite mobile coffee business " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div><Toaster /></div>
        <Section>
          <HomeCard />
        </Section>

        <Section>
          <About size={windowSize.width} />
        </Section>

        <Section>
          <Coffee />
        </Section>


        <Section>
          <Merch />
        </Section>

        {/* <Section>
          <Booking />
        </Section> */}

      </main>
    </>
  )
}
