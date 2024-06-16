import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footerConteiner">
        <div className="footerUp">
          <div className="divisionFooter"></div>
        </div>

        <div className="footerDown">
          <div className="containerDH">
            <p>Powered by</p>

            <img src="/assets/images/DH.png" alt="DH-logo" />
          </div>

          <div className="containerRedesSociales">
            <img src="/assets/images/ico-facebook.png" alt="DH-logo" />
            <img src="/assets/images/ico-instagram.png" alt="DH-logo" />
            <img src="/assets/images/ico-whatsapp.png" alt="DH-logo" />
            <img src="/assets/images/ico-tiktok.png" alt="DH-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
