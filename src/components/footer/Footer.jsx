import React from 'react'

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
          <a href="About_Us" onClick={onAboutUsClicked}>
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
              <img id="pinterest" src={pinterest} alt="pinterest" width="50" />
            </a>
            <a
              href="https://www.instagram.com/mohnish_kalaimani/"
              
            >
              <img id="instagram" src={instagram} alt="Instagram" width="50" />
            </a>
            <a href="https://twitter.com/MohnishKalaima1" >
              <img id="twitter" src={twitter} alt="twitter" width="50" />
            </a>
            <a
              href="https://www.facebook.com/mohnish.kalaimani.3"
              
            >
              <img id="facebook" src={facebook} alt="facebook" width="50" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
