import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import NewCar from '../components/cars/new_car.vue'
import NewPrice from '../components/cars/new_price.vue'

Vue.use(VueRouter)
console.log("vue route");

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/cars/new', component: NewCar },
    { path: '/cars/new_price', component: NewPrice },
  ],
})