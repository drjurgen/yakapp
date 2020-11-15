import logo from './logo.svg';
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
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
