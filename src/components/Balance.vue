<template>
  <div style="display: flex; align-items: center" class="q-ma-md">
    <q-chip class="q-pa-md" style="width: 100%"
      ><div style="margin-left: auto; margin-right: auto">
        Balance: R {{ Number(accountBalance).toFixed(2) }}
      </div></q-chip
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Balance",

  computed: {
    ...mapGetters({
      accountBalance: "balance/accountBalance",
    }),
  },
};
</script>
