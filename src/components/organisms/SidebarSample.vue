<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5">Items</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.path"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
        { title: 'Products', icon: 'mdi-image', path: '/products' },
        { title: 'About', icon: 'mdi-help-box', path: '/about' }
      ]
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>
