<template>
  <section class="bg-white py-16 px-4 sm:px-6 lg:px-24">
    <h2 class="text-3xl sm:text-4xl font-bold text-black mb-10 text-center">
      Where Can You Study?
    </h2>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] sm:auto-rows-[250px] gap-4"
    >
      <div
        v-for="(country, index) in countries"
        :key="country.name"
        :class="country.layout"
        class="group relative overflow-hidden rounded-xl"
      >
        <NuxtImg
          :src="country.src"
          :alt="country.alt"
          :width="country.width"
          :height="country.height"
          format="webp"
          placeholder="blur"
          :preload="index < 3"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3
            class="text-white font-semibold"
            :class="country.textSize"
          >
            {{ country.name }}
          </h3>
        </div>
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
    width: 600,
    height: 600,
    textSize: "text-lg sm:text-2xl",
    layout: "col-span-2 row-span-2",
  },
  {
    name: "USA",
    src: "/img/usa.jpg",
    alt: "Study in the USA",
    width: 600,
    height: 600,
    textSize: "text-lg sm:text-2xl",
    layout: "col-span-2",
  },
  {
    name: "Australia",
    src: "/img/australia.jpg",
    alt: "Study in Australia",
    width: 600,
    height: 600,
    textSize: "text-lg sm:text-2xl",
    layout: "col-span-2",
  },
  {
    name: "France",
    src: "/img/france.jpg",
    alt: "Study in France",
    width: 600,
    height: 600,
    textSize: "text-lg sm:text-2xl",
    layout: "col-span-2 row-span-2",
  },
  {
    name: "Malta",
    src: "/img/malta.jpg",
    alt: "Study in Malta",
    width: 500,
    height: 500,
    textSize: "text-lg sm:text-xl",
    layout: "",
  },
  {
    name: "Hungary",
    src: "/img/hungary.png",
    alt: "Study in Hungary",
    width: 500,
    height: 500,
    textSize: "text-lg sm:text-xl",
    layout: "",
  },
  {
    name: "Cyprus",
    src: "/img/cyprus.png",
    alt: "Study in Cyprus",
    width: 600,
    height: 600,
    textSize: "text-lg sm:text-2xl",
    layout: "col-span-2",
  },
  {
    name: "Nigeria",
    src: "/img/nigeria.jpg",
    alt: "Study in Nigeria",
    width: 600,
    height: 600,
    textSize: "text-lg sm:text-2xl",
    layout: "col-span-2",
  },
];
</script>

<!-- Optional: Preload key images early for better LCP -->
<head>
  <link rel="preload" href="/img/uk.png" as="image" />
  <link rel="preload" href="/img/usa.jpg" as="image" />
  <link rel="preload" href="/img/australia.jpg" as="image" />
</head>
