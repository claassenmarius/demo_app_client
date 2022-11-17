<template>
  <div style="display: flex; justify-content: center" class="q-ma-md">
    <q-btn @click="prompt" outline color="primary" text-color="black"
      ><q-icon name="currency_exchange" size="1rem" class="q-mr-sm"></q-icon>Top
      up account</q-btn
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "PaystackPayment",

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      balance: "balance/balance",
    }),

    initializeScript() {
      this.$loadScript("https://js.paystack.co/v1/inline.js")
        .then((response) => {
          console.log("Script has been loaded");
        })
        .catch((error) => {
          console.log("Could not load the script");
        });
    },

    prompt() {
      this.$q
        .dialog({
          title: "Top up your account",
          message: "Enter an amount you'd like to top up with",
          prompt: {
            model: "",
            type: "number", // optional
          },
          cancel: true,
          persistent: true,
        })
        .onOk((data) => {
          this.payWithPaystack(data);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },

    payWithPaystack(topUpAmount) {
      var self = this;
      let handler = PaystackPop.setup({
        key: "pk_test_a601ca68ff25aa52cfffea1449040361179abfaa", // Replace with your public key
        email: self.user.email,
        amount: topUpAmount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
        currency: "ZAR", // Use GHS for Ghana Cedis or USD for US Dollars
        ref: uuidv4(), // Replace with a reference you generated
        callback(response) {
          //this happens after the payment is completed successfully
          var reference = response.reference;
          // alert("Payment complete! Reference: " + reference);

          self.balance(topUpAmount);

          // Make an AJAX call to your server with the reference to verify the transaction
        },
        onClose: function () {
          alert("Transaction was not completed, window closed.");
        },
      });
      handler.openIframe();
    },
  },
  mounted() {
    this.initializeScript();
  },
};
</script>
