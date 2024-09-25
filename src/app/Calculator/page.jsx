'use client'


import FunctionButton from "@/app/Calculator/CalcComp/FunctionButton";
import NumberButton from "@/app/Calculator/CalcComp/NumberButton";
import {useState} from "react";

export default function Calculator () {


    const [expression, setExpression] = useState('0');
    const [totalNumInt, setTotalNumInt] = useState('0');

    const handleNumberData = (data) => {

        if(expression === '0' ){
            setExpression('');

        }
        if(data === 'X') {
            data = '*'
        }
        setExpression(prevState => prevState + data);
    };

    const backspace = () => {
        setExpression(prevState => prevState.slice(0, prevState.length - 1));
        setTotalNumInt('');
    };

    const clearNumberData = () => {
        setExpression('');
        setTotalNumInt('');
    };

   const evalExpression = () => {
        setTotalNumInt(eval(expression));
    }



    const addNumber = (event) => {
        event.preventDefault();
    }

        return (
            <div className={'flex justify-center m-4'} >
                <div className={'bg-blue-50 w-64 content-center'}>
                    {/*answer Screen*/}
                    <div className={'h-20 w-64  border-2 border-b-blue-950 rounded-md bg-blue-700 flex flex-col p-2.5 justify-between text-white'}>
                        <div>
                            {expression}
                        </div>
                        <div className={'text-right'}>
                            {totalNumInt}
                        </div>
                    </div>

                    {/*calc func Screen*/}

                    <div className={' p-2'}>
                        <div>
                            <button className={'rounded-full h-10 w-10 bg-blue-950 hover:bg-blue-500 m-2 text-white'}
                                    onClick={clearNumberData}
                            >C
                            </button>
                            <FunctionButton button={'%'} buttonFunct={handleNumberData}></FunctionButton>
                            <button className={'rounded-full h-10 w-10 bg-blue-950 hover:bg-blue-500 m-2 text-white'}
                                    onClick={backspace}
                            >⌫
                            </button>


                            <FunctionButton button={'/'} buttonFunct={handleNumberData}></FunctionButton>
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
                            <button className={'rounded-full h-10 w-10 bg-blue-950 hover:bg-blue-500 m-2 text-white'} onClick={evalExpression}
                            >=
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )

}