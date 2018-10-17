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
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, sans-serif;  }

  input {
    max-width: 500px;
  }

  .gray {
    color: #828282;
  }

  .orange {
    background-color: #ff6600;
  }

  .background-gray {
    background-color: rgb(246,246,239);
  }

  .f11 {
    font-size: 11px;
  }

  .w85 {
    width: 85%;
  }

  .button {
    font-family: monospace;
    font-size: 10pt;
    color: black;
    background-color: buttonface;
    text-align: center;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    cursor: pointer;
    max-width: 250px;
  }

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