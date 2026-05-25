import React from "react";
import Lottie from "lottie-react";

import animationData from "../../../animations/brand-identity.json";

const BrandIdentityAnimation = ({ width = "100%", maxWidth = 600 }) => {
  return (
    <div style={{ width: width, maxWidth: maxWidth, margin: "0 auto" }}>
      <Lottie 
        animationData={animationData} 
        loop={true}       // Set to false if you only want it to play once
        autoplay={true}   // Plays automatically when the component mounts
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BrandIdentityAnimation;
