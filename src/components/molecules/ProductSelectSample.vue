<template>
  <div>
    <h4>商品名</h4>
    <v-select
      :items="items"
      item-text="name"
      v-bind:value="selectedProduct"
      v-on:input="$emit('input', $event)"
      return-object
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'ProductSelectSample',
  props: ['items', 'selectedProduct']
}
</script>
