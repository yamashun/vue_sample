// import { shallow, createLocalVue } from '@vue/test-utils'
// import VueRouter from 'vue-router'
// import Vuex from 'vuex'
import Complete from 'components/cars/complete'
// import store from 'store/car'
import Vue from "vue";

// const localVue = createLocalVue()
// localVue.use(VueRouter)
// localVue.use(Vuex)

describe('action.vue', () => {
  it('sample', () => {
    const Constructor = Vue.extend(Complete);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".testlabel").textContent)
      .toEqual("登録が完了しました。");
  })
})
