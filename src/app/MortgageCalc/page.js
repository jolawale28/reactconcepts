'use client'

import {useState} from "react";
import FormFieldComponent from "@/app/MortgageCalc/comps/FormFieldComponent";

export default function MortgageCalc() {
    let [payment, setPayment] = useState('0');
    let [interest, setInterest] = useState('0');
    let [years, setYears] = useState('1');
    let [amount, setAmount] = useState(0);
    let [p, setP] = useState(1);
    let [i, setI] = useState(1);
    let [y, setY] = useState(1);



  const  onCalculate = (evt) =>{
      p = setP(Number(payment));
      i = setI(Number(interest));
      y = setY(Number(years));



        evt.preventDefault();

        let total =  p * ( i * (1 + i)^(y * 12) ) / ( (1 + i)^( y * 12) - 1);

       amount = setAmount(total);
        //P [ i(1 + i)^n ] / [ (1 + i)^n – 1
    }

return (
    <div >
        <div className={"flex items-center flex-col justify-items-start"}>
            <div className="text-center text-8xl mb-20"> {amount}</div>
            <FormFieldComponent label = {"Interest"} value = {interest} setValue = {setInterest} />
            <FormFieldComponent label = {"Payment"} value = {payment} setValue = {setPayment} />
            <FormFieldComponent label = {"Years"} value = {years} setValue = {setYears} />
            <button className={'bg-blue-950 hover:bg-blue-700 p-3.5 rounded'} onClick={onCalculate}>Calculate</button>
        </div>

    </div>
);
}
