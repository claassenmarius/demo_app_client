import { RayPlugin } from "vue-ray/vue2";

export default async ({ app, router, Vue }) => {
  Vue.use(RayPlugin, { interceptErrors: true, host: "127.0.0.1", port: 23517 });
};
