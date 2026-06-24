import React from "react";
import HeaderImage from "./assets/DSATrackerPoster.png";
export const Home = () => {
  return (
    <div>
      <h2>DSA Performance Tracker</h2>
      <img
        src={HeaderImage}
        alt="DSA Poster"
        style={{ width: "80%", maxWidth: "900px" }}
      />
    </div>
  );
};
