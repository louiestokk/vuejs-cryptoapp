<template>
  <div>
    <div>
      <div
        v-for="product in products.filter((el) => el.name === slug)"
        :key="product.uuid"
      >
        <div class="container">
          <img v-bind:src="product.iconUrl" class="icon" />
          <h6>{{ product.name }}</h6>
          <h6>{{ product.symbol }}</h6>
          <h6 style="color: green">
            ${{ parseFloat(product.price).toFixed(2) }}
          </h6>
        </div>
      </div>
    </div>
    <LineChartGenerator
      :data="{
        labels: ['mån', 'tisd', 'onsd', 'torsd', 'fred', 'lörd', 'sönd'],
        datasets: [
          {
            label: 'Price',
            backgroundColor: '#f87979',
            data: products.filter((el) => el.name === slug)[0].sparkline,
          },
        ],
      }"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Bar, Line as LineChartGenerator } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale
);
export default {
  name: "Post",
  components: { Bar, LineChartGenerator },
  props: ["slug"],
  data() {
    return {
      chartData: null,
    };
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

<style scoped>
.icon {
  width: 30px;
  height: 30px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
}
.container h6 {
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
</style>
