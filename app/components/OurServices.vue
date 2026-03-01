<template>
  <section class="bg-gray-50 py-20 px-4 sm:px-8 lg:px-24">
    <div class="mb-12 text-left max-w-3xl">
      <h2 class="text-3xl sm:text-4xl font-bold text-black mb-4">
        With You at Every <span class="text-secondary">Step</span> of the Journey
      </h2>
      <p class="text-gray-600 text-lg sm:text-xl">
        Discover how our end-to-end support turns your dream of studying internationally into reality.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <UCard
        variant="solid"
        v-for="(service, index) in services"
        :key="index"
        :ref="el => cardRefs[index] = el"
        class="hover:shadow-lg transition-all duration-300 relative overflow-hidden opacity-0 translate-y-8 border-transparent"
        :class="[
          { 'animate-in': visibleCards.has(index) },
          isHighlightCard(index) ? 'bg-secondary text-white' : 'bg-alt text-black'
        ]"
        :ui="{
          base: ' rounded-xl h-full flex flex-col justify-between',
          body: { base: 'p-6 h-full flex flex-col' },
          footer: { base: 'px-6 pb-6 pt-2' }
        }"
      >
        <div class="absolute bottom-0 right-0 pointer-events-none transform translate-x-8 translate-y-8">
          <svg viewBox="0 0 100 100" class="w-32 h-32 sm:w-40 sm:h-40" :opacity="isHighlightCard(index) ? '0.1' : '0.05'">
            <circle cx="100" cy="100" r="80" :fill="isHighlightCard(index) ? 'white' : 'black'" />
            <circle cx="100" cy="100" r="60" :fill="isHighlightCard(index) ? 'white' : 'black'" opacity="0.5" />
            <circle cx="100" cy="100" r="40" :fill="isHighlightCard(index) ? 'white' : 'black'" opacity="0.8" />
          </svg>
        </div>

        <template #header>
          <h3 
            class="text-xl font-semibold relative z-10"
            :class="isHighlightCard(index) ? 'text-white' : 'text-gray-900'"
          >
            {{ service.title }}
          </h3>
        </template>

        <p 
          class="relative z-10 mt-auto"
          :class="isHighlightCard(index) ? 'text-white/90' : 'text-gray-700'"
        >
          {{ service.description }}
        </p>
      </UCard>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = [
  {
    title: 'Free Counselling',
    description: 'We guide you with personalized, no-cost consultations to help you choose the best study destination.',
  },
  {
    title: 'University & Program Selection',
    description: 'We help you select programs that match your goals, budget, and academic profile.',
  },
  {
    title: 'Application Support',
    description: 'From start to submission, we support your university and scholarship applications.',
  },
  {
    title: 'Visa Assistance',
    description: 'We guide you through visa forms, documents, and interview prep for a smoother approval.',
  },
  {
    title: 'Test Prep & Coaching',
    description: 'We offer classes for IELTS, TOEFL, and more to help you meet admission requirements.',
  },
  {
    title: 'Travel & Accommodation',
    description: 'We assist with travel plans and finding housing that fits your needs abroad.',
  },
]

// Helper function to check if the card is the first or last one
const isHighlightCard = (index) => {
  return index === 0 || index === services.length - 1
}

// Intersection Observer setup
const cardRefs = ref([])
const visibleCards = ref(new Set())
let observer = null

const observerOptions = {
  root: null,
  rootMargin: '-10% 0px -10% 0px', 
  threshold: 0.1 
}

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    const cardIndex = cardRefs.value.findIndex(ref => ref?.$el === entry.target)
    
    if (entry.isIntersecting && cardIndex !== -1) {
      setTimeout(() => {
        visibleCards.value.add(cardIndex)
      }, cardIndex * 100) 
    }
  })
}

onMounted(() => {
  const initObserver = () => {
    observer = new IntersectionObserver(handleIntersection, observerOptions)
    
    cardRefs.value.forEach((cardRef) => {
      if (cardRef?.$el) {
        observer.observe(cardRef.$el)
      }
    })
  }

  if (window.requestIdleCallback) {
    window.requestIdleCallback(initObserver)
  } else {
    setTimeout(initObserver, 0)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
.animate-in {
  animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Prefers reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-in {
    animation: fadeIn 0.3s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>