import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

const api = axios.create({ baseURL: process.env.API_BASE_URL });

Vue.prototype.$api = api;

api.defaults.withCredentials = true;
api.defaults.headers.common["Accept"] = "application/json";

export { axios, api };
