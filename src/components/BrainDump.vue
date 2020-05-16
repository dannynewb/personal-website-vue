<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-vertical">
      <div class="tile is-child box has-text-centered">
        <div v-for="note in notes.slice(0, 5)" :key="note.title">
          <p class="title">{{ note.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BrainDump",
  data() {
    return {
      notes: []
    };
  },
  mounted() {
    axios
      .get("https://api.n3wby.co.uk/api/notes")
      .then(response => (this.notes = response.data));
  }
};
</script>

<style scoped>
</style>
