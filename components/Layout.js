import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'


export default function Layout({ children }) {
    // const [value, setValue] = useState(false)
    // console.log('value is ', value)
    return (
        <>
            <div className="">
                <Navbar />
            </div>
            {/* {value && <ul
                // style={navLinksWrapper}
                className='navLinks'
            >

                <li><a className="nav-item" href="#about">About</a></li>
                <li><a className="nav-item" href="#coffee">Coffee</a></li>
                <li><a className="nav-item" href="#booking">Booking</a></li>
            </ul>} */}
            <main>{children}</main>
            <Footer />
        </>
    )
}