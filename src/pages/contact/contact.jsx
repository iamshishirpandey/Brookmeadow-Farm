import React from "react";

const Contact = () => (
  <>
    {/* // <!-- Page Header Section Start Here --> */}
    <section class="page-header bg_img padding-tb">
      <div class="overlay"></div>
      <div class="container">
        <div class="page-header-content-area">
          <h4 class="ph-title">BrookMeadow Fresh Farm Contact us</h4>
          <ul class="lab-ul">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a class="active">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* // <!-- Page Header Section Ending Here -->

		// <!-- Contact Us Section Start Here --> */}
    <div class="contact-section padding-tb">
      <div class="container">
        <div class="contac-top">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="icofont-google-map"></i>
                </div>
                <div
                  class="contact-details"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/maps?q=Brook%20Meadow%20farm%201306%20Longview%20Dr.%20Harrisburg,%20PA%2017111,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    )
                  }
                >
                  <p>1306 Longview Dr. Harrisburg PA 17111, United States</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="icofont-phone"></i>
                </div>
                <div class="contact-details">
                  <a href="tel: +1 717-686-0655">+1 717-686-0655</a>,&nbsp;
                  <a href="tel: +1 717-982-2038">+1 717-982-2038</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="icofont-envelope"></i>
                </div>
                <div class="contact-details">
                  <p>brookmeadowfarm@gmail.com www.brookmeadowfarm.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contac-bottom">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-12">
              <div class="location-map">
                <div id="map">
                  <iframe
                    src="https://maps.google.com/maps?q=Brook%20Meadow%20farm%201306%20Longview%20Dr.%20Harrisburg,%20PA%2017111,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="contact-form">
                <form
                  action="#"
                  method="POST"
                  id="commentform"
                  class="comment-form"
                >
                  <input type="text" name="name" class="" placeholder="Name*" />
                  <input
                    type="email"
                    name="email"
                    class=""
                    placeholder="Email*"
                  />
                  <input
                    type="text"
                    name="subject"
                    class=""
                    placeholder="Subject*"
                  />
                  <textarea
                    name="text"
                    id="role"
                    cols="30"
                    rows="9"
                    placeholder="Message*"
                  ></textarea>
                  <button type="submit" class="lab-btn">
                    <span>Submit Now</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Contact Us Section ENding Here --> */}
  </>
);

export default Contact;
