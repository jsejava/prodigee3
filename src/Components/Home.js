import React from "react";
import BannerBackground from "../Assets/hb2.svg";
import BannerImage from "../Assets/learner.webp";
// import BannerImage from "../Assets/leaner1.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

import prodigee from "../logo/prodigee.webp";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading1">Get Tutored. </h1>
          <h1 className="primary-heading2">Get Certified.</h1>
          <h1 className="primary-heading3">Get Hired.</h1>

          <p className="primary-text">
            Start learning in minutes with top tech tutors, to get you certified
            and hired today!
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      {/* <div className="footer-wrapper"> */}
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={prodigee} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      {/* <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
