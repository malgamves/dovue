// 1
import gql from 'graphql-tag'

// 2
export const ALL_BOOKS_QUERY = gql`
  query books {
    books {
        id
        author
        name
    }
  }
`