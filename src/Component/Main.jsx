import React from "react";
import "../Styled/Main.css";
import Light from '/Lightoff.png';
import  Betting from '/Betting.png';
import tv from '/RetroTV.png';

const Main = () => {
  return (
    <div className="section-main">
      <h1>Our Services</h1>
      <div className="grid-container">
        <div className="grid-box">
          <img src={tv} alt="" />
          <h4>Cable Tv</h4>
        </div>
        <div className="grid-box">
          <img src={Betting} alt="" />
          <h4>Betting</h4>
        </div>
        <div className="grid-box">
          <img src={Light} alt="" />
          <h4>Electricity</h4>
        </div>
        <div className="grid-box">
        <img src={Light} alt="" />
        <h4>Electricity</h4>
        </div>
        <div className="grid-box">
        <img src={Light} alt="" />
        <h4>Electricity</h4>
        </div>
        <div className="grid-box">
          <img src={tv} alt="" />
          <h4>Cable Tv</h4>
        </div>
        <div className="grid-box">
          <img src={Betting} alt="" />
          <h4>Betting</h4>
        </div>
        <div className="grid-box">
          <img src={Light} alt="" />
          <h4>Electricity</h4>
        </div>
        <div className="grid-box">
        <img src={Light} alt="" />
        <h4>Electricity</h4>
        </div>
        <div className="grid-box">
        <img src={Light} alt="" />
        <h4>Electricity</h4>
        </div>
        <div className="grid-box">
          <img src={tv} alt="" />
          <h4>Cable Tv</h4>
        </div>
        <div className="grid-box">
          <img src={Betting} alt="" />
          <h4>Betting</h4>
        </div>
        <div className="grid-box">
          <img src={Light} alt="" />
          <h4>Electricity</h4>
        </div>
        <div className="grid-box">
        <img src={Light} alt="" />
        <h4>Electricity</h4>
        </div>
        <div className="grid-box">
        <img src={Light} alt="" />
        <h4>Electricity</h4>
        </div>
      </div>
    </div>
  );
};

export default Main;
