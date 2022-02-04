import React from "react"

import StripeCheckout from "react-stripe-checkout"
import { clearCart, toggleCartHidden } from "../../redux/cart/cart.action"
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    "pk_live_51KGo7TH8tnYo1EYRK1XjQX2wCkD5YSIXJCMQ6azYcJLcaryDFm6zLGxWAZNiteZHI3GQ7BT4LUXGmQYTmQFFCzZ9002Rh0DdHV"

  const onToken = (token) => {
    console.log(token)
    clearCart()
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="BrookMeadow Fresh Farm"
      billingAddress
      shippingAddress
      image="/assets/images/logo/03.png"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now."
      token={onToken}
      stripeKey={publishableKey}
      style={{ width: "200px" }}
    />
  )
}
export default StripeCheckoutButton
