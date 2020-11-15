import React, {useState} from "react";

export default function Card(props){
    const [number, setNumber] = useState(10)
    function subtract(){
        setNumber(number-1);
    }
    function add(){
        setNumber(num=>num+1);
    }
    return (
        <article style={{background:number>10 ? "green":"red"}}>
            <h2>{props.title}</h2>
            <button onClick={subtract}> - </button>
            {number}
            <button onClick={add}> + </button>
        </article>
    )
}
