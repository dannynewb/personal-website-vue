<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-parent is-4">
      <div class="tile is-child box">
        <div class="columns has-text-centered is-gapless is-vcentered">
          <div class="column">
            <figure class="image is-128x128 is-inline-block">
              <img class="is-rounded" src="../assets/me.jpg" alt="me" />
            </figure>
          </div>
          <div class="column is-two-thirds">
            <p class="title">Hi there!</p>
            <p class="subtitle">Im Danny.</p>
          </div>
        </div>
      </div>
      <div class="tile is-child box has-text-centered has-vertical-center">
        <div class="content">
          <p>I am a software engineer living and working in Hull.</p>
        </div>
      </div>
      <div class="tile is-child box has-vertical-center">
        <div class="columns has-text-centered">
          <div class="column">
            <span class="icon is-large">
              <a
                href="https://www.facebook.com/dannynhull/"
                target="_blank"
                rel="noopener"
                class="logo"
              >
                <font-awesome-icon id="facebook-icon" :icon="['fab', 'facebook-square']" size="2x" />
              </a>
            </span>
          </div>
          <div class="column">
            <span class="icon is-large">
              <a
                href="https://www.linkedin.com/in/daniel-newby-299b8392/"
                target="_blank"
                rel="noopener"
                class="logo"
              >
                <font-awesome-icon id="linkedin-icon" :icon="['fab', 'linkedin']" size="2x" />
              </a>
            </span>
          </div>
          <div class="column">
            <span class="icon is-large">
              <a href="https://github.com/dannynewb" target="_blank" rel="noopener" class="logo">
                <font-awesome-icon id="github-icon" :icon="['fab', 'github-square']" size="2x" />
              </a>
            </span>
          </div>
          <div class="column">
            <span class="icon is-large">
              <a href="mailto:dannynhull@hotmail.co.uk" target="_blank" rel="noopener" class="logo">
                <font-awesome-icon id="email-icon" :icon="['fas', 'envelope-square']" size="2x" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-parent is-vertical">
      <RecentActivity />
    </div>
    <div class="tile is-parent is-vertical">
      <WorkExperience />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RecentActivity from './RecentActivity'
import WorkExperience from './WorkExperience'

export default {
  name: "Landing",
  components: {
    RecentActivity,
    WorkExperience
  },
  computed: mapState(["themeName", "hex"])
};
</script>

<style scoped>
.logo {
  color: unset;
}

#facebook-icon:hover {
  color: #3b5998;
}

#linkedin-icon:hover {
  color: #0e76a8;
}

#github-icon:hover {
  color: #6f42c1;
}

#email-icon:hover {
  color: #2ebfa5;
}
</style>
