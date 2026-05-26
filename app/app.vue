<script setup>
import { ref, onMounted } from 'vue'

// Extract proxy and consent controllers from Nuxt Scripts GTM module
const { proxy, consent } = useScriptGoogleTagManager()

const showBanner = ref(false)

onMounted(() => {
  // Check localStorage to ensure we don't flash the banner if they already answered
  const userChoice = localStorage.getItem('cookie_consent_choice')
  if (!userChoice) {
    showBanner.value = true
  }
})

// Automatically tracks SPA navigation transitions globally
useScriptEventPage(({ title, path }) => {
  proxy.dataLayer.push({
    event: 'pageview',
    page_title: title,
    page_path: path
  })
})

function handleAcceptAll() {
  // Grant all analytics and ads storage parameters required by GTM v2
  consent.update({
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  })
  localStorage.setItem('cookie_consent_choice', 'granted')
  showBanner.value = false
}

function handleDeclineAll() {
  // Keep everything locked down, tracking will run via fallback ping structures
  consent.update({
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  })
  localStorage.setItem('cookie_consent_choice', 'denied')
  showBanner.value = false
}
</script>

<template>
  <NuxtLoadingIndicator size="4" color="#5d6b56"/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Cookie Consent Banner matching Hero section design system -->
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform translate-y-10 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-10 opacity-0"
  >
    <div 
      v-if="showBanner" 
      class="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md bg-white p-6 shadow-2xl rounded-2xl border border-gray-100 z-50 overflow-hidden"
    >
      <!-- Background Decorative Dot Matrix mirroring the hero asset -->
      <svg
        class="absolute -top-4 -left-4 w-24 h-24 opacity-20 z-0 pointer-events-none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="3" fill="gray" />
        <circle cx="30" cy="10" r="3" fill="orange" />
        <circle cx="50" cy="10" r="3" fill="gray" />
        <circle cx="10" cy="30" r="3" fill="orange" />
        <circle cx="30" cy="30" r="3" fill="gray" />
        <circle cx="50" cy="30" r="3" fill="orange" />
        <circle cx="10" cy="50" r="3" fill="gray" />
        <circle cx="30" cy="50" r="3" fill="orange" />
        <circle cx="50" cy="50" r="3" fill="gray" />
      </svg>

      <div class="relative z-10 flex flex-col space-y-4">
        <!-- Eyebrow status chip -->
        <div class="flex">
          <span class="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            Cookie Settings
          </span>
        </div>

        <!-- Messaging Context -->
        <div>
          <h4 class=" font-bold text-black tracking-tight">
            Help us optimize your journey
          </h4>
          <p class="text-gray-600 text-sm mt-1 leading-relaxed">
            We use cookie records to analyze platform performance and tailor your experience as we assist with your study abroad admissions.
          </p>
        </div>

        <!-- Action Layout matching standard design triggers -->
        <div class="flex items-center justify-end gap-3 pt-1">
          <button 
            @click="handleDeclineAll" 
            class="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Essential Only
          </button>
          
          <UButton
            size="md"
            @click="handleAcceptAll"
            class="bg-secondary text-white justify-center font-bold px-5 py-2.5 hover:bg-secondary/80 rounded-lg shadow-md transition-all duration-200"
          >
            Accept All
          </UButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
body {
  background: rgb(255, 252, 252);
}
</style>