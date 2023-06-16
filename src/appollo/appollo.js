
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  // uri: 'https://magical-snapper-75.hasura.app/v1/graphql',
  uri: 'https://needed-raptor-37.hasura.app/v1/graphql',
  headers: {
    // "x-hasura-admin-secret": "Rz3hVtst6gfwospHGZKgOTfzGEGcd5ev3WunGrc3VjsF3a3rIoxyyiUcM8zOaNlS"
    "x-hasura-admin-secret": "fk639snNH63znJYKXOAoft9s3AyufPyzhx6Tw24kx0Begq6kMV6D2b4POhg5AxZf"
  }

  // uri: 'https://mutual-prawn-20.hasura.app/v1/graphql',
  // headers: {
  //   "x-hasura-admin-secret": "CUhmIhQI1BzYCooiTdvkNZhcws8OXecGmmdrho7v9ni7ZW1E3bPIA42KEV9Dt4zB"
  // }

  // uri: 'https://honest-zebra-15.hasura.app/v1/graphql',
  // headers: {
  //   "x-hasura-admin-secret": "BWNDRfObvS1tL83Un3lI3ZUU0pmfd7CtoGguiXoZGbumO5gHte6Lh5mQ57umdMpicc"
  // }
  

})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient
