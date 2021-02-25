import React from "react";

//Styles
import "./styles/App.css";
import "./styles/reset.css";

//pruebas
import ButtonsSendAndLogin from "../components/atoms/ButtonsSendAndLogin";

export default function App() {
  return (
    <div>
      <ButtonsSendAndLogin
        styles="btn btn-primary col-12 login border-0"
        text="Log in"
      />
      <ButtonsSendAndLogin
        styles="btn btn-primary col-12 send border-0"
        text="Send"
      />
    </div>
  );
}
