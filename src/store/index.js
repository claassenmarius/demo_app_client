import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import balance from "./balance";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      balance,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  if (process.env.DEV && module.hot) {
    module.hot.accept(["./auth"], () => {
      const newAuth = require("./auth").default;
      Store.hotUpdate({ modules: { auth: newAuth } });
    });

    module.hot.accept(["./balance"], () => {
      const newBalance = require("./balance").default;
      Store.hotUpdate({ modules: { balance: newBalance } });
    });
  }

  return Store;
}
