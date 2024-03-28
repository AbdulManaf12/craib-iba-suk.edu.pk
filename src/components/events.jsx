import React from "react";
import "./events.css";

export const Events = (props) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="heading">Events</h1>
      <div className="card-deck">
        {props.data.map((project, index) => (
          <div className="card" key={index}>
            <img
              className="card-img-top"
              src={project.img}
              alt={project.title}
              style={{ borderRadius: "5%" }}
            />
            <div className="card-body">
              <h4 className="card-title">{project.title}</h4>
              <h6>
                <i>Date: </i> {project.date}
              </h6>
              <p className="card-text">{project.text}</p>
            </div>
          </div>
        ))}
      </div>
      <br /> <br />
    </div>
  );
};
