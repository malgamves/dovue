<template>
  <div>{{link.description}} ({{link.url}})</div>
</template>

<script>
  export default {
    name: 'LinkItem',
    props: ['link']
  }
</script>