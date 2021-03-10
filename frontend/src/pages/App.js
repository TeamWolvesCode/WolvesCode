import React from "react";

//Styles
import "./styles/App.css";
import "./styles/reset.css";

//pruebas
import TestimonyList from "../components/organisms/TestimonyList";

export default function App() {
  return (
    <div className="main-page">
      <TestimonyList />
    </div>
  );
}
