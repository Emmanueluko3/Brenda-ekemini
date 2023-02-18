import React from "react";
import "../styles/contactus.css";

function ContactUs() {
  return (
    <>
      <div className="contactus-parent">
        <div className="contactus">
          <div className="left contactus-card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <form action="">
              <div className="input-top">
                <div className="contact-input top-left">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="contact-input top-left">
                  <label htmlFor="lname">First Name</label>
                  <input
                    type="text"
                    name="lname"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="contact-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="contact-input">
                <label htmlFor="message">Email</label>
                <textarea
                  type="email"
                  name="message"
                  placeholder="Enter your Message"
                />
              </div>
              <div className="contact-input btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="right">
            <div className="contactus-card">
              <h4>For inquiries contact</h4>
              <div className="address">
                <h4>Brenda</h4>
                <p>
                  No.16 Uqua RD. Eket,
                  <br /> Akwa Ibom State, <br /> Nigeria
                </p>
              </div>
              <div className="address">
                <h4>Brenda</h4>
                <p>
                  No.16 Uqua RD. Eket,
                  <br /> Akwa Ibom State, <br /> Nigeria
                </p>
              </div>
            </div>
            <div className="contactus-card">
              <h4>Corporate Headquarters </h4>
              <div className="address">
                <h4>Akwa Ibom State University</h4>
                <p>
                  532111, Ikot Akpaden,
                  <br /> Akwa Ibom State, <br /> Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
