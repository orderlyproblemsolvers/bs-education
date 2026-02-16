<template>
  <section class="bg-white py-16 px-4 sm:px-6 lg:px-24">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold text-black mb-4">
        Where Can You Study?
      </h2>
      <p class="text-[#666666] text-lg mb-12 max-w-2xl">
        From historic European campuses to cutting-edge institutions worldwide, find your perfect destination.
      </p>
      
      <!-- Featured Hero Section -->
      <div class="mb-12">
        <div class="relative overflow-hidden rounded-2xl shadow-xl h-[400px] lg:h-[450px]">
          <img
            :src="featuredCountry.src"
            :alt="featuredCountry.alt"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
            <div class="absolute bottom-0 left-0 right-0 p-8 lg:p-12 lg:max-w-2xl">
              <div class="inline-flex items-center gap-2 mb-4">
                <span class="w-2 h-2 bg-[#5d6b56] rounded-full"></span>
                <span class="text-white/90 text-sm font-medium uppercase tracking-wider">
                  Featured Destination
                </span>
              </div>
              <h3 class="text-white font-bold text-4xl lg:text-5xl mb-4">
                {{ featuredCountry.name }}
              </h3>
              <p class="text-white/95 text-lg leading-relaxed">
                {{ featuredCountry.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Compact Grid Section -->
      <div>
        <h4 class="text-xl font-semibold text-[#333333] mb-6 pb-3 border-b-2 border-[#5d6b56]">
          More Destinations
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div
            v-for="country in otherCountries"
            :key="country.name"
            class="relative overflow-hidden rounded-xl shadow-md aspect-[4/3]"
            role="article"
            :aria-label="`Study destination: ${country.name}`"
          >
            <img
              :src="country.src"
              :alt="country.alt"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent">
              <div class="absolute bottom-0 left-0 right-0 p-3">
                <h3 class="text-white font-semibold text-sm text-center">
                  {{ country.name }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const countries = [
  {
    name: "United Kingdom",
    src: "/img/london.webp",
    alt: "United Kingdom flag with iconic landmarks - study abroad destination",
    description: "Study at prestigious universities with centuries of academic excellence. Access exceptional research facilities and vibrant multicultural student communities."
  },
  {
    name: "USA",
    src: "/img/usa.jpg",
    alt: "United States flag with landmarks - study abroad destination", 
  },
  {
    name: "Australia",
    src: "/img/australia.jpg",
    alt: "Australian flag with Sydney Opera House - study abroad destination",
  },
  {
    name: "France",
    src: "/img/france.jpg",
    alt: "French flag with Eiffel Tower - study abroad destination",
  },
  {
    name: "Ireland",
    src: "/img/ireland.jpg",
    alt: "Irish flag with green landscapes - study abroad destination",
  },
  {
    name: "Canada",
    src: "/img/canada.jpg",
    alt: "Canadian flag with maple leaf - study abroad destination",
  },
  {
    name: "Malta",
    src: "/img/malta.jpg",
    alt: "Maltese flag with Mediterranean architecture - study abroad destination",
  },
  {
    name: "Hungary",
    src: "/img/hungary.png",
    alt: "Hungarian flag with Budapest Parliament - study abroad destination",
  },
  {
    name: "Cyprus",
    src: "/img/cyprus.png",
    alt: "Cypriot flag with coastal scenery - study abroad destination",
  },
  {
    name: "UAE",
    src: "/img/uae.jpeg",
    alt: "United Arab Emirates flag with modern Dubai skyline - study abroad destination",
  },
  {
    name: "Egypt",
    src: "/img/egypt.jpeg",
    alt: "Egyptian flag with pyramids and ancient monuments - study abroad destination",
  },
];

const featuredCountry = countries[0];
const otherCountries = countries.slice(1);
</script>

<style scoped>
/* Prefers reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>