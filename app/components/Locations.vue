<template>
  <section class="bg-slate-50 py-20 px-4 sm:px-6 lg:px-16" id="destinations">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-slate-900 mb-4">
          Explore Your Options
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          We process admissions for top-tier universities across the globe. 
          <span class="font-medium text-blue-600">Hover over a country</span> to see why it might be your perfect match.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="(country, index) in countries"
          :key="country.name"
          class="group relative h-[400px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
        >
          <NuxtImg
            :src="country.src"
            :alt="country.alt"
            :width="500"
            format="webp"
            placeholder="blur"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

          <div v-if="country.tag" class="absolute top-4 left-4">
            <span class="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              {{ country.tag }}
            </span>
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            
            <h3 class="text-2xl font-bold mb-2 flex items-center gap-2">
              {{ country.name }}
            </h3>

            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 flex flex-col gap-3">
              <p class="text-sm text-slate-200 leading-relaxed font-light border-l-2 border-blue-500 pl-3">
                {{ country.description }}
              </p>

              <a 
                href="#contact" 
                class="mt-2 w-full bg-white text-slate-900 py-2 rounded-lg font-semibold text-sm text-center hover:bg-blue-50 transition-colors"
              >
                Start {{ country.name }} Application
              </a>
            </div>
            
            <div class="group-hover:opacity-0 transition-opacity duration-300 text-xs text-slate-400 mt-1">
              Tap for details
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
    name: "UK",
    src: "/img/uk.png",
    alt: "United Kingdom",
    tag: "Popular",
    description: "Short 1-year Master's programs and a 2-year post-study work visa make the UK a top choice for professionals."
  },
  {
    name: "USA",
    src: "/img/usa.jpg",
    alt: "United States",
    tag: "Top Tier",
    description: "Home to the world's leading universities with vast scholarship opportunities for high-achieving students."
  },
  {
    name: "Canada",
    src: "/img/canada.jpg",
    alt: "Canada",
    tag: "Work Permit",
    description: "Offers one of the most generous post-graduation work permit schemes and pathways to permanent residency."
  },
  {
    name: "Australia",
    src: "/img/australia.jpg",
    alt: "Australia",
    tag: null,
    description: "High quality of life, excellent wages for students, and up to 4 years of post-study work rights."
  },
  {
    name: "France",
    src: "/img/france.jpg",
    alt: "France",
    tag: "Affordable",
    description: "Significantly lower tuition fees compared to English-speaking countries, with many programs now taught in English."
  },
  {
    name: "Ireland",
    src: "/img/ireland.jpg",
    alt: "Ireland",
    tag: "Tech Hub",
    description: "The Silicon Valley of Europe. Offers a 2-year stay-back option for Master's graduates to find employment."
  },
  {
    name: "Malta",
    src: "/img/malta.jpg",
    alt: "Malta",
    tag: "Schengen",
    description: "Study in an English-speaking environment with access to travel freely across the entire Schengen zone."
  },
  {
    name: "Hungary",
    src: "/img/hungary.png",
    alt: "Hungary",
    tag: "Low Cost",
    description: "Very affordable tuition and living costs in the heart of Europe. Great for medical and engineering fields."
  },
  {
    name: "Cyprus",
    src: "/img/cyprus.png",
    alt: "Cyprus",
    tag: null,
    description: "Easy admission processes and affordable fees. A great entry point into European education standards."
  },
  {
    name: "UAE",
    src: "/img/uae.jpeg",
    alt: "UAE",
    tag: "Near by",
    description: "World-class branch campuses of UK/US universities located closer to home in Dubai and Abu Dhabi."
  },
  {
    name: "Egypt",
    src: "/img/egypt.jpeg",
    alt: "Egypt",
    tag: null,
    description: "A historic center of learning with affordable options for medical and sciences education."
  },
  {
    name: "Switzerland",
    src: "/img/swiss.jpeg",
    alt: "Switzerland",
    tag: "Premium",
    description: "The global leader in Hospitality and Tourism management education with paid internship components."
  },
];
</script>