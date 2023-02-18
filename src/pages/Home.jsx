import React, { Component } from "react";
import FeaturedPPties from "../components/featuredppties";
import Hsec2 from "../components/secondHomeSection";
import "../styles/home.css";
import News from "../assets/images/news.png";
// import Input from "../components/input";
import Button from "../components/button";

function Home() {
  return (
    <>
      <div className="slide">
        <div className="card">
          <h2>Luxury family home</h2>
          <h3>5 Beds - 3 Baths - 3170 Sq Ft</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ullam deleniti asperiores laborum nam quo eius tenetur debitis
            reiciendis. Temporibus incidunt dignissimos accusamus adipisci,
            ipsum perspiciatis quod iure excepturi nihil.
          </p>
          <h3>
            Price: <span className="price">N50000</span>
          </h3>
        </div>
      </div>
      <div className="Hsec2">
          <Hsec2  />
      </div>

      {/* feartured Properties */}
      <div className="featured-parent">
        <div className="Featured">
          <h2 className="h2">Our Featured Properties</h2>
          <p>Create property listings with all the features you’d expect</p>
          <FeaturedPPties />
          <button className="load-more">Load More</button>
        </div>
      </div>

      {/* News from blog */}
      <div className="news-parent">
        <div className="news-blog">
          <h2 className="h2">News From Our Blog</h2>
          <p>Keep always update on latest topics</p>

          <div className="news-cards">

            <div className="news-card">
              <img src={News} alt="News" />
              <div className="news-card-body">
                <h4>Skills That You Can Learn In The Real Estate Market</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>
                <h3>Continue reading...</h3>
                <div className="news-card-price">
                  <h5>Feb 9, 2023</h5>
                  <h5>Business</h5>
                </div>
              </div>
            </div>

            <div className="news-card">
              <img src={News} alt="News" />
              <div className="news-card-body">
                <h4>Skills That You Can Learn In The Real Estate Market</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>
                <h3>Continue reading...</h3>
                <div className="news-card-price">
                  <h5>Feb 9, 2023</h5>
                  <h5>Business</h5>
                </div>
              </div>
            </div>

            <div className="news-card">
              <img src={News} alt="News" />
              <div className="news-card-body">
                <h4>Skills That You Can Learn In The Real Estate Market</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>
                <h3>Continue reading...</h3>
                <div className="news-card-price">
                  <h5>Feb 9, 2023</h5>
                  <h5>Business</h5>
                </div>
              </div>
            </div>

            <div className="news-card">
              <img src={News} alt="News" />
              <div className="news-card-body">
                <h4>Skills That You Can Learn In The Real Estate Market</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...</p>
                <h3>Continue reading...</h3>
                <div className="news-card-price">
                  <h5>Feb 9, 2023</h5>
                  <h5>Business</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Consult section */}
      <div className="consult">
        <div className="left">
          <h2>Get A Free Consultation</h2>
          <p>Help your visitors find the right property by letting them set various search criteria</p>
        </div>

        <div className="right">
          <form>
            <div className="consult-flex field">
              <div className="input">
                <input type="text" placeholder="First Name"/>
              </div>
              <div className="input">
                <input type="text" placeholder="Last Name"/>
              </div>
            </div>

            <div className="field">
              <input type="email" placeholder="Email" />
            </div>

            <div className="field">
              <textarea type="textarea" name="message" placeholder="Enter your message here" className="textarea"/>
            </div>

            <div className="field btn">
              <Button type="submit" placeholder="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
