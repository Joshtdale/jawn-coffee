import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import axios from "axios";
import { send } from 'emailjs-com';
import { toast } from 'react-hot-toast';
import { SpinnerComponent } from './Spinner';

function Booking() {

    const [toSend, setToSend] = useState({
        from_name: '',
        date: '',
        time: '',
        location: '',
        message: '',
        reply_to: '',
    });

    const [value, Setvalue] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (toSend.from_name &&
            toSend.date &&
            toSend.time &&
            toSend.message &&
            toSend.reply_to.includes('@')
        ) {

            setToSend({
                from_name: '',
                date: '',
                time: '',
                location: '',
                message: '',
                reply_to: ''
            })
            Setvalue(!value)
            toast.success('Message sent Successfully! \n We\'ll be in touch!')
            // send(
            //     'service_mdnlqle',
            //     'template_vqplc4i',
            //     toSend,
            //     'DD7WQ4aW4Zl66jFJ7'
            // )
            //     .then((response) => {
            //         // console.log('SUCCESS!', response.status, response.text);
            //         toast.success('Message sent Successfully! \n We\'ll be in touch!')
            //         Setvalue(!value)
            //     })
            //     .catch((err) => {
            //         // console.log('FAILED...', err);
            //         toast.error("Message failed to send. Please try again")
            //     });
        } else {
            toast.error("Please fill out all the required fields")
        }
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return (
        <div className='bookingSection row' id='booking'>
            {/* <div className="row"> */}
            <div className="col d-flex justify-content-center align-items-center">
                {value && <SpinnerComponent />}
                {/* <button onClick={() => Setvalue(!value)}>click</button> */}

                {!value && <form onSubmit={onSubmit} className='bookingForm'>
                    <input
                        className='formInputs'
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        className='formInputs'
                        type='text'
                        name='date'
                        placeholder='Date'
                        value={toSend.date}
                        onChange={handleChange}
                    />
                    <input
                        className='formInputs'
                        type='text'
                        name='time'
                        placeholder='Time'
                        value={toSend.time}
                        onChange={handleChange}
                    />
                    <input
                        className='formInputs'
                        type='text'
                        name='location'
                        placeholder='Location of event'
                        value={toSend.location}
                        onChange={handleChange}
                    />
                    <input
                        className='formInputs'
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <input
                        className='formInputs'
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <button type='submit'>Send</button>
                </form>}


            </div>
            <button onClick={() => Setvalue(!value)} >test</button>
            {/* </div> */}

        </div>
    )
}

export default Booking



