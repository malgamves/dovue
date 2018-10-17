<template>
  <div>{{book.name}} by {{book.author}}</div>
</template>

<script>
  export default {
    name: 'BookItem',
    props: ['book']
  }
</script>