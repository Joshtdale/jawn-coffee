import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomeCard from '@/components/Home'
import About from '@/components/About'
import Section from '@/components/Section'
import Booking from '@/components/Booking'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import coffee from '../styles/images/coffee.jpeg'
import merch from '../styles/images/merch.jpeg'
import Cups from '../styles/images/Cups.jpeg'
import Espresso from '../styles/images/Espresso.jpeg'
import Proudhound from '../styles/images/ProudhoundSign.jpeg'
import InstagramPosts from '@/hooks/InstagramPosts'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [images] = useState([
    coffee,
    Cups,
    Proudhound,
    Espresso
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Start the interval when the component mounts
    const interval = setInterval(changeImage, 3000); // Change image every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);


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
        src: images[currentImageIndex],
        alt: 'Coffee',
        index: currentImageIndex
      },
      text: {
        header: 'Our Coffee',
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
  };

  return (
    <>
      <Head>
        <title>JAWN Coffee</title>
        <meta name="description" content="Your favorite mobile coffee business " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div><Toaster /></div>
      <HomeCard />
      <About size={windowSize.width} />
      {SectionArray.map((element, key) => (<Section key={key} {...element} />))}
      <Booking />
    </>
  )
}

