import React from 'react'
import Image from 'next/image'
import JohnSteph from '../styles/images/vert2.jpeg'

function Text() {
    return (
        <div className="col-lg-4 col-sm-12">
            <h1 className='aboutHeader'>About us</h1>
            <p className='aboutText'>
            Welcome to JAWN Coffee, the mobile coffee cart business founded by John and Stephanie Cable  
            in Lexington, KY. With nearly a decade of experience in the local coffee industry, we're 
            passionate about crafting the perfect cup of coffee for your special event. From weddings 
            to parties and more, we use only the finest ingredients and beans to ensure every drink is 
            delicious. We pride ourselves on exceptional service and a warm, welcoming atmosphere. 
            Contact us today to book us for your next event!
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
            />
        </div>
    )
}

function About(props) {

    let viewportWidth = props.size
    // console.log("size from about section is ", props.size)

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

        <div className='row d-flex justify-content-center align-items-center aboutSection' id='about'>
            <Order />
        </div>

    )
}

export default About