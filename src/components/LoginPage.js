import React from "react";
import ReactDOM from 'react-dom';
import "./../App.css";
import App from "./../App.js"

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/index">Home</a>
            </li>
          </ul>
        </nav>
        <div className="LoginPage">
          <header className="Login-header">
            <h1 className="Title">PropTech</h1>
            <label className="EmailLabel">Email</label>
            <input type="text" />
            <label className="PasswordLabel">Password</label>
            <input type="text" />
            <button className="button">Login</button>
          </header>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<LoginPage />, document.getElementById('root'));

export default LoginPage;
