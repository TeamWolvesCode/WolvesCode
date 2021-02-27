import React from "react";

import Testimony from "../../components/molecules/Testimony";

//assets
import quotes from "../../assets/quotes.svg";

export default {
  title: "Components/Testimony",
  component: Testimony,
};

const text =
  "Be fearful when others are greedy and to be greedy only when others are fearful.";

export const Primary = () => (
  <Testimony quotes={quotes} testimonyMessage={text} record={2} />
);
Primary.storyName = "Card";
