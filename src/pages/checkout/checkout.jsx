import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors"

import StripeCheckoutButton from "../../components/stripe-button/stripe-button"

import {
  CheckoutContainerStyles,
  CheckoutHeaderStyles,
  HeaderBlockStyles,
  TestWarningStyles,
  TotalStyles,
} from "./checkout.styles"
import CheckoutItem from "../../components/checkout-item/checkout-item"

const CheckoutPage = ({ cartItems, total }) => (
  <div className="flex flex-col md:flex-row mx-8 my-8 justify-between divide-x-2 divide-gray-200">
    {cartItems[0] ? (
      <div className="min-h-[50vh] px-8 flex md:w-3/5 flex-col items-center">
        <CheckoutHeaderStyles>
          <HeaderBlockStyles>
            <span className="font-semibold">Product</span>
          </HeaderBlockStyles>

          <HeaderBlockStyles>
            <span className="font-semibold">Description</span>
          </HeaderBlockStyles>

          <HeaderBlockStyles>
            <span className="font-semibold">Quantity</span>
          </HeaderBlockStyles>

          <HeaderBlockStyles>
            <span className="font-semibold">Price</span>
          </HeaderBlockStyles>

          <HeaderBlockStyles>
            <span className="font-semibold">Remove</span>
          </HeaderBlockStyles>
        </CheckoutHeaderStyles>

        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <TotalStyles className="font-semibold text-sm">
          TOTAL: $ {total.toFixed(2)}
        </TotalStyles>

        <StripeCheckoutButton price={total} />
      </div>
    ) : (
      <div className="w-full font-semibold capitalize text-center">
        there are no items in cart
      </div>
    )}

    <div className="px-8 py-6 rounded-md border shadow-sm h-full space-y-4 ">
      <h2 className="uppercase font-semibold underline text-lg"> note</h2>
      <ul className="list-disc">
        <li className="font-semibold text-sm">
          Service charge for cleaning - 15$/head for goats
        </li>
        <li className="font-semibold text-sm">
          Service charge for full burning - 2$ each for gas
        </li>
      </ul>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
