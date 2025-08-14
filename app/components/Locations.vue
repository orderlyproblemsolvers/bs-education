<template>
  <section class="bg-white py-16 px-4 sm:px-6 lg:px-24">
    <h2 class="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
      Where Can You Study?
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl md:max-w-4xl mx-auto w-[90%] sm:w-[80%] lg:w-[70%]">
      <!-- UK - Large featured card -->
      <div class="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <NuxtImg
          :src="countries[0].src"
          :alt="countries[0].alt"
          :width="800"
          :height="800"
          format="webp"
          placeholder="blur"
          preload
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h3 class="text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center drop-shadow-lg">
              {{ countries[0].name }}
            </h3>
          </div>
        </div>
        <div class="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <!-- Other countries -->
      <div
        v-for="(country, index) in countries.slice(1, 9)"
        :key="country.name"
        class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
      >
        <NuxtImg
          :src="country.src"
          :alt="country.alt"
          :width="400"
          :height="400"
          format="webp"
          placeholder="blur"
          :preload="index < 3"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 class="text-white font-bold text-lg sm:text-xl lg:text-2xl text-center drop-shadow-lg">
              {{ country.name }}
            </h3>
          </div>
        </div>
        <div class="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const countries = [
  {
    name: "UK",
    src: "/img/uk.png",
    alt: "Study in the UK",
  },
  {
    name: "USA",
    src: "/img/usa.jpg",
    alt: "Study in the USA", 
  },
  {
    name: "Australia",
    src: "/img/australia.jpg",
    alt: "Study in Australia",
  },
  {
    name: "France",
    src: "/img/france.jpg",
    alt: "Study in France",
  },
  {
    name: "Ireland",
    src: "/img/ireland.jpg",
    alt: "Study in Ireland",
  },
  {
    name: "Canada",
    src: "/img/canada.jpg",
    alt: "Study in Canada",
  },
  {
    name: "Malta",
    src: "/img/malta.jpg",
    alt: "Study in Malta",
  },
  {
    name: "Hungary",
    src: "/img/hungary.png",
    alt: "Study in Hungary",
  },
  {
    name: "Cyprus",
    src: "/img/cyprus.png",
    alt: "Study in Cyprus",
  },
];
</script>