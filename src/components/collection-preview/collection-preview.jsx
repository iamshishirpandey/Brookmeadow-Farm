import React from "react"
import { withRouter } from "react-router-dom"

import {
  CollectionPreviewContainerStyles,
  CollectionPreviewStyles,
  CollectionPreviewTitleStyles,
} from "./collection-preview.styles"
import CollectionItem from "../collection-item/collection-item"

const CollectionPreview = ({ title, items, match, history, routeName }) => {
  const ascendedItems = items.sort(
    (a, b) => parseFloat(a.price) - parseFloat(b.price)
  )
  return (
    <CollectionPreviewContainerStyles className="mt-10">
      <CollectionPreviewTitleStyles
        className="font-black flex items-center justify-center space-x-2"
        // onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        <div className="h-1 w-16 sm:w-32 bg-orange-300 inline-block rounded-full " />
        <span className="text-xl sm:text-xl">{title.toUpperCase()}</span>{" "}
        <div className="h-1 w-16 sm:w-32 bg-orange-300 inline-block rounded-full " />
      </CollectionPreviewTitleStyles>
      {/* <CollectionPreviewStyles> */}
      <div className="">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {ascendedItems.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      {/* <div className="product-list-item"> */}
      {/* <div className="col-lg-4 col-md-6 col-12"> */}
      {/* {items
        .filter((item, idx) => idx > 0)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))} */}
      {/* </div>
      </div> */}
      {/* </CollectionPreviewStyles> */}
    </CollectionPreviewContainerStyles>
  )
}

export default withRouter(CollectionPreview)
