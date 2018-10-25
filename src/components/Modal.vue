<script>
import { ADD_BOOK_MUTATION } from "../constants/graphql";

export default {
  name: "modal",
  data: () => ({
    author: '',
    name: '',
  }),
  methods: {
    close() {
      this.$emit("close");
    },
    addBook() {
      document.getElementById('addedText').style.display = "block";
      this.$apollo.mutate({
        // Mutation
        mutation: ADD_BOOK_MUTATION,
        // Parameters
        variables: {
          author: this.author,
          name: this.name,
        }
      });
    }
  }
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            Fill in the form
          </slot>
        </header>
        <section class="modal-body">
          <slot name="body">
          <input
              placeholder="Book Name"
              type="text"
              class="input"
              name="name"
              v-model="name">
          <br>
          <input
              placeholder="Book Author"
              type="text"
              class="input"
              name="author"
              v-model="author">
              <div class="added-text">
                <p id="addedText" style="display:none;">Book Added!</p>
              </div>
          </slot>
        </section>
        <footer class="modal-footer">
            <slot name="footer">
              <button
                type="button"
                class="btn-green"
                @click="addBook()"              >
                Add
            </button>
            <button
                type="button"
                class="btn-green"
                @click="close"
              >
                Done
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 5px;
  text-align: center
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #000;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px 0px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #000;
  background: transparent;
  text-align: right;
}

.btn-green {
  color: white;
  background: #828282;
  border: 1px solid #828282;
  border-radius: 2px;
  margin: 5px;
}
.input {
  margin-top: 5px;
}

.added-text {
  margin-block-end: -10px;
  margin-block-start: .5rem;
}
</style>
