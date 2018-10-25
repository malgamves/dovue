<template>
  <div id="app" class="background">
    <div >
      <h1> Books I've Read</h1>
    <book-list></book-list>
    <br>
    <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Add a book!
    </button>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
    <button
      type="button"
      class="btn"
      @click="reload()"
    >
      Refresh List
    </button>
    </div>
  </div>
</template>

<script>
import BookList from "./components/BookList";
import Modal from "./components/Modal.vue";

export default {
  name: "app",
  components: {
    BookList,
    Modal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    reload() {
      location.reload();
    }
  }
};
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
.btn {
  color: white;
  background: #000;
  border: 1px solid #828282;
  border-radius: 2px;
  margin: 4px;
  padding: 5px;
}
</style>