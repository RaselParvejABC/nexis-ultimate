import React from "react";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="grid place-content-center">
      <img src={BannerImage} alt="Banner Image" className="w-full" />
    </div>
  );
};

export default Banner;
