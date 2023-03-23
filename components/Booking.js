import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import axios from "axios";

// function Booking() {
//     return (
//         <div className='bookingSection' id='booking'>

//         </div>
//     )
// }

// export default Booking


const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await axios.post("/api/contact", formData);
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>Contact Us</h1>
            {status === "success" ? (
                <p>Thank you for your message! We will be in touch soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Subject:
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send"}
                    </button>
                    {status === "error" && (
                        <p>Oops! Something went wrong. Please try again later.</p>
                    )}
                </form>
            )}
        </>
    );
};

export default Booking;
