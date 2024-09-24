function NumberButton({button, buttonFunct}) {

    const handleClick = () => {
        let numClicked = {button};
        buttonFunct(numClicked);
    };

    return(
        <button className={'rounded-3xl bg-gray-300 hover:bg-blue-700 p-4 m-2'} onClick={handleClick}>{button}</button>

    );
}

export default NumberButton;