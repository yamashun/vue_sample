import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maker: '',
    maker_id: null,
    model: '',
    model_id: null,
    price: '',
  },
  mutations: {
    setCar(state, car) {
      state.maker = car.maker.name;
      state.maker_id = car.maker.id;
      state.model = car.model.name;
      state.model_id = car.model.id;
    },
    setPrice(state, price) {
      state.price = price;
    },
  },
  getters: {
    maker_obj(state) { return { id: state.maker_id, name: state.maker } },
    model_obj(state) { return { id: state.model_id, name: state.model } },
    price(state) { return state.price },
    car(state) {
      return {
        car: {
          maker_id: state.maker_id,
          maker_name: state.maker,
          car_model_id: state.model_id,
          car_model_name: state.model,
          price: state.price,
        }
      }
    },
  }
})