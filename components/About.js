import React from 'react'
import Image from 'next/image'
import JohnSteph from '../styles/images/vert2.jpeg'

function About() {
    return (




<div className='row d-flex justify-content-center align-items-center aboutSection' id='about'>
<div className="col-4">
                <h1>Something about coffee</h1>
                <p>
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                </p>
                    
                {/* <a href="https://www.proudhoundcoffee.com/" target="_blank">
                    <motion.button
                        className='moreInfoBtn'
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                    More Info
                    </motion.button>
                </a> */}

            </div>
            <div className='col-4 d-flex justify-content-center'>
            <Image
                    src={JohnSteph}
                    className='aboutPic'
                    alt="John & Stephanie"
                    width='auto'
                    height='auto'
                />
            </div>

        </div>

    )
}

export default About