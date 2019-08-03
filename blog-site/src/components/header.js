import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `9vh auto`,
        maxWidth: "100%",
        padding: `0 6vw`,
        textAlign: "center",
        display: "flex",
      }}
    >
      <Link
        to="/about/"
        style={{
          color: `#202020`,
          textDecoration: `none`,
          fontWeight: `bold`,
          fontSize: "15px",
          flex: "1 1 0px",
          textAlign: "left",
        }}
      >
        ABOUT
      </Link>

      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#202020`,
            textDecoration: `none`,
            fontSize: "24px",
            flex: "0 0 auto",
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
