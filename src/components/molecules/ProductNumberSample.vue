<template>
  <div>
    <h4>個数</h4>
    <v-text-field
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'ProductNumberSample',
  props: ['value']
}
</script>
