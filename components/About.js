import React from 'react'
import Image from 'next/image'
import JohnSteph from '../styles/images/vert2.jpeg'

function Text() {
    return (
        <div className="col-lg-4 col-sm-12">
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