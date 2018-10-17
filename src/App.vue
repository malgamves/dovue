<template>
  <div id="app" class="background">
    <div >
      <h1> Books I've Read</h1>
    <book-list></book-list>
    </div>
  </div>
</template>

<script>
  import BookList from './components/BookList'

  export default {
    name: 'app',
    components: {
      BookList
    }
  }
</script>

<style>
  .background {
    background: #828282;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    padding: 2%;
    width: 50%;
    height: 50%;
  }
</style>