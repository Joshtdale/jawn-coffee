import React from 'react'
import Image from 'next/image'

function Coffee() {
    return (
        <div className='row d-flex justify-content-center align-items-center coffeeSection' id='coffee'>
            <div className='col-4 d-flex justify-content-center'>
                <img
                    src='https://cdn.shopify.com/s/files/1/0277/2618/4517/collections/Webp.net-gifmaker-2_960x960.gif?v=1648328799'
                    className='coffeePreview'
                    alt="Coffee"
                    width='auto'
                    height='auto'
                />
            </div>
            <div className="col-4">
                <h1>Something about coffee</h1>
                <p>Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound 
                    Stuff about the coffee coming from proud hound Stuff about the coffee coming from proud hound </p>
            </div>
        </div>
    )
}

export default Coffee