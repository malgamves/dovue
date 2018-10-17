<template>
  <div>
    <!-- 1 -->
    <h4 v-if="loading">Loading...</h4>
    <link-item
      v-for="link in posts"
      :key="link.post_id"
      :link="link">
    </link-item>
  </div>
</template>

<script>
  // 2
  import { ALL_LINKS_QUERY } from '../constants/graphql'
  import LinkItem from './LinkItem'

  export default {
    name: 'LinkList',
    data () {
      return {
        // 3
        posts: [],
        loading: 0
      }
    },
    components: {
      LinkItem
    },
    // 4
    apollo: {
      posts: {
        query: ALL_LINKS_QUERY
      }
    }
  }
</script>