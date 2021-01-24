import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "../images/favicon.png"

const styles = {
	header: {
		background: `#0073A5`,
		marginBottom: `1.45rem`,
	},
	iconStyle: {
		"height": "30px",
		"width": "30px",
		"filter": "grayscale(1) invert(1)", "margin": "0"
	},
	link:{
		color: `white`,
		textDecoration: `none`,
		display: "flex",
		alignItems: "center"
	}
}

const Header = () => (
	<header
		style={styles.header}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: "90%",
				padding: `1.45rem 1.0875rem`,
				display:"flex",
				justifyContent: "space-between",
				alignItems:"center"
			}}
		>
			<h1 style={{ margin: 0,"width":"300px" }}>
				<Link
					to="/"
					style={styles.link}
				>
					<img src={icon} style={styles.iconStyle} alt="logo"/> WT2-Project
        		</Link>
			</h1>
			<Link
				to="/"
				style={styles.link}
			>
				Home
			</Link>
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
