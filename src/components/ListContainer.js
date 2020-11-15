
import React from "react";

import Card from "./Card";

export default function ListContainer(props){
    return (
      <section>
        <h1>{props.name}</h1>
        <Card title="Learn CSS"/>
        <Card title="Clean Kitchen"/>
        <Card title="Walk the dog"/>
      </section>
    )
  }