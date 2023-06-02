import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import coffee from '../styles/images/coffee.jpeg'

function Coffee() {
    return (
        <div className='row d-flex justify-content-center align-items-center coffeeSection' id='coffee'>
            <div className='col-lg-5 col-sm-12 d-flex justify-content-center align-items-center'>
                <Image
                    // src='https://cdn.shopify.com/s/files/1/0277/2618/4517/collections/Webp.net-gifmaker-2_960x960.gif?v=1648328799'
                    src={coffee}
                    className='coffeePreview'
                    alt="Coffee"
                    width='auto'
                    height='auto'
                />
            </div>
            <div className="col-lg-5 col-sm-12">
                <h1 className='coffeeHeader'>Our coffee</h1>
                <p className='coffeeText'>
                We are committed to serving you the highest-quality coffee blends available. 
                We partner with renowned coffee roasters from around the United States who 
                share our passion for excellence. Our trusted partners carefully select their coffees 
                from some of the best regions around the world, and then roast them to perfection to 
                bring out their unique flavors and aromas. We believe that this approach results 
                in truly exceptional coffee that our customers love.
                </p>
            </div>
        </div>
    )
}

export default Coffee