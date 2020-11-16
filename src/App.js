import logo from './logo.svg';
import Main from "./components/Main";
import './App.css';

function App() {
  const cards = [
    {
      task:"Clean room",
      list:"todo",
      highlight:true
    },
    {
      task:"Clean kitchen",
      list:"doing",
      highlight:false
    },
    {
      task:"Do JS",
      list:"done",
      highlight:true
    },
    {
      task:"Learn React",
      list:"doing",
      highlight:false
    }
  ]
  const day = "monday".split("").join(" ");
  const message = "Hi Mom";
  return (
    <>
    <h1>Hello {`my friend it's ${day}`}</h1>
    <div className="App">
      <Nav />
      <Main cards={cards} message={message}/>
    </div>
    </>
  );
}

function Nav(){
  return (
    <nav className="Nav">
      <h2>Hi im nav</h2>
    </nav>
  )
}


export default App;
