import React, { useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./layout.css"
import { useLocation } from "@reach/router"

const Header = ({ siteTitle, setMenuState, menuState }) => {
  const location = useLocation()

  useEffect(() => {
    setMenuState(false)
  }, [location])

  return (
    <header>
      <nav>
        <div className="menu-wrapper">
          <div
            onClick={() => setMenuState(!menuState)}
            className="hamburger-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="logo">
          <h2>
            {" "}
            <Link className="clr-red no-decor-link" to="/">
              {siteTitle}
            </Link>
          </h2>
        </div>
      </nav>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
