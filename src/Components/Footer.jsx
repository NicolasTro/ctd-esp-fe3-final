import React from "react";
import footer from "../Styles/Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={footer.footerConteiner}>
        <div className={footer.footerUp}>
          <div className={footer.divisionFooter}></div>
        </div>

        <div className={footer.footerDown}>
          <div className={footer.containerDH}>
            <p>Powered by</p>

            <img src="/assets/images/DH.png" alt="DH-logo" />
          </div>

          <div className={footer.containerRedesSociales}>
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
