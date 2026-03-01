<template>
  <section class="py-8 md:py-16 bg-[#f4f5f3] font-sans">
    <div class="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
      <div class="text-center mb-12">
        <h2 class="text-[26px] md:text-4xl font-bold leading-tight text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get answers to common questions about studying abroad and our services
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div class="lg:col-span-2 bg-white rounded-xl p-5 md:p-8 shadow-sm">
          <div class="flex flex-col gap-2">
            <div
              v-for="(faq, index) in mainFaqs"
              :key="index"
              :class="[
                'faq-item rounded-lg overflow-hidden border transition-all duration-200',
                activeIndex === index 
                  ? 'active border-primary shadow-[0_4px_12px_rgba(133,148,132,0.15)]' 
                  : 'border-gray-200'
              ]"
            >
              <button
                :class="[
                  'w-full px-5 py-4 md:px-6 md:py-5 text-left cursor-pointer flex justify-between items-center text-[15px] md:text-base font-semibold transition-colors duration-200',
                  activeIndex === index ? 'bg-[#f8f9f8] text-primary' : 'bg-white text-gray-800 hover:bg-[#f8f9f8] hover:text-primary'
                ]"
                @click="toggleFaq(index)"
                :aria-expanded="activeIndex === index"
              >
                <span class="flex-1 pr-4">{{ faq.question }}</span>
                <div class="text-primary flex-shrink-0">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2"
                    :class="['transition-transform duration-300', { 'rotate-180': activeIndex === index }]"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
              
              <div 
                v-show="activeIndex === index"
                class="bg-white overflow-hidden"
                :ref="el => answerRefs[index] = el"
              >
                <div class="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p v-html="faq.answer" class="mb-4 last:mb-0"></p>
                  <div v-if="faq.cta" class="mt-4">
                    <NuxtLink 
                      :to="faq.cta.link" 
                      class="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors"
                    >
                      {{ faq.cta.text }}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Still Have Questions?</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-5">
              Can't find what you're looking for? Our counsellors are here to help with personalized guidance.
            </p>
            <div class="flex flex-col gap-3">
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors w-full"
              >
                Book Free Consultation
              </NuxtLink>
              <a 
                href="tel:+2348065442707" 
                class="inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white rounded-lg text-sm font-medium transition-colors w-full"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>

          <div class="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-200">
            <h4 class="text-base font-semibold text-gray-800 mb-4">Popular Resources</h4>
            <ul class="flex flex-col m-0 p-0 list-none">
              <li>
                <NuxtLink to="/resources/templates" class="flex items-center gap-2 text-gray-600 text-sm py-2.5 border-b border-gray-100 hover:text-primary transition-colors">
                  <svg class="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                  </svg>
                  2025 Student Guide
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/events" class="flex items-center gap-2 text-gray-600 text-sm py-2.5 border-b border-gray-100 hover:text-primary transition-colors">
                  <svg class="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Exciting Events
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/resources/country-guides" class="flex items-center gap-2 text-gray-600 text-sm py-2.5 hover:text-primary transition-colors">
                  <svg class="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  Country Guides
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, nextTick, computed } from 'vue'

const activeIndex = ref(null)
const answerRefs = ref([])

// FAQ data focusing on common student worries
const mainFaqs = ref([
  {
    question: "Do I need IELTS or TOEFL to study abroad?",
    answer: "Not always! While most universities require English proficiency tests, some accept alternatives like Duolingo, PTE, or even waive the requirement if you studied in English. We help identify universities that match your language qualifications and can guide you through test preparation if needed.",
    cta: null
  },
  {
    question: "What's the easiest country to get a visa for?",
    answer: "Countries like <strong>Canada, Ireland, and Australia</strong> generally have more straightforward visa processes for Nigerian students. However, the 'easiest' depends on your profile, course choice, and financial situation. Our counsellors assess your background to recommend the best options with highest success rates.",
    cta: {
      text: "Get Country Recommendations",
      link: "/contact"
    }
  },
  {
    question: "How much do your services cost?",
    answer: "<strong>Service Fee is based on the country</strong>. UK N500K, Northern Cyprus and Egypt N350K, other countries $500 - $1000 dollars. Some require an application fee.",
    cta: null
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Yes! Most study destinations allow part-time work during studies. <strong>Canada and Australia</strong> offer 20 hours/week during studies and unlimited hours during breaks. The <strong>UK</strong> allows 20 hours/week, while the <strong>US</strong> has on-campus work opportunities. We provide guidance on work regulations for each country.",
    cta: null
  },
  {
    question: "What if I don't have enough money for tuition?",
    answer: "Don't let finances stop your dreams! We help identify <strong>scholarships, grants, and affordable universities</strong>. Many students combine partial scholarships with education loans or family support. We also recommend countries with lower tuition fees and living costs that fit your budget.",
    cta: null
  },
  {
    question: "How long does the entire process take?",
    answer: "Typically <strong>6-12 months</strong> from application to travel, depending on the intake and country. We recommend starting at least 8-10 months before your intended study date. Our structured timeline ensures you meet all deadlines without rushing through important steps.",
    cta: null
  },
  {
    question: "What happens if my visa gets rejected?",
    answer: "While rare with our guidance (we have a 95%+ success rate), we provide <strong>full support for reapplication or alternative options</strong>. This includes reviewing rejection reasons, strengthening your profile, or exploring other suitable countries. Your success is our commitment.",
    cta: null
  },
  {
    question: "Do you help with accommodation and travel arrangements?",
    answer: "Absolutely! Our support extends beyond admissions. We assist with <strong>accommodation booking, airport pickup, SIM cards, bank account opening</strong>, and settling-in support. Many of our students arrive to a home away from home, not a foreign country.",
    cta: {
      text: "See Full Support Services",
      link: "/services"
    }
  }
])

const toggleFaq = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}

watch(activeIndex, () => {
  if (activeIndex.value !== null) {
    nextTick(() => {
      const activeElement = document.querySelector('.faq-item.active')
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' })
      }
    })
  }
})

// Generate FAQ Schema.org JSON-LD
const faqSchema = computed(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainFaqs.value.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        // Strip HTML tags for the schema text to keep it clean for search engines
        text: faq.answer.replace(/<[^>]*>?/gm, '') 
      }
    }))
  }
})

// Inject the schema into the document head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema.value)
    }
  ]
})
</script>