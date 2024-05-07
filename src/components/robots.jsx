import React from "react";
import "./robots.css";

export const Robots = (props) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="robots-container">
      <h1 className="heading">Robots at CRAIB</h1>
      <div className="outer-card card-deck flex-wrap">
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
              <br />
              <br />
            </div>
            <div className="card-button-container">
              {" "}
              {/* New container for button */}
              <p className="card-text" style={{ marginBottom: 0 }}>
                {" "}
                {/* Remove margin-bottom from text */}
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
