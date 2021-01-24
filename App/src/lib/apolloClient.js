import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
	uri: process.env.GATSBY_API_URL || "http://localhost:3000/graphql",
	fetch,
	request: operation => {
		operation.setContext({
			headers: {
				authorization: "open",
			},
		})
	},
	onError: err => {
		if (err.graphQLErrors){
			window.location.href = "/"
		}
	}
})

export default client
