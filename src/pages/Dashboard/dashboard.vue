<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <q-btn
          class="float-right q-mr-md q-mt-md q-pr-sm"
          color="green"
          label="Create Shipment"
          icon="add"
          dense
          @click="handleCreateShipmentDialog"
        />
      </div>
      <div class="col-12">
        <ShipmentList />
      </div>
    </div>
    <ShipmentCreate />
  </q-page>
</template>

<script>
import ShipmentList from "src/components/shipments/List.vue";
import ShipmentCreate from "src/components/shipments/Create.vue";

export default {
  name: "dashboard",
  components: {
    ShipmentList,
    ShipmentCreate,
  },
  methods: {
    handleCreateShipmentDialog() {
      this.$q
        .dialog({
          component: ShipmentCreate,

          // optional if you want to have access to
          // Router, Vuex store, and so on, in your
          // custom component:
          parent: this, // becomes child of this Vue node
          // ("this" points to your Vue component)
          // (prop was called "root" in < 1.1.0 and
          // still works, but recommending to switch
          // to the more appropriate "parent" name)

          // props forwarded to component
          // (everything except "component" and "parent" props above):
          text: "something",
          // ...more.props...
        })
        .onOk(() => {
          console.log("OK");
        })
        .onCancel(() => {
          console.log("Cancel");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    },
  },
};
</script>
