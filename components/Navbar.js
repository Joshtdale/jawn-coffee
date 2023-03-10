import React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from '../styles/images/logo.jpeg'
import { MenuButton } from "./MenuButton";

// for nav menu
const links = [
    { name: "About", to: "#about", id: 1 },
    { name: "Coffee", to: "#coffee", id: 2 },
    { name: "Booking", to: "#booking", id: 3 },
    // { name: "Contact", to: "#", id: 4 }
];

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};


const canvasStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const menuButtonStyle = {
    marginLeft: "2rem"
};

/** this is to FPO generate 5 links for the nav **/
const linkList = [{}, {}, {}, {}, {}];

const navStyles = {
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "space-between",
    height: "7rem",
    padding: "0 2rem",
    width: "100vw",
    left: "0"
};

const navLinksWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%"
};

let navStyleVariable = 'transparentNav'

export default function Navbar() {
    const [clientWindowHeight, setClientWindowHeight] = useState("");


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        // console.log(clientWindowHeight)
        if (clientWindowHeight > 0) {
            // console.log('yuppp')
            navStyleVariable = 'navStyles'
        }
        if (clientWindowHeight < 5) {
            navStyleVariable = 'transparentNav'
        }
    }, [clientWindowHeight]);
    /** this hook gets the scroll y-axis **/
    const { scrollY } = useScroll();
    /** this hook manages state **/
    const [hidden, setHidden] = useState(false);

    /** this onUpdate function will be called in the `scrollY.onChange` callback **/
    function update() {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }

    const [isOpen, setOpen] = useState(false);

    // open = isOpen
    // console.log(open)
    // props.setValue(isOpen)

    /** update the onChange callback to call for `update()` **/
    useEffect(() => {
        return scrollY.onChange(() => update());
    });

    /** add this const **/
    const variants = {
        /** this is the "visible" key and it's correlating styles **/
        visible: { opacity: 1, y: 0 },
        /** this is the "hidden" key and it's correlating styles **/
        hidden: { opacity: 0, y: -25 }
    };

    return (
        <>
            <motion.nav /** the variants object needs to be passed into the motion component **/
                variants={variants}
                /** it's right here that we match our boolean state with these variant keys **/
                animate={hidden ? "hidden" : "visible"}
                /** I'm also going to add a custom easing curve and duration for the animation **/
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
                /** basic nav styles **/
                style={navStyles}
                className={navStyleVariable}
            >
                <Image
                    src={logo}
                    className='logo'
                    alt="logo"
                    width='auto'
                    height='auto'
                    priority='true'
                />
                {/* {isOpen && <ul
                style={navLinksWrapper}
                className='navLinks'
            >

                <li><a className="nav-item" href="#about">About</a></li>
                <li><a className="nav-item" href="#coffee">Coffee</a></li>
                <li><a className="nav-item" href="#booking">Booking</a></li>
            </ul>} */}
                <div style={canvasStyle}>
                    <MenuButton
                        isOpen={isOpen}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setOpen(!isOpen)}
                        style={menuButtonStyle}
                    />
                </div>
            </motion.nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{
                            width: 300
                        }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.7, duration: 0.3 }
                        }}
                    >
                        <motion.div
                            className="container"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >

                            {links.map(({ name, to, id }) => (
                                <motion.a
                                    key={id}
                                    href={to}
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                    onClick={() => setOpen(false)}
                                >
                                    {name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            {/* <div className="btn-container">
                <button onClick={setOpen}>{open ? "Close" : "Open"}</button>
            </div> */}
        </>
    );
}

