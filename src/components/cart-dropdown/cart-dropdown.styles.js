import styled from "styled-components"
import CustomButton from "../custom-button/custom-button"

export const CartDropdownStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 300px;
  height: 400px;
  padding: 20px;
  border: 1px solid black;
  color: #000;
  background: white;
  top: 10px;
  right: 10px;
  z-index: 9999999;
`

export const CartItemsStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-transform: capitalize;
  overflow: scroll;
`

export const EmptyCartStyles = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
