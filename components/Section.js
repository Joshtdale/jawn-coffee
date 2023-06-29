import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import BlockContent from '@sanity/block-content-to-react';
import { SanityImage } from '@/hooks/SanityImage';
import { urlFor } from '@/hooks/SanityImage';

const ImageCol = ({ images }) => { // Update the destructuring of the "images" prop
    if (images){
      console.log(urlFor(images[0].asset))
      const imageUrl = urlFor(images[0]).url();
  return (
    <div className='col-lg-5 col-sm-12 d-flex justify-content-center align-items-center imageContainer'>
      <Image
        src={imageUrl} // Call the SanityImage function with the correct argument
        className='coffeePreview'
        alt={images[0].alt}
        width={1000}
        height={1000}
      />
    </div>
  );
    }
};

const serializers = {
    types: {
      // Customize rendering for block types here
      // Example: Render a heading as an h1 element
      heading: ({ node, children }) => <h1>{children}</h1>,
    },
    marks: {
      // Customize rendering for mark types here
      // Example: Render a bold mark as a <strong> element
      strong: ({ children }) => <strong>{children}</strong>,
    },
  };
  

const Text = ({ header, body }) => {
    if (body){
    // console.log(body)
    let children = body[0].children
    // const paragraphs = value.split('\n').map((paragraph, index) => (
    //     <React.Fragment key={index}>
    //         {paragraph}
    //         <br />
    //         <br />
    //     </React.Fragment>
    // ));
    const paragraphs = children.map((paragraph, index) => (
        <React.Fragment key={index}>
            {paragraph.text}
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
                <BlockContent
                    blocks={body}
                    serializers={serializers}
                    // imageOptions={{ w: 800, h: 600 }} // Adjust the image size options as needed
                    // {...otherProps}
                />
            </p>
        </div>
    );
        }
}

function Section({ color, alignLeft, _key, images, text }) {
    // console.log(images)
    let sectionColor = 'coffeeSection'
    if (color) {
        sectionColor = 'coffeeSection'
    } else {
        sectionColor = 'alternateSection'
    }
    if (!images || images.length === 0) {
        return null; // Return null if there are no images
      }
    
    return (
        <FadeIn>
            <div className={`row d-flex justify-content-center align-items-center ${sectionColor}`} id={_key}>
                {alignLeft ? (
                    <>
                        <ImageCol images={images} />
                        <Text {...text} />
                    </>
                ) : (
                    <>
                        <Text {...text} />
                        <ImageCol images={images} />
                    </>
                )}
            </div>
        </FadeIn>
    )
}

export default Section