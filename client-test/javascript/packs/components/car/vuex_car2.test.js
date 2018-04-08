// routerにmockを使用するバージョン
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VuexCar from 'components/cars/vuex_car'
import { makersResponse, modelsResponse } from '../../../test-helpers/mock/car_new'
jest.mock('axios', () => require('../../../test-helpers/mock/car_new.js'))

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

  // mountedの中でmockは使えない??
  // https://qiita.com/re-fort/items/63bef6778bf3d3939815
  // https://github.com/vuejs/vue-test-utils/issues/166
  it('mountedの中でfetchMakersが呼ばれる', (done) => {
    const wrapper = shallow(VuexCar, {
      store, localVue, mocks: { $router }
    })
    expect(wrapper.vm.makers).not.toEqual(makersResponse.data.makers)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.makers).toEqual(makersResponse.data.makers)
      done()
    })
  })

  it('メーカー車種が入力されていない場合、次へボタンのクリックイベントが動作しない', () => {
    console.log('start click test')
    const wrapper = shallow(VuexCar, {
      store, localVue, mocks: { $router }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    
    // イベントが発行されないこと
    expect(actions.setCar).not.toHaveBeenCalled()
    expect($router.push).not.toHaveBeenCalled()
    console.log('end click test')
  })

  it('次へボタンをクリックするとsetCarアクションと価格入力画面へのpushが呼ばれる', () => {
    // delete VuexCar.mounted

    const wrapper = shallow(VuexCar, {
      store, localVue, mocks: { $router }
    })
    const button = wrapper.find('button')
    // データを設定する前は、disabled属性が設定されていること
    expect(button.element.getAttribute('disabled')).toBe('disabled')

    // メーカー、車種のidを設定する
    wrapper.setData({
      car: {
        maker: { name: "", id: 1 },
        model: { name: "", id: 1 },
      }
    })
    
    expect(wrapper.vm.car.maker.id).toBe(1)
    // computedへの反映のさせ方が不明。issueはv-modelの話だが関連してそう。
    // https://github.com/vuejs/vue-test-utils/issues/514
    // 一旦はissueにのっている $forceUpdate()を使って回避
    wrapper.vm.$forceUpdate()

    // データを設定後は、disabled属性が設定されていないこと
    // もっといい書き方がありそう
    expect(button.element.getAttribute('disabled')).toBe(null)

    button.trigger('click')
    
    expect(actions.setCar).toHaveBeenCalled()
    expect($router.push).toHaveBeenCalled()
  })

  it('メーカーが選択されると fetchCarModels が呼ばれる', (done) => {
    // delete VuexCar.mounted
    const wrapper = shallow(VuexCar, {
      store, localVue, mocks: { $router }
    })
    expect(wrapper.vm.models).not.toEqual(modelsResponse.data.car_models)

    const select = wrapper.find('.CarModelSelectList')
    // https://github.com/vuejs/vue-test-utils/issues/128
    // https://github.com/ariera/vue-test-utils/commit/8e7d5243ad5fdc0036f840981326433033ff5837#comments
    select.element.value = 1
    select.trigger('change')

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.models).toEqual(modelsResponse.data.car_models)
      done()
    })
    
  })
})