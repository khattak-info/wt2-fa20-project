/* eslint-disable react/prop-types */
import React from "react"
import Helmet from "react-helmet"
import { ApolloProvider } from "@apollo/react-hooks"
import { ThemeProvider, CssBaseline } from "@material-ui/core"
import client from "./apolloClient"
import theme from "./theme"
import icon from "../images/favicon.png"

export const wrapRootElement = ({ element }) => (
	<React.Fragment>
		<Helmet>
			<meta
				name="viewport"
				content="minimum-scale=1, initial-scale=1, width=device-width"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
			/>
			<link rel="icon" href={icon} />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
			/>
			<title>WT2-Project</title>
		</Helmet>
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
					{element}
			</ThemeProvider>
		</ApolloProvider>
	</React.Fragment>
)
