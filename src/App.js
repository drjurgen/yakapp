import logo from './logo.svg';
import Main from "./components/Main";
import './App.css';

function App() {
  const day = "monday".split("").join(" ");
  return (
    <>
    <h1>Hello {`my friend it's ${day}`}</h1>
    <div className="App">
      
      
      <Nav />
      <Main />
    </div>
    </>
  );
}


function Nav(){
  return (
    <nav>
      <h2>Hi im nav</h2>
    </nav>
  )
}


export default App;
