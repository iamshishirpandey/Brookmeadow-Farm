import React from "react"
import { connect } from "react-redux"

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action"

import {
  CheckoutItemContainerStyles,
  ImageContainerStyles,
  TextContainerStyles,
  QuantityContainerStyles,
  RemoveButtonContainerStyles,
} from "./checkout-item.styles"

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CheckoutItemContainerStyles className="">
      <ImageContainerStyles>
        <img src={imageUrl} alt="checkout-item" />
      </ImageContainerStyles>
      <TextContainerStyles className="font-semibold text-sm pl-2">
        {name}
      </TextContainerStyles>
      <QuantityContainerStyles className="">
        <span
          onClick={() => removeItem(cartItem)}
          role="img"
          aria-labelledby="decrease"
          className="text-sm"
        >
          &#10134;
        </span>
        <div className="text-sm font-semibold">{quantity}</div>
        <span
          onClick={() => addItem(cartItem)}
          role="img"
          aria-labelledby="increase"
          className="text-sm"
        >
          &#10133;
        </span>
      </QuantityContainerStyles>
      <TextContainerStyles className="font-semibold text-sm ">
        $ {price}
      </TextContainerStyles>
      <RemoveButtonContainerStyles className="flex justify-center">
        <span
          onClick={() => clearItem(cartItem)}
          role="img"
          aria-labelledby="remove"
          className="text-sm "
        >
          &#10060;
        </span>
      </RemoveButtonContainerStyles>
    </CheckoutItemContainerStyles>
  )
}

const mapDisptachToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDisptachToProps)(CheckoutItem)
