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
import coffee from '../styles/images/coffee.jpeg'
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

  let coffeeSection = {
    id: 'coffee',
    color: 'primary',
    orientationLeft: true,
    image: {
      src: coffee,
      alt: 'Coffee'
    },
    text: {
      header: 'Our coffee',
      value: 'We are committed to serving you the highest-quality coffee blends available. We partner with renowned coffee roasters from around the United States who share our passion for excellence. Our trusted partners carefully select their coffees from some of the best regions around the world, and then roast them to perfection to bring out their unique flavors and aromas. We believe that this approach results in truly exceptional coffee that our customers love.'
    }


  }



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
          <Coffee fields={coffeeSection} />
        </Section>


        <Section>
          <Merch />
        </Section>

        <Section>
          <Booking />
        </Section>

      </main>
    </>
  )
}
