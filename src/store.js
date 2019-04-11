import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    tags: []
  },
  mutations: {
    setFirstname(state, value) {
      state.firstname = value
    },
    setLastname(state, value) {
      state.lastname = value
    },
    setEmail(state, value) {
      state.email = value
    },
    setUsername(state, value) {
      state.username = value
    },
    setPassword(state, value) {
      state.password = value
    },
    setTags(state, value) {
      state.tags.push(value);
    }
  },
  actions: {

  }
})
