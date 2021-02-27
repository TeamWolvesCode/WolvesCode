import React from "react";

//Styles
import "./styles/App.css";
import "./styles/reset.css";

//pruebas
import Button from "../components/atoms/Button";

export default function App() {
  return (
    <div>
      <Button styles="btn btn-primary col-12 contactUs" text="Contact us" />
    </div>
  );
}
