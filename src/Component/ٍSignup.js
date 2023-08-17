import React, { Component } from "react";
import img1 from "./Image/1.webp";

import "./CSS/Signup.css";

function signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var pwd = document.getElementById("psw").value;
  var cpwd = document.getElementById("psw-confirm").value;

  var Password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-])/; //*zero or more,?0 or 1 ?=followed by
  var letters = /^[A-Za-z]+$/; //a-z
  var filter =
    /^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //+one or more
  var pattern = /^01[0125][0-9]{8}$/g; //begin with 01 and one ot them[0125][0-9]8times

  if (name === "") {
    alert("Please enter your name");
  } else if (!letters.test(name)) {
    alert("Name field required only alphabet characters");
  } else if (email === "") {
    alert("Please enter your user email id");
  } else if (!filter.test(email)) {
    alert("Invalid email");
  } else if (phone === "") {
    alert("Please enter the phone.");
  } else if (!pattern.test(phone)) {
    alert("phone field required only numbers and begin with 01");
  } else if (pwd === "") {
    alert("Please enter Password");
  } else if (!Password.test(pwd)) {
    alert(
      "Upper case, Lower case, Special character and Numeric letter are required in Password filed"
    );
  } else if (cpwd === "") {
    alert("Enter Confirm Password");
  } else if (pwd !== cpwd) {
    alert("Password not Matched");
  } else if (document.getElementById("psw").value.length < 6) {
    alert("Password minimum length is 6");
  } else if (document.getElementById("psw").value.length > 12) {
    alert("Password max length is 12");
  } else {
    alert("Thank You for sign up");
  }
}

const Header = () => {
  return (
    <header>
      <div className="container-1 container1">
        <div className="logo">
          <img src={img1} alt="logo" />
        </div>
      </div>
    </header>
  );
};

const SignUpForm = () => {
  return (
    <div className="container-1">
      <form>
        <h1>SIGN UP</h1>

        <label htmlFor="name">
          <b>Name</b>
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          id="name"
          required
        />
        <br />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          id="email"
          required
        />
        <br />

        <label htmlFor="phone">
          <b>Phone</b>
        </label>
        <br />
        <input
          type="number"
          placeholder="Enter your phone"
          name="phone"
          id="phone"
          required
        />
        <br />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />
        <br />

        <label htmlFor="psw-confirm">
          <b>Confirm Password</b>
        </label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          name="psw-confirm"
          id="psw-confirm"
          required
        />
        <br />

        <button type="submit" className="signup1" onClick={signup}>
          SIGN UP
        </button>
        <br />
      </form>
    </div>
  );
};

const SignInContainer = () => {
  return (
    <div className="signin1">
      <div className="container-1">
        <p>
          Already have an account? <a href="signin.html">Sign in</a>.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <SignUpForm />
      <SignInContainer />
    </div>
  );
};

export default App;
