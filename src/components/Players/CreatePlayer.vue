<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Age</label>
        <input v-model="age" type="number" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">Create Player</button>
    </form>
  </div>
</template>

<script>
import { create } from "@/firebase";
export default {
  data() {
    return {
      name: "",
      age: null,
    };
  },
  emits: ["doSearch"],
  methods: {
    async onSubmit() {
      await create("players", { name: this.name, age: this.age });
      this.$emit("doSearch", true);
      this.title = "";
      this.author = "";
      // console.log("DONE");
    },
  },
};
</script>
