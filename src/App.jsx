import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Events } from "./components/events";
import { Robots } from "./components/robots";
import { DetailedGallery } from "./components/detailed_gallery";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import StemPage from "./components/stem";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Gallery data={landingPageData.Gallery} />
                <Team data={landingPageData.Team} />
              </div>
            }
          />

          <Route
            path="/events"
            element={<Events data={landingPageData.Events} />}
          />
          <Route
            path="/robots"
            element={<Robots data={landingPageData.Robots} />}
          />

          <Route
            path="/gallery"
            element={<DetailedGallery data={landingPageData.DetailedGallery} />}
          />
          <Route
            path="/stem"
            element={<StemPage/>}
          />
        </Routes>
        <Contact data={landingPageData.Contact} />
      </div>
    </Router>
  );
};

export default App;
