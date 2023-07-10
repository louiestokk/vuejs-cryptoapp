<template>
  <div>
    <div>
      <b-navbar type="dark" variant="danger" style="padding: 1rem">
        <b-navbar-brand href="#">CoinSpace</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Trade</b-nav-item>
            <b-nav-item href="#">Exchanage</b-nav-item>
            <b-nav-item href="#">Community</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-table striped hover :items="allproducts" :fields="fields">
      <template #cell(foto)="data">
        <router-link :to="{ name: 'post', params: { slug: data.item.name } }">
          <img v-bind:src="data.item.iconUrl" class="icon" />
        </router-link>
      </template>
      <template #cell(price)="data">
        <p>${{ parseFloat(data.item.price).toFixed(2) }}</p>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BIconArrowUp } from "bootstrap-vue";
const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d2cf6a2206mshf14de9c14c33773p1ed8fajsnd13451133a4e",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};
export default {
  name: "Products",
  data() {
    return {
      allproducts: [],
      fields: [
        { key: "rank", label: "Rank" },
        { key: "foto", label: "Symbol", image: true },
        { key: "symbol", label: "Coin" },
        { key: "name", label: "Name" },
        { key: "price", label: "Price" },
        { key: "marketCap", label: "Market Cap" },
        { key: "24hVolume", label: "24h Volume" },
      ],
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const resp = await fetch(url, options);
        const result = await resp.json();
        this.allproducts = result?.data?.coins;
        this.$store.commit("addAllProducts", result?.data?.coins);
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    BIconArrowUp,
  },
};
</script>

<style scoped>
.icon {
  height: 25px;
  width: 25px;
}
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
