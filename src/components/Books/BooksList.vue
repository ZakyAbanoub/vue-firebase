<template>
  <div class="card mt-4" v-if="isReady">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>
            <router-link :to="`/edit-book/${book.id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteHandler(book.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { search, remove } from "@/firebase";
export default {
  data() {
    return {
      books: [],
    };
  },
  computed: {
    isReady() {
      return this.books && this.books.length;
    },
  },
  methods: {
    async searchHandler() {
      this.books = await search("books");
    },
    async deleteHandler(id) {
      await remove("books", id);
      await this.searchHandler();
    },
  },
  created() {
    this.searchHandler();
  },
};
</script>
