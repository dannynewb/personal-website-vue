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
        <div id="feed"></div>
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
export default {
  name: "Landing"
};
</script>

<style scoped>
#facebook-icon:hover {
    color: #3B5998;
}

#linkedin-icon:hover {
    color: #0E76A8;
}

#github-icon:hover {
    color: #6F42C1;
}

#email-icon:hover {
    color: #2EBFA5;
}

.has-vertical-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    color: unset;
}
</style>
