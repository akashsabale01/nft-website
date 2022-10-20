import React from "react";
import "./infoItem.css";

const InfoItem = (props) => {
  const { item } = props;
  return (
    <div className="info-item absolute-center">
      <img
        src={item.icon}
        alt={item.section_title}
        className="info-item-icon"
      />
      <div className="info-item-title">{item.section_title}</div>
      <div className="info-description">{item.description}</div>
    </div>
  );
};

export default InfoItem;
