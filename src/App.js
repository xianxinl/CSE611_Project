import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import LoginPage from "./components/LoginPage.js";
import SignUpPage from "./components/SignUpPage.js";

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <a href="/index">Home</a>
        </li>
{/*        <li>
          <a href="/LoginPage">Login</a>
        </li>*/}
      </ul>
    </nav>
    <div className="App">
      <header className="App-header">
        <h1>PropTech</h1>
        <div className="buttons">
            <button className="button" onClick={login}>Login</button>
            <button className="button" onClick={signup}>Sign Up</button>
        </div>
      </header>
    </div>
    </div>
  );
};

function login() {
  return (ReactDOM.render(<LoginPage />, document.getElementById('root')));
}
function signup() {
  return (ReactDOM.render(<SignUpPage />, document.getElementById('root')));
}

export default App;
