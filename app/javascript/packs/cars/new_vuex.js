import Vue from 'vue/dist/vue.esm'
import VuexCar from '../components/cars/vuex_car'
import store from '../store/test_car'

const new_root = new Vue({
  el: "#car_form",
  components: { VuexCar },
  template: '<vuex-car></vuex-car>',
  store,
})
