<template>
  <section class="relative w-full bg-gray-50 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12">
    <!-- Decorative Pattern Top Right -->
    <svg
      class="absolute top-0 right-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 opacity-30 z-0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="2" fill="gray" />
      <circle cx="30" cy="10" r="2" fill="#eb6534" />
      <circle cx="50" cy="10" r="2" fill="gray" />
      <circle cx="70" cy="10" r="2" fill="#eb6534" />
      <circle cx="90" cy="10" r="2" fill="gray" />
      <circle cx="10" cy="30" r="2" fill="#eb6534" />
      <circle cx="30" cy="30" r="2" fill="gray" />
      <circle cx="50" cy="30" r="2" fill="#eb6534" />
      <circle cx="70" cy="30" r="2" fill="gray" />
      <circle cx="90" cy="30" r="2" fill="#eb6534" />
      <circle cx="10" cy="50" r="2" fill="gray" />
      <circle cx="30" cy="50" r="2" fill="#eb6534" />
      <circle cx="50" cy="50" r="2" fill="gray" />
      <circle cx="70" cy="50" r="2" fill="#eb6534" />
      <circle cx="90" cy="50" r="2" fill="gray" />
    </svg>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Visit Our Office
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Located in the heart of Abuja, we're here to help you with your 
          <strong>study abroad journey</strong>. Drop by for a consultation or get directions below.
        </p>
      </div>

      <!-- Map and Info Section -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Map Container -->
        <div class="w-full lg:w-2/3">
          <div class="relative bg-white rounded-tl-[40px] rounded-br-[40px] shadow-lg overflow-hidden">
            <ClientOnly>
              <div ref="mapContainer" class="map-container"></div>
            </ClientOnly>
          </div>
        </div>

        <!-- Office Info -->
        <div class="w-full lg:w-1/3 space-y-6">
          <div class="bg-white p-6 rounded-tl-[40px] rounded-br-[40px] shadow-lg">
            <h3 class="text-xl font-bold text-black mb-4">Office Address</h3>
            <div class="space-y-3 text-gray-700">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#eb6534] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="font-semibold">The Kings Plaza</p>
                  <p>Jahi, Abuja FCT</p>
                  <p>Nigeria</p>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[#eb6534] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <p>+234 806 544 2707</p>
              </div>

              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[#eb6534] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <p>info@bseducational.com</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-4">
            <button
              @click="openInMaps"
              class="w-full bg-[#5d6b56] hover:bg-[#4a5544] text-white font-bold px-6 py-4 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              Open in Maps
            </button>

            <button
              @click="getDirections"
              class="w-full bg-[#eb6534] hover:bg-[#d55529] text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path>
              </svg>
              Get Directions
            </button>

            <a
              href="https://wa.me/2348065442707?text=Hello! I'd like to visit your office. Can you provide more details about your location?"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full bg-[#25D366] hover:bg-[#20b359] text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
              Chat About Location
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#imports'

const mapContainer = ref(null)
let map = null

// Coordinates for The Kings Plaza, Jahi, Abuja
const lat = 9.10417
const lng = 7.4425
const zoom = 16
const address = "The Kings Plaza, Jahi, Abuja FCT, Nigeria"

onMounted(async () => {
  if (process.client && mapContainer.value && !map) {
    const { vueApp } = useNuxtApp()
    const L = (await import('leaflet')).default

    map = L.map(mapContainer.value).setView([lat, lng], zoom)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    // Custom marker with popup
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: #eb6534; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    })

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map)
    marker.bindPopup(`
      <div style="text-align: center; font-family: system-ui;">
        <h3 style="margin: 0 0 8px 0; color: #1f2937; font-weight: bold;">B&S Educational Services</h3>
        <p style="margin: 0 0 8px 0; color: #6b7280;">The Kings Plaza, Jahi</p>
        <p style="margin: 0; color: #6b7280; font-size: 14px;">Your study abroad journey starts here!</p>
      </div>
    `).openPopup()
  }
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})

// Function to open address in default maps app
const openInMaps = () => {
  const encodedAddress = encodeURIComponent(address)
  
  // Detect user's device/browser and open appropriate maps app
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // iOS - Try Apple Maps first, fallback to Google Maps
    window.open(`maps://maps.google.com/maps?daddr=${lat},${lng}`, '_blank') ||
    window.open(`https://maps.google.com/maps?daddr=${lat},${lng}`, '_blank')
  } else if (/android/i.test(userAgent)) {
    // Android - Open Google Maps
    window.open(`geo:${lat},${lng}?q=${encodedAddress}`, '_blank') ||
    window.open(`https://maps.google.com/maps?daddr=${lat},${lng}`, '_blank')
  } else {
    // Desktop - Open Google Maps in browser
    window.open(`https://maps.google.com/maps?daddr=${lat},${lng}`, '_blank')
  }
}

// Function to get directions
const getDirections = () => {
  const encodedAddress = encodeURIComponent(address)
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank')
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
  border-radius: inherit;
}

/* Custom marker styles */
:deep(.custom-marker) {
  background: transparent !important;
  border: none !important;
}

/* Leaflet popup customization */
:deep(.leaflet-popup-content-wrapper) {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

:deep(.leaflet-popup-tip) {
  background-color: white;
}
</style>