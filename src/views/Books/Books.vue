<template>
  <div class="home">
    <CreateBook @doSearch="reRenderComponent" />
    <BooksList :key="key" />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateBook from "@/components/Books/CreateBook.vue";
import BooksList from "@/components/Books/BooksList.vue";

export default {
  name: "Books",
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
    CreateBook,
    BooksList,
  },
};
</script>
