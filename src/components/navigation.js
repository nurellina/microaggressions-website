import React from "react"
import { Container, Flex } from "../styles/globalStyles"

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <NavHeader>
          <Flex spaceBetween></Flex>
        </NavHeader>
        <NavList></NavList>
        <NavFooter></NavFooter>
      </Container>
    </Nav>
  )
}

export default Navigation
