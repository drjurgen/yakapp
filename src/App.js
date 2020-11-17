import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://reactstuff1-f933.restdb.io/rest/cards", {
      method: "get",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-apikey": "5fb3ac4b863959728838545a",
        "cache-control": "no-cache",
      },
    })
      .then((e) => e.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const [cards, setCards] = useState([]);

  const day = "monday".split("").join(" ");
  const message = "Hi Mom";
  const addCard = () => {
    setCards(
      cards.concat({
        task: "Learn React " + Math.random(),
        list: ["todo", "doing", "done"][Math.floor(Math.random() * 3)],
        highlight: false,
      })
    );
  };
  return (
    <>
      <h1>Hello {`my friend it's ${day}`}</h1>
      <button onClick={addCard}>Add Card</button>
      <div className="App">
        <Nav />

        <Main cards={cards} message={message} />
      </div>
    </>
  );
}

function Nav() {
  const [items, setItems] = useState(["hi", "mom", "hotpink"]);
  function addItem() {
    //create a copy
    const nextState = items.concat("Dannie");

    setItems(nextState);
  }

  return (
    <nav className="Nav">
      <h2>Hi im nav </h2>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button onClick={addItem}>Click me</button>
    </nav>
  );
}

export default App;
