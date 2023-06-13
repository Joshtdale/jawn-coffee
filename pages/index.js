import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomeCard from '@/components/Home'
import About from '@/components/About'
import Section from '@/components/Section'
import Booking from '@/components/Booking'
import Merch from '@/components/Merch'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import coffee from '../styles/images/coffee.jpeg'
import merch from '../styles/images/merch.jpeg'
import { FadeIn } from '@/components/FadeIn'
import InstagramPosts from '@/hooks/InstagramPosts'
// import IsOpen from '@/components/Navbar'
// import '@/styles/navbar.css'

const inter = Inter({ subsets: ['latin'] })


// export function Section({ children }) { // fades in element when first in view
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // console.log(children.type.name)


//   return (
//     <section ref={ref}>
//       <span
//         style={{
//           transform: isInView ? "none" : "translateX(-200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
//         }}
//       >
//         {children}
//       </span>
//     </section>
//   );
// }


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

  let SectionArray = [
    { // coffeeSection
      id: 'coffee',
      color: 'primary',
      orientationLeft: true,
      image: {
        src: coffee,
        alt: 'Coffee'
      },
      text: {
        header: 'Our coffee',
        value: `We're dedicated to serving you the highest quality coffee available and seeking out excellent local, regional, and national roasters. 
        Our current partners and featured roasters are Proud Hound Coffee of Cincinnati, Ohio, and Manchester Coffee Co. of Lexington, KY. We also plan on serving Dayglow Coffee of Los Angeles, CA on rotation.`
        
      }
    },
    { // MerchSection
      id: 'merch',
      color: 'secondary',
      orientationLeft: false,
      image: {
        src: merch,
        alt: 'Merch'
      },
      text: {
        header: 'Vintage Clothing & Merch',
        value: 'At Jawn, we also combine our love of vintage clothing, sustainability, and a smaller footprint and will offer a unique, curated shopping experience at select pop-up events. Look for us offering cool vintage items and limited Jawn Coffee merch online and in person. '
      }
    }
  ];

  if (windowSize.width < 990) {
    SectionArray.forEach((element) => element.orientationLeft = true)
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
        <HomeCard />
        <About size={windowSize.width} />
        {SectionArray.map((element) => (<Section {...element}/>))}
        <Booking />
      </main>
    </>
  )
}
