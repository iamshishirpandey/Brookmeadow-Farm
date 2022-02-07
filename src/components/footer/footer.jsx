import React from "react"

import { StyledFooter, FooterNameStyles } from "./footer.styles"

const Footer = () => (
  <footer className="w-full">
    <div class="footer-top relative padding-tb bg-ash w-full">
      <div class="shape-images">
        <img src="assets/images/shape-img/01.png" alt="shape-images" />
      </div>
      <div class="container">
        <div
          class="section-wrapper row"
          style={{
            justifyContent: "center",
          }}
        >
          <div class="col-xl-3 col-md-6">
            <div class="post-item">
              <div class="footer-logo">
                <img src="assets/images/logo/01.png" alt="footer-logo" />
              </div>
              <p>We serve the best products in the country.</p>
              <p>Amazing Customer Service and excellent products.</p>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="post-item">
              <div class="post-title">
                <h5>Keep In Touch</h5>
              </div>
              <ul class="lab-ul footer-location">
                <li>
                  <div class="icon-part">
                    <i class="icofont-phone"></i>
                  </div>
                  <div class="content-part">
                    <a href="tel: +717-686-0655">+717-686-0655</a>,
                    <a href="tel: +717-982-2038">+717-982-2038</a>
                  </div>
                </li>
                <li>
                  <div class="icon-part">
                    <i class="icofont-wall-clock"></i>
                  </div>
                  <div class="content-part">
                    <p>Wed - Sun 09:00 - 18:00</p>
                  </div>
                </li>
                <li>
                  <div class="icon-part">
                    <i class="icofont-location-pin"></i>
                  </div>
                  <div
                    class="content-part"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/maps?q=Brook%20Meadow%20farm%201306%20Longview%20Dr.%20Harrisburg,%20PA%2017111,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      )
                    }
                  >
                    <p>
                      1306 Longview Dr. Harrisburg
                      <br />
                      PA 17111, United States
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
