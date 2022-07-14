<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Title</label>
        <input v-model="title" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Author</label>
        <input v-model="author" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">Create Book</button>
    </form>
  </div>
</template>

<script>
import { create } from "@/firebase";
export default {
  data() {
    return {
      title: "",
      author: "",
    };
  },
  emits: ["doSearch"],
  methods: {
    async onSubmit() {
      await create("books", { title: this.title, author: this.author });
      this.$emit("doSearch", true);
      this.title = "";
      this.author = "";
      // console.log("DONE");
    },
  },
};
</script>
