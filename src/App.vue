<template>
  <div id="app">
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body transition" :style="{backgroundColor: hex}">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
      <div class="hero-foot">
        <Footer />
      </div>
    </section>
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
.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - 0rem);
}
</style>
