import React from "react";
import "./Companies.scss";
import zapier from "../../assets/zapier.png";
import spotify from "../../assets/spotify.png";
import zoom from "../../assets/zoom.png";
import amazon from "../../assets/amazon.png";
import adobe from "../../assets/adobe.png";
import notion from "../../assets/notion.png";
import netflix from "../../assets/netflix.png";
import img from "../../assets/compImg.png"
const Companies = () => {
  return (
    <section className="comp">
      <div className="container">
        <div className="comp__wrapper">
          <div className="comp__top">
            <div className="comp__logo">
              <img src={zapier} alt="" />
            </div>
            <div className="comp__logo">
              <img src={spotify} alt="" />
            </div>
            <div className="comp__logo">
              <img src={zoom} alt="" />
            </div>
            <div className="comp__logo  none">
              <img src={amazon} alt="" />
            </div>
            <div className="comp__logo none ">
              <img src={adobe} alt="" />
            </div>
            <div className="comp__logo  none">
              <img src={notion} alt="" />
            </div>
            <div className="comp__logo  none">
              <img src={netflix} alt="" />
            </div>
          </div>
          <div className="comp__btm">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
