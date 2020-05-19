<template>
  <div id="app" class="transition" :style="{backgroundColor: hex}">
    <Navbar />

    <div id="content" class="container">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: mapState(["themeName", "hex"])
};
</script>

<style scoped>
#content {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
