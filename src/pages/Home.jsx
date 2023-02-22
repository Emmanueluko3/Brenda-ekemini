import React, { Component } from "react";
import FeaturedPPties from "../components/featuredppties";
import Hsec2 from "../components/secondHomeSection";
import "../styles/home.css";
import News from "../assets/images/news.png";
import ControlledCarousel from "../components/slides";
import Card from "react-bootstrap/Card";
import Firstslide from "../assets/images/slide1.svg";
// import Secondslide from "../assets/images/slide2.png";

function Home() {
  return (
    <>
      <div>
        <ControlledCarousel />
      </div>

      <div className="">
        <Hsec2 />
      </div>

      {/* feartured Properties */}
      <div className="featured-parent">
        <div className="container d-flex flex-column justify-content-center items-center align-items-center">
          <h2 className="text-center">Our Featured Properties</h2>
          <p className="text-center">
            Create property listings with all the features you’d expect
          </p>
          <FeaturedPPties />
          <button className="load-more">Load More</button>
        </div>
      </div>

      <div
        className="py-5"
        style={{
          background: `url(${Firstslide})`,
          height: "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container my-5 d-flex flex-wrap flex-column justify-content-center align-items-center">
          <div className="text-center">
            <h2 className="text-white">Meet Our Real Estate Agents</h2>
            <p className="text-light">
              Provide your sales agents with attractive profile pages where they
              can display their contact info and listings
            </p>
          </div>
          <Card
            className="m-3 p-2 border-0 bg-white"
            style={{ width: "17rem" }}
          >
            <Card.Img className="rounded-circle" variant="top" src={News} />
            <Card.Body className="text-center">
              <Card.Title>Samuel Palmer</Card.Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis et sem sed sollicitudin. Donec...
              </p>
              <h5>View profile</h5>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* News from blog */}
      <div className="bg-light">
        <div className="container py-5 d-flex flex-wrap flex-column justify-content-center align-items-center">
          <h2 className="text-center">News From Our Blog</h2>
          <p className="text-center">Keep always update on latest topics</p>

          <Card
            className="m-3 p-2 border-0 bg-white"
            style={{ width: "17rem" }}
          >
            <Card.Img variant="top" src={News} />
            <Card.Body>
              <Card.Title>
                Skills That You Can Learn In The Real Estate Market
              </Card.Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis et sem sed sollicitudin. Donec...
              </p>
              <h5>Continue reading</h5>
            </Card.Body>

            <div className="px-3 border-1 border-top d-flex justify-content-between">
              <p>Feb 14, 2023</p>
              <p>Bussiness</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Consult section */}
      <div className="container ">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-lg-6">
            <h2>Get A Free Consultation</h2>
            <p>
              Help your visitors find the right property by letting them set
              various search criteria
            </p>
          </div>

          <div className="col-lg-6">
            <form>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 my-2 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="my-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="my-2">
                <textarea
                  type="textarea"
                  name="message"
                  placeholder="Enter your message here"
                  className="form-control"
                />
              </div>

              <div className="w-100">
                <button className="btn btn-secondary w-100">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
