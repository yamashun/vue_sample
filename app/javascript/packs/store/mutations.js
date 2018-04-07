export default {
  setCar(state, car) {
    state.maker = car.maker.name;
    state.maker_id = car.maker.id;
    state.model = car.model.name;
    state.model_id = car.model.id;
  },
  setPrice(state, price) {
    state.price = price;
  },
}