'use client'

import { useState } from "react";
import BreadCrumb from "../topComponents/BreadCrumb";

export default function BmiCalc() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(0);

    const CalculateBMI = (evt) => {
        evt.preventDefault();
        setBmi(Number(height) / Number(weight));
    }

    return (

        <>
            <BreadCrumb />

            <div className={`flex items-start justify-start mt-0 gap-10 px-5 sm:px-10 md:px-10 lg:px-20`}>

                <div className="px-5 flex gap-5">
                    <div className="w-2/5">
                        <div className="text-2xl mb-5 font-extrabold">Description</div>

                        <p>
                            This React program is a BMI (Body Mass Index) calculator that computes your BMI based on your height and weight. It uses <code className="bg-gray-100 p-1 rounded">useState</code> to manage three state variables: <code className="bg-gray-100 p-1 rounded">height</code> for storing the user&spos;s height, <code className="bg-gray-100 p-1 rounded">weight</code> for the user&apos;s weight, and <code className="bg-gray-100 p-1 rounded">bmi</code> to store the calculated BMI result. Users input their height and weight, and the program processes this data to calculate BMI using the standard formula. The result is stored in the <code className="bg-gray-100 p-1 rounded">bmi</code> state and displayed to the user, providing a quick assessment of body fat levels and helping to determine if their weight is within a healthy range.
                        </p>
                    </div>

                    <div className={"mt-10 flex flex-col items-start w-3/5"}>
                        <div className="">
                            <div className={'text-8xl m-8'}>{bmi.toFixed(2)}</div>
                            <form className={""} onSubmit={CalculateBMI}>
                                <div className={'mb-3 flex'}>
                                    <div className={'mb-2 p-2.5'}>Height</div>
                                    <input value={height} onChange={(e) => setHeight((e.target.value))}
                                        className="px-2 w-full py-2 rounded text-black" placeholder={'Enter your height'}
                                        type="number"
                                        required={true} />
                                </div>
                                <div className={'mb-3 flex'}>
                                    <div className={'mb-2 p-2.5'}>weight</div>
                                    <input value={weight} onChange={(e) => setWeight((e.target.value))}
                                        className="px-2 w-full py-2 rounded text-black" placeholder={'Enter your weight'}
                                        type="number"
                                        required={true} />
                                </div>
                                <button type="submit" className={'bg-blue-950 p-3 rounded text-white w-full'}>Calculate</button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </>

    )

}