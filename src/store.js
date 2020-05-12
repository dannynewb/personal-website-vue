import Vue from "vue";
import Vuex from "vuex";
import { THEME } from "./constants";
import blueJeans from "./themes/blue-jeans";
import fieryRose from './themes/fiery-rose';
import gunmetal from './themes/gunmetal';
import magenta from './themes/magenta';
import violetBlue from './themes/violet-blue';

const theme = {
  blueJeans,
  fieryRose,
  gunmetal,
  magenta,
  violetBlue
};

const defaultTheme = THEME.blueJeans;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      themeName: theme[defaultTheme].themeName,
      hex: theme[defaultTheme].hex,
    },
    mutations: {
      initialiseStore(state) {
        var selectedTheme = localStorage.getItem('theme');

        if (selectedTheme != null || selectedTheme != 'null') {
          state.themeName = theme[selectedTheme].themeName;
          state.hex = theme[selectedTheme].hex;
        }
      },
      switchTheme(state, themeName) {
        localStorage.setItem('theme', themeName);

        state.themeName = theme[themeName].themeName;
        state.hex = theme[themeName].hex;
      }
    },
    actions: {}
  });