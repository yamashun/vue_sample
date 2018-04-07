export default {
  maker_obj(state) { return { id: state.maker_id, name: state.maker } },
  model_obj(state) { return { id: state.model_id, name: state.model } },
  price(state) { return state.price },
  basePrice(state) { return state.price + 20000 },
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