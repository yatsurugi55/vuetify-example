<template>
  <div class="ma-5">
    <v-card class="ma-2" max-width="1000">
      <v-card-title><h3>商品管理</h3></v-card-title>
      <v-container>
        <v-row>
          <v-col cols="6">
            <NewProductNameSample
              v-bind:value="newProductName"
              v-on:input="newProductName = $event"></NewProductNameSample>
          </v-col>
          <v-col cols="2">
            <ButtonSample @click="addNewProduct">Enter</ButtonSample>
          </v-col>
        </v-row>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import NewProductNameSample from '@/components/molecules/NewProductNameSample.vue'
import ButtonSample from '@/components/atoms/ButtonSample.vue'

export default {
  name: 'ProductsSample',
  components: {
    NewProductNameSample,
    ButtonSample
  },

  computed: {
    products: function () {
      return this.$store.state.products
    }
  },

  data () {
    return {
      newProductName: null
    }
  },

  methods: {
    addNewProduct () {
      this.$store.commit('addNewProduct', {
        name: this.newProductName
      })
    }
  }
}
</script>
