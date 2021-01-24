const express = require("express")
const cors = require("cors")
const { ApolloServer } = require("apollo-server-express")
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

const port = process.env.PORT || 3000

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => { req, res }
})

const app = express()
app.use(cors())
app.use(express.json({ limit: "20mb" }))
server.applyMiddleware({ app })

app.listen(port, () =>
    console.log(
        `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
)