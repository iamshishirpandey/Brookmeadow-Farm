import React from "react"
import { connect } from "react-redux"

import { addItem } from "../../redux/cart/cart.action"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles"

const Collection = ({ item, addItem }) => {
  const notify = () => toast("Item Added Successfully!")
  const { name, price, imageUrl } = item

  return (
    // <CollectionItemContainer>
    //   <BackgroundImage imageUrl={imageUrl} />
    //   <CollectionFooterContainer>
    //     <NameContainer>{name}</NameContainer>
    //     <PriceContainer>${price}</PriceContainer>
    //   </CollectionFooterContainer>
    //   <AddButton text="Add to cart" onClick={() => addItem(item)} isInverted />
    // </CollectionItemContainer>
    <li className="flex flex-col text-center rounded-md bg-white shadow mr-1">
      <div className="flex-1 flex flex-col p-1">
        <div className="h-full bg-gray-200 rounded-t-md  overflow-hidden ">
          <img
            alt={imageUrl}
            src={imageUrl}
            className="w-full h-full  object-cover object-left-top group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-2 mx-2 text-gray-900 text-left font-bold">{name}</h3>
        <dl className="mt-1 flex-grow flex mx-2 mb-1">
          <dt className="sr-only">Price</dt>
          <dd className="text-gray-500 text-left font-semibold">${price}</dd>
        </dl>
      </div>
      <div>
        <div className="flex">
          <div className="flex-1 flex">
            <button
              onClick={() => {
                // notifier.success("Your items have been updated");
                notify()
                addItem(item)
              }}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-3 text-sm text-gray-700 font-semibold border-t rounded-b-md hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="ml-3">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </li>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(Collection)
