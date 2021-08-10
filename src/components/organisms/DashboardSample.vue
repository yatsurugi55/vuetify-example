<template>
  <div class="dashboard ma-5">
    <v-card class="ma-2" max-width="1000">
      <v-card-title><h3>在庫管理</h3></v-card-title>
      <v-container>
        <v-row>
          <v-col cols="6">
            <ProductSelectSample
              v-bind:items="this.$store.state.products"
              v-bind:selectedProduct="selectedProduct"
              v-on:input="selectedProduct = $event"
            ></ProductSelectSample>
          </v-col>
          <v-col cols="2">
            <ProductNumberSample v-model.number="productCount"></ProductNumberSample>
          </v-col>
          <v-col cols="2">
            <ButtonSample @click="addProductCount">Enter</ButtonSample>
          </v-col>
        </v-row>
        <v-data-table
          :headers=this.$store.state.headers
          :items=this.$store.state.products
        ></v-data-table>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ButtonSample from '@/components/atoms/ButtonSample.vue'
import ProductSelectSample from '@/components/molecules/ProductSelectSample.vue'
import ProductNumberSample from '@/components/molecules/ProductNumberSample.vue'

export default {
  name: 'DashboardSample',
  components: {
    ButtonSample,
    ProductSelectSample,
    ProductNumberSample
  },

  data () {
    return {
      productCount: null,
      selectedProduct: { id: null, name: null, number: 0 }
    }
  },

  methods: {
    addProductCount () {
      this.$store.commit('addProductCount', {
        productCount: this.productCount,
        selectedProduct: this.selectedProduct
      })
    }
  }
}
</script>
