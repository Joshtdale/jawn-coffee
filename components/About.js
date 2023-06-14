import React from 'react'
import Image from 'next/image'
import JohnSteph from '../styles/images/vert2.jpeg'
import { FadeIn } from './FadeIn'

function Text() {
    return (
        <div className="col-lg-4 col-sm-12">
            <h1 className='aboutHeader'>Welcome to Jawn Coffee!</h1>
            <p className='aboutText'>
                We are a coffee cart business founded in Lexington, KY, in 2022 by husband and wife team John Cable and Stephanie Leung. 
                <br></br>
                <br></br>
                In 2020 we dreamed up the idea for our pop-up espresso bar as we saw local small businesses working together more collaboratively, sharing spaces & hosting pop-ups. We want to do our part to make specialty coffee more inclusive and accessible and to bring it to non-traditional spaces.  
                <br></br>
                <br></br>
                We're dedicated to sourcing sweet, complex, and traceable coffees and are always mindful of sustainable practices in coffee production.
                <br></br>
                <br></br>
                At Jawn, we believe coffee is more than just a drink, it's a way to connect with others and create meaningful experiences. Whether you're looking for coffee for a wedding, corporate event, meeting, conference, party, festival, market, or pop-up, we'd love to work with you! Contact us today to learn how we can help make your event unforgettable. 

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
    )
}

function Img() {
    return (
        <div className='col-lg-4 col-sm-12 d-flex justify-content-center'>
            <Image
                src={JohnSteph}
                className='aboutPic'
                alt="John & Stephanie"
                width='auto'
                height='auto'
                priority={true}
            />
        </div>
    )
}

function About(props) {

    let viewportWidth = props.size

    function Order() {
        if (viewportWidth < 990) {
            return (
                <>
                    <Img />
                    <Text />
                </>
            )
        } else {
            return (
                <>
                    <Text />
                    <Img />
                </>
            )
        }
    }
    Order()

    return (
        <FadeIn>
            <div className='row d-flex justify-content-center align-items-center aboutSection' id='about'>
                <Order />
            </div>
        </FadeIn>
    )
}

export default About