// the number of a character for setting up page 

import React from "react";
import { MaxPlayer } from "../../public/constants";

import Button from './Button'; 

function CharacterParam(props) {
    let number = props.number ? parseInt(props.number) : 0;
    const [num, setNum] = React.useState(number);

    return <div id="character-param">
        <h2 className="character-name">{props.name}</h2>
        <Button id="decrement" text="-" onClick={() => num > 0 && setNum(num - 1)}/>
        <h3 id="param">{num}</h3>
        <Button id="increment" text="+" onClick={() => num <= MaxPlayer && setNum(num + 1)}/>
    </div>
}

export default CharacterParam;