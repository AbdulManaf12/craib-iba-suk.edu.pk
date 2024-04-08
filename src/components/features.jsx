import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <br />
        <br /><br /><br />
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="item_feature col-xs-5 col-md-2">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p style={{ textAlign: "justify" }}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
