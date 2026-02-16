<template>
  <section class="relative bg-white py-16 px-4 sm:px-8 lg:px-24 overflow-hidden">
    <h2 class="text-2xl sm:text-3xl font-bold text-center text-[#859484] mb-12">
      Our Trusted Partners
    </h2>
    
    <!-- Fading edges -->
    <div class="absolute inset-y-0 left-0 w-12 md:w-32 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-12 md:w-32 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
    
    <!-- Infinite scroll container -->
    <div class="space-y-6 mb-8">
      <!-- First row - scrolling right -->
      <div class="overflow-hidden">
        <div class="flex gap-8 animate-scroll-right will-change-transform">
          <!-- First set of logos -->
          <div class="flex gap-8 flex-shrink-0">
            <img
              v-for="(partner, index) in firstRow"
              :key="`partner-1-${index}`"
              :src="partner.logo"
              :alt="`${partner.name} Logo`"
              class="w-36 h-20 object-contain  flex-shrink-0"
            />
          </div>
          <!-- Duplicate set for seamless loop -->
          <div class="flex gap-8 flex-shrink-0">
            <img
              v-for="(partner, index) in firstRow"
              :key="`partner-1-dup-${index}`"
              :src="partner.logo"
              :alt="`${partner.name} Logo`"
              class="w-36 h-20 object-contain  flex-shrink-0"
            />
          </div>
        </div>
      </div>

      <!-- Second row - scrolling left (hidden on desktop) -->
      <div class="overflow-hidden md:hidden">
        <div class="flex gap-8 animate-scroll-left will-change-transform">
          <!-- First set of logos -->
          <div class="flex gap-8 flex-shrink-0">
            <img
              v-for="(partner, index) in secondRow"
              :key="`partner-2-${index}`"
              :src="partner.logo"
              :alt="`${partner.name} Logo`"
              class="w-36 h-20 object-contain  transition-all duration-300 flex-shrink-0"
            />
          </div>
          <!-- Duplicate set for seamless loop -->
          <div class="flex gap-8 flex-shrink-0">
            <img
              v-for="(partner, index) in secondRow"
              :key="`partner-2-dup-${index}`"
              :src="partner.logo"
              :alt="`${partner.name} Logo`"
              class="w-36 h-20 object-contain  flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Styled details section -->
    <div class="max-w-4xl mx-auto mt-12">
      <details class="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
        <summary class="cursor-pointer px-6 py-4 font-semibold text-[#859484] hover:bg-gray-100 transition-colors duration-200 select-none">
          Click to see the full list of partners
        </summary>
        <div class="px-6 py-4 bg-white">
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li v-for="(partner, index) in partners" :key="`link-${index}`" class="group">
              <a 
                :href="partner.url" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#859484] hover:text-[#6b7a6a] underline decoration-transparent hover:decoration-current transition-all duration-200 inline-flex items-center gap-2"
              >
                {{ partner.name }}
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </details>
    </div>
  </section>
</template>

<script setup>
const partners = [
  {
    name: 'University of Debrecen',
    logo: '/img/debrecen.jpeg',
    url: 'https://www.edu.unideb.hu/'
  },
  {
    name: 'Coventry University',
    logo: '/img/coventry.png',
    url: 'https://www.coventry.ac.uk/'
  },
  {
    name: 'University of the West of England',
    logo: '/img/uwe.jpeg',
    url: 'https://www.uwe.ac.uk/'
  },
  {
    name: 'University of South Wales',
    logo: '/img/usw.png',
    url: 'https://www.southwales.ac.uk/'
  },
  {
    name: 'Metropolitan University College of Medicine',
    logo: '/img/mucm.png',
    url: 'https://muantigua.org/'
  },
  {
    name: 'University of Lancashire',
    logo: '/img/uclan.webp',
    url: 'https://www.lancashire.ac.uk/'
  },
  {
    name: 'Bangor University',
    logo: '/img/bangor.png',
    url: 'https://www.bangor.ac.uk/'
  },
  {
    name: 'American Institute of Applied Sciences',
    logo: '/img/aus.png',
    url: 'https://aus.swiss/'
  },
  {
    name: 'Oxford International College',
    logo: '/img/oxford.webp',
    url: 'https://www.oxcoll.com/oxford'
  },
  {
    name: 'Kings College',
    logo: '/img/kings.jpeg',
    url: 'https://www.kcl.ac.uk/'
  },
  {
    name: 'University of Bradford',
    logo: '/img/bradford.png',
    url: 'https://www.bradford.ac.uk/external/'
  },
  {
    name: 'Navitas',
    logo: '/img/navitas.webp',
    url: 'https://www.navitas.com/'
  },
  {
    name: 'Wakefield College',
    logo: '/img/wakefield.webp',
    url: 'https://www.heartofyorkshire.ac.uk/wakefield-college'
  },
  {
    name: 'INTO',
    logo: '/img/into.webp',
    url: 'https://www.intoglobal.com/'
  },
  {
    name: 'Scotland Rural College',
    logo: '/img/sruc.png',
    url: 'https://www.sruc.ac.uk/'
  },
  {
    name: 'Abbey DLD Group of Colleges',
    logo: '/img/abbey.webp',
    url: 'https://www.abbeycolleges.co.uk/'
  },
  {
    name: 'University of Hull',
    logo: '/img/hull.jpeg',
    url: 'https://www.hull.ac.uk/'
  },
]

// Split partners into two rows for mobile
const midpoint = Math.ceil(partners.length / 2)
const firstRow = partners.slice(0, midpoint)
const secondRow = partners.slice(midpoint)
</script>

<style scoped>
@keyframes scrollRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-right {
  animation: scrollRight 20s linear infinite;
}

.animate-scroll-left {
  animation: scrollLeft 20s linear infinite;
}

/* Pause animation on hover */
.animate-scroll-right:hover,
.animate-scroll-left:hover {
  animation-play-state: paused;
}
</style>