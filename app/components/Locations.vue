<template>
  <section class="bg-base pt-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-24 mb-14 relative">
      <div class="max-w-2xl">
        <span class="inline-block py-1 px-3 rounded-full bg-base/80 text-white text-xs font-semibold uppercase tracking-widest mb-4">
          Destinations
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Finding Your Perfect <span class="text-secondary">Global</span> Match
        </h2>
        <p class="text-white text-lg leading-relaxed">
          Whether drawn to the UK, USA, or Canada — or the rich cultures of Europe and Australia —
          we'll help you find the ideal setting for your success.
        </p>
      </div>

      <div class="hidden sm:flex absolute right-6 lg:right-24 bottom-0 gap-3">
        <button 
          @click="prevCard" 
          class="w-12 h-12 rounded-full border border-white/20 bg-base/50 text-white flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button 
          @click="nextCard" 
          class="w-12 h-12 rounded-full border border-white/20 bg-base/50 text-white flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <div
      class="relative py-14 overflow-hidden w-full touch-pan-y select-none"
      ref="viewportRef"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
    >
      <div
        class="flex items-center w-max will-change-transform"
        :style="trackStyle"
        @touchstart.passive="onTouchStart"
        @touchmove.passive="onTouchMove"
        @touchend="onTouchEnd"
      >
        <div
          v-for="(country, i) in displayCountries"
          :key="`${country.name}-${i}`"
          :ref="el => { if (el) cardEls[i] = el }"
          class="shrink-0 px-2 sm:px-3 flex justify-center"
        >
          <div
            class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer w-[72vw] max-w-85 h-100 sm:h-120"
            :style="cardStyle(i)"
            style="will-change: transform, opacity;"
            @click="goToCard(i)"
          >
            <img
              :src="country.src"
              :alt="country.alt"
              class="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style="transition: transform 0.7s ease;"
              :style="{ transform: activeIndex === i ? 'scale(1.03)' : 'scale(1.08)' }"
            />

            <div
              class="absolute inset-0 bg-linear-to-t from-base/95 via-base/45 to-transparent pointer-events-none"
              style="transition: opacity 0.5s ease;"
              :style="{ opacity: activeIndex === i ? 1 : 0.55 }"
            ></div>

            <div
              class="absolute top-5 right-5 bg-base/10 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/10 shadow pointer-events-none"
              style="transition: opacity 0.4s ease, transform 0.4s ease;"
              :style="activeIndex === i ? 'opacity:1; transform:translateY(0)' : 'opacity:0; transform:translateY(-6px)'"
            >
              <svg class="w-3.5 h-3.5 text-secondary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/>
              </svg>
              <span class="text-white text-[11px] font-semibold tracking-wide">99% Visa Success</span>
            </div>

            <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none">
              <h3 class="text-white font-bold text-xl sm:text-2xl leading-tight mb-2">{{ country.name }}</h3>

              <div
                style="transition: max-height 0.5s cubic-bezier(0.25,1,0.5,1), opacity 0.4s ease;"
                :style="activeIndex === i ? 'max-height: 140px; opacity: 1;' : 'max-height: 0px; opacity: 0;'"
                class="overflow-hidden"
              >
                <p class="text-white/75 text-sm leading-relaxed line-clamp-3 mb-4">
                  {{ country.description }}
                </p>
                <a :href="country.link" class="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-all duration-200 pointer-events-auto">
                  Learn more
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center px-6 pb-16 mt-6">
      <NuxtLink
        to="/contact"
        class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-secondary/80 hover:text-on-secondary hover:-translate-y-0.5 transition-all duration-300"
      >
        Book a Consultation
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const countries = [
  { name: 'United Kingdom', src: '/img/london.webp',   alt: 'London skyline',          link: 'https://www.findcourse.com/en/highereducation/listsearch/uk-universities', description: 'Study at prestigious universities with centuries of academic excellence. Access exceptional research facilities and vibrant communities.' },
  { name: 'USA',            src: '/img/usa.jpg',       alt: 'US landmarks',            link: 'https://www.findcourse.com/en/highereducation/listsearch/usa-universities', description: 'Experience world-class education, diverse campus life, and unparalleled career opportunities across the United States.' },
  { name: 'Australia',      src: '/img/australia.jpg', alt: 'Sydney Opera House',      link: 'https://www.studyaustralia.gov.au/en/plan-your-studies/list-of-australian-universities', description: 'Study in a vibrant, sunny environment with globally recognised universities and a highly sought-after lifestyle.' },
  { name: 'France',         src: '/img/france.jpg',    alt: 'Eiffel Tower, Paris',     link: 'https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-france', description: 'Immerse yourself in rich history, culture, and top-tier academic institutions in the heart of Europe.' },
  { name: 'Ireland',        src: '/img/ireland.jpg',   alt: 'Irish green landscapes',  link: 'https://www.hotcoursesabroad.com/study/ireland/international/schools-colleges-university/154/list.html', description: 'Discover a welcoming, English-speaking tech hub with renowned universities and breathtaking scenery.' },
  { name: 'Canada',         src: '/img/canada.jpg',    alt: 'Banff National Park',     link: 'https://www.findcourse.com/en/highereducation/list/ctry=CA,?s=2&cu=120&ci=&st=&pa=&ra=&deg=0&contType=&feesFrom=0&feesTo=0&auni=1&s_uni_majo=Canada***ctry%3DCA%2C&cat=&CityIds=&StateIds=&feesMax=0&feesMin=0&curid=&new_cntry=CA%2C&s_ctry_Custom=&StudyMethod=-1&GPA=-1&IELTSDegree=0&TimeApproval=-1&CONDITIONALADMISSION=-1', description: 'Benefit from high-quality education, extremely safe communities, and excellent post-study work opportunities.' },
  { name: 'Malta',          src: '/img/malta.jpg',     alt: 'Mediterranean Malta',     link: 'https://www.topuniversities.com/universities/malta?country=[MT]', description: 'Enjoy a beautiful Mediterranean lifestyle while studying in an affordable, English-speaking academic environment.' },
  { name: 'Hungary',        src: '/img/hungary.png',   alt: 'Budapest Parliament',     link: 'https://studyinhungary.hu/study-in-hungary/menu/universities.html', description: 'Experience high-quality, affordable medical and technical education in the beautiful centre of Europe.' },
  { name: 'Cyprus',         src: '/img/cyprus.png',    alt: 'Cyprus',        link: 'https://www.topuniversities.com/universities/cyprus?country=[CY]', description: 'Study at the crossroads of Europe, Asia, and Africa with sunny weather and a rich cultural heritage.' },
  { name: 'UAE',            src: '/img/uae.jpeg',      alt: 'Dubai',           link: 'https://www.findcourse.com/en/highereducation/list/ctry=AE,?s=2&cu=120&ci=&st=&pa=&ra=&deg=0&contType=&feesFrom=0&feesTo=0&auni=1&s_uni_majo=UAE***ctry%3DAE%2C&cat=&CityIds=&StateIds=&feesMax=0&feesMin=0&curid=&new_cntry=AE%2C&s_ctry_Custom=&StudyMethod=-1&GPA=-1&IELTSDegree=0&TimeApproval=-1&CONDITIONALADMISSION=-1', description: 'Gain a global perspective in a rapidly growing innovation hub with state-of-the-art facilities and zero tax.' },
  { name: 'Egypt',          src: '/img/egypt.jpeg',    alt: 'Egypt',       link: 'https://www.educations.com/countries/egypt/institutions', description: 'Explore ancient history while receiving quality education in the cultural heart of the Arab world.' },
]

const baseLength = countries.length
const displayCountries = [...countries, ...countries, ...countries]

const viewportRef = ref(null)
const cardEls = ref([])

// State
const activeIndex = ref(baseLength)
const viewportWidth = ref(0)
const cardWidth = ref(0)
const isDragging = ref(false)
const dragOffset = ref(0)
const currentTransition = ref('transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)')

let autoplayTimer = null
let touchStartX = 0

// Calculate Track Style Dynamically
const trackStyle = computed(() => {
  if (!viewportWidth.value || !cardWidth.value) return {}
  
  // Center the active card in the viewport
  const centerOffset = (viewportWidth.value / 2) - (cardWidth.value / 2)
  const indexOffset = -(activeIndex.value * cardWidth.value)
  const totalTranslateX = centerOffset + indexOffset + dragOffset.value

  return {
    transform: `translate3d(${totalTranslateX}px, 0, 0)`,
    transition: isDragging.value ? 'none' : currentTransition.value
  }
})

// Calculate Card Scales
function cardStyle(i) {
  // During a drag, we calculate scale smoothly based on drag distance
  const progress = isDragging.value ? (dragOffset.value / cardWidth.value) : 0
  const effectiveIndex = activeIndex.value - progress
  const dist = Math.abs(i - effectiveIndex)

  let scale = 0.75
  let opacity = 0.45

  if (dist <= 1) {
    scale = 1 - (dist * 0.15) // Interpolate between 1 and 0.85
    opacity = 1 - (dist * 0.25) // Interpolate between 1 and 0.75
  } else if (dist <= 2) {
    scale = 0.85 - ((dist - 1) * 0.1) // Interpolate between 0.85 and 0.75
    opacity = 0.75 - ((dist - 1) * 0.3) // Interpolate between 0.75 and 0.45
  }

  return {
    transform: `scale(${scale})`,
    opacity: opacity,
    transition: isDragging.value ? 'none' : 'transform 0.5s cubic-bezier(0.25,1,0.5,1), opacity 0.5s ease'
  }
}

function updateMeasurements() {
  if (viewportRef.value && cardEls.value[0]) {
    viewportWidth.value = viewportRef.value.offsetWidth
    cardWidth.value = cardEls.value[0].offsetWidth // Includes padding/gap
  }
}

function goToCard(index) {
  if (isDragging.value) return
  activeIndex.value = index
  handleInfiniteLoop()
}

function nextCard() { goToCard(activeIndex.value + 1) }
function prevCard() { goToCard(activeIndex.value - 1) }

// Infinite Loop Teleport Logic
function handleInfiniteLoop() {
  setTimeout(() => {
    let targetIndex = activeIndex.value
    let needsReset = false

    if (activeIndex.value <= 2) {
      targetIndex = activeIndex.value + baseLength
      needsReset = true
    } else if (activeIndex.value >= baseLength * 2 - 2) {
      targetIndex = activeIndex.value - baseLength
      needsReset = true
    }

    if (needsReset) {
      currentTransition.value = 'none' // Turn off transition
      activeIndex.value = targetIndex
      
      // Double requestAnimationFrame ensures the 'none' transition is painted before turning it back on
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          currentTransition.value = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
        })
      })
    }
  }, 500) // Match the 0.5s CSS transition duration
}

// Touch Drag Methods
function onTouchStart(e) {
  isDragging.value = true
  pauseAutoplay()
  touchStartX = e.touches[0].clientX
}

function onTouchMove(e) {
  if (!isDragging.value) return
  const currentX = e.touches[0].clientX
  dragOffset.value = currentX - touchStartX
}

function onTouchEnd() {
  if (!isDragging.value) return
  isDragging.value = false
  
  // If dragged more than 20% of a card's width, snap to the next/prev card
  const threshold = cardWidth.value * 0.2
  
  if (dragOffset.value > threshold) {
    activeIndex.value-- // Swiped Right -> Prev
  } else if (dragOffset.value < -threshold) {
    activeIndex.value++ // Swiped Left -> Next
  }
  
  dragOffset.value = 0
  handleInfiniteLoop()
  resumeAutoplay()
}

// Autoplay
let isPaused = false
function startAutoplay() {
  autoplayTimer = setInterval(() => {
    if (!isPaused && !isDragging.value) nextCard()
  }, 3800)
}

function pauseAutoplay()  { isPaused = true }
function resumeAutoplay() { isPaused = false }

onMounted(() => {
  nextTick(() => {
    updateMeasurements()
    startAutoplay()
  })
  window.addEventListener('resize', updateMeasurements)
})

onUnmounted(() => {
  clearInterval(autoplayTimer)
  window.removeEventListener('resize', updateMeasurements)
})
</script>