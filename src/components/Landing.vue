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
      <div class="tile is-child box">
        <p class="title">What am I up to?</p>
        <div v-for="event in gitActivity.slice(0, 5)" :key="event.id">
          <div v-if="event.type == 'PushEvent'">
            <article class="media box is-vertical-centered">
              <figure class="media-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" width="20" height="22">
                  <path
                    fill-rule="evenodd"
                    d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"
                  />
                </svg>
              </figure>
              <div class="media-content">
                <p>
                  I've pushed changes to
                  {{ event.payload.ref.split('/')[2] }}
                  at
                  <a v-bind:href="'https://github.com/' + event.repo.name">{{ event.repo.name }}</a>
                </p>
                <p class="git-message">{{ event.payload.commits[0].message }}</p>
              </div>
            </article>
          </div>
          <div v-if="event.type == 'CreateEvent'">
            <article class="media box is-vertical-centered">
              <figure class="media-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="20" height="26">
                  <path
                    fill-rule="evenodd"
                    d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  />
                </svg>
              </figure>
              <div class="media-content">
                <p>
                  I've created branch {{ event.payload.master_branch }} at
                  <a v-bind:href="'https://github.com/' + event.repo.name">{{ event.repo.name }}</a>
                </p>
                <p class="git-message">{{ event.payload.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-parent is-vertical">
      <div class="tile is-child box">
        <p class="title">Work Experience</p>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img
                    src="https://static1.squarespace.com/static/5880a44815d5db76abda8e3a/t/5d2d9a6a03c9c70001369725/1588261856110/?format=1500w"
                    alt="APD Communications"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">APD Communications</p>
                <p class="subtitle is-6">Senior Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="../assets/ecm.png" alt="ECM Systems" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">ECM Systems Ltd</p>
                <p class="subtitle is-6">Software Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="../assets/bw.jpg" alt="Best Western GB" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Best Western GB</p>
                <p class="subtitle is-6">Junior Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Landing",
  data() {
    return {
      gitActivity: null
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/dannynewb/events/public")
      .then(response => (this.gitActivity = response.data));
  }
};
</script>

<style scoped>
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

.has-vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  color: unset;
}

.media.box {
  padding: 0.5rem;
}

.git-message {
  font-size: 0.7rem;
}

.is-vertical-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
