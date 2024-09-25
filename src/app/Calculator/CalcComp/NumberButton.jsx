function NumberButton({button, buttonFunct}) {

    const handleClick = () => {
        let numClicked = {button};
        buttonFunct(numClicked);
    };

    return(
        <button className={'rounded-full h-10 w-10 bg-gray-300 hover:bg-blue-700  m-2'} onClick={handleClick}>{button}</button>

    );
}

export default NumberButton;