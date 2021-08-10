<template>
  <v-app id="inspire">
    <SidebarSample v-bind:value="drawer"></SidebarSample>
    <HeaderSample v-bind:drawer="drawer" v-on:change="drawer = $event"></HeaderSample>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SidebarSample from '@/components/organisms/SidebarSample.vue'
import HeaderSample from '@/components/organisms/HeaderSample.vue'

export default {
  data () {
    return {
      drawer: true
    }
  },

  components: {
    SidebarSample,
    HeaderSample
  }
}
</script>
