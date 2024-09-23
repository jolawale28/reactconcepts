'use client'

import {useState} from "react";

export default function MortgageCalc() {
    const [payment, setPayment] = useState(0);
    const [interest, setInterest] = useState(0);
    const [years, setYears] = useState(1);
    const [amount, setAmount] = useState(0);

  const  onCalculate = (evt) =>{
        evt.preventDefault();

        setAmount(payment ( interest(1 + interest)^(years*12) ) / ( (1 + interest)^(years*12) - 1));
        //P [ i(1 + i)^n ] / [ (1 + i)^n – 1
    }

return (
    <div >
        <div className={"flex items-center flex-col justify-items-start"}>
            <div className="text-center text-8xl mb-20"> {amount}</div>
            <div className={'pb-2'}>
                <label className={'pr-2'}>Interest</label>
                <input className={'rounded'} type={'number'} value={interest} onChange={(e)=> setInterest(e.target.value)} />
            </div>
            <div className={'pb-2'}>
                <label className={'pr-2'}>Payment</label>
                <input className={'rounded'} type={'number'} value={payment} onChange={(e)=> setPayment(e.target.value)}/>
            </div>
            <div className={'pb-2'}>
                <label className={'pr-2'}>Years</label>
                <input className={'rounded'} type={'number'} value={years} onChange={(e)=> setYears(e.target.value)}/>
            </div>

            <button className={'bg-blue-950 hover:bg-blue-700 p-3.5 rounded'} onClick={onCalculate}>Calculate</button>
        </div>

    </div>
);
}
