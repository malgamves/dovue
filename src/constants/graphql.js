import gql from 'graphql-tag'

export const ALL_BOOKS_QUERY = gql`
  query books {
    books {
        id
        author
        name
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
    mutation addBook($author: String!, $name: String!){
        insert_books(objects: [{name: $name, author: $author}]) {
            affected_rows
  }
    }
`;