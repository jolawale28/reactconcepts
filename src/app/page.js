'use client'

import ProjectCard from "./topComponents/projectCard";
import { useData } from "./topComponents/DataContext";

export default function Home() {

    const tasksData = useData()

    return (
        <>
            <section className="px-5 sm:px-10 md:px-10 lg:px-20 mt-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 px-3">

                    {
                        tasksData.map((ele, index) => 
                            <ProjectCard
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
