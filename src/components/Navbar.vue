<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand transition">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger" :style="{backgroundColor: hex}">
            <a
              id="colour-picker"
              class="navbar-item"
              aria-haspopup="true"
              aria-controls="colour-dropdown-menu"
            >
              <span class="icon is-large">
                <font-awesome-icon id="colour-palette" :icon="['fas', 'palette']" size="2x" />
              </span>
            </a>
          </div>
          <div class="dropdown-menu" id="colour-dropdown-menu" role="menu">
            <div class="dropdown-content">
              <span class="dropdown-item blue-jeans" @click="switchTheme('blueJeans')"></span>
              <span class="dropdown-item magenta" @click="switchTheme('magenta')"></span>
              <span class="dropdown-item fiery-rose" @click="switchTheme('fieryRose')"></span>
              <span class="dropdown-item violet-blue" @click="switchTheme('violetBlue')"></span>
              <span class="dropdown-item gunmetal" @click="switchTheme('gunmetal')"></span>
            </div>
          </div>
        </div>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          @click="showMenu = !showMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar-menu" role="navigation" class="navbar-menu" v-bind:class="{ 'is-active': showMenu }">
        <div class="navbar-end">
          <router-link
            class="navbar-item transition"
            :style="[isCurrentPage('Landing') ? {backgroundColor: hex} : {backgroundColor: '#f9f9f9'}]"
            to="/"
          >Home</router-link>
          <router-link
            class="navbar-item transition"
            :style="[isCurrentPage('BrainDump') ? {backgroundColor: hex} : {backgroundColor: '#f9f9f9'}]"
            to="/brainDump"
          >Brain Dump</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Navbar",
  data: function() {
    return {
      showMenu: false
    }
  },
  computed: mapState(["themeName", "hex"]),
  methods: {
    ...mapMutations(["switchTheme"]),
    isCurrentPage(pageName) {
      return this.$route.name == pageName;
    }
  }
};
</script>

<style scoped>
#colour-palette {
  color: #ffffff;
}

.blue-jeans {
  background-color: #04619f !important;
}

.magenta {
  background-color: #df367c !important;
}

.fiery-rose {
  background-color: #ff5964 !important;
}

.violet-blue {
  background-color: #7776bc !important;
}

.gunmetal {
  background-color: #2a2d34 !important;
}

.dropdown-item {
  height: 2rem;
  cursor: pointer;
}

.active {
  color: #ffffff;
}

.router-link-exact-active {
    color: #FFFFFF;
}

a.navbar-item:focus, a.navbar-item:focus-within {
    color: #FFFFFF;
}

.navbar-burger {
    height: inherit; 
}
</style>
