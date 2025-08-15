<template>
    <ClientOnly>
      <div ref="mapContainer" class="map-container"></div>
    </ClientOnly>
  </template>

  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useNuxtApp } from '#imports'
  
  const mapContainer = ref<HTMLElement | null>(null)
  let map = null
  
  // Approximate coordinates for Jahi, Abuja
  const lat = 9.10417
  const lng = 7.4425
  const zoom = 16
  
  onMounted(async () => {
    if (process.client && mapContainer.value && !map) {
      const { vueApp } = useNuxtApp()
      const L = (await import('leaflet')).default
  
      map = L.map(mapContainer.value).setView([lat, lng], zoom)
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map)
  
      // Marker example
      const marker = L.marker([lat, lng], { draggable: true }).addTo(map)
      marker.bindPopup('<b>The Kings Plaza</b><br>Approximate location.').openPopup()
  
      // Example: clustering (requires markerCluster enabled)
      // const { useLMarkerCluster } = await import('@nuxtjs/leaflet')
      // useLMarkerCluster({ leafletObject: map, markers: [{ lat, lng, name: 'Kings Plaza' }] })
    }
  })
  
  onBeforeUnmount(() => {
    if (map) {
      map.remove()
      map = null
    }
  })
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 400px;
  }
  </style>
  