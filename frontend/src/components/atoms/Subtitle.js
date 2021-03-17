import React from "react";

//style
import "./styles/Subtitle.css";

export default function Subtitle(props) {
  const { content, colorSubtitle } = props;
  const colorH2 = {
    color: `${colorSubtitle}`,
  };
  return (
    <h2 className="subtitle" style={colorH2}>
      {content}
    </h2>
  );
}
