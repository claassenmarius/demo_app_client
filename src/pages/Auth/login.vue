<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 100%; max-width: 400px">
      <div style="display: flex; justify-content: center">
        <h6 class="q-mb-md">Log in to your account</h6>
      </div>

      <q-form @submit="onSubmit" class="q-gutter-lg">
        <q-input
          v-model="form.email"
          type="email"
          placeholder="E-Mail"
          autofocus
        />
        <q-input
          v-model="form.password"
          type="password"
          placeholder="Password"
        />

        <div>
          <q-checkbox v-model="form.rememberMe" label="Remember Me" dense />
        </div>

        <div style="display: flex; justify-content: flex-end">
          <q-btn
            size="md"
            outline
            type="submit"
            label="Login"
            color="primary"
            class="full-width"
          />
        </div>
      </q-form>

      <div style="display: flex; justify-content: center" class="q-mt-md">
        <q-btn
          :to="{ path: '/register' }"
          size="md"
          no-caps
          flat
          :ripple="false"
          label="Don't have an account?"
          color="primary"
          class="full-width"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data: () => {
    return {
      form: {
        email: "",
        password: "",
        rememberMe: false,
      },
    };
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async onSubmit() {
      await this.login(this.form);

      this.$router.replace({ path: "/dashboard" });
    },
  },
};
</script>
