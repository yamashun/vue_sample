import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import actions from 'store/actions'
const { setCar } = actions

describe('mutations', () => {
  it('setCar', () => {
    let state = {
      maker: '',
      maker_id: null,
      model: '',
      model_id: null,
      price: '',
    }

    let car = {
      maker: { name: 'トヨタ', id: 1 },
      model: { name: 'カローラ', id: 2 },
    }

    setCar(state, car)
    expect(state.maker).toBe('トヨタ')
    expect(state.maker_id).toBe(1)
    expect(state.model).toBe('カローラ')
    expect(state.model_id).toBe(2)
    expect(state.price).toBe('')
  })
})