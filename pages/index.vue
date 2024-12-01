<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>
<script setup>
let map;
let marker;

onMounted(() => {
  // Carrega o script da API do Google Maps dinamicamente
  loadGoogleMaps(() => {
    initMap();
  });
});

function loadGoogleMaps(callback) {
  const existingScript = document.getElementById("google-maps-script");

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBSLYNuSejDUGAkV7LkojjjcoJIHbVOFBs&callback=onGoogleMapsLoad`;
    script.id = "google-maps-script";
    script.async = true;
    window.onGoogleMapsLoad = callback; // Callback quando o script é carregado
    document.head.appendChild(script);
  } else {
    callback(); // Já carregado
  }
}

function initMap() {
  // Configuração inicial do mapa
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: -23.55052, lng: -46.633308 }, // Centro inicial (São Paulo)
  });

  // Adiciona um marcador inicial
  marker = new google.maps.Marker({
    position: { lat: -23.55052, lng: -46.633308 },
    map: map,
    title: "Você está aqui!",
  });

  // Rastreia a localização em tempo real
  trackLocation();
}

function trackLocation() {
  if (navigator.geolocation) {
    // Atualiza a localização do marcador
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Atualiza o marcador e centraliza o mapa
        const newPosition = new google.maps.LatLng(latitude, longitude);
        marker.setPosition(newPosition);
        map.setCenter(newPosition);
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
      },
      {
        enableHighAccuracy: true, // Usa GPS para maior precisão
        maximumAge: 0, // Sempre pega uma nova posição
        timeout: 5000, // Tempo máximo para obter a posição
      }
    );
  } else {
    alert("Geolocalização não é suportada no seu navegador.");
  }
}
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
