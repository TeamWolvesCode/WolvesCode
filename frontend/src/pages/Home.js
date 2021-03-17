import React, { Component } from "react";

//components
import Subtitle from "../components/atoms/Subtitle";
import Button from "../components/atoms/Button";

//styles
import "./styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="principalContent col col-sm">
            <Subtitle content="A creative agency" colorSubtitle="white" />
            <h1 className="title">
              WOLVESCODE<span className="spanTitle">.</span>
            </h1>
            <h2 className="subtitleHowl">HOWL WITH US</h2>
            <div className="row">
              <div className="col-12 col-sm-12">
                <Button text="CONTACT US" styles="contactUs" />
              </div>
              <div className="col-12 col-sm-12">
                <h2 className="subtitleInfo">WHAT WE DO?</h2>
                <p className="paragraphsWhatWeDo">
                  We build <span className="spanParagraphs">solutions</span> for
                  startups and established businesses...
                  <span className="spanParagraphs">Coding</span> it for you.
                </p>
              </div>
              <div className="col-12 col-sm-12">
                <h2 className="subtitleInfo">SOME CLIENTS</h2>
              </div>
            </div>
          </div>
          <div className="teamContent col-0 col-sm-0"></div>
        </div>
      </div>
    );
  }
}
