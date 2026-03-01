<template>
  <div class="max-w-screen overflow-x-hidden">
    <HeroSection />
    <OurServices />
    <Locations />
    <ApplicationForm />
    <Blog />
    <Testimonials />
    <Faq />
    <Chat />
  </div>
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
  canonical: 'https://bs-education.com/',
})

useHead({

  link: [
    { rel: 'preload', as: 'image', href: '/img/graduant.webp' },
  ],
})

definePageMeta({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>