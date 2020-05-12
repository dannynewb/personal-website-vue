<template>
  <div class="tile is-child box">
    <p class="title">Work Experience</p>
    <div class="card" v-for="experience in workExperience" :key="experience.workPlace">
      <div class="card-content">
        <div class="media has-vertical-center">
          <div class="media-left">
            <figure class="image is-64x64">
              <img v-bind:src="experience.logoLink" alt="Company Logo" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ experience.workPlace }}</p>
            <p class="subtitle is-6">{{ experience.jobTitle }}</p>
            <div class="tags">
              <span
                class="tag transition"
                :style="{backgroundColor: hex}"
                v-for="technologyUsed in experience.technologiesUsed"
                :key="technologyUsed"
              >{{ technologyUsed }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WorkExperience",
  data() {
    return {
      workExperience: [
        {
          workPlace: "APD Communications",
          logoLink: require('../assets/apd.png'),
          jobTitle: "Senior Software Engineer",
          technologiesUsed: ["C#", "WPF"]
        },
        {
          workPlace: "ECM Systems",
          logoLink: require('../assets/ecm.png'),
          jobTitle: "Software Developer",
          technologiesUsed: ["C#", "HTML", "CSS", "Javascript", "TypeScript"]
        },
        {
          workPlace: "Best Western GB",
          logoLink: require('../assets/bw.png'),
          jobTitle: "Junior Software Developer",
          technologiesUsed: ["C#", "HTML", "CSS", "Javascript"]
        }
      ]
    };
  },
  computed: mapState(["themeName", "hex"])
};
</script>

<style scoped>
.card-content {
  padding: 0.8rem;
}

.tag {
  color: #ffffff;
}
</style>
