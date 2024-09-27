'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../topComponents/BreadCrumb";

export default function Counter() {

    const [count, setCount] = useState(0)

    const change = (amount) => {
        setCount(count + amount);
    }

    const decrement = () => {
        setCount(count - amount);
    }

    return (
        <>
            <BreadCrumb />

            <div className={`flex flex-col items-start justify-start mt-0 gap-10 px-5 sm:px-10 md:px-10 lg:px-20`}>

                <div className="w-2/5 px-5">
                    <div className="text-2xl mb-5 font-extrabold">Description</div>

                    <p>
                        This code defines a simple counter using React’s <code className="bg-gray-100 p-1 rounded">useState</code> hook. It initializes a state variable <code className="bg-gray-100 p-1 rounded">count</code> with a default value of 0. The <code className="bg-gray-100 p-1 rounded">change</code> function is responsible for updating the <code className="bg-gray-100 p-1 rounded">count</code> by adding or subtracting the given <code className="bg-gray-100 p-1 rounded">amount</code> parameter. When a user presses the "+" button, the function is called with a positive value to increase the counter. Similarly, pressing the "-" button passes a negative value, decreasing the count. The <code className="bg-gray-100 p-1 rounded">setCount</code> function ensures that the state is updated, causing the component to re-render and display the current count value in the input field.
                    </p>
                </div>

                <div className="flex items-center justify-center px-5">
                    <button className="border border-r-0 border-gray-200 h-10 w-10 flex items-center justify-center transition-colors duration-500 rounded-s text-2xl bg-gray-100 hover:bg-gray-200" onClick={() => change(-1)}>-</button>
                    <input className="border border-gray-200 text-center text-xl h-10 w-50" defaultValue={count} />
                    <button className="border border-l-0 border-gray-200 bg-gray-100 h-10 w-10 flex items-center transition-colors duration-500 justify-center rounded-e text-2xl hover:bg-gray-200" onClick={() => change(1)}>+</button>
                </div>

            </div>
        </>
    );
}
