'use client'

import ProjectCard from "./topComponents/projectCard";

export default function Home() {

    const data = [
        {
            title: "Counter",
            desc: 'Build a simple counter that increments whenever a button is clicked.',
            dest_link: '/counter',
            author_link: 'https://github.com/jolawale28',
            author_image: 'https://avatar.iran.liara.run/public/20',
            image: 'https://images.unsplash.com/photo-1549488933-2392c609e512?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        },
        {
            title: "Contact",
            desc: 'Build a contact form which submits user feedback and contact details to a back end API.',
            dest_link: '/contactform',
            author_link: 'https://github.com/heebu',
            author_image: 'https://avatar.iran.liara.run/public/56',
            image: 'https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        },
        {
            title: "BMI Calc",
            desc: 'A BMI calculator quickly computes your Body Mass Index based on your weight and height to assess your body fat.',
            dest_link: '/bmicalc',
            author_link: 'https://github.com/heebu',
            author_image: 'https://avatar.iran.liara.run/public/56',
            image: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        }
    ]

    return (
        <>
            <section className="px-20 mt-10">
                <div className="grid grid-cols-4 gap-5">

                    {
                        data.map((ele, index) => 
                            <ProjectCard onClick={(e) => alert(e.target)}
                                title = {ele.title} 
                                desc = {ele.desc} 
                                author_image={ele.author_image} 
                                author_link = {ele.author_link} 
                                dest_link={ele.dest_link} 
                                image = {ele.image} 
                                key={index}
                            />)
                    }
                    
                </div>

            </section>
        </>
    );
}
