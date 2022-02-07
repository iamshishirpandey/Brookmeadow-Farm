import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import CartIcon from "../cart-icon/cart-icon"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { clearCart } from "../../redux/cart/cart.action"
import CartDropdown from "../cart-dropdown/cart-dropdown"

const NavigationBar = ({ currentUser, hidden, clearCart }) => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="bg-white flex flex-col w-full shadow sticky top-0 z-40 pl-0 pr-0 pb-0"
    >
      <Container className="px-2">
        <Navbar.Brand href="/">
          <img
            src="assets/images/logo/01.png"
            alt="logo"
            className="h-10 sm:h-full"
          />
        </Navbar.Brand>
        <div className="col-lg-7 col-12 hidden lg:block ">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
      </Container>
      <div className="bg-orange-400 w-full">
        <Container>
          <div className="bg-orange-400 lg:pb-3 lg:pt-3 w-full px-12 flex justify-between">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-full d-lg-flex justify-content-between">
                <div className="lg:flex lg:space-x-4 text-sm lg:text-base">
                  <Nav.Link href="/" className="text-white font-semibold">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/about-us"
                    className="text-white font-semibold"
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="/product"
                    className="text-white font-semibold"
                  >
                    Product
                  </Nav.Link>
                  <Nav.Link
                    href="/contact"
                    className="text-white font-semibold"
                  >
                    Contact Us
                  </Nav.Link>
                </div>
                <div>
                  <ul className="hidden lg:block lab-ul search-cart">
                    <li>
                      <div className=" cart-option">
                        <CartIcon />
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Nav.Link
                      href="/checkout"
                      className="text-white font-semibold lg:hidden text-sm lg:text-base"
                    >
                      Cart
                    </Nav.Link>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </div>

      {hidden ? null : <CartDropdown />}
    </Navbar>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
