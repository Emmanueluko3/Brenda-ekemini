import React from "react";
// import "../styles/home.css";
import Featured from "../assets/images/featured-img.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function FeaturedPPties() {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {/* <div className="card">
        <img src={Featured} alt="Features" />
        <div className="absolute">
          <h5 className="left">FEATURED</h5>
          <h5 className="right">FOR RENT</h5>
        </div>
        <div className="card-body">
          <h4>Contemporary apartment</h4>
          <div className="card-price">
            <h5>Price:</h5>
            <h5>$3,600/mo</h5>
          </div>
        </div>
      </div> */}
      {/* New Card */}
      <Card className="m-3" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FeaturedPPties;
