import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Styles
import "./styles/App.css";
import "./styles/reset.css";

//organisms
import Layout from "../components/organisms/Layout";

//pages
import Home from "./Home";
import Testimonials from "./Testimonials";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/about-us" />
          <Route exact path="/stats" />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/recent-work" />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
