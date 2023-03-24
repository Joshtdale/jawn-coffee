import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import axios from "axios";
import { send } from 'emailjs-com';

function Booking() {

    const [toSend, setToSend] = useState({
        from_name: '',
        date: '',
        time: '',
        location: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_mdnlqle',
            'template_vqplc4i',
            toSend,
            'DD7WQ4aW4Zl66jFJ7'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className='bookingSection' id='booking'>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='date'
                    placeholder='Date'
                    value={toSend.date}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='time'
                    placeholder='Time'
                    value={toSend.time}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='location'
                    placeholder='Location of event'
                    value={toSend.location}
                    onChange={handleChange}
                />
                {/* <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                /> */}
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Booking



