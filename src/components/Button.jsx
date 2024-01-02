import React from 'react';
import '../css/Button.css'

const Button = ({ children, onClick, isRadius }) => {
    return (
        <button
            onClick={onClick}
            className={isRadius ? "button full-radius" : "button"}>
            {children}
        </button>
    );
}
 
export default Button;