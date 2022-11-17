<template>
  <q-dialog
    ref="dialog"
    @hide="onDialogHide"
    persistent
    class="q-pa-md"
    full-width
    full-height
  >
    <q-card class="q-dialog-plugin">
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <q-toolbar-title> New Shipment </q-toolbar-title>
        <q-btn flat round dense icon="close" @click="onCancelClick" />
      </q-toolbar>
      <q-card-section>
        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-card flat bordered>
              <q-toolbar
                class="bg-blue-grey-1 text-black shadow-2 rounded-borders"
              >
                <q-icon name="local_shipping" size="1.5rem" class="q-mr-sm" />
                Collection
              </q-toolbar>
              <q-card-section>
                <div class="row">
                  <div class="col-12">
                    <q-input
                      v-model="collection_address_street"
                      label="Street Address"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="collection_address_suburb"
                      label="Suburb"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="collection_address_city"
                      label="City"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="collection_address_postcode"
                      label="Postcode"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="collection_address_province"
                      label="Province"
                      dense
                    />
                  </div>
                  <div class="col-12">
                    <q-input
                      v-model="collection_instructions"
                      label="Collection Instuctions"
                      dense
                    />
                  </div>
                  <div class="col-4">
                    <q-input v-model="sender_name" label="Name" dense />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input v-model="sender_email" label="E-Mail" dense />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input v-model="sender_mobile" label="Mobile" dense />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6 q-pa-sm">
            <q-card flat bordered>
              <q-toolbar
                class="bg-blue-grey-1 text-black shadow-2 rounded-borders"
              >
                <q-icon name="local_shipping" size="1.5rem" class="q-mr-sm" />
                Delivery
              </q-toolbar>
              <q-card-section>
                <div class="row">
                  <div class="col-12">
                    <q-input
                      v-model="delivery_address_street"
                      label="Street Address"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="delivery_address_suburb"
                      label="Suburb"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="delivery_address_city"
                      label="City"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="delivery_address_postcode"
                      label="Postcode"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="delivery_address_province"
                      label="Province"
                      dense
                    />
                  </div>
                  <div class="col-12">
                    <q-input
                      v-model="delivery_instructions"
                      label="Delivery Instuctions"
                      dense
                    />
                  </div>
                  <div class="col-4">
                    <q-input v-model="receiver_name" label="Name" dense />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input v-model="receiver_email" label="E-Mail" dense />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input v-model="receiver_mobile" label="Mobile" dense />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 q-pa-sm">
            <q-card flat bordered>
              <q-toolbar
                class="bg-blue-grey-1 text-black shadow-2 rounded-borders"
              >
                <q-icon name="inventory_2" size="1.5rem" class="q-mr-sm" />
                Parcels
              </q-toolbar>
              <q-card-section>
                <div class="row">
                  <div class="col-3">
                    <q-input v-model="parcel_length" label="Length" dense />
                  </div>
                  <div class="col-3 q-pl-md">
                    <q-input v-model="parcel_width" label="Width" dense />
                  </div>
                  <div class="col-3 q-pl-md">
                    <q-input v-model="parcel_height" label="Height" dense />
                  </div>
                  <div class="col-3 q-pl-md">
                    <q-input v-model="parcel_weigth" label="Weigth" dense />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 q-pa-sm">
            <q-card flat bordered>
              <q-toolbar
                class="bg-blue-grey-1 text-black shadow-2 rounded-borders"
              >
                <q-icon name="sell" size="1.5rem" class="q-mr-sm" />
                Quotes
              </q-toolbar>
              <q-card-section>
                <div class="row">
                  <div class="col-12">
                    <q-card-actions align="center">
                      <div class="row">
                        <div class="col-12 q-pa-md">
                          <q-btn
                            class="q-ma-sm q-pa-sm"
                            color="primary"
                            dense
                            label="Get Shipment Quotes"
                            @click="onOKClick"
                            icon="cloud_download"
                          />
                        </div>
                      </div>
                    </q-card-actions>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
      <!-- buttons example -->

      <q-card-actions align="right">
        <div class="row">
          <div class="col-12 q-pa-md">
            <q-btn
              class="q-ma-sm q-pa-sm"
              color="primary"
              dense
              label="Create Shipment"
              @click="onOKClick"
              icon="save"
            />
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    // ...your custom props
  },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide dialog
      this.hide();
    },
  },
};
</script>
