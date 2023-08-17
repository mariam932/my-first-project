import React from "react";
import Quality from './Image/qu.jpg'
import Delivery from './Image/deleviry10.jpg'
import Customer from './Image/image-700x700.jpg'
import './CSS/Service.css'

function Service() {
  return (
    <div>
      <header>
        <div class="container">
          <h1 class="main-title">Our Services</h1>
        </div>
      </header>
      <div class="service">
        <div class="container">
          <section class="fea one">
            <div class="image">
              <img src={Quality} alt="" srcset="" />
            </div>
            <h2>Quality</h2>
            <p>
              Throughout the site, the terms “we”, “us” and “our” refer to
              Beyoot Furniture. Beyoot Furniture offers this website, including
              all information, tools and services available from this site to
              you, the user, conditioned upon your acceptance of all terms,
              conditions, policies and notices stated here.
            </p>
            {/* <a href="#" class="btn">
              Learn More
            </a> */}
          </section>
          <section class="fea two">
            <div class="image">
              <img src={Delivery} alt="" srcset="" />
            </div>
            <h2>Delivery</h2>
            <p>
              Any new features or tools which are added to the current store
              shall also be subject to the Terms of Service. You can review the
              most current version of the Terms of Service at any time on this
              page. We reserve the right to update, change or replace any part
              of these Terms of Service by posting updates
            </p>
            {/* <a href="#" class="btn">
              Learn More
            </a> */}
          </section>
          <section class="fea three">
            <div class="image">
              <img src={Customer} alt="" srcset="" />
            </div>
            <h2>Customer Service</h2>
            <p>
              Any new features or tools which are added to the current store
              shall also be subject to the Terms of Service. You can review the
              most current version of the Terms of Service at any time on this
              page. We reserve the right to update, change or replace any part
              of these Terms of Service by posting updates
            </p>
            {/* <a href="#" class="btn">
              Learn More
            </a> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Service;
