import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgX: 'Bienvenido a vuex!!',
    nombreX: 'John',
    apellidoX: 'León',
    amigosX: []
  },
  mutations: {
    addAmigoX(state, amigoX) {
      state.amigosX = [...state.amigosX, amigoX];
    },
    delAmigoX(state, index) {
      state.amigosX.splice(index, 1);
    }
  },
  actions: {
    addAmigoActionX(context, amigoX) {
      context.commit('addAmigoX', amigoX);
    },
    delAmigoActionX(context, index) {
      context.commit('delAmigoX', index);
    }
  },
  getters: {
    getFullNameX(state) {
      return `${state.nombreX} ${state.apellidoX}`;
    }
  },
  modules: {
  }
})
