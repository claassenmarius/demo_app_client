<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          RouteMaster
        </q-toolbar-title>
        <div>
          <q-btn :to="{ path: '/register'}" flat color="primary" text-color="white" label="Register" />
          <q-btn :to="{ path: '/login'}" flat color="primary" text-color="white" label="Log In" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {}
  }
}
</script>
