import Vue from 'vue/dist/vue.esm'
import store from '../store/test_car'
import router from '../router/test_car'

const new_root = new Vue({
  store,
  router,
}).$mount("#car_form")
