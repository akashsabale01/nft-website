import React from "react";
import "./hero.css";
import Button from "../../common/Button";

const Hero = () => {
  return (
    <div className="hero absolute-center">
      <div className="hero-left">
        <div className="hero-heading">
          Discover collect, & sell
          <span className="header-gradient"> Extraordinary </span>NFTs
        </div>
        <div className="hero-description">
          The world's First and Largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </div>
        <div className="hero-left-btns">
          <Button btnType="PRIMARY" btnText="Explore" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="hero-left-secondary-btn"
          />
        </div>
        <div className="hero-left-infoStats">
          <div className="hero-infoStats-infoItem">
            <div className="hero-infoItem-count">200K+</div>
            <div className="hero-infoItem-label">Collections</div>
          </div>
          <div className="hero-infoStats-infoItem">
            <div className="hero-infoItem-count">10K+</div>
            <div className="hero-infoItem-label">Artists</div>
          </div>
          <div className="hero-infoStats-infoItem">
            <div className="hero-infoItem-count">423K+</div>
            <div className="hero-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-bg-blob"></div>
        <div className="hero-right-diamond">
          <div className="hero-right-diamond-item absolute-center">
            <img
              src="https://i.seadn.io/gae/VAh_wJos8A6-belOYg20Wj3tZWz9zR94v2p9bF_ypYXgXa8OSRVovQ1ci1XMIl_lAXvpn9IFKv-nJVlm_fS8Tn35oUgdbUSoxwkacA?auto=format&w=128"
              alt="diamond banner"
              className="hero-right-diamond-img"
            />
          </div>
          <div className="hero-right-diamond-item absolute-center">
            <img
              src="https://i.seadn.io/gae/EkOUOHaFNI7kDx33yMcWYAD3lbhLPQ3oD6oZ_UxVLxs0KSFDHCT9cuv64kJQkIXOp_VcisW3XJTcxxfWruotm_vAnLAkx5qlKIc3hzg?auto=format&w=128"
              alt="diamond banner"
              className="hero-right-diamond-img"
            />
          </div>
          <div className="hero-right-diamond-item absolute-center">
            <img
              src="https://i.seadn.io/gcs/files/c3a312c53514642e8041c65e10b40a52.gif?auto=format&w=128"
              alt="diamond banner"
              className="hero-right-diamond-img"
            />
          </div>
          <div className="hero-right-diamond-item absolute-center">
            <img
              src="https://i.seadn.io/gae/3f0RiHRIlAbsxTmuXfyZ0LD7x1NJNPBfVKoGt8LN_tgEwvbMOPNgvExzvnt3QGBQUX_YndbSJks-RvvDYUEJF6kyXXUhvfWNG7HkXj0?auto=format&w=128"
              alt="diamond banner"
              className="hero-right-diamond-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
