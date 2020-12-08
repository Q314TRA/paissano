import React from 'react';
import NavbarTwo from './component/Navbar/NavbarTwo';
import FBanner from './component/Banner/frelencerBanner';
import PortfolioSlider from './component/Portfolio/PortfolioSlider';
import ServiceTwo from './component/ServiceTwo';
import TestimonialTwo from './component/Company/TestimonialTwo';
import ClientslogoTwo from './component/Company/ClientslogoTwo';
import BlogTwo from './component/Blog/BlogTwo';

import ContactTwo from './component/ContactTwo';
import Contact from './component/Contact';

import SkillTwo from './component/Skill/SkillTwo';
import FooterTwo from './component/FooterTwo';
import jhonData from './component/jhonData';

import SectionTitleTwo from './component/Banner/SectionTitleTwo';



export const Homefrelencer = () => (
  <div className="body_wrapper">

    <NavbarTwo mClass="menu_two" mainlogo="logo-blue.png" stickylogo="logo-blue.png" />
    <section className="portfolio_slider_area" id="portfolio" style={{ marginTop: "3rem" }}>
      <div className="container">
        <SectionTitleTwo style={{ marginBottom: '0px' }} tCenter="text-center" stitle="Paissano" btitle="Digno y humano" />
      </div>
    </section>

    <ClientslogoTwo />

    <section className="portfolio_slider_area" id="portfolio" style={{ marginTop: "0", backgroundColor: "#3A9A50" }}>
      <div className="container">
        <SectionTitleTwo style={{ marginBottom: '0px', color: "white", fontSize: "24pt", textTransform: "none" }} tCenter="text-center" stitle="Proposito" btitle="Generar bienestar entregando un ecosistema justo, lícito y digno de interacción entre personas." />
        {/* <span></span>
        <h3 style={{ color: "white", textAlign:"center" }}>Generar bienestar entregando un ecosistema justo, lícito y digno de interacción entre personas.</h3> */}
        {/* <SectionTitleTwo style={{ marginBottom: '0px' }} tCenter="text-center" stitle="Paissano" btitle="Consume sano" /> */}
      </div>
    </section>


    <TestimonialTwo />
    {/* <PortfolioSlider /> */}
    {/* <SkillTwo /> */}

    {/* <ServiceTwo rowFlex="flex-row-reverse" /> */}

    {/* <FBanner jhonData={jhonData}/>
    <BlogTwo/> */}

    {/* <ContactTwo jhonData={jhonData} /> */}
    <Contact jhonData={jhonData} className={"bg_color"} />
    <FooterTwo jhonData={jhonData} />
  </div>
)
