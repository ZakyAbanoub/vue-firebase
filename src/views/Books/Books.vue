<template>
  <div class="home">
    <CreateBook @doSearch="reCallBooks" />
    <BooksList :books="books" @delete="deleteHandler" />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateBook from "@/components/Books/CreateBook.vue";
import BooksList from "@/components/Books/BooksList.vue";
import { search, remove } from "@/firebase";

export default {
  name: "Books",
  data() {
    return {
      books: []
    }
  },
  methods: {
    reCallBooks() {
      this.searchHandler()
    },
    async searchHandler() {
      this.books = await search("books");
    },
    async deleteHandler(id) {
      await remove("books", id);
      await this.searchHandler();
    },
  },
  created() {
    this.searchHandler()
  },
  components: {
    CreateBook,
    BooksList,
  },
};
</script>
