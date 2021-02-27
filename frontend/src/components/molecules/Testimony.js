import React from "react";

//styles
import "./styles/Testimony.css";

//atoms
import Starts from "../atoms/Starts";

export default function Testimony(props) {
  const { quotes, testimonyMessage, record } = props;
  return (
    <div className="card text-white bg-primary shadow">
      <div className="card-body">
        <img src={quotes} alt="" />
        <p className="card-text">{testimonyMessage}</p>
        <Starts record={record} />
      </div>
    </div>
  );
}
