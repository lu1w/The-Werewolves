import React from "react"; 

function Button(props) {
    const onMouseOver = () => {
        $('#' + props.id).addClass("mouse-hover");
    }
    const onMouseOut = () => {
        $('#' + props.id).removeClass("mouse-hover"); 
    }
    return <button id={props.id} onClick={props.onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{props.text}</button>
}

export default Button; 