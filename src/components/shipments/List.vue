<template>
  <div class="q-pa-md" style="width: 100%">
    <q-table
      flat
      title="Shipments"
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="paginationOptions"
      :fullscreen.sync="isFullscreen"
      :loading="busy"
      no-data-label=""
      no-results-label="The filter didn't uncover any results"
    >
      <template v-slot:no-data="{}">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <span> "" </span>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      isFullscreen: false,
      busy: false,
      paginationOptions: {
        sortBy: "id",
        descending: false,
        rowsPerPage: 10,
        // rowsNumber: 10,
      },
      columns: [
        {
          name: "id",
          required: true,
          label: "Shipment ID",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "waybill_no",
          label: "Waybill No",
          align: "left",
          field: (row) => {
            return row.waybill_no;
          },
          format: (val) => val,
        },
        {
          name: "status",
          align: "center",
          label: "Status",
          field: "status",
          sortable: true,
        },
        {
          name: "created_at",
          align: "left",
          label: "Created",
          field: "created_at",
          sortable: false,
        },
        {
          name: "collection_address",
          align: "left",
          label: "Collection Address",
          field: "collection_address",
          sortable: false,
        },
        {
          name: "delivery_address",
          align: "left",
          label: "Delivery Address",
          field: "delivery_address",
          sortable: false,
        },
      ],
      data: [],
    };
  },
  methods: {
    async fetchShipments() {
      this.busy = true;
      const response = await this.$api.get("/api/shipments");

      this.data = response.data;
      this.busy = false;
    },
  },
  mounted() {
    this.fetchShipments();
  },
};
</script>
