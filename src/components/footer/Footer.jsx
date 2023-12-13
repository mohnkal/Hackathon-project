import React from 'react'
import './style.scss'
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    {/* <ContentWrapper> */}
      <div className="footer-container">
        <div className="footer-address">
          <div className="logo">LOGO</div>
        </div>
        <div className="footer-contactus">
          <p>
            <b>Company Information</b>
          </p>
          <a href="About_Us" >
            <p id="con1">Web Developer</p>
          </a>
          <a href="Careers">
            <p id="con2">Web Scrapper</p>
          </a>
          <a href="Td">
            <p id="con3">Web Designer</p>
          </a>
          <a href="PP">
            <p id="con4">Software Developer</p>
          </a>
          <a href="Dp">
            <p id="con5">Digital Marketing</p>
          </a>
        </div>
        <div className="footer-socialmedia">
          <div>
            <p id="soc">
              <b>Social</b>
            </p>
          </div>
          <div className="social-icons">
            <a
              href="https://in.pinterest.com/mohnishkalaimani/"
              
            >
              <FaPinterest/>
            </a>
            <a
              href="https://www.instagram.com/mohnish_kalaimani/"
              
            >
              <FaInstagram/>
            </a>
            <a href="https://twitter.com/MohnishKalaima1" >
              <FaXTwitter/>
            </a>
            <a
              href="https://www.facebook.com/mohnish.kalaimani.3"
              
            >
              <FaFacebook/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
