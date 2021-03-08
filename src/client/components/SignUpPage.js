import React from "react";
import ReactDOM from 'react-dom';
import "./../App.css";
import RegProcess from "./RegProcess.js"

class SignUpPage extends React.Component {
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
      <div className="SignUpPage">
        <header className="SignUp-header">
          <h1>Please choose the account type</h1>
          <ul className="buttonUL">
          <button className="buttonSign" onClick={register}>Landlord</button>
          <button className="buttonSign" onClick={register}>Property Manager</button>
          <button className="buttonSign" onClick={register}>Customer Service</button>
          <button className="buttonSign" onClick={register}>Administrator</button>
          </ul>
        </header>
      </div>
      </div>
    );
  }
}

function register() {
  const elem =
  <div>
  <nav>
    <ul>
      <li>
        <a href="/index">Home</a>
      </li>
    </ul>
  </nav>
  <div className="SignUpPage" id="signup">
    <header className="SignUp-header">
      <h1>Please enter the information below</h1>
      <div id="registration">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <label>Enter Your Password Again</label>
        <input type="text" />
        <label>Street Name</label>
        <input type="text" />
        <label>Suite Number</label>
        <input type="text" />
        <label>City</label>
        <input type="text" />
        <label>State</label>
        <input type="text" />
        <label>Zipcode</label>
        <input type="text" />
        <button className="registerButton" onClick={regprocess}>Register</button>
      </div>
    </header>
  </div>
  </div>

  return (ReactDOM.render(elem, document.getElementById('root')));
}

function regprocess () {
  return (ReactDOM.render(<RegProcess />, document.getElementById('root')));
}

export default SignUpPage;
