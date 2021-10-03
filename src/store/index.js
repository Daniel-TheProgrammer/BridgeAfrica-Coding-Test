// import { createStore } from "vuex";
import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {},
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login(context, payload) {
      console.log("something");
      const response = await fetch("/api/users");
      const users = await response.json();

      console.log(payload);

      const user = users.find((user) => user.username === payload.username);
      if (user && user.password === payload.password) {
        context.commit("login");
        context.commit("setUser", user);
      }
    },
    async logout(context) {
      context.commit("logout");
    },
    async register(context, payload) {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const user = await response.json();
      context.commit("login");
    },
  },
});
