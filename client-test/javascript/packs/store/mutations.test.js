import mutations from 'store/mutations'
const { setCar, setPrice } = mutations

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

  it('setPrice', () => {
    let state = {
      maker: '',
      maker_id: null,
      model: '',
      model_id: null,
      price: '',
    }

    let price = 10000

    setPrice(state, price)
    expect(state.maker).toBe('')
    expect(state.maker_id).toBe(null)
    expect(state.model).toBe('')
    expect(state.model_id).toBe(null)
    expect(state.price).toBe(10000)
  })
})