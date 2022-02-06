import React from "react"

const Contact = () => (
  <>
    {/* // <!-- Page Header Section Start Here --> */}
    <section className="page-header bg_img padding-tb">
      <div className="overlay"></div>
      <div className="container">
        <div className="page-header-content-area">
          <h4 className="ph-title">BrookMeadow Fresh Farm Contact us</h4>
          <ul className="lab-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <span className="active text-orange-400">Contact us</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* // <!-- Page Header Section Ending Here -->

		// <!-- Contact Us Section Start Here --> */}
    <div className="contact-section padding-tb">
      <div className="container">
        <div className="contac-top">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icofont-google-map"></i>
                </div>
                <div
                  className="contact-details"
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
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icofont-phone"></i>
                </div>
                <div className="contact-details">
                  <a href="tel: +1 717-686-0655">+1 717-686-0655</a>,&nbsp;
                  <a href="tel: +1 717-982-2038">+1 717-982-2038</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icofont-envelope"></i>
                </div>
                <div className="contact-details">
                  <p>brookmeadowfarm@gmail.com www.brookmeadowfarm.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contac-bottom">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="location-map">
                <div id="map">
                  <iframe
                    src="https://maps.google.com/maps?q=Brook%20Meadow%20farm%201306%20Longview%20Dr.%20Harrisburg,%20PA%2017111,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <form
                  action="#"
                  method="POST"
                  id="commentform"
                  className="comment-form"
                >
                  <input
                    type="text"
                    name="name"
                    className=""
                    placeholder="Name*"
                  />
                  <input
                    type="email"
                    name="email"
                    className=""
                    placeholder="Email*"
                  />
                  <input
                    type="text"
                    name="subject"
                    className=""
                    placeholder="Subject*"
                  />
                  <textarea
                    name="text"
                    id="role"
                    cols="30"
                    rows="9"
                    placeholder="Message*"
                  ></textarea>
                  <button type="submit" className="lab-btn">
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
)

export default Contact
