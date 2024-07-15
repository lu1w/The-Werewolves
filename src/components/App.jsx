import React from "react";
import CharacterParam from "./CharacterParam";

function App() {
    const onMouseOver = () => {
        $("#character-param #decrement").addClass("mouse-over");
    }
    return <div>
        <CharacterParam name="Seer" number="2"/>
    </div>
}; 

export default App; 