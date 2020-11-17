import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

import SectionCompany from "./SectionCompany";
import SectionSocial from "./SectionSocial";
import SectionPartners from "./SectionPartners";


import NavbarThree from "../Navbar/NavbarThree";
import jhonData from "../jhonData";
import "./style.scss";

const FullpageSlider = (fullpageProps) => (
  <div className="scroll_page">
    <NavbarThree mainlogo="logo2.png" />
    <ReactFullpage
      {...fullpageProps}
      render={({ state, fullpageApi }) => {
        return (
          <React.Fragment>




            <SectionCompany smallText="Photography" />
            <SectionSocial smallText="Photography" />
            <SectionPartners smallText="Photography" />

            <SectionOne />
            <SectionTwo />
            <SectionThree />

            <SectionFive />
            
            <SectionFour jhonData={jhonData} />
          </React.Fragment>
        );
      }}
    />
    {/* background: "linear-gradient( 90deg, #f66962 0%, #f78232 100%)", */}
    {/* linear-gradient( 90deg, rgb(255 255 255) 43%, rgb(60 120 59) 100%) */}
    <div
      className="section_bg"
      style={{
        background: "linear-gradient( 90deg, rgb(255 255 255) 43%, rgb(60 120 59) 100%)",
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <ul
        data-relative-input="true"
        className="list-unstyled memphis"
        id="scene"
      >
        <li>
          <img style={{ opacity: "0.4" }} srcSet={require("../../image/paissano/line8.png")} alt="" />
        </li>
        <li>
          {/* <img srcSet={require("../../image/new-page/line2.png")} alt="" /> */}
        </li>
        <li>
          {/* <img srcSet={require("../../image/new-page/line3.png")} alt="" /> */}
        </li>
        <li>
          <img style={{ opacity: "0.2" }} srcSet={require("../../image/paissano/shape_5.png")} alt="" />
        </li>
        <li>
          {/* <img
            className="layer layer2"
            data-depth="0.2"
            width="150"
            height="150"
            srcSet={require("../../image/paissano/shape_1.png")}
            alt=""
          /> */}
        </li>
        <li>
          {/* <img width="235" srcSet={require("../../image/paissano/shape_8.png")} alt="" /> */}
        </li>
        <li>
          <img
            srcSet={require("../../image/new-page/bottomshape.png")}
            alt=""
          />
        </li>
        <li>
          {/* <img srcSet={require("../../image/new-page/arrow.png")} alt="" /> */}
        </li>
        <li>
          <img srcSet={require("../../image/new-page/shape3.png")} alt="" />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li style={{ display: "none" }} ></li>
      </ul>
    </div>
  </div>
);

export default FullpageSlider;
