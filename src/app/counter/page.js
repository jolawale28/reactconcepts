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
        <div className={`flex items-center flex-col justify-center`}>
            <div className="text-center mb-20">
                <h1 className="text-white text-6xl">Counter</h1>
                <p className="text-white text-2xl">
                    Build a simple counter that increments whenever a button is clicked.
                </p>
            </div>
            <div className="flex bg-white rounded-2xl items-center justify-center shadow-2xl p-5">
                <button className={`border border-gray-500 h-20 w-20 flex mr-5 items-center justify-center rounded-s text-5xl bg-red-500 hover:bg-red-700`} onClick={() => change(-1)}>-</button>
                <input className={`border border-gray-500 text-center text-2xl h-20`} defaultValue={count} />
                <button className={`border border-gray-500 bg-green-300 h-20 w-20 ml-5 flex items-center justify-center rounded-e text-5xl hover:bg-green-500`} onClick={() => change(1)}>+</button>
            </div>
        </div>
    );
}
