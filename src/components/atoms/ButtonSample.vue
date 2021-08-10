<template>
  <v-btn @click="handleClick"><slot></slot></v-btn>
</template>

<script>
export default {
  name: 'ButtonSample',
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
