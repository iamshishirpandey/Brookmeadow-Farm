import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"

import { auth } from "../../firebase/firebase.utils"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { clearCart, toggleCartHidden } from "../../redux/cart/cart.action"

import { toast } from "react-toastify"
import {
  NaviContainer,
  StyledNaviContent,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  BrandLogo,
} from "./navigation.styles"

const Navigation = ({ currentUser, hidden, clearCart }) => {
  // const [sticky, setSticky] = useState(false)

  // useEffect(() => {
  //   const headerTop = headerContainerRef.current.offsetTop
  //   window.onscroll = function scroll() {
  //     if (window.pageYOffset > headerTop) {
  //       setSticky(true)
  //     } else {
  //       setSticky(false)
  //     }
  //   }
  // }, [])
  return (
    <header className="header-section sticky top-0 z-10 bg-white">
      {/* <!-- Mobile Menu Start Here --> */}
      <div className="block sm:hidden mobile-header mobile-menu transparent-header">
        <nav className="mobile-header">
          <div className="header-logo">
            <a href="index.html">
              <img src="assets/images/logo/01.png" alt="logo" />
            </a>
          </div>
          <div className="header-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <nav className="mobile-menu">
          <div className="mobile-menu-area">
            <div className="mobile-menu-area-inner">
              <ul className="lab-ul">
                <li>
                  <a href="#0">Home</a>
                  <ul className="lab-ul">
                    <li>
                      <a href="index.html">Home Page One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Page Two</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#0">Pages</a>
                  <ul className="lab-ul">
                    <li>
                      <a href="team.html">Team Membar</a>
                    </li>
                    <li>
                      <a href="faq-page.html">Faq Page</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Blog</a>
                  <ul className="lab-ul">
                    <li>
                      <a href="blog.html">Blog Right Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-ls.html">Blog left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a href="#0">Shop</a>
                  <ul className="lab-ul">
                    <li className="active">
                      <a href="product-page.html">Products Page</a>
                    </li>
                    <li>
                      <a href="product-single.html">Products Details</a>
                    </li>
                    <li>
                      <a href="cart-page.html">Cart Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Mobile Menu Ending Here --> */}
      <div className="header-top shadow">
        <div className="container ">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-12">
              <div className="logo py-2">
                <a href="/">
                  <img src="assets/images/logo/01.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="ht-left">
                <ul className="lab-ul d-flex flex-wrap justify-content-end">
                  <li className="d-flex flex-wrap align-items-center">
                    <div className="ht-add-thumb mr-2">
                      <img src="assets/images/header/01.png" alt="address" />
                    </div>
                    <div
                      className="ht-add-content"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/maps?q=Brook%20Meadow%20farm%201306%20Longview%20Dr.%20Harrisburg,%20PA%2017111,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        )
                      }
                    >
                      <span>1306 Longview Dr. Harrisburg</span>
                      <span className="d-block text-bold">
                        PA 17111, United States
                      </span>
                    </div>
                  </li>

                  <li className="d-flex flex-wrap align-items-center ml-3">
                    <div className="ht-add-thumb mr-2">
                      <img src="assets/images/header/03.png" alt="call" />
                    </div>
                    <div className="ht-add-content">
                      <span>Make Call </span>
                      <span className="d-block text-bold">
                        <a href="tel: +1 717-982-2038">+1 717-982-2038</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" header-bottom bg-theme">
        <div className="header-area">
          <div className="container">
            <div className="primary-menu">
              <div className="main-area w-100">
                <div className="main-menu d-flex flex-wrap align-items-center justify-content-between w-100">
                  <div className="logo">
                    <a href="/">
                      <img src="assets/images/logo/02.png" alt="logo" />
                    </a>
                  </div>
                  <ul className="lab-ul">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>

                    {/* <li>
                    <a href="/shop">Shop</a>
                    <ul className="lab-ul"></ul>
                  </li> */}

                    <li>
                      <a href="contact">Contact</a>
                    </li>
                  </ul>
                  <ul className="lab-ul search-cart">
                    <li>
                      <div className="cart-option">
                        <CartIcon />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {hidden ? null : <CartDropdown />}
    </header>
  )

  // <NaviContainer>
  //   <StyledNaviContent>
  //     <BrandLogo>
  //       <h3 style={{ textAlign: "center" }}>BrookMeadow Fresh Farms</h3>

  //       {currentUser ? (
  //         currentUser.photoURL ? (
  //           <img
  //             style={{
  //               width: "40px",
  //               height: "40px",
  //               borderRadius: "50%",
  //               border: "2px solid #fff",
  //               marginTop: "20px",
  //             }}
  //             src={currentUser.photoURL}
  //             alt="user-display"
  //           />
  //         ) : (
  //           <p classNameName="capitalize"> Hi, {currentUser.displayName}</p>
  //         )
  //       ) : null}
  //     </BrandLogo>

  //     <OptionsContainer>
  //       <OptionLink to="/">
  //         <p style={{ color: "white" }}>HOME</p>
  //       </OptionLink>

  //       <OptionLink to="/shop">
  //         {" "}
  //         <p style={{ color: "white" }}>SHOP</p>
  //       </OptionLink>

  //       {/* {currentUser ? (
  //         <OptionLink
  //           to="/"
  //           onClick={() => {
  //             auth.signOut();
  //             clearCart();
  //             toast.success("Signed Out Success.");
  //           }}
  //         >
  //           SIGN OUT
  //         </OptionLink>
  //       ) : (
  //         <OptionLink to="/signin">SIGN IN</OptionLink>
  //       )} */}

  //       <CartIcon />
  //     </OptionsContainer>
  //   </StyledNaviContent>
  //   {hidden ? null : <CartDropdown />}
  // </NaviContainer>
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
