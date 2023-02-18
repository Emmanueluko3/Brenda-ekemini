import React from "react";
import "../styles/home.css";
import Button from "./button";
import Input from "./input";

function Hsec2() {
  return (
    <>
      <div className="section2">
        <h2>The Best Way To Find Your Home​</h2>
        <p>
          Help your visitors find the right property by letting them set various
          search criteria
        </p>
        <form action="">
          <div className="input">
            <Input type="text" placeholder="Enter Keyword..." />
          </div>
          <div className="input">
            <Input type="text" placeholder="Status" />
          </div>
          <div className="input">
            <Input type="text" placeholder="Status" />
          </div>
          <div className="input">
            <Input type="text" placeholder="Type" />
          </div>
          <div className="input">
            <Input type="text" placeholder="Bedrooms" />
          </div>
          <div className="input">
            <Input type="text" placeholder="Bathrooms" />
          </div>
          <div className="input">
            <Input type="text" placeholder="All Cities" />
          </div>
          <div className="input">
            <Input type="text" placeholder="Min. Price" />
          </div>
          <div className="input">
            <Input type="text" placeholder="Max. Price" />
          </div>
           <div className="input">
          <Button type="submit" placeholder="Search" />
           </div>
        </form>
      </div>
    </>
  );
}

export default Hsec2;
