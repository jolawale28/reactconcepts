'use client'

import {useState} from "react";

export  default  function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [formSubmitting, setFormSubmitting] = useState(false);

    const handleSubmit = async (evt) =>
    {
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

            if(!response.ok){
                alert('Could not connect to the server.')
                return;
            }

            console.log(response);


        } catch (e) {
            console.log(e);
            alert(e.message);
        }

    }


    return (
        <div className="flex justify-center mt-10">
            <form className="w-4/12" onSubmit={() => null}>
                <div className={'mb-3'}>
                    <div className={'mb-2'}>Name</div>
                    <input value={name} onChange={(e) => setName((e.target.value))}
                           className="px-2 w-full py-2 rounded text-black" placeholder={'Enter name'} type="text" required/>
                </div>
                <div className={'mb-3'}>
                    <div className={'mb-2'}>Email</div>
                    <input value={email} onChange={(e) => setEmail((e.target.value))}
                           className="px-2 w-full py-2 rounded text-black" placeholder={'Enter contact'} type="email" required/>
                </div>
                <div className={'mb-3'}>
                    <div className={'mb-2'}>Message</div>
                    <textarea value={message} onChange={(e) => setMessage((e.target.value))}
                              className="px-2 w-full py-2 rounded text-black" placeholder={'Enter Message'} rows={5} required/>
                </div>
                <button type="submit"
                        className={`${(!formSubmitting) ? 'bg-blue-600' : 'bg-gray-600'} p-3 rounded w-full`}
                        onClick={handleSubmit} disabled={formSubmitting}>
                    {!formSubmitting ? 'Submit' : 'Loading'}
                </button>
            </form>
        </div>

    );
}