import React from "react";
import Slider from "react-slick/lib/slider";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./TrendingCard";
import Button from "../../common/Button";
import "./trendingNfts.css";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  arrows: false,
};

const TrendingNfts = () => {
  return (
    <div className="trending-nfts ">
      <div className="trending-nfts-title absolute-center">
        <span className="header-gradient"> TRENDING NFTs</span>
      </div>
      <div className="trending-nfts-bg-blob"></div>

      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft) => (
          <TrendingCard nft={_nft} />
        ))}
      </Slider>

      <div className="tn-btn absolute-center">
        <Button
          btnText="SEE MORE"
          btnType="SECONDARY"
          customClass="see-more-btn"
        />
      </div>
    </div>
  );
};

export default TrendingNfts;
