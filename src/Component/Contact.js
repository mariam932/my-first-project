import React from "react";
import './CSS/Contact.css'
import logo from './Image/1.webp'
function Contact() {
  return (
    <div>
      <header>
        <div class="container">
          <div class="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div class="one">
        <div class="container">
          <img src="img/shape.png" class="square" alt="" />
          <div class="form">
            <div class="contact-info">
              <h3 class="title">Reach us</h3>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>
              <div class="info">
                <div class="information">
                  <br />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div class="information">
                  <br />
                  <p>lorem@ipsum.com</p>
                </div>
                <div class="information">
                  <br />
                  <p>123-456-789</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <form action="index.html" autocomplete="off">
                <h3 class="title">Contact us</h3>
                <div class="input-container">
                  <input type="text" name="name" class="input" />
                  <label for="">Username</label>
                  <span>Username</span>
                </div>
                <div class="input-container">
                  <input type="email" name="email" class="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div class="input-container">
                  <input type="tel" name="phone" class="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div class="input-container textarea">
                  <textarea name="message" class="input"></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" class="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
