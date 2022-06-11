import React from "react";
import "../assets/styling/components/hero.css";

export const Hero = ({ title, img = "url(../assets/images/neww.jpeg)" }) => {
  const styles = { backgroundImage: `url(${img})` };
  return (
    <div className="hero-image" style={styles}>
      <h5>{title}</h5>
    </div>
  );
};
