import React, { lazy } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

import HomeImage from "../../components/home-image/home-image"
import Directory from "../../components/directory/directory"

import { StyledHome } from "./home.styles"
const Shop = lazy(() => import("../shop/shop"))

SwiperCore.use([Navigation])

const carouselData = [
  {
    name: "goats",
    href: "/shop",
    imageSrc:
      "https://cdn.pixabay.com/photo/2018/05/02/09/36/animal-3368102_960_720.jpg",
  },
  {
    name: "hens",
    href: "/shop",
    imageSrc:
      "https://cdn.pixabay.com/photo/2020/02/15/04/19/chicken-4849979_960_720.jpg",
  },
]

const Home = () => {
  // const swiper = useSwiper()
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <section class="about-section relative pb-12">
      <div className="relative h-[70vh]">
        <div
          ref={navigationPrevRef}
          className="absolute z-10 left-2 bg-white top-1/2 p-2 rounded-full"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute z-10 right-2 bg-white top-1/2 p-2 rounded-full"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </div>
        <Swiper
          loop={true}
          effect={"fade"}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper h-[70vh] max-w-[1440px]"
        >
          {carouselData.map((data) => (
            <SwiperSlide key={data.name}>
              <div className="h-full w-full ">
                <img
                  src={data.imageSrc}
                  alt={data.name}
                  className="h-full w-full object-cover "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div class="col-lg-6 col-12">
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
        </div> */}
      <div class="container">
        <div className="mt-4">
          <Shop />
        </div>
      </div>
    </section>
  )
}
export default Home
