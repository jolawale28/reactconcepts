'use client'

import { useState } from "react";
import BreadCrumb from "../topComponents/BreadCrumb";

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [formSubmitting, setFormSubmitting] = useState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        setFormSubmitting(true)

        try {
            const response = await fetch('https://www.greatfrontend.com/api/questions/contact-form', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            })

            if (!response.ok) {
                alert('Could not connect to the server.')
                return;
            }

            if (response.ok) {
                alert("Message sent to server!");
                setFormSubmitting(false)
                setMessage('')
            }


        } catch (e) {
            console.log(e);
            alert(e.message);
        }

    }


    return (

        <>
            <BreadCrumb />

            <div className={`flex items-start justify-start mt-0 gap-10 px-5 sm:px-10 md:px-10 lg:px-20`}>

                <div className="w-2/5 px-5">
                    <div className="text-2xl mb-5 font-extrabold">Description</div>

                    <p>
                        This React program implements a contact form that allows users to submit their name, email, and message. It utilizes React’s <code className="bg-gray-100 p-1 rounded">useState</code> hook to manage the form&apos;s state, with <code className="bg-gray-100 p-1 rounded">name</code>, <code className="bg-gray-100 p-1 rounded">email</code>, and <code className="bg-gray-100 p-1 rounded">message</code> as state variables to store the user&apos;s input. The form collects feedback and contact details from the user and submits this data to a backend API for further processing. The <code className="bg-gray-100 p-1 rounded">setName</code>, <code className="bg-gray-100 p-1 rounded">setEmail</code>, and <code className="bg-gray-100 p-1 rounded">setMessage</code> functions update the respective fields as users type in their information, ensuring the form&apos;s state is always in sync with the user&apos;s input.
                    </p>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <form className="" onSubmit={handleSubmit}>
                        <div className={'mb-3'}>
                            <div className={'mb-2 text-sm'}>Name</div>
                            <input value={name} onChange={(e) => setName((e.target.value))} className="px-2 w-full py-2 border rounded text-gray-700" placeholder={''} type="text" required={true} />
                        </div>
                        <div className={'mb-3'}>
                            <div className={'mb-2 text-sm'}>Email</div>
                            <input value={email} onChange={(e) => setEmail((e.target.value))} className="px-2 w-full py-2 border rounded text-gray-700" placeholder={''} type="email" required={true} />
                        </div>
                        <div className={'mb-3'}>
                            <div className={'mb-2 text-sm'}>Message</div>
                            <textarea value={message} onChange={(e) => setMessage((e.target.value))} className="px-2 w-full py-2 border rounded text-gray-700" placeholder={'Enter Message'} rows={5} required={true} />
                        </div>
                        <button type="submit"
                            className={`${(!formSubmitting) ? 'bg-blue-600' : 'bg-gray-600'} p-3 rounded w-full text-white`}
                            disabled={formSubmitting}>
                            {!formSubmitting ? 'Submit' : 'Loading'}
                        </button>
                    </form>
                </div>

            </div>

        </>

    );
}