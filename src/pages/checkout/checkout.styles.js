import styled from "styled-components"

export const CheckoutContainerStyles = styled.div`
  display: flex;
  flex-direction: column;

  width: 55%;
  min-height: 90vh;

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`
export const CheckoutHeaderStyles = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`

export const HeaderBlockStyles = styled.div`
  text-transform: capitalize;
  width: 23%;
  text-alignment: center;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 900px) {
    width: 22%;

    &:last-child {
      width: 12%;
      margin-left: -20px;
    }
  }
`

export const TotalStyles = styled.div`
  margin-top: 30px;
  margin-left: auto;
`

export const TestWarningStyles = styled.div`
  text-align: center;
  color: red;
  font-size: 24px;
  margin: 24px 0;

  button {
    margin-left: auto;
    width: 200px;
    margin-bottom: 20px;
  }
`
