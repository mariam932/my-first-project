import React from "react";
import img1 from "./Image/1.webp";

import "./CSS/Signin.css";  

function signin() {

  var name = document.getElementById("name").value;
  var pwd = document.getElementById("psw").value;

  var pwd_expression = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;

  if (name === '') {
      alert('Please enter your name');
  }
  else if (!letters.test(name)) {
      alert('Name field required only alphabet characters');
  }
  else if (pwd === '') {
      alert('Please enter Password');
  }
  else if (!pwd_expression.test(pwd)) {
      alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  }
  else if (document.getElementById("psw").value.length < 6) {
      alert('Password minimum length is 6');
  }
  else if (document.getElementById("psw").value.length > 12) {
      alert('Password max length is 12');
  }
  else {
      alert('Thank You for sign in');
  }
}

  const Header = () => {
    return (
      <header>
        <div className="container_1">
          <div className="logo">
            <img src={img1} alt="logo" />
          </div>
      </div>
      </header>
    );
  };
  
  const SignInForm = () => {
    return (
      <div className="container_1 ">
      <div className="login">
        <form>
          <h1>SIGN IN</h1>
          <label htmlFor="name"><b>Name</b></label><br />
          <input type="text" placeholder="Enter your name" id="name" /><br />
          <label htmlFor="psw"><b>Password</b></label><br />
          <input type="password" placeholder="Enter your Password" id="psw" /><br />
          <button type="submit" className="signin" onClick={signin}>SIGN IN</button><br />
        </form>
      </div>
      </div>
    );
  };
  
  const SignUpContainer = () => {
    return (
      <div className="signup">
        <div className="container_1 ">
        <p>Create an account? <a href="signup.html">Sign up</a>.</p>
      </div>
      </div>
    );
  };
  
  const App = () => {
    return (
      <div>
        <Header />
        <SignInForm />
        <SignUpContainer />
      </div>
    );
  };
  
  export default App;