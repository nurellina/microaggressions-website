import styled, { css } from "styled-components"

export const Background = styled.div`
  position: absolute;
  width: 100%;
  top: 500px;
`
export const ShapeContainer = styled.div`
  position: relative;
  ${props =>
    props.positionTwo &&
    css`
      top: 200px;
      width: 90%;
    `}
  ${props =>
    props.positionThree &&
    css`
      top: 200px;
      width: 50%;
    `}
    ${props =>
    props.positionFour &&
    css`
      top: 200px;
      width: 55%;
    `}
    ${props =>
    props.positionFive &&
    css`
      top: 20px;
      width: 100%;
    `}
    img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`

export const Text = styled.p`
  font-family: "Open Sans Regular";
  color: #ffffff;
  font-size: 2vw;
  font-weight: 100;
  letter-spacing: 0.1vw;
  width: 70%;
`
export const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  bottom: 35%;
  pointer-events: none;
  width: 70%;
  ${props =>
    props.shapeFive &&
    css`
      left: 50%;
      bottom: 20%;
      width: 50%;
    `}
`
