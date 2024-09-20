'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0)

    const change = (amount) => {
        setCount(count + amount);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>

            <section className="px-20 mt-20">
                <div className="grid grid-cols-4 gap-4">
                    <div className="rounded overflow-hidden group cursor-pointer">
                        <div className="overflow-hidden h-40">
                            <img className="group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1549488933-2392c609e512?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <div className="p-5">
                            <div className="mb-2">
                                <a href="/counter" className="text-2xl group-hover:text-yellow-400">Counter</a>
                            </div>
                            <p>
                                Build a simple counter that increments whenever a button is clicked.
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-500 text-white p-4">Column 2</div>
                </div>

            </section>
        </>
    );
}
