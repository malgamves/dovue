<template>
  <div>{{link.name}} by {{link.author}}</div>
</template>

<script>
  export default {
    name: 'LinkItem',
    props: ['link']
  }
</script>