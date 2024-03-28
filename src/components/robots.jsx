// Robots.js
import React from "react";
import "./robots.css";

export const Robots = (props) => {
  console.log("data: ", props.data);

  if (!props.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Robots at CRAIB</h1>
      <div className="card-deck">
        {props.data.map((robot, index) => (
          <div className="card" key={index}>
            <img
              className="card-img-top"
              src={robot.img}
              alt={robot.name}
              style={{ borderRadius: "5%" }}
            />
            <div className="card-body">
              <h4 className="card-title">{robot.name}</h4>
              <p className="card-text">{robot.text}</p>
              <p className="card-text">
                <small className="text-muted">
                  <a
                    href={robot.url}
                    className="btn btn-success"
                    target="_blank"
                  >
                    More Details
                  </a>
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
