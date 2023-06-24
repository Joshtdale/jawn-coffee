import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../styles/images/logo.jpeg'
import { NavMap, links } from './Navbar'
import { insta } from '@/styles/images/insta'
import { email } from '@/styles/images/email'

function Footer() {
    return (
        <div className='container-fluid footer'>
            <div className="row d-flex justify-content-center">
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
                {links.map(({ name, to, id }, i) => (
                    <div 
                        key={i}
                        className=" FooterNav col-sm-12 col-md-1"
                    >
                        <motion.a
                            key={id}
                            href={to}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='Atag'
                        >
                            {name}
                        </motion.a>
                    </div>
                ))}
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-sm-4 d-flex justify-content-center align-items-center">
                    <motion.a
                        className='insta'
                        href="https://www.instagram.com/jawncoffee/"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {insta}
                    </motion.a>

                    <motion.a
                        className='email'
                        href="mailto:jawncoffee.ky@gmail.com"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {email}
                    </motion.a>
                </div>
            </div>

        </div>
    )
}

export default Footer