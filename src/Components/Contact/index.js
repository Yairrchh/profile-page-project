import React from "react";
import { useState } from "react";
import { Layout } from "../Layout";
import emailjs from '@emailjs/browser';
import "./index.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        user_message: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_mmwryw6','template_cz8mlsw',event.target,'yj7u36g26Uf0vnZI9')
        .then(response => console.log(response))
        .catch(error => console.log(error))

        setFormData({
            user_name: '',
            user_email: '',
            user_message: '',
        })
    }

    return (
        <div>
        <form className="bg-white m-auto w-11/12 max-w-sm p-8 rounded-lg shadow-lg text-center" onSubmit={sendEmail}>
            <h1 className="text-black text-4xl mb-6">Contact Us</h1>
            <div className="mt-3 grid gap-4">
                <div className="relative">
                    <input className="form__input cursor-pointer w-full text-sm outline-none px-3 py-3
                    border-b-2 border-gray-500 border-opacity-40" type="text" placeholder=" "
                    name="user_name" value={formData.user_name} onChange={handleChange}/>
                    <label className="form__label cursor-pointer absolute top-0 left-1">Name:</label>
                </div>
                <div className="relative">
                    <input className="form__input cursor-pointer w-full text-sm outline-none px-3 py-3
                    border-b-2 border-gray-500 border-opacity-40" placeholder=" " type="email"
                    name="user_email" value={formData.user_email} onChange={handleChange}/>
                    <label className="form__label cursor-pointer absolute top-0 left-1">Email</label>
                </div>
                <div className="relative">
                    <label>Message</label>
                    <textarea className="bg-slate-200 w-full p-4 bg-none text-sm outline-none rounded-lg border-b-2
                    border-gray-500" name="user_message" type="text" cols="30" rows="4"
                    value={formData.user_message} onChange={handleChange}></textarea>
                </div>
            </div>
            <button className="text-white rounded-lg mt-10 bg-sky-500 px-12 py-1 hover:bg-green-300
            hover:text-black hover:ease-in-out duration-300" type="submit">Send</button>
        </form>
        </div>
    )
}

export {Contact};