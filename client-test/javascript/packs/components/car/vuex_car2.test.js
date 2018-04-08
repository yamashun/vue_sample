// routerにmockを使用するバージョン

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

describe('VuexCar.vue', () => {
  let actions
  let store
  let $router

  beforeEach(() => {
    $router = { push: jest.fn() }
    actions = {
      setCar: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('メーカー車種が入力されていない場合、次へボタンのクリックイベントが動作しない', () => {
    delete VuexCar.mounted
    const wrapper = shallow(VuexCar, {
      store, localVue, mocks: { $router }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    //actions.setCarが発行されていること
    expect(actions.setCar).not.toHaveBeenCalled()
    //$router.pushが発行されていること
    expect($router.push).not.toHaveBeenCalled()
  })

  it('次へボタンをクリックするとsetCarアクションと価格入力画面へのpushが呼ばれる', () => {
    delete VuexCar.mounted
    const wrapper = shallow(VuexCar, {
      store, localVue, mocks: { $router }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    //actions.setCarが発行されていること
    expect(actions.setCar).toHaveBeenCalled()
    //$router.pushが発行されていること
    expect($router.push).toHaveBeenCalled()
  })

  it('calls fetchCarModels when makers is selected', (done) => {
    delete VuexCar.mounted
    const carModels = [
      { id: 1, name: "カローラ" },
      { id: 2, name: "クラウン" },
      { id: 3, name: "８６" },
    ]

    const wrapper = shallow(VuexCar, {
      store, localVue, mocks: { $router }
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