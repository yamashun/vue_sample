import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import * as types from './types'
import config from './car_store-config'

Vue.use(Vuex)

export default new Vuex.Store(config)