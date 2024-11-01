import React, { useState, useEffect } from "react";
import stemData from "../data/stemData.json";
import "./stemPage.css";

const StemPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(stemData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="stem-page">
      {/* Hero Section */}
      <section className="hero">
        <img
          src={data.heroSection.image}
          alt="Students engaged in a STEM project"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>{data.heroSection.title}</h1>
          <div className="hero-buttons">
            {data.heroSection.buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`btn btn-${button.text
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CRAIB LAB Section */}
      <section id="learn-more" className="why-choose">
        <h2>{data.whyChooseSection.title}</h2>
        <ul className="features-list">
          {data.whyChooseSection.features.map((feature, index) => (
            <li key={index}>
              <i className={feature.icon}></i> <strong>{feature.title}:</strong>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Course Offerings Section */}
      <section className="course-offerings">
        <h2>{data.courseOfferingsSection.title}</h2>
        <div className="course-grid">
          {data.courseOfferingsSection.categories.map((category, index) => (
            <div key={index} className="course-category">
              <h3>
                <i className={category.icon}></i> {category.name}
              </h3>
              <ul>
                {category.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <h2>{data.successStoriesSection.title}</h2>
        {data.successStoriesSection.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <blockquote>{testimonial.quote}</blockquote>
            <cite>- {testimonial.author}</cite>
          </div>
        ))}
      </section>

      {/* Join the STEM Revolution Section */}
      <section className="join-stem-revolution">
        <h2>{data.joinStemRevolutionSection.title}</h2>
        <p>{data.joinStemRevolutionSection.description}</p>
        <a
          href={data.joinStemRevolutionSection.button.link}
          className="btn btn-moodle"
        >
          {data.joinStemRevolutionSection.button.text}
        </a>
      </section>
    </div>
  );
};

export default StemPage;
