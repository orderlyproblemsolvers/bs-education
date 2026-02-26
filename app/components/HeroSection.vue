<template>
  <section class="relative w-full bg-[#f8faf8] overflow-hidden min-h-screen flex items-center pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36">
    <svg
      class="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 opacity-20 z-0 transform -translate-x-1/4 -translate-y-1/4"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="2" fill="#ACBEA3" />
      <circle cx="30" cy="10" r="2" fill="#EB6534" />
      <circle cx="50" cy="10" r="2" fill="#ACBEA3" />
      <circle cx="70" cy="10" r="2" fill="#EB6534" />
      <circle cx="90" cy="10" r="2" fill="#ACBEA3" />
      <circle cx="10" cy="30" r="2" fill="#EB6534" />
      <circle cx="30" cy="30" r="2" fill="#ACBEA3" />
      <circle cx="50" cy="30" r="2" fill="#EB6534" />
      <circle cx="70" cy="30" r="2" fill="#ACBEA3" />
      <circle cx="90" cy="30" r="2" fill="#EB6534" />
      <circle cx="10" cy="50" r="2" fill="#ACBEA3" />
      <circle cx="30" cy="50" r="2" fill="#EB6534" />
      <circle cx="50" cy="50" r="2" fill="#ACBEA3" />
      <circle cx="70" cy="50" r="2" fill="#EB6534" />
      <circle cx="90" cy="50" r="2" fill="#ACBEA3" />
    </svg>

    <div class="absolute right-0 bottom-0 w-1/3 h-2/3 bg-gradient-to-t from-[#ACBEA3]/10 to-transparent rounded-tl-full blur-3xl z-0 pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 w-full">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        <div class="w-full lg:w-1/2 flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left mt-8 lg:mt-0">
          <div class="space-y-4">
            <span class="inline-block px-4 py-1.5 rounded-full bg-[#EB6534]/10 text-[#EB6534] font-semibold text-sm tracking-wide">
              Your Journey Starts Here
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#333333] leading-[1.15] tracking-tight">
              Turn Your Study Abroad Dream Into <span class="text-[#859484] relative">
                Reality
                <svg class="absolute w-full h-3 -bottom-1 left-0 text-[#ACBEA3]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
                </svg>
              </span>
            </h1>
          </div>
          
          <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            B&S Educational Services offers <strong class="text-[#333333]">free expert counselling</strong>, admission processing, visa support, and test prep for students looking to study in the UK, USA, Hungary, Australia, and beyond.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <UButton
              to="/contact"
              size="xl"
              class="w-full sm:w-auto bg-[#859484] hover:bg-[#6b7a6a] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#859484]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Free Consultation
            </UButton>
            
            <UButton
              variant="outline"
              size="xl"
              @click="openWhatsApp"
              class="w-full sm:w-auto border-2 border-[#EB6534] text-[#EB6534] hover:bg-[#EB6534] hover:text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#EB6534]/20 transition-all duration-300 group flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.373-.043c.098-.115.427-.487.539-.653.11-.166.22-.138.385-.076s1.049.495 1.229.582c.18.086.299.13.342.203.043.073.043.423-.101.827z"/>
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.031 18.906c-1.604 0-3.146-.44-4.502-1.274l-5.004 1.314 1.343-4.879c-.918-1.393-1.402-3.033-1.402-4.718 0-4.852 3.968-8.814 8.826-8.814 4.857 0 8.81 3.962 8.81 8.814 0 4.853-3.953 8.814-8.81 8.814z"/>
              </svg>
              Chat on WhatsApp
            </UButton>
          </div>
        </div>

        <div class="w-full lg:w-1/2 flex justify-center items-center relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-[#859484]/20 to-[#EB6534]/20 rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[80px] sm:rounded-br-[120px] transform translate-x-4 translate-y-4 -z-10"></div>
          
          <img
            src="/img/graduant.webp"
            width="600"
            height="600"
            alt="Graduated student abroad celebrating"
            class="w-full max-w-md lg:max-w-xl h-auto aspect-[4/5] object-cover rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[80px] sm:rounded-br-[120px] shadow-2xl border-4 border-white"
          />
          
          <div class="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div class="w-12 h-12 bg-[#EB6534]/10 rounded-full flex items-center justify-center text-[#EB6534]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p class="text-sm font-bold text-gray-800">Global</p>
              <p class="text-xs text-gray-500 font-medium">Opportunities</p>
            </div>
          </div>
        </div>
        
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

function openWhatsApp() {
  const phoneNumber = '2348065442707'
  const message = encodeURIComponent('Hello! I\'m interested in B&S Educational Services. Can you help me with study abroad opportunities?')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}
</style>