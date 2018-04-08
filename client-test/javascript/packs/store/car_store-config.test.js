import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from 'store/car_store-config'
import { cloneDeep } from 'lodash'

describe('mutations', () => {
  test('setCar', () => {
    let car = {
      maker: { name: 'トヨタ', id: 1 },
      model: { name: 'カローラ', id: 2 },
    }

    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(storeConfig))
    expect(store.state.maker).toBe("")
    store.commit('setCar', car)
    expect(store.state.maker).toBe("トヨタ")
  })
})

describe('getters', () => {
  test('basePrice', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(storeConfig))
    expect(store.state.price).toBe("")
    store.commit('setPrice', 320000)
    expect(store.state.price).toBe(320000)
    expect(store.getters.basePrice).toBe(340000)
  })
})


