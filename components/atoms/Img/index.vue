<template>
  <img :width="props.width" :height="props.height":src="props.src" :alt="props.alt" />
</template>
<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "140px",
  },
  height: {
    type: String,
  },
  src: {
    type: String,
  },
  alt: {
    type: String,
    default: "Not Image",
  },
});
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
