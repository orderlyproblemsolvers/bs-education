<template>
  <section class="bg-white pt-16 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 mb-12">
      <div class="max-w-3xl">
        <h2 class="text-3xl sm:text-4xl font-bold text-black mb-4">
          Finding Your Perfect <span class="text-secondary">Global</span> Match
        </h2>
        <p class="text-[#666666] text-lg">
          Whether you are drawn to top-tier universities in the UK, USA, and Canada, or the rich cultures of Europe and Australia, we will help you find the ideal setting for your success.
        </p>
      </div>
    </div>
    
    <div class="bg-primary py-12 relative mb-12">
      <div class="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
      <div class="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

      <div class="flex overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:w-max md:animate-scroll hide-scrollbar px-4 md:px-0">
        
        <div class="flex gap-4 md:gap-6 pr-4 md:pr-6 flex-shrink-0">
          <div
            v-for="country in countries"
            :key="`set1-${country.name}`"
            class="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer flex-shrink-0 snap-center md:snap-none"
            role="article"
            :aria-label="`Study destination: ${country.name}`"
          >
            <img
              :src="country.src"
              :alt="country.alt"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300"></div>
            
            <div class="absolute inset-0 p-6 flex flex-col justify-between">
              <div class="flex justify-end">
                <span class="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full tracking-wide">
                  99% Success Rate
                </span>
              </div>
              
              <div class="transform transition-transform duration-300 md:group-hover:-translate-y-2">
                <h3 class="text-white font-bold text-2xl mb-2">
                  {{ country.name }}
                </h3>
                <p class="text-white/80 text-sm leading-relaxed line-clamp-3">
                  {{ country.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden md:flex gap-6 pr-6 flex-shrink-0">
          <div
            v-for="country in countries"
            :key="`set2-${country.name}`"
            class="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer flex-shrink-0"
            role="article"
            :aria-label="`Study destination: ${country.name}`"
          >
            <img
              :src="country.src"
              :alt="country.alt"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300"></div>
            <div class="absolute inset-0 p-6 flex flex-col justify-between">
              <div class="flex justify-end">
                <span class="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full tracking-wide">
                  99% Success Rate
                </span>
              </div>
              <div class="transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 class="text-white font-bold text-2xl mb-2">
                  {{ country.name }}
                </h3>
                <p class="text-white/80 text-sm leading-relaxed line-clamp-3">
                  {{ country.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="flex justify-center px-4 sm:px-6 mt-12">
        <NuxtLink 
          to="/contact" 
          class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-xl shadow-lg hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          Book a Consultation
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
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
    description: "Study at prestigious universities with centuries of academic excellence. Access exceptional research facilities and vibrant communities."
  },
  {
    name: "USA",
    src: "/img/usa.jpg",
    alt: "United States flag with landmarks - study abroad destination",
    description: "Experience world-class education, diverse campus life, and unparalleled career opportunities in the United States."
  },
  {
    name: "Australia",
    src: "/img/australia.jpg",
    alt: "Australian flag with Sydney Opera House - study abroad destination",
    description: "Study in a vibrant, sunny environment with globally recognized universities and a highly sought-after lifestyle."
  },
  {
    name: "France",
    src: "/img/france.jpg",
    alt: "French flag with Eiffel Tower - study abroad destination",
    description: "Immerse yourself in rich history, culture, and top-tier academic institutions in the heart of Europe."
  },
  {
    name: "Ireland",
    src: "/img/ireland.jpg",
    alt: "Irish flag with green landscapes - study abroad destination",
    description: "Discover a welcoming, English-speaking tech hub with renowned universities and breathtaking green landscapes."
  },
  {
    name: "Canada",
    src: "/img/canada.jpg",
    alt: "Canadian flag with maple leaf - study abroad destination",
    description: "Benefit from high-quality education, extremely safe communities, and excellent post-study work opportunities."
  },
  {
    name: "Malta",
    src: "/img/malta.jpg",
    alt: "Maltese flag with Mediterranean architecture - study abroad destination",
    description: "Enjoy a beautiful Mediterranean lifestyle while studying in an affordable, English-speaking academic environment."
  },
  {
    name: "Hungary",
    src: "/img/hungary.png",
    alt: "Hungarian flag with Budapest Parliament - study abroad destination",
    description: "Experience high-quality, highly affordable medical and technical education in the beautiful center of Europe."
  },
  {
    name: "Cyprus",
    src: "/img/cyprus.png",
    alt: "Cypriot flag with coastal scenery - study abroad destination",
    description: "Study at the academic crossroads of Europe, Asia, and Africa with sunny weather and a rich cultural heritage."
  },
  {
    name: "UAE",
    src: "/img/uae.jpeg",
    alt: "United Arab Emirates flag with modern Dubai skyline - study abroad destination",
    description: "Gain a global perspective in a rapidly growing innovation hub with state-of-the-art facilities and zero tax."
  },
  {
    name: "Egypt",
    src: "/img/egypt.jpeg",
    alt: "Egyptian flag with pyramids and ancient monuments - study abroad destination",
    description: "Explore ancient history while receiving quality education in the cultural and academic heart of the Arab world."
  },
];
</script>

<style scoped>
@keyframes scrollGallery {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Only apply the continuous animation on larger screens */
@media (min-width: 768px) {
  .md\:animate-scroll {
    animation: scrollGallery 120s linear infinite;
    will-change: transform;
  }
  
  .md\:animate-scroll:hover {
    animation-play-state: paused;
  }
}

/* Prefers reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .md\:animate-scroll {
    animation-duration: 80s !important;
  }
}
</style>