import React, { useEffect } from "react";

//assets
//import starIcon from "../../assets/star-fill.svg";

export default function Starts(props) {
  const { record } = props;

  const div = <div className="container-star" />;
  //const star = <img src={starIcon} alt="" aria-hidden={true} />;

  useEffect(() => {
    for (let i = 0; i < record; i++) {}
  });

  return div;
}
