import React from 'react';
import "./styles.css";

function Input(props) {
    return (
        <div className="input-block">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" id={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default Input;