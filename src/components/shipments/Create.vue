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
                      v-model="form.collectionAddressStreet"
                      label="Street Address"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="form.collectionAddressSuburb"
                      label="Suburb"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="form.collectionAddressCity"
                      label="City"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="form.collectionAddressPostcode"
                      label="Postcode"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="form.collectionAddressProvince"
                      label="Province"
                      dense
                    />
                  </div>
                  <div class="col-12">
                    <q-input
                      v-model="form.collectionInstructions"
                      label="Collection Instuctions"
                      dense
                    />
                  </div>
                  <div class="col-4">
                    <q-input v-model="form.senderName" label="Name" dense />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input v-model="form.senderEmail" label="E-Mail" dense />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input v-model="form.senderMobile" label="Mobile" dense />
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
                      v-model="form.deliveryAddressStreet"
                      label="Street Address"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="form.deliveryAddressSuburb"
                      label="Suburb"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="form.deliveryAddressCity"
                      label="City"
                      dense
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      v-model="form.deliveryAddressPostcode"
                      label="Postcode"
                      dense
                    />
                  </div>
                  <div class="col-6 q-pl-md">
                    <q-input
                      v-model="form.deliveryAddressProvince"
                      label="Province"
                      dense
                    />
                  </div>
                  <div class="col-12">
                    <q-input
                      v-model="form.deliveryInstructions"
                      label="Delivery Instuctions"
                      dense
                    />
                  </div>
                  <div class="col-4">
                    <q-input v-model="form.receiverName" label="Name" dense />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input
                      v-model="form.receiverEmail"
                      label="E-Mail"
                      dense
                    />
                  </div>
                  <div class="col-4 q-pl-md">
                    <q-input
                      v-model="form.receiverMobile"
                      label="Mobile"
                      dense
                    />
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
                    <q-input v-model="form.parcelLength" label="Length" dense />
                  </div>
                  <div class="col-3 q-pl-md">
                    <q-input v-model="form.parcelWidth" label="Width" dense />
                  </div>
                  <div class="col-3 q-pl-md">
                    <q-input v-model="form.parcelHeight" label="Height" dense />
                  </div>
                  <div class="col-3 q-pl-md">
                    <q-input v-model="form.parcelWeight" label="Weigth" dense />
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
                    <div class="row">
                      <div
                        v-if="shipmentQuotes.length === 0"
                        class="col-12 q-pa-md"
                        style="margin-left: 40%; margin-right: auto"
                      >
                        <q-btn
                          class="q-pa-sm"
                          color="primary"
                          dense
                          label="Get Shipment Quotes"
                          @click="onQuoteClick"
                          icon="cloud_download"
                          :loading="busy"
                        />
                      </div>
                      <div
                        class="col-4"
                        v-else
                        v-for="shipmentQuote in shipmentQuotes"
                        :key="shipmentQuote.serviceType"
                      >
                        <q-card flat bordered class="q-ma-sm">
                          <q-toolbar
                            class="bg-grey-1 text-black shadow-2 rounded-borders"
                          >
                            <b>{{ shipmentQuote.serviceName }}</b>
                          </q-toolbar>
                          <q-card-section class="row justify-between">
                            <span>{{ shipmentQuote.serviceDescription }}</span>
                            <span>R {{ shipmentQuote.rate }}</span>
                          </q-card-section>
                        </q-card>
                      </div>
                    </div>
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
import Form from "vform";

export default {
  props: {},
  data() {
    return {
      form: new Form({
        collectionAddressStreet: "",
        collectionAddressSuburb: "",
        collectionAddressCity: "",
        collectionAddressPostcode: "",
        collectionAddressProvince: "",
        collectionInstructions: "",
        senderName: "",
        senderEmail: "",
        senderMobile: "",
        deliveryAddressStreet: "",
        deliveryAddressSuburb: "",
        deliveryAddressCity: "",
        deliveryAddressPostcode: "",
        deliveryAddressProvince: "",
        deliveryInstructions: "",
        receiverName: "",
        receiverEmail: "",
        receiverMobile: "",
        parcelLength: "",
        parcelWidth: "",
        parcelHeight: "",
        parcelWeight: "",
      }),
      shipmentQuotes: [],
      busy: false,
    };
  },

  methods: {
    show() {
      this.$refs.dialog.show();
    },

    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      this.$emit("hide");
    },

    async onQuoteClick() {
      // TODO: Add error handling
      this.busy = true;
      const response = await this.$api.post(
        "/api/shipment_quote",
        this.form.data()
      );
      this.shipmentQuotes = response.data;
      this.busy = false;
    },

    onOKClick() {
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      this.hide();
    },
  },
};
</script>
