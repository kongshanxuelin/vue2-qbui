/*
 * https://github.com/karakanb/vue-info-card
 */
import InfoCard from './InfoCard.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-info-card', InfoCard);
  }
};
