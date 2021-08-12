<template>
  <v-app id="inspire">
    <SidebarSample v-bind:value="drawer"></SidebarSample>
    <HeaderSample v-on:change="handle"></HeaderSample>
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
  },

  methods: {
    handle () {
      this.drawer = !this.drawer
    }
  }
}
</script>
