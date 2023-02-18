import React from "react";
import "../styles/blog.css";
import Newsimg from "../assets/images/newsimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Blog() {
  return (
    <div className="blog-parent">
      <div className="blog">
        <div className="left">
          <div className="blog-card">
            <div className="top">
              <img src={Newsimg} alt="News" />
            </div>
            <div className="down">
              <h2>10 common mis conceptions about business developement</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
            <div className="interractions">
              <div className="interflex">
                <FontAwesomeIcon icon="fa-regular fa-user" /> <h4>By John</h4>
              </div>

              <div className="interflex">
                <h4>01-January-2023</h4>
              </div>
              <div className="interflex">
                <h4>Business</h4>
              </div>
              <div className="interflex">
                <h4>0</h4>
              </div>
              <div className="interflex">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="blog-card">
            <h3>Blog Search</h3>
            <form action="">
              <div className="blog-input">
                <input type="text" placeholder="Search" />
              </div>
              <div className="blog-btn">
                <button type="submit">Search</button>
              </div>
            </form>
          </div>
          <div className="blog-card">
            <h3>Topics</h3>
            <div className="topics">
              <h5>
                Business <span className="topic-span">(4)</span>
              </h5>
            </div>
            <div className="topics">
              <h5>
                Construction <span className="topic-span">(4)</span>
              </h5>
            </div>
            <div className="topics">
              <h5>
                Real Estate <span className="topic-span">(4)</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
