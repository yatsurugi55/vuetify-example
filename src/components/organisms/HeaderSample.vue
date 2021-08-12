<template>
  <v-app-bar color="primary" app>
    <v-app-bar-nav-icon v-on:click="handle"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    handle () {
      this.$emit('change')
    }
  }
}
</script>
