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
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
    <Link
    to="/page-2/"
     style={{
      color: 'lightblue',
      textDecoration: `none`,
      fontWeight: `bold`,
      fontStyle: 'italic',
      }}
    >
    About
    </Link>

      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `lightcoral`,
            textDecoration: `none`,
            fontStyle: 'italic'
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
