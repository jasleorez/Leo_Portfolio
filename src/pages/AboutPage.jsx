// src/pages/AboutPage.jsx
import React, { useEffect, useRef }  from "react";
import { useLocation } from "react-router-dom";

import AboutNavbar from "../components/AboutNavbar";
import { LoadingScreen } from "../components/LoadingScreen";
import { Me } from "../components/sections/Me";
import { Certifications } from "../components/sections/Certifications";
import { Works } from "../components/sections/Works";
import { SkillsAbout } from "../components/sections/SkillsAbout";
import { Contact } from "../components/sections/Contact";
import { GallerySection } from "../components/sections/GallerySection";
import { Footer } from "../components/Footer";
import { Testimonial } from "../components/sections/Testimonial";
import { MobileMenuAboutPage } from "../components/MobileMenuAboutPage";

import "../App.css";
import "../index.css";

const AboutPage = ({ isLoaded, setIsLoaded, menuOpen, setMenuOpen }) => {

  const location = useLocation();
  const certificationsRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToCerts && certificationsRef.current) {
      setTimeout(() => {
        certificationsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#1a1a1a] text-[#ededed]`}
      >
        <AboutNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenuAboutPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Me />
        <Certifications ref={certificationsRef} />
        <Works />
        <SkillsAbout />
        <GallerySection />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
