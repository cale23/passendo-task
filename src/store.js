import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      tags: []
    },
    availableTags: ['foo','bar','baz']
  },
  mutations: {
    setFirstname(state, value) {
      state.user.firstname = value
    },
    setLastname(state, value) {
      state.user.lastname = value
    },
    setEmail(state, value) {
      state.user.email = value
    },
    setUsername(state, value) {
      state.user.username = value
    },
    setPassword(state, value) {
      state.user.password = value
    },
    addTag(state, value) {
      state.user.tags.push(value);
    },
    addAvailableTag(state, value) {
      state.availableTags.push(value);
    }
  },
  actions: {

  }
})
