<template>
  <div class="home">
    <CreatePlayer @doSearch="reRenderComponent" />
    <PlayersList :key="key" />
  </div>
</template>

<script>
// @ is an alias to /src
import CreatePlayer from "@/components/Players/CreatePlayer.vue";
import PlayersList from "@/components/Players/PlayersList.vue";

export default {
  name: "Players",
  data() {
    return {
      key: new Date(),
    };
  },
  methods: {
    reRenderComponent() {
      this.key = new Date();
    },
  },
  components: {
    CreatePlayer,
    PlayersList,
  },
};
</script>
