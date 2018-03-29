import Vue from 'vue/dist/vue.esm'
import NewCar from '../components/cars/new_car.vue'

new Vue({
  el: '#car_form',
  components: { NewCar },
  template: '<new-car></new-car>'
})
