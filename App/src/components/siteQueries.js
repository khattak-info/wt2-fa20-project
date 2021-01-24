import { gql } from "apollo-boost"

export const GET_GREETINGS = gql`
    query {
        greetings
    }
`