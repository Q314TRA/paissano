import React from 'react';
import NavbarTwo from './component/Navbar/NavbarTwo';
import FBanner from './component/Banner/frelencerBanner';
import PortfolioSlider from './component/Portfolio/PortfolioSlider';
import ServiceTwo from './component/ServiceTwo';
import TestimonialTwo from './component/Carnabal/TestimonialTwo';
import ClientslogoTwo from './component/Carnabal/ClientslogoTwo';
// import Registro from './component/Carnabal/Registro';
import BlogTwo from './component/Blog/BlogTwo';

import ContactTwo from './component/ContactTwo';
import Contact from './component/Contact';

import SkillTwo from './component/Skill/SkillTwo';
import FooterTwo from './component/FooterTwo';
import jhonData from './component/jhonData';

import SectionTitleTwo from './component/Banner/SectionTitleTwo';
import SplitText from "react-pose-text";

import banner from './assets/banner.jpg'


export const Carnabal = () => (
  <div className="body_wrapper">

    <NavbarTwo mClass="menu_two" mainlogo="logo-blue.png" stickylogo="logo-blue.png" />
    <section style={{ marginTop: "calc(3rem + 120px)" }}>
        <img alt="banner" src={banner} style={{width:"100%"}} ></img>
    </section>

    {/* <section className="portfolio_slider_area" id="portfolio" style={{ marginTop: "3rem" }}>
      <div className="container">
        <SectionTitleTwo style={{ marginBottom: '0px' }} tCenter="text-center" stitle="Activismo" btitle="Carnaval cannabico Diciembre 12 del 2020" />
      </div>
    </section> */}

    <ClientslogoTwo />


    <section className="portfolio_slider_area" id="portfolio" style={{ marginTop: "0", backgroundColor: "#3A9A50", position: "relative" }}>
      <div className="container">
        <SectionTitleTwo style={{ marginBottom: '0px', color: "white", fontSize: "24pt", textTransform: "none" }} tCenter="text-center" stitle="Liberación" btitle="Entre intereses e ignoracia disfrasadas de moralidad, se apreso algo que estuvo antes que nosotros, una vez mas actuaremos como la voz de aquello que necesita ser libre." />
        <span style={{
          position: "absolute",
          width: "100%",
          left: "0",
          textAlign: "center",
          bottom: "50px",
          color: "white",
          fontWeight: "700"
        }}>Carnaval cannabico Diciembre 12 del 2020</span>
      </div>
    </section>


    <TestimonialTwo />

    <Contact jhonData={jhonData} className={"bg_color"} />
    <FooterTwo jhonData={jhonData} />
  </div >
)
