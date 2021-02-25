import React from "react";

//Styles
import "./styles/ButtonsSendAndLogin.css";

export default function ButtonsSendAndLogin(props) {
  const { styles, text } = props;
  return (
    <div className="container-fluid m-0">
      <div className="row">
        <div className="col">
          <button className={styles} type="button">
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}
