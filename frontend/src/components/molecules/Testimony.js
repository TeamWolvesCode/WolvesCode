import React from "react";

//styles
import "./styles/Testimony.css";

//assets
import quotes from "../../assets/quotes.svg";
import deleteMe from "../../assets/person.png";

//atoms
import Starts from "../atoms/Starts";
import ClientInfo from "../atoms/ClientInfo";

export default function Testimony(props) {
  const {
    testimonyMessage,
    record,
    clientImg = deleteMe,
    clientName,
    clientCharge = "Frontend DEV",
    businessName,
    businessImg = deleteMe,
  } = props;

  const backgroundStyleLogo = {
    backgroundImage: `url("${businessImg}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  let recordProm = 0;
  let sum = 0;
  if (record.length > 1) {
    record.forEach((rec) => {
      sum += rec.score;
    });
    recordProm = Math.round(sum / record.length);
  } else {
    recordProm = record;
  }

  return (
    <div className="card text-white bg-primary shadow">
      <div className="card-body">
        <div className="secret-info">
          <h1>{businessName}</h1>
          <div className="container-logoImg" style={backgroundStyleLogo} />
        </div>
        <div className="first-div">
          <img className="quotes" src={quotes} alt="" />
          <p className="card-text">{testimonyMessage}</p>
          <Starts record={recordProm} />
        </div>
        <div className="second-div">
          <ClientInfo
            img={clientImg}
            client={clientName}
            charge={clientCharge}
          />
        </div>
      </div>
    </div>
  );
}
