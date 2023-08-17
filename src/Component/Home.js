import React, { Component } from "react";
import "./CSS/Home.css";
import logo from "./Image/1.webp";
import landing from "./Image/1.jpeg";

class Home extends Component {
  handleClick (){
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
  render(){
    return (
      <div>
        <header>
          <div class="container">
            <div class="logo">
              <img src={logo} alt="logo" />
            </div>
            <button onClick={this.handleClick} id="dark">
              Dark Mode
            </button>
          </div>
        </header>
        <div class="landing">
          <div class="container">
            <div class="landing-img">
              <span class="sale">Sale 50%</span>
              <img src={landing} alt="massing img" id="img" />
            </div>
            <div class="landing-text">
              <h1>SIMPLY AND MINIMALITS</h1>
              <p>
                We Will Help You Create The Most Comfortable And Cozy Living Space
                Through Innovative, Trendy And Well Designed Solutions With
                Highest European Quality Standards And Yet Affordable Prices.
              </p>
              <button class="sign-in">
                <a href="./signin.html"> Sign In </a>
              </button>
              <button class="sign-up">
                <a href="./signup.html"> Sign Up </a>
              </button>
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Copy Right &#169; 2023</p>
        </div>
      </div>
    );
  }
  
}

export default Home;
