import React from "react"
import PropTypes from "prop-types"
import { useQuery } from "@apollo/react-hooks"
import { GET_STUDENTS } from "./siteQueries"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

	const { data, error, loading, refetch } = useQuery(GET_STUDENTS, {
		onCompleted: (d) => console.log(d)
	})

	return (
		<>
			<Header />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}
			>
				<main>{children}</main>
				<footer
					style={{
						marginTop: `2rem`,
					}}
				>
					© {new Date().getFullYear()}, Created By
          {` `}
					<a href="https://github.com/afaq2327">Afaq Ahmed</a>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
