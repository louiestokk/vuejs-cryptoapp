<template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductDetails",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
};
</script>

<style scoped></style>
