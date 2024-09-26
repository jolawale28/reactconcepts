function NumberButton({button: btnValue, buttonFunct}) {

    const handleClick = () => {
        buttonFunct(btnValue);
    };

    return(
        <button className={'rounded-full h-10 w-10 bg-gray-300 hover:bg-blue-700  m-2'} onClick={handleClick}>{btnValue}</button>

    );
}

export default NumberButton;