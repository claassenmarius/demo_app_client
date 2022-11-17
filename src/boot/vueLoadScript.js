import LoadScript from "vue-plugin-load-script";

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ app, router, Vue }) => {
  Vue.use(LoadScript);
};
