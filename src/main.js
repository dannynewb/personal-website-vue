import Vue from 'vue';
import App from './App.vue';
import './../node_modules/bulma/css/bulma.css';
import './assets/global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelopeSquare, faPalette, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import router from './router';
import 'es6-promise/auto';
import Vuex from 'vuex';
import store from "./store";
import axios from 'axios'

library.add(faFacebookSquare, faLinkedin, faGithubSquare, faEnvelopeSquare, faPalette, faCodeBranch);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);

Vue.config.productionTip = false
Vue.prototype.$https = axios

new Vue({
  store,
  beforeCreate() {
		this.$store.commit('initialiseStore');
	},
  router,
  render: h => h(App),
}).$mount('#app')
