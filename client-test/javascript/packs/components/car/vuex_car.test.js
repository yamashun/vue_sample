import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VuexCar from 'components/cars/vuex_car'
jest.mock('axios', () => ({
  get: () => new Promise(resolve => {
    resolve({
      data: {
        car_models: [
          { id: 1, name: "カローラ" },
          { id: 2, name: "クラウン" },
          { id: 3, name: "８６" },
        ]
      }
    })
  })
}))

const localVue = createLocalVue()

localVue.use(Vuex)

//アクションが必要なときに発行されていること、そして期待された値によって発行されていることをテスト
describe('VuexCar.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      setCar: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('calls store action setCar when next button is clicled', () => {
    delete VuexCar.mounted
    const wrapper = shallow(VuexCar, {
      store, localVue
    })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.setCar).toHaveBeenCalled()
  })

  it('calls fetchCarModels when makers is selected', (done) => {
    delete VuexCar.mounted
    const carModels = [
      { id: 1, name: "カローラ" },
      { id: 2, name: "クラウン" },
      { id: 3, name: "８６" },
    ]

    const wrapper = shallow(VuexCar, {
      store, localVue
    })
    wrapper.setData({
      makers: [
        { id: 1, name: "トヨタ" },
        { id: 2, name: "日産" },
        { id: 3, name: "ホンダ" },
      ]
    })
    const select = wrapper.find('.CarModelSelectList')
    // https://github.com/vuejs/vue-test-utils/issues/128
    // https://github.com/ariera/vue-test-utils/commit/8e7d5243ad5fdc0036f840981326433033ff5837#comments
    select.element.value = 1
    select.trigger('change')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.models).toEqual(carModels)
      done()
    })
  })
})