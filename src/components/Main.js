import React from "react";
import ListContainer from "./ListContainer";
export default function Main(){
    return (
      <main>
        <ListContainer name="Todo" />
        <ListContainer name="Doing" />
        <ListContainer name="Done" />
        
      </main>
    )
  }