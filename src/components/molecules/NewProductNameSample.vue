<template>
  <div>
    <h4>新しい商品名</h4>
    <v-text-field
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'NewProductNameSample',
  props: ['value']
}
</script>
