<template>
  <section class="bg-surface py-20 px-4 sm:px-8 lg:px-24">
    <!-- Section Header -->
    <div class="mb-14 max-w-2xl">
      <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base font-semibold text-xs uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
        Our Services
      </span>
      <h2 class="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-base leading-tight mb-4">
        With You at Every <span class="text-secondary">Step</span> of the Journey
      </h2>
      <p class="text-gray-500 text-lg leading-relaxed">
        Discover how our end-to-end support turns your dream of studying internationally into reality.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(service, index) in services"
        :key="index"
        :ref="el => cardRefs[index] = el"
        class="group relative rounded-xl p-7 overflow-hidden opacity-0 translate-y-8 transition-shadow duration-300"
        :class="[
          { 'animate-in': visibleCards.has(index) },
          isHighlightCard(index)
            ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
            : 'glass-card'
        ]"
      >
        <!-- Decorative background circles -->
        <div class="absolute bottom-0 right-0 pointer-events-none translate-x-8 translate-y-8">
          <svg viewBox="0 0 100 100" class="w-36 h-36">
            <circle cx="100" cy="100" r="80" :fill="isHighlightCard(index) ? 'white' : '#001915'" :opacity="isHighlightCard(index) ? '0.08' : '0.04'" />
            <circle cx="100" cy="100" r="55" :fill="isHighlightCard(index) ? 'white' : '#001915'" :opacity="isHighlightCard(index) ? '0.06' : '0.03'" />
            <circle cx="100" cy="100" r="30" :fill="isHighlightCard(index) ? 'white' : '#001915'" :opacity="isHighlightCard(index) ? '0.1' : '0.05'" />
          </svg>
        </div>

        <div class="relative z-10 flex flex-col h-full">
          <!-- Icon box -->
          <div
            class="w-12 h-12 rounded-lg flex items-center justify-center mb-5 shrink-0"
            :class="isHighlightCard(index) ? 'bg-white/20' : 'bg-white border border-gray-200 shadow-sm'"
          >
            <component :is="service.icon" class="w-5 h-5" :class="isHighlightCard(index) ? 'text-white' : 'text-base'" />
          </div>

          <!-- Title -->
          <h3
            class="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-3 leading-snug"
            :class="isHighlightCard(index) ? 'text-white' : 'text-base'"
          >
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p
            class="text-sm leading-relaxed mb-6 flex-grow"
            :class="isHighlightCard(index) ? 'text-white/80' : 'text-gray-500'"
          >
            {{ service.description }}
          </p>

          <!-- Link -->
          <NuxtLink
          v-if="service.to"
            :to="service.to"
            class="inline-flex items-center gap-1 text-sm font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-200"
            :class="isHighlightCard(index) ? 'text-white hover:text-white/70' : 'text-secondary hover:text-secondary/70'"
          >
            {{ service.cta }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, h } from 'vue'

// Inline SVG icon components
const IconForum = { render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' })
]) }

const IconSchool = { render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' })
]) }

const IconDoc = { render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }),
  h('polyline', { points: '14,2 14,8 20,8' }),
  h('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
  h('line', { x1: '16', y1: '17', x2: '8', y2: '17' }),
  h('polyline', { points: '10,9 9,9 8,9' })
]) }

const IconGlobe = { render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
  h('path', { d: 'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z' })
]) }

const IconBook = { render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M4 19.5A2.5 2.5 0 016.5 17H20' }),
  h('path', { d: 'M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z' })
]) }

const IconFlight = { render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z' })
]) }

const services = [
  { title: 'Free Counselling',            description: 'Personalized, no-cost consultations to help you choose the best study destination for your goals.',  cta: 'Book a session',   icon: IconForum, to: '/contact'  },
  { title: 'University & Program Selection', description: 'We curate programs that match your goals, budget, and academic profile across our partner institutions.',  cta: 'Explore options', icon: IconSchool  },
  { title: 'Application Support',         description: 'Full support from start to submission — SOPs, LORs, resume building, and deadline management.', cta: 'Get started',     icon: IconDoc, to: '/contact'   },
  { title: 'Visa Assistance',             description: 'We guide you through forms, documentation, and interview prep for a smooth visa approval.',      cta: 'Visa details',    icon: IconGlobe  },
  { title: 'Test Prep & Coaching',        description: 'Targeted coaching for IELTS, TOEFL, GRE, GMAT, and SAT to meet your admission requirements.',   cta: 'View courses',    icon: IconBook   },
  { title: 'Travel & Accommodation',      description: 'Flight bookings, pre-departure briefings, and safe housing near your campus — all arranged.',    cta: 'Travel support',  icon: IconFlight },
]

const isHighlightCard = (index) => index === 0 || index === services.length - 1

const cardRefs = ref([])
const visibleCards = ref(new Set())
let observer = null

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    const idx = cardRefs.value.indexOf(entry.target)
    if (entry.isIntersecting && idx !== -1) {
      setTimeout(() => visibleCards.value.add(idx), idx * 80)
    }
  })
}

onMounted(() => {
  const init = () => {
    observer = new IntersectionObserver(handleIntersection, { rootMargin: '-5% 0px', threshold: 0.1 })
    cardRefs.value.forEach(el => el && observer.observe(el))
  }
  window.requestIdleCallback ? window.requestIdleCallback(init) : setTimeout(init, 0)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.glass-card {
  background: linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.7);
  box-shadow: 0 8px 32px -8px rgba(0, 25, 21, 0.08);
}
.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px -8px rgba(0, 25, 21, 0.12);
  border-color: rgba(253, 101, 47, 0.25);
}

.animate-in {
  animation: slideInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0);    }
}
@media (prefers-reduced-motion: reduce) {
  .animate-in { animation: none; opacity: 1; transform: none; }
}
</style>