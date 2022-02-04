import React from "react"

import {
  CartItemStyles,
  CartItemDetailsStyles,
  CartItemImageStyles,
} from "./cart-item.styles"

const CartItem = ({ item: { imageUrl, price, quantity, name } }) => (
  <CartItemStyles className="items-center">
    <CartItemImageStyles
      src={imageUrl}
      alt="cart-item"
      className="object-cover"
    />
    <CartItemDetailsStyles className="font-semibold ">
      <span>{name}</span>
      <span className="text-gray-500 text-sm">
        {quantity} x ${price}
      </span>
    </CartItemDetailsStyles>
  </CartItemStyles>
)

export default CartItem
