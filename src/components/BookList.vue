<template>
  <div>
    <!-- 1 -->
    <h4 v-if="loading">Loading...</h4>
    <book-item
      v-for="book in books"
      :key="book.id"
      :book="book">
    </book-item>
  </div>
</template>

<script>
  // 2
  import { ALL_BOOKS_QUERY } from '../constants/graphql'
  import BookItem from './BookItem'

  export default {
    name: 'BookList',
    data () {
      return {
        // 3
        books: [],
        loading: 0
      }
    },
    components: {
      BookItem
    },
    // 4
    apollo: {
      books: {
        query: ALL_BOOKS_QUERY
      }
    }
  }
</script>