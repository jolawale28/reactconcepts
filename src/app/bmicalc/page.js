'use client'

import {useState} from "react";

export default function BmiCalc(){
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(0);

    const CalculateBMI = (evt) => {
        evt.preventDefault();
        setBmi(Number(height)/Number(weight));
    }

    return (

        <div className={"mt-10 flex items-center justify-center"}>
            <div className={'text-8xl m-8'}>{bmi.toFixed(2)}</div>
            <form className={"w-4/12"} onSubmit={CalculateBMI}>
                <div className={'mb-3 flex'}>
                    <div className={'mb-2 p-2.5'}>Height</div>
                    <input value={height} onChange={(e) => setHeight((e.target.value))}
                           className="px-2 w-full py-2 rounded text-black" placeholder={'Enter your height'}
                           type="number"
                           required={true}/>
                </div>
                <div className={'mb-3 flex'}>
                    <div className={'mb-2 p-2.5'}>weight</div>
                    <input value={weight} onChange={(e) => setWeight((e.target.value))}
                           className="px-2 w-full py-2 rounded text-black" placeholder={'Enter your weight'}
                           type="number"
                           required={true}/>
                </div>
                <button type="submit" className={'bg-blue-950 p-3 rounded'}>Calculate</button>

            </form>
        </div>
    )

}