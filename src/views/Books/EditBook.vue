<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="updateHandler">
      <div class="form-group">
        <label>Title</label>
        <input v-model="title" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Author</label>
        <input v-model="author" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">Update User</button>
    </form>
  </div>
</template>

<script>
import { get, update } from "@/firebase";
export default {
  data() {
    return {
      title: "",
      author: "",
    };
  },
  methods: {
    async getHandler() {
      const book = await get("books", this.$route.params.id);
      this.$emit("doSearch", true);
      this.title = book.title;
      this.author = book.author;
    },
    async updateHandler() {
      const updatedBook = {
        title: this.title,
        author: this.author,
      };
      await update("books", this.$route.params.id, updatedBook);
      this.$router.push("/");
    },
  },
  mounted() {
    this.getHandler();
  },
};
</script>
