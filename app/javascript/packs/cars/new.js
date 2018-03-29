import Vue from 'vue/dist/vue.esm'
import router from '../router/car'

const new_root = new Vue({
  router,
}).$mount('#car_form');
