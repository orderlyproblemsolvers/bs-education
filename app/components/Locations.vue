<template>
  <section class="bg-white py-16 px-4 sm:px-6 lg:px-24">
    <h2 class="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
      Where Can You Study?
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto w-[90%] sm:w-[80%] lg:w-[70%]">
      <div
        v-for="(country, index) in countries"
        :key="country.name"
        class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
        role="article"
        :aria-label="`Study destination: ${country.name}`"
      >
        <NuxtImg
          :src="country.src"
          :alt="country.alt"
          :width="400"
          :height="400"
          format="webp"
          placeholder="blur"
          :preload="index < 4"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 class="text-white font-bold text-lg sm:text-xl lg:text-2xl text-center drop-shadow-lg">
              {{ country.name }}
            </h3>
          </div>
        </div>
        <div class="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const countries = [
  {
    name: "UK",
    src: "/img/uk.png",
    alt: "United Kingdom flag with iconic landmarks - study abroad destination",
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
  {
    name: "Switzerland",
    src: "/img/swiss.jpeg",
    alt: "Swiss flag with Alpine mountains and lakes - study abroad destination",
  },
];
</script>