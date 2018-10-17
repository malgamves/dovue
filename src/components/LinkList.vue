<template>
  <div>
    <!-- 1 -->
    <h4 v-if="loading">Loading...</h4>
    <link-item
      v-for="link in books"
      :key="link.id"
      :link="link">
    </link-item>
  </div>
</template>

<script>
  // 2
  import { ALL_BOOKS_QUERY } from '../constants/graphql'
  import LinkItem from './LinkItem'

  export default {
    name: 'LinkList',
    data () {
      return {
        // 3
        books: [],
        loading: 0
      }
    },
    components: {
      LinkItem
    },
    // 4
    apollo: {
      books: {
        query: ALL_BOOKS_QUERY
      }
    }
  }
</script>