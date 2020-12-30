import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024) {
    max-width: 960px;
  }
  @media (min-width: 1216) {
    max-width: 1152px;
  }
  @media (min-width: 1408) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100 %;
    `}
`
export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
      ${props =>
    props.alignTop &&
    css`
      justify-content: flex-start;
    `}
`
export const Section = styled.section`
  position: absolute;
  left: 10%;
  bottom: 10%;
  pointer-events: none;
`

export const Title = styled.h1`
  font-family: "Monument Extended Regular";
  color: #fd9687;
  font-size: 5vw;
  ${props =>
    props.shapeFive &&
    css`
      font-size: 1.5vw;
      font-weight: 100;
    `}
`
export const Paragraph = styled.p`
  font-size: 1.2vw;
  font-family: "Open Sans Regular";
  letter-spacing: 0.1vw;
  color: #ffff;
  font-weight: 100;
`
export const BigWord = styled.span`
  font-size: 2.2vw;
  font-family: "Open Sans Heavy";
`
