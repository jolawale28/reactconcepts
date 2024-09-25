'use client'


import FunctionButton from "@/app/Calculator/CalcComp/FunctionButton";
import NumberButton from "@/app/Calculator/CalcComp/NumberButton";
import {useState} from "react";

export default function Calculator () {


    const [total, setTotal] = useState([0]);
    const [totalNumInt, setTotalNumInt] = useState(0);

    const handleNumberData = (data) => {
        console.log(data);
       setTotal(total.push(data));

    };

    const clearNumberData = () => {
        setTotal([]);

    };



    const addNumber = (event) => {
        event.preventDefault();
    }

        return (
            <div className={'flex justify-center'} >
                <div className={'bg-blue-50 w-64 content-center'}>
                    {/*answer Screen*/}
                    <div className={'h-20 w-60  border-2 border-b-blue-950 rounded-md bg-blue-700 p-2.5 text-white'}>
                        {total.length}
                    </div>

                    {/*calc func Screen*/}

                    <div className={' p-2'}>
                        <div>
                            <FunctionButton button={'C'} buttonFunct={'notjhing'}></FunctionButton>
                            <FunctionButton button={'%'} buttonFunct={'notjhing'}></FunctionButton>
                            <FunctionButton button={'⌫'} buttonFunct={'notjhing'}></FunctionButton>
                            <FunctionButton button={'/'} buttonFunct={'notjhing'}></FunctionButton>
                        </div>
                        <div>
                            <NumberButton button={'7'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'8'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'9'} buttonFunct={handleNumberData}></NumberButton>
                            <FunctionButton button={'X'} buttonFunct={handleNumberData}></FunctionButton>
                        </div>
                        <div>
                            <NumberButton button={'4'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'5'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'6'} buttonFunct={handleNumberData}></NumberButton>
                            <FunctionButton button={'-'} buttonFunct={handleNumberData}></FunctionButton>
                        </div>
                        <div>
                            <NumberButton button={'1'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'2'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'3'} buttonFunct={handleNumberData}></NumberButton>
                            <FunctionButton button={'+'} buttonFunct={handleNumberData}></FunctionButton>
                        </div>
                        <div>
                            <NumberButton button={'00'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'0'} buttonFunct={handleNumberData}></NumberButton>
                            <NumberButton button={'.'} buttonFunct={handleNumberData}></NumberButton>
                            <button className={'rounded-full h-10 w-10 bg-blue-950 hover:bg-blue-500 m-2 text-white'}
                            >=
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )

}