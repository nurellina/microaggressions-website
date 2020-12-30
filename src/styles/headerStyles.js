import styled from "styled-components"

export const HeaderNav = styled.div`
  color: red;
  width: 100%;
  top: 43px;
  right: 0px;
  left: 0px;
  position: absolute;
  z-index: 99;
`
export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 200;
    color: #f18477;
  }
`

export const Menu = styled.div`
  button {
    transform-orgin: center;
    border: none;
    padding: 15px;
    background: #fd3a24;
    outline: none;
    position: fixed;
    top: 0px;
    right: 0px;
    span {
      width: 40px;
      height: 8px;
      display: block;
      background: white;
      margin: 8px;
    }
  }
`
