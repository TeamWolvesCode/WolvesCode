import React from "react";
import { Switch, Route } from "react-router-dom";

//Styles
import "./styles/App.css";
import "./styles/reset.css";

//molecules
import Navbar from "../components/molecules/Navbar";

//pages
import Home from "./Home";

export default function App() {
  return (
    <div className="main-page">
      <Navbar />
      <Switch>
        <Route path="/about-us">
          {/* <AboutUs /> */}
        </Route>
        <Route path="/stats">
          {/* <Stats /> */}
        </Route>
        <Route path="/testimonials">
          {/* <Testimonials /> */}
        </Route>
        <Route path="/recent-work">
          {/* <RecentWork /> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
