import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import Logo from "../assets/images/citadel.svg";
import { NavLink } from "react-router-dom";
import { Placeholder } from "react-bootstrap";

function Navbar() {
  const [active, setActive] = useState(null);
  const links = [
    {
      to: "/",
      placeHolder: "Home",
    },
    {
      to: "/properties",
      placeHolder: "Properties",
    },
    {
      to: "/about",
      placeHolder: "About Us",
    },
    {
      to: "/blog",
      placeHolder: "Blog",
    },
    {
      to: "/contact",
      placeHolder: "Contact Us",
    },
  ];

  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className="nav-parent">
      <nav>
        <NavLink to={"/"} className="logo">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <div className="links">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={
                    active === index ? "notActive active" : "notActive"
                  }
                  onClick={() => handleClick(index)}
                >
                  {link.placeHolder}
                </NavLink>
              </li>
            ))}

            {/* <li>
              <NavLink exact to={"/"} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/properties"} activeClassName="active">
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
