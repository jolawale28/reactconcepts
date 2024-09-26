'use client'

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    const change = (amount) => {
        setCount(count + amount);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>

            <div className="px-20 bg-red-500">

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-300">01</div>
                    <div className="bg-red-300">02</div>
                    <div className="bg-teal-300">03</div>
                    <div className="col-span-2 bg-yellow-300">04</div>
                    <div className="bg-violet-300 col-span-4">05</div>
                    <div className="bg-green-300">06</div>
                    <div className="col-span-2 bg-pink-300">07</div>
                </div>

            </div>

            <div className={`flex items-center justify-center`}>
                <div className="mb-20">
                    <h1 className="text-dark text-6xl">Counter</h1>
                    <p className="text-dark text-2xl">
                        Build a simple counter that increments whenever a button is clicked.
                    </p>
                </div>
                <div className="flex rounded-2xl items-center justify-center shadow-2xl p-5">
                    <button className={`border border-gray-500 h-20 w-20 flex mr-5 items-center justify-center rounded-s text-5xl bg-red-500 hover:bg-red-700`} onClick={() => change(-1)}>-</button>
                    <input className={`border border-gray-500 text-center text-2xl h-20`} defaultValue={count} />
                    <button className={`border border-gray-500 bg-green-300 h-20 w-20 ml-5 flex items-center justify-center rounded-e text-5xl hover:bg-green-500`} onClick={() => change(1)}>+</button>
                </div>
            </div>
        </>
    );
}
