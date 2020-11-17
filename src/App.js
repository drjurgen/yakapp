/*import React, {useState} from "react";
import Main from "./components/Main";
import './App.css';
*/
import React from 'react';
import Protected from './Protected';
import Public from './Public';
import netlifyIdentity from 'netlify-identity-widget';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

// copied straight from https://reacttraining.com/react-router/web/example/auth-workflow
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    netlifyAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            netlifyAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        netlifyAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
export default AuthExample;
/*
function App() {
  const [cards, setCards] = useState([
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
  ]);
  
  const day = "monday".split("").join(" ");
  const message = "Hi Mom";
  const addCard = () => {
    setCards(cards.concat({
      task:"Learn React " + Math.random(),
      list:["todo", "doing", "done"][Math.floor(Math.random()*3)],
      highlight:false
    }))
  }
  return (
    <>
    <h1>Hello {`my friend it's ${day}`}</h1>
    <button onClick={addCard}>Add Card</button>
    <div className="App">
      <Nav />
      
      <Main cards={cards} message={message}/>
    </div>
    </>
  );
}

function Nav(){
  const [items, setItems] = useState([
    "hi","mom","hotpink"
  ])
  function addItem(){
    //create a copy
    const nextState = items.concat("Dannie")

    setItems(nextState)
  }

  return (
    <nav className="Nav">
      <h2>Hi im nav </h2>
      {
        items.map((item, index)=><p key={index} >{item}</p>)
      }
      
      
      <button onClick={addItem}>Click me</button>
    </nav>
  )
}


export default App;
*/