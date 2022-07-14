<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="updateHandler">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Age</label>
        <input v-model="age" type="number" class="form-control" required />
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
      name: "",
      age: null,
    };
  },
  methods: {
    async getHandler() {
      const player = await get("players", this.$route.params.id);
      console.log(player);
      this.$emit("doSearch", true);
      this.name = player.name;
      this.age = player.age;
    },
    async updateHandler() {
      const updated = {
        name: this.name,
        age: this.age,
      };
      await update("players", this.$route.params.id, updated);
      this.$router.push("/players");
    },
  },
  mounted() {
    this.getHandler();
  },
};
</script>
