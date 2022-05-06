import React from 'react';
import './chat_button.css';
import IconMess from './images.png';

function ButtonChat(props) {
    return (
        <button onClick={props.handleClick} className="chatbox__button">
            <img src={IconMess} alt='button message'></img>
        </button>
    )
}

export default ButtonChat