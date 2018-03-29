import Vue from 'vue/dist/vue.esm'
import router from '../router/car'
import store from '../store/car'

const new_root = new Vue({
  router,
  store,
}).$mount('#car_form');
