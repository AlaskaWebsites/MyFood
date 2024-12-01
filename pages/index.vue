<template>
  <div>
    <h1>Rota para o Destino</h1>
    <a :href="wazeLink" target="_blank" rel="noopener noreferrer">
      Navegar no Waze
    </a>
  </div>
</template>
<script setup>
const destination = {
  //-23.2944113,-46.7424575
  latitude: -23.2944113,
  longitude: -46.7424575,
};

const wazeLink = `https://waze.com/ul?ll=${destination.latitude},${destination.longitude}&navigate=yes`;
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
