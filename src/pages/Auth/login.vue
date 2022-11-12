<template>
  <q-page class="flex flex-center">

    <div class="q-pa-md" style="width: 100%; max-width: 400px">

      <div style="display:flex; justify-content: center">
        <h6 class="q-mb-md">Log in to your account</h6>
      </div>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-lg"

      >

        <q-input v-model="email" placeholder="E-Mail"/>
        <q-input v-model="password" placeholder="Password"/>


        <div>
          <q-checkbox v-model="rememberMe" label="Remember Me" dense/>
        </div>

        <div style="display:flex; justify-content:flex-end;">
          <q-btn size="md" outline label="Login" type="submit" color="primary" class="full-width"/>
        </div>

      </q-form>

      <div style="display:flex; justify-content:center;" class="q-mt-md">
        <q-btn :to="{ path: '/register' }" size="md"  no-caps flat :ripple="false" label="Don't have an account?" color="primary" class="full-width"/>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'login',
  data: () => {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      rememberMe: false,
    }
  }
}
</script>
