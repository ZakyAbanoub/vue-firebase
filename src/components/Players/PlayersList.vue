<template>
  <div class="card mt-4" v-if="isReady">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.id }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.age }}</td>
          <td>
            <router-link :to="`/edit-player/${player.id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteBookHandler(player.id)"
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
      players: [],
    };
  },
  computed: {
    isReady() {
      return this.players && this.players.length;
    },
  },
  methods: {
    async searchAll() {
      this.players = await search("players");
    },
    async deleteBookHandler(id) {
      await remove("players", id);
      await this.searchAll();
    },
  },
  created() {
    this.searchAll();
  },
};
</script>
