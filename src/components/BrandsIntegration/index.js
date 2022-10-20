import React from "react";
import "./brandsIntegration.css";

const BrandsIntegration = () => {
  return (
    <div className="brands-integration absolute-center">
      <img
        src={require("../../assets/brandLogos.png")}
        alt="brands logos"
        className="brands-integration-logos"
      />
    </div>
  );
};

export default BrandsIntegration;
