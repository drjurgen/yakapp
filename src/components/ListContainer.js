
import React from "react";

import Card from "./Card";
import AddCardForm from "./AddCardForm";
export default function ListContainer(props){
  const form = props.showForm ? <AddCardForm message={props.message} />:null
    return (
      <section>
        <h1>{props.name}</h1>
        {props.cards.map(card=>{
          return <Card task={card.task} highlight={card.highlight} />
        })}
        {form}
        

      </section>
    )
  }