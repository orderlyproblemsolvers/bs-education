<template>
  <div class="min-h-screen bg-white pb-20 overflow-hidden">
    <div class="relative overflow-hidden text-white bg-primary rounded-b-[60px] md:rounded-b-[100px] pb-24">
      <NuxtImg
        src="/img/countries.jpg"
        alt="Study abroad destinations"
        class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        loading="eager"
        preload
      />
      <div class="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95"></div>
      
      <div class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16 z-10 text-center">
        <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white mb-8 shadow-xl">
          Since 2007 • Your Global Education Partner
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Your Dreams Have <span class="text-secondary">No Borders</span>
        </h1>
        <p class="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Transform your future with world-class education. We've helped thousands of students turn their study abroad dreams into reality across 7+ countries.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-bold rounded-xl shadow-lg hover:bg-secondary/90 hover:-translate-y-1 transition-all duration-300">
            Start Your Journey →
          </button>
          <button class="w-full sm:w-auto px-8 py-4 border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300">
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 lg:px-12 -mt-20 relative z-20 mb-24">
      <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-100">
          <div class="space-y-1">
            <div class="text-4xl font-bold text-primary">17+</div>
            <div class="text-sm font-medium text-gray-500 uppercase tracking-wider">Years of Excellence</div>
          </div>
          <div class="space-y-1">
            <div class="text-4xl font-bold text-secondary">1000+</div>
            <div class="text-sm font-medium text-gray-500 uppercase tracking-wider">Dreams Realized</div>
          </div>
          <div class="space-y-1">
            <div class="text-4xl font-bold text-primary">7+</div>
            <div class="text-sm font-medium text-gray-500 uppercase tracking-wider">Countries</div>
          </div>
          <div class="space-y-1">
            <div class="text-4xl font-bold text-secondary">99%</div>
            <div class="text-sm font-medium text-gray-500 uppercase tracking-wider">Success Rate</div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-6 md:px-12 mb-32">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
          Every Great Journey Begins With 
          <span class="text-secondary">One Step</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          From your first dream to graduation day, we're with you every step of the way. Here is how we turn aspirations into achievements.
        </p>
      </div>

      <div class="relative">
        <div class="absolute left-6 md:left-[2.25rem] top-2 bottom-0 w-px bg-gradient-to-b from-secondary via-gray-200 to-transparent"></div>

        <div class="space-y-12">
          <div 
            v-for="(service, index) in servicesWithStory" 
            :key="index" 
            class="relative pl-16 md:pl-24 group"
          >
            <div class="absolute left-4 md:left-[1.65rem] top-1.5 w-5 h-5 bg-white border-4 border-secondary rounded-full group-hover:scale-125 transition-transform duration-300 z-10 shadow-sm"></div>
            
            <div>
              <div class="flex items-center gap-3 mb-1">
                <UIcon :name="service.icon" class="w-6 h-6 text-primary hidden sm:block" />
                <h3 class="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {{ service.title }}
                </h3>
              </div>
              <p class="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                Step 0{{ index + 1 }} • {{ service.subtitle }}
              </p>
              <p class="text-gray-600 leading-relaxed text-lg">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Locations/>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Study Abroad Services | B&S Educational Services',
  description: 'Transform your future with world-class education. Professional study abroad services including admissions, visa assistance, and scholarship guidance.',
})

const servicesWithStory = [
  {
    title: "Educational Counselling",
    subtitle: "Your Story Begins Here",
    description: "Every great journey starts with understanding your unique potential. Our expert counsellors help you discover the perfect academic path.",
    icon: "i-lucide-graduation-cap",
  },
  {
    title: "Course Selection",
    subtitle: "Find Your Perfect Match",
    description: "With thousands of programs worldwide, finding the right fit can be overwhelming. We match you with universities that complement your aspirations.",
    icon: "i-lucide-building-2",
  },
  {
    title: "Admissions Support",
    subtitle: "Stand Out",
    description: "Craft compelling applications that showcase your unique story. From essays to portfolios, we help you present your best self.",
    icon: "i-lucide-file-text",
  },
  {
    title: "Visa Assistance",
    subtitle: "Navigate With Confidence",
    description: "Visa processes can be complex and stressful. Our experienced team guides you through every requirement.",
    icon: "i-lucide-passport",
  },
  {
    title: "Scholarship Support",
    subtitle: "Unlock Financial Freedom",
    description: "Don't let finances limit your dreams. We help you discover and apply for scholarships and funding opportunities.",
    icon: "i-lucide-banknote",
  },
  {
    title: "Study Loans",
    subtitle: "Invest In Your Future",
    description: "Explore flexible financing options that make your education investment manageable. We connect you with trusted lenders.",
    icon: "i-lucide-landmark",
  },
  {
    title: "Pre-departure",
    subtitle: "Prepare For Success",
    description: "Get ready for your new adventure with comprehensive pre-departure briefings, cultural orientation, and practical guidance.",
    icon: "i-lucide-plane-takeoff",
  },
  {
    title: "Post-arrival Support",
    subtitle: "You're Never Alone",
    description: "Your support doesn't end at departure. We provide ongoing assistance to help you settle in and thrive in your new environment.",
    icon: "i-lucide-heart-handshake",
  },
  {
    title: "Accommodation",
    subtitle: "Home Away From Home",
    description: "Find safe, comfortable housing that fits your budget and lifestyle. From campus dormitories to private apartments.",
    icon: "i-lucide-home",
  }
]

const targetCountries = [
  { name: "United Kingdom", flag: "🇬🇧", universities: "150+ Universities" },
  { name: "United States", flag: "🇺🇸", universities: "200+ Universities" },
  { name: "Canada", flag: "🇨🇦", universities: "100+ Universities" },
  { name: "Australia", flag: "🇦🇺", universities: "80+ Universities" },
  { name: "New Zealand", flag: "🇳🇿", universities: "25+ Universities" },
  { name: "Europe", flag: "🇪🇺", universities: "300+ Universities" },
  { name: "Asia", flag: "🌏", universities: "150+ Universities" }
]
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  /* Slowed down from 30s to 80s for a gentle glide */
  animation: marquee 80s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation-duration: 80s !important;
  }
}
</style>