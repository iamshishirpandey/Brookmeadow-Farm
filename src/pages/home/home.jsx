import React, { lazy } from "react"

import HomeImage from "../../components/home-image/home-image"
import Directory from "../../components/directory/directory"

import { StyledHome } from "./home.styles"
const Shop = lazy(() => import("../shop/shop"))

const Home = () => (
  <section class="about-section relative py-12">
    <div class="container">
      <div class="row align-items-center mb-15">
        <div class="col-lg-6 col-12">
          <div class="about-thumb">
            <img src="assets/images/about/01.png" alt="about-thumb" />
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="about-wrapper p-0">
            <div class="about-title">
              <h2>
                <span class="d-lg-block"> Welcome to Our BrookMeadow </span>
                Fresh Farm.
              </h2>
              <p>Our Weekly Opening time</p>
            </div>
            <div class="about-content">
              <ul className="lab-ul list-group">
                <li className="list-group-item py-1 px-0 border-none">
                  <i className="icofont-close-squared mr-2 color-theme"></i>
                  <b>Monday: </b>
                  <span>Closed</span>
                </li>
                <li className="list-group-item py-1 px-0 border-none">
                  <i className="icofont-close-squared mr-2 color-theme"></i>
                  <b>Tuesday: </b>
                  <span>Closed</span>
                </li>
                <li className="list-group-item py-1 px-0 border-none">
                  <i className="icofont-tick-boxed mr-2 color-theme"></i>
                  <b>Wednesday: </b>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="list-group-item py-1 px-0 border-none">
                  <i className="icofont-tick-boxed mr-2 color-theme"></i>
                  <b>Thursday: </b>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="list-group-item py-1 px-0 border-none">
                  <i className="icofont-tick-boxed mr-2 color-theme"></i>
                  <b>Friday: </b>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="list-group-item py-1 px-0 border-none">
                  <i className="icofont-tick-boxed mr-2 color-theme"></i>
                  <b>Saturday: </b>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="list-group-item py-1 px-0 border-none">
                  <i className="icofont-tick-boxed mr-2 color-theme"></i>
                  <b>Sunday: </b>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Shop />
      </div>
    </div>
  </section>
)

export default Home
