import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="container">
        <div className="logo">
          <h2>
            {" "}
            <Link className="clr-orange no-decor-link" to="/">
              {siteTitle}
            </Link>
          </h2>
        </div>
        <div className="menu">
          <button>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
