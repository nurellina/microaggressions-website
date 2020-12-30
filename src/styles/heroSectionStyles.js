import styled, { css } from "styled-components"
export const Hero = styled.div`
  height: 100vh;
  width: 100%;
  margin-bottom: 296px;
  position: relative;
`
export const Canvas = styled.canvas``

export const ShapeContainer = styled.div`
  position: absolute;
  bottom: -320px;
  right: 0px;
  width: 60%;
`
export const TitleContainer = styled.div`
  position: absolute;
  left: 10%;
  bottom: 30%;
  width: 100%;
  pointer-events: none;
`
export const Title = styled.h1`
  font-size: 2.5vw;
  font-weight: 800;
  font-family: "Monument Extended Regular";
`
export const TextContainer = styled.div`
  position: absolute;
  left: 7%;
  bottom: -420px;
`
export const Text = styled.h3`
  font-size: 1.2vw;
  color: #f75440;
  letter-spacing: 0.1vw;
  font-weight: 100;
  ${props =>
    props.fontLarge &&
    css`
      font-size: 2vw;
      font-family: "Open Sans Heavy";
    `}
  ${props =>
    props.marginBottomXL &&
    css`
      margin-top: 100px;
    `}
`
