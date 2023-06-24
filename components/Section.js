import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

const ImageCol = (image) => {
    return (
    <div className='col-lg-5 col-sm-12 d-flex justify-content-center align-items-center imageContainer'>
        <Image
            src={image.src}
            className='coffeePreview'
            alt={image.alt}
            width='auto'
            height='auto'
        />
    </div>
)};

const Text = ({ header, value }) => {
    const paragraphs = value.split('\n').map((paragraph, index) => (
        <React.Fragment key={index}>
            {paragraph}
            <br />
            <br />
        </React.Fragment>
    ));
    return (
        <div className="col-lg-5 col-sm-12 mt-3">
            <h1 className='coffeeHeader'>
                {header}
            </h1>
            <p className='coffeeText'>
                {paragraphs}
            </p>
        </div>
    );
}

function Section({ color, orientationLeft, id, image, text }) {
    let sectionColor = 'coffeeSection'
    if (color == 'primary') {
        sectionColor = 'coffeeSection'
    } else {
        sectionColor = 'alternateSection'
    }
    return (
        <FadeIn>
            <div className={`row d-flex justify-content-center align-items-center ${sectionColor}`} id={id}>
                {orientationLeft ? (
                    <>
                        <ImageCol {...image} />
                        <Text {...text} />
                    </>
                ) : (
                    <>
                        <Text {...text} />
                        <ImageCol {...image} />
                    </>
                )}
            </div>
        </FadeIn>
    )
}

export default Section