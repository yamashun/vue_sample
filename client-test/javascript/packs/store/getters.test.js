import getters from 'store/getters'

test('return price + fee', () => {
  const state = {
    price: 200000
  }
  expect(getters.basePrice(state)).toBe(220000)
})
