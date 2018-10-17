<template>
  <div>{{link.post_name}} by {{link.post_author}}</div>
</template>

<script>
  export default {
    name: 'LinkItem',
    props: ['link']
  }
</script>