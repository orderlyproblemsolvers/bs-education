<template>
  <section
    class="relative w-full bg-primary overflow-hidden px-4 sm:px-2 md:px-6 lg:px-12 pt-12 pb-8 md:pt-16 md:pb-8 rounded-b-4xl min-h-[100dvh] md:min-h-[70dvh] flex items-center"
  >
    <svg
      class="absolute top-0 left-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 opacity-30 z-0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="2" fill="gray" />
      <circle cx="30" cy="10" r="2" fill="orange" />
      <circle cx="50" cy="10" r="2" fill="gray" />
      <circle cx="70" cy="10" r="2" fill="orange" />
      <circle cx="90" cy="10" r="2" fill="gray" />
      <circle cx="10" cy="30" r="2" fill="orange" />
      <circle cx="30" cy="30" r="2" fill="gray" />
      <circle cx="50" cy="30" r="2" fill="orange" />
      <circle cx="70" cy="30" r="2" fill="gray" />
      <circle cx="90" cy="30" r="2" fill="orange" />
      <circle cx="10" cy="50" r="2" fill="gray" />
      <circle cx="30" cy="50" r="2" fill="orange" />
      <circle cx="50" cy="50" r="2" fill="gray" />
      <circle cx="70" cy="50" r="2" fill="orange" />
      <circle cx="90" cy="50" r="2" fill="gray" />
    </svg>

    <div
      class="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12"
    >
      <div
        class="text-white w-full md:w-[55%] flex flex-col items-center md:items-start space-y-6 text-center md:text-left mt-8 md:mt-0"
      >
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Turn Your Study Abroad Dream Into Reality
        </h1>
        <p
          class="text-base sm:text-lg text-gray-100 max-w-lg"
        >
          Get <strong>free expert counselling</strong>, admission
          processing, visa support, and test prep for students looking to
          study in the UK, USA, Hungary, Australia, and more.
        </p>
        <div
          class="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4"
        >
          <UButton
            size="lg"
            class="bg-secondary text-white justify-center font-bold px-6 py-3 hover:bg-secondary/70 rounded-lg shadow-lg"
          >
            <NuxtLink to="/contact" class="text-white">Book Free Consultation</NuxtLink>
          </UButton>
          <UButton
            icon="i-lucide-send"
            size="lg"
            @click="openWhatsApp"
            class="px-6 py-3 bg-alt justify-center cursor-pointer hover:bg-alt/80 text-black font-semibold rounded-lg shadow-lg"
          >
            Chat on WhatsApp
          </UButton>
        </div>
      </div>

      <div
        class="w-full md:w-[45%] flex justify-center items-center"
      >
        <img
          src="/img/graduant.webp"
          width="1200"
          height="800"
          alt="Graduated student abroad"
          class="w-[90%] sm:w-[80%] md:w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover rounded-tl-[80px] sm:rounded-tl-[100px] md:rounded-tl-[140px] rounded-br-[80px] sm:rounded-br-[100px] md:rounded-br-[140px]"
        />
      </div>
    </div>
  </section>
  <Partners/>
</template>

<script setup>
useSeoMeta({
  title: 'B&S Educational Services - Your Path to Studying Abroad',
  description: 'B&S Educational Services offers free expert counselling, admission processing, visa support, and test prep for students looking to study in the UK, USA, Hungary, Australia, and more.',
  ogTitle: 'B&S Educational Services - Your Path to Studying Abroad',
  ogDescription: 'B&S Educational Services provides comprehensive support for students aspiring to study abroad. From free consultations to visa assistance, we are here to help you succeed.',
  ogImage: '/img/main-logo.jpg',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})
useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/img/graduant.webp' }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
})
import { NuxtLink } from '#components';

function openWhatsApp() {
    const phoneNumber = '2348065442707'
    const message = encodeURIComponent('Hello! I\'m interested in B&S Educational Services. Can you help me with study abroad opportunities?')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
</style>