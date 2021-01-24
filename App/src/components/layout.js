import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

	return (
		<>
			<Header />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: "90%",
					padding: `0 1.0875rem 1.45rem`,
				}}
			>
				<main>{children}</main>
			</div>
			<footer
				style={{
					marginTop: `2rem`,
					position: "fixed",
					bottom: "0px",
					width: "90%",
					textAlign: "right"
				}}
			>
				© {new Date().getFullYear()}, Created By
          {` `}
				<a href="https://github.com/afaq2327">Afaq Ahmed</a>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
