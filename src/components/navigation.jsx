import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav" style={{ marginLeft: 150 }}>
            <li>
              <a href="/#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="/stem" className="page-scroll">
                STEM
              </a>
            </li>
            <li>
              <a href="/events" className="page-scroll">
                Events
              </a>
            </li>
            <li>
              <a href="/robots" className="page-scroll">
                Robots
              </a>
            </li>
            <li>
              <a href="/gallery" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="/#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
