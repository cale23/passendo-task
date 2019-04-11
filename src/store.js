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
      tags: ['test tag (28)']
    },
    availableTags: ['foo', 'bar', 'baz']
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
      if (state.user.tags.indexOf(value) == -1)
        state.user.tags.push(value);
        state.availableTags = state.availableTags.filter(function (i) { return state.user.tags.indexOf(i) < 0; });
    },
    addAvailableTag(state, value) {
      if (state.availableTags.indexOf(value) == -1)
        state.availableTags.push(value);
    }
  },
  actions: {

  }
})
