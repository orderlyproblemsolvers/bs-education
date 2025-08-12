<template>
  <section class="bg-gray-50 py-20 px-4 sm:px-8 lg:px-24">
    <h2 class="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
      What We Offer
    </h2>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <UCard
        variant="solid"
        v-for="(service, index) in services"
        :key="index"
        :ref="el => cardRefs[index] = el"
        class="bg-[#ACBEA3]/10 hover:shadow-lg transition-all duration-300 border border-[#f5f4f4] relative overflow-hidden opacity-0 translate-y-8"
        :class="{ 'animate-in': visibleCards.has(index) }"
        :ui="{
          base: ' rounded-xl h-full flex flex-col justify-between',
          body: { base: 'p-6' },
          footer: { base: 'px-6 pb-6 pt-2' }
        }"
      >
        <!-- Circular Background Pattern -->
        <div class="absolute bottom-0 right-0 pointer-events-none opacity-20">
          <svg width="80" height="80" viewBox="0 0 80 80" class="hidden sm:block">
            <circle cx="60" cy="60" r="6" :fill="index % 2 === 0 ? '#6B7280' : '#EA580C'" />
            <circle cx="45" cy="65" r="4" :fill="index % 2 === 0 ? '#EA580C' : '#6B7280'" />
            <circle cx="70" cy="45" r="4" :fill="index % 2 === 0 ? '#EA580C' : '#6B7280'" />
            <circle cx="55" cy="50" r="3" :fill="index % 2 === 0 ? '#6B7280' : '#EA580C'" />
            <circle cx="65" cy="70" r="3" :fill="index % 2 === 0 ? '#6B7280' : '#EA580C'" />
            <circle cx="75" cy="55" r="2" :fill="index % 2 === 0 ? '#EA580C' : '#6B7280'" />
            <circle cx="50" cy="75" r="2" :fill="index % 2 === 0 ? '#EA580C' : '#6B7280'" />
          </svg>
          <!-- Mobile version with smaller pattern -->
          <svg width="60" height="60" viewBox="0 0 60 60" class="block sm:hidden">
            <circle cx="45" cy="45" r="4" :fill="index % 2 === 0 ? '#6B7280' : '#EA580C'" />
            <circle cx="35" cy="50" r="3" :fill="index % 2 === 0 ? '#EA580C' : '#6B7280'" />
            <circle cx="50" cy="35" r="3" :fill="index % 2 === 0 ? '#EA580C' : '#6B7280'" />
            <circle cx="40" cy="40" r="2" :fill="index % 2 === 0 ? '#6B7280' : '#EA580C'" />
            <circle cx="55" cy="50" r="2" :fill="index % 2 === 0 ? '#6B7280' : '#EA580C'" />
          </svg>
        </div>

        <template #header>
          <h3 class="text-xl font-semibold text-[#505050] relative z-10">
            {{ service.title }}
          </h3>
        </template>

        <p class="text-gray-600 relative z-10">
          {{ service.description }}
        </p>

        <template #footer>
          <UButton
            color="primary"
            trailing-icon="i-lucide-arrow-right"
            variant="soft"
            class="mt-4 w-full relative z-10"
            :to="service.link"
          >
            {{ service.cta }}
          </UButton>
        </template>
      </UCard>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = [
  {
    title: 'Free Counselling',
    description:
      'We guide you with personalized, no-cost consultations to help you choose the best study destination.',
    cta: 'Book a Session',
    link: '/contact#counselling',
  },
  {
    title: 'University & Program Selection',
    description:
      'We help you select programs that match your goals, budget, and academic profile.',
    cta: 'Find a Program',
    link: '/services/program-selection',
  },
  {
    title: 'Application Support',
    description:
      'From start to submission, we support your university and scholarship applications.',
    cta: 'Start Application',
    link: '/contact#application',
  },
  {
    title: 'Visa Assistance',
    description:
      'We guide you through visa forms, documents, and interview prep for a smoother approval.',
    cta: 'Get Visa Help',
    link: '/services/visa-support',
  },
  {
    title: 'Test Prep & Coaching',
    description:
      'We offer classes for IELTS, TOEFL, and more to help you meet admission requirements.',
    cta: 'Join a Class',
    link: '/services/test-prep',
  },
  {
    title: 'Travel & Accommodation',
    description:
      'We assist with travel plans and finding housing that fits your needs abroad.',
    cta: 'Plan Travel',
    link: '/services/travel',
  },
]

// Intersection Observer setup
const cardRefs = ref([])
const visibleCards = ref(new Set())
let observer = null

const observerOptions = {
  root: null,
  rootMargin: '-10% 0px -10% 0px', // Trigger when 10% of element is visible
  threshold: 0.1 // Start animation when 10% of card is visible
}

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    const cardIndex = cardRefs.value.findIndex(ref => ref?.$el === entry.target)
    
    if (entry.isIntersecting && cardIndex !== -1) {
      // Add staggered delay based on card index
      setTimeout(() => {
        visibleCards.value.add(cardIndex)
      }, cardIndex * 100) // 100ms delay between each card
    }
  })
}

onMounted(() => {
  // Use requestIdleCallback for better performance if available
  const initObserver = () => {
    observer = new IntersectionObserver(handleIntersection, observerOptions)
    
    // Observe all card elements
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