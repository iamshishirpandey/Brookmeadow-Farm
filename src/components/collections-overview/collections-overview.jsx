import React from "react"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

import CollectionPreview from "../collection-preview/collection-preview"

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"

const CollectionsOverview = ({ collections }) => (
  <div className="">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
