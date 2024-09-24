function FunctionButton({button, buttonFunct}) {
    return(

            <button className={'rounded-3xl bg-gray-300 hover:bg-blue-700 p-4 m-2'} onClick={buttonFunct}>{button}</button>

    );
}

export default FunctionButton;