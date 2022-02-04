import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CartItem from "../cart-item/cart-item"

import { selectCartItems } from "../../redux/cart/cart.selectors"
import { toggleCartHidden } from "../../redux/cart/cart.action"

import {
  CartDropdownStyles,
  CartItemsStyles,
  EmptyCartStyles,
  CartDropdownButton,
} from "./cart-dropdown.styles"

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyles>
    <CartItemsStyles>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyCartStyles className="font-semibold capitalize">
          Your cart is empty
        </EmptyCartStyles>
      )}
    </CartItemsStyles>
    <div className="flex space-x-2 mt-2 justify-end text-sm">
      <button
        className="px-2 py-1 bg-green-600 rounded-md text-white font-semibold uppercase"
        onClick={() => {
          history.push("/checkout")
          dispatch(toggleCartHidden())
        }}
      >
        checkout
      </button>
      <button
        className="px-2 py-1 bg-red-600 rounded-md text-white font-semibold uppercase"
        onClick={() => {
          // history.push("/checkout");
          dispatch(toggleCartHidden())
        }}
      >
        Close
      </button>
    </div>
  </CartDropdownStyles>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
