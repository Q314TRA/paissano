import React, { useState, useCallback, useEffect } from "react";

import NavbarTwo from './component/Navbar/NavbarTwo';
import FBanner from './component/Banner/frelencerBanner';
import PortfolioSlider from './component/Portfolio/PortfolioSlider';
import ServiceTwo from './component/ServiceTwo';
import TestimonialTwo from './component/Impacto/TestimonialTwo';
import ClientslogoTwo from './component/Impacto/ClientslogoTwo';
import BlogTwo from './component/Blog/BlogTwo';

import ContactTwo from './component/ContactTwo';
import Contact from './component/Contact';

import SkillTwo from './component/Skill/SkillTwo';
import FooterTwo from './component/FooterTwo';
import jhonData from './component/jhonData';

import SectionTitleTwo from './component/Banner/SectionTitleTwo';

import Portfolio from './component/Portfolio/Portfolio';
import Skill from './component/Skill/Skill';

import ImageViewer from "react-simple-image-viewer";




const images = [
  "http://placeimg.com/1200/800/nature",
  "http://placeimg.com/800/1200/nature",
  "http://placeimg.com/1920/1080/nature",
  "http://placeimg.com/1500/500/nature"
];

export const Impacto = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (


    <div className="body_wrapper">

      <NavbarTwo mClass="menu_two" mainlogo="logo-blue.png" stickylogo="logo-blue.png" />
      <section className="portfolio_slider_area" id="portfolio" style={{ marginTop: "3rem" }}>
        <div className="container">
          <SectionTitleTwo style={{ marginBottom: '0px' }} tCenter="text-center" stitle="Impacto social" btitle="Ayuda a una familia" />
        </div>
      </section>

      <ClientslogoTwo />
      <Portfolio openImageViewer={openImageViewer} />
      <Skill />


      {/* 
  
      <ClientslogoTwo />
  
      <section className="portfolio_slider_area" id="portfolio" style={{ marginTop: "0", backgroundColor: "#3A9A50" }}>
        <div className="container">
          <SectionTitleTwo style={{ marginBottom: '0px', color: "white", fontSize: "24pt", textTransform: "none" }} tCenter="text-center" stitle="Proposito" btitle="Generar bienestar entregando un ecosistema justo, lícito y digno de interacción entre personas." />
        </div>
      </section>
      <TestimonialTwo /> */}
      {/* <PortfolioSlider /> */}
      {/* <SkillTwo /> */}
      {/* <ServiceTwo rowFlex="flex-row-reverse" /> */}

      {/* <FBanner jhonData={jhonData}/>
      <BlogTwo/> */}

      {/* <ContactTwo jhonData={jhonData} /> */}
      <Contact jhonData={jhonData} />
      <FooterTwo jhonData={jhonData} />


      {isViewerOpen && (
        <ImageViewer

          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 9999
          }}
        />
      )}
    </div>
  )
} 
