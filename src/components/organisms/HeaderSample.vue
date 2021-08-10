<template>
  <v-app-bar color="primary" app>
    <v-app-bar-nav-icon v-on:click="handle"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    localDrawer: {
      get: function () {
        return this.drawer
      },
      set: function (value) {
        this.$emit('change', value)
      }
    }
  },

  methods: {
    handle () {
      this.localDrawer = !this.localDrawer
    }
  }
}
</script>
