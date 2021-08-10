import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headers: [
      { text: 'ID', value: 'id' },
      { text: '名前', value: 'name' },
      { text: '個数', value: 'number' }
    ],
    products: [
      { id: '1', name: '牛乳', number: 2 },
      { id: '2', name: 'りんご', number: 3 }
    ]
  },
  mutations: {
    addProductCount (state, payload) {
      state.products.map(item => {
        if (item.id === payload.selectedProduct.id) {
          item.number += payload.productCount
        }
      })
    },
    addNewProduct (state, payload) {
      const newId = state.products.length + 1
      state.products.push({ id: newId, name: payload.name, number: 0 })
    }
  },
  actions: {

  }
})
