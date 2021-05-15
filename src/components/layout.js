/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../fonts/typography.css"
import Header from "./header"
import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // State of our menu
  const [menuState, setMenuState] = useState(false)

  // Locking the body from scrolling when menu is opened
  useEffect(() => {
    menuState
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock")
  }, [menuState])

  return (
    <>
      <Menu menuState={menuState} setMenuState={setMenuState} />

      <Header
        setMenuState={setMenuState}
        // menuState={menuState}
        siteTitle={
          data.site.siteMetadata?.title || `MicroProject about MicroAggressions`
        }
      />

      <main>{children}</main>
      {/*
        <footer
          style={{
            marginTop: `2rem`,
            textAlign: `center`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
        */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
