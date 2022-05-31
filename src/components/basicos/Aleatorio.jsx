import React from "react";

export default function Aleatorio(props){
    return(
        <div>
            <h3>Numero aleatorio</h3>
            <p>{Math.random() * (props.max - props.min) +props.min}</p>
        </div>
    )
}