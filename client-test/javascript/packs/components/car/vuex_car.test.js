import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Actions from 'components/cars/vuex_car'

const localVue = createLocalVue()

localVue.use(Vuex)

//アクションが必要なときに発行されていること、そして期待された値によって発行されていることをテスト
describe('Actions.vue', () => {
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
    const wrapper = shallow(Actions, { store, localVue })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.setCar).toHaveBeenCalled()
  })
  
})