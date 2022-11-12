<template>
  <q-page class="flex flex-center">

    <div class="q-pa-md" style="width: 100%; max-width: 400px">

      <div style="display:flex; justify-content: center">
        <h6 class="q-mb-md">Register an account</h6>
      </div>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-lg"

      >
        <q-input v-model="name" placeholder="Full Name"/>
        <q-input v-model="email" placeholder="E-Mail"/>
        <q-input v-model="password" placeholder="Password"/>
        <q-input v-model="password_confirm" placeholder="Confirm Password"/>

        <div style="display:flex; justify-content:flex-end;" class="q-mt-xl">
          <q-btn size="md" outline label="Register" type="submit" color="primary" class="full-width"/>
        </div>

      </q-form>

      <div style="display:flex; justify-content:center;" class="q-mt-md">
        <q-btn :to="{ path: '/login' }" size="md"  no-caps flat :ripple="false" label="Already have an account?" color="primary" class="full-width"/>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
    }
  }
}
</script>
