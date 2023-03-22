import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Coffee() {
    return (
        <div className='row d-flex justify-content-center align-items-center coffeeSection' id='coffee'>
            <div className='col-lg-4 col-sm-12 d-flex justify-content-center'>
                <img
                    src='https://cdn.shopify.com/s/files/1/0277/2618/4517/collections/Webp.net-gifmaker-2_960x960.gif?v=1648328799'
                    className='coffeePreview'
                    alt="Coffee"
                    width='auto'
                    height='auto'
                />
            </div>
            <div className="col-lg-4 col-sm-12">
                <h1>Something about coffee</h1>
                <p>
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                </p>
                    
                <a href="https://www.proudhoundcoffee.com/" target="_blank">
                    <motion.button
                        className='moreInfoBtn'
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                    More Info
                    </motion.button>
                </a>

            </div>
        </div>
    )
}

export default Coffee