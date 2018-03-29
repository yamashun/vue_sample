import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import NewCar from '../components/cars/new_car.vue'
import NewPrice from '../components/cars/new_price.vue'
import Confirm from '../components/cars/confirm.vue'
import Complete from '../components/cars/complete.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/cars/new', component: NewCar },
    { path: '/cars/new_price', component: NewPrice },
    { path: '/cars/confirm', component: Confirm },
    { path: '/cars/complete', component: Complete },
  ],
})