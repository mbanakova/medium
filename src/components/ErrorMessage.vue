<template>
  <div>Some shit happened......</div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Some shit happened...',
    },
  },
}
</script>

<style></style>
