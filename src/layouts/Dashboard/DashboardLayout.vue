<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-icon name="fork_right" size="2rem" />
          RouteMaster
        </q-toolbar-title>

        <q-btn
          @click="logout"
          flat
          color="primary"
          text-color="white"
          label="Log Out"
          icon="logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="220"
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <Balance />
        <PaystackPayment />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import Balance from "components/Balance.vue";
import PaystackPayment from "components/PaystackPayment.vue";
import { mapActions } from "vuex";

const linksData = [
  {
    title: "Shipments",
    // caption: "View and create shipments",
    icon: "local_shipping",
    link: "https://quasar.dev",
  },
  {
    title: "Address Book",
    // caption: "Manage your addresses",
    icon: "location_on",
    link: "https://github.com/quasarframework",
  },
  {
    title: "My Profile",
    // caption: "Manage your information",
    icon: "person",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Account",
    // caption: "Manage your account",
    icon: "admin_panel_settings",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Settings",
    // caption: "Manage your settings",
    icon: "settings",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "My Inbox",
    // caption: "View your messages",
    icon: "mail",
    link: "https://facebook.quasar.dev",
  },
];

export default {
  name: "MainLayout",
  components: {
    EssentialLink,
    Balance,
    PaystackPayment,
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
    }),

    async logout() {
      await this.logoutAction();

      this.$router.replace({ path: "/" });
    },
  },
};
</script>
