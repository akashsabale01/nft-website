import React from "react";
import InfoItem from "./InfoItem";
import { INFO_ITEMS } from "../../data/infoItem";
import "./infoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-section-heading absolute-center">
        <span className="header-gradient">Create and sell your NFTs</span>
      </div>
      <div className="is-items-container">
        {INFO_ITEMS.map((_infoItem) => (
          <InfoItem item={_infoItem} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
