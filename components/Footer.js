import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../styles/images/logo.jpeg'
import Booking from './Booking'
import { NavMap, links } from './Navbar'
import insta

function Footer() {
    return (
        <div className='container-fluid footer'>
            <div className="row d-flex justify-content-center">
                {/* <div className="col-6 d-flex align-items-center">
                    <Booking />
                </div> */}
                {/* <button onClick={console.log(links)}>click</button> */}
                <div className="col-12 d-flex justify-content-center">
                    <motion.a href="#home"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image
                            src={logo}
                            className='footerLogo'
                            alt="logo"
                            width='auto'
                            height='auto'
                            priority='true'
                        />
                    </motion.a>
                </div>
            </div>
            <div className="row FooterNavRow">
                {/* <div className="FooterNav col-12"> */}
                    {links.map(({ name, to, id }) => (
                        <div className=" FooterNav col-sm-12 col-md-1">
                            <motion.a
                                key={id}
                                href={to}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            // variants={itemVariants}
                            // onClick={() => setOpen(false)}
                            >
                                {name}
                            </motion.a>
                        </div>
                    ))}
                {/* </div> */}
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-4 mx-4 d-flex align-items-center">
                    <motion.a
                        className='insta'
                        href="https://www.instagram.com/jawncoffee/"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </motion.a>
                    <svg className='email' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

// function Footer() {
//     return (
//         <div className="container-fluid footer">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="footer__logo">
//                         <motion.a
//                             href="#home"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                         >
//                             <Image
//                                 src={logo}
//                                 className="footerLogo"
//                                 alt="logo"
//                                 width={200}
//                                 height={200}
//                                 priority
//                             />
//                         </motion.a>
//                     </div>
//                 </div>
//                 <div className="col-12">
//                     <div className="footer__nav">
//                         {links.map(({ name, to, id }) => (
//                             <div className="footer__nav-link" key={id}>
//                                 <motion.a
//                                     href={to}
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                 >
//                                     {name}
//                                 </motion.a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-12">
//                     <div className="footer__social">
//                         <motion.a
//                             className="insta"
//                             href="https://www.instagram.com/jawncoffee/"
//                             target="_blank"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                                 <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
//                             </svg>
//                         </motion.a>
//                         <svg className="email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                             <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


export default Footer