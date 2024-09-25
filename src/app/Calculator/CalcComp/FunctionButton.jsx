function FunctionButton({button, buttonFunct}) {
    return(

            <button className={'rounded-full h-10 w-10 bg-gray-300 hover:bg-blue-700 m-2'} onClick={buttonFunct}>{button}</button>

    );
}

export default FunctionButton;