<template>
  <section
    class="relative w-full bg-gray-50 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 sm:pt-4"
    style="height: 90dvh"
  >
    <!-- Decorative Pattern Top Left -->
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
      class="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10 h-full py-6 md:py-0"
    >
      <!-- Left: Text and CTA -->
      <div
        class="text-black w-full md:w-[55%] space-y-4 md:space-y-6 text-center md:text-left"
      >
        <h1
          class="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Turn Your Study Abroad Dream Into Reality
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg"
        >
          B&S Educational Services offers <strong>free expert counselling</strong>, admission
          processing, visa support, and test prep for students looking to
          study in the UK, USA, Hungary, Australia, and more.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4"
        >
          <UButton
            color="white"
            size="lg"
            class="bg-[#5d6b56] text-white font-bold px-6 py-3 hover:bg-gray-100 rounded-lg shadow-lg"
          >
          <NuxtLink to="/contact" class="text-white">Book Free Consultation</NuxtLink>
          </UButton>
          <UButton
            color="white"
            variant="ghost"
            size="lg"
            @click="openWhatsApp"
            class="px-6 py-3 bg-[#eb6534] hover:bg-[#b66654] text-white font-semibold rounded-lg shadow-lg"
          >
            Chat on WhatsApp
          </UButton>
        </div>
      </div>

      <!-- Right: Image -->
      <div
        class="w-full md:w-[45%] flex justify-center items-center px-2 sm:px-0"
      >
        <img
          src="/img/graduant.webp"
          width="1200"
          height="800"
          alt="Graduated student abroad"
          class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-tl-[80px] sm:rounded-tl-[100px] md:rounded-tl-[140px] rounded-br-[80px] sm:rounded-br-[100px] md:rounded-br-[140px] rounded-tr-none rounded-bl-none"
        />
      </div>
    </div>
  </section>
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
