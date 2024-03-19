import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/345605712_790694162397841_5866271223072607859_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHQSiX157YnKz8n_sgNNHjdP8Lq78nbNbU_wurvyds1tc7VCk12U4mqrVhGbJ249VyS92ZiUtd4VNDIzuaKPYCT&_nc_ohc=IzBIfi5ujdUAX-MFMf1&_nc_ht=scontent.fkhi6-2.fna&oh=00_AfAYCfvy0DONZTApxGSQI6QqFq9mfBmKylOjlr_99KnoGw&oe=65FED779"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p style={{ textAlign: "justify" }}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>

              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
