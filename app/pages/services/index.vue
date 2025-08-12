<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative overflow-hidden text-white">
      <!-- Background Image -->
      <NuxtImg
        src="/img/countries.jpg"
        alt="Study abroad destinations"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        preload
      />
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40"></div>
      
      <div class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 z-10">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium text-white mb-6">
            Since 2007 • Your Global Education Partner
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white" style="line-height: 1.2;">
            Your Dreams Have No Borders
          </h1>
          <p class="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto" style="line-height: 1.6;">
            Transform your future with world-class education. We've helped thousands of students turn their study abroad dreams into reality across 7+ countries.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-3 bg-[#EB6534] text-white font-medium rounded-lg shadow-sm hover:bg-[#d55529] hover:shadow-md transition-all duration-200">
              Start Your Journey →
            </button>
            <button class="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#5d6b56] transition-all duration-200">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Indicators -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="space-y-2">
            <div class="text-3xl font-bold text-[#5d6b56]">17+</div>
            <div class="text-sm text-gray-600">Years of Excellence</div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold text-[#5d6b56]">5000+</div>
            <div class="text-sm text-gray-600">Dreams Realized</div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold text-[#5d6b56]">7+</div>
            <div class="text-sm text-gray-600">Countries</div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold text-[#5d6b56]">95%</div>
            <div class="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Story Section -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Every Great Journey Begins With 
          <span class="text-[#5d6b56]">One Step</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          From your first dream to graduation day, we're with you every step of the way. Here's how we turn aspirations into achievements.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="(service, index) in servicesWithStory" :key="index" 
             class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div class="flex items-start space-x-4 mb-4">
            <div :class="service.iconBg" class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
              <div class="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ service.title }}</h3>
              <p class="text-sm text-gray-500">{{ service.subtitle }}</p>
            </div>
          </div>
          <p class="text-gray-600 mb-4" style="line-height: 1.6;">{{ service.description }}</p>
        </div>
      </div>

      <!-- Countries Section -->
      <div class="bg-[#f4f5f3] rounded-xl p-8 md:p-12 mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your World of Opportunities
          </h3>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from top-ranked universities across multiple continents. Your perfect match is waiting.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div v-for="country in targetCountries" :key="country.name"
               class="bg-white rounded-lg p-4 text-center hover:shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div class="text-3xl mb-2">{{ country.flag }}</div>
            <div class="text-sm font-medium text-gray-900">{{ country.name }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ country.universities }}</div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-[#5d6b56] to-[#6b7a6a] rounded-xl p-8 md:p-12 text-center text-white">
        <h3 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Write Your Success Story?
        </h3>
        <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style="line-height: 1.6;">
          Join thousands of students who trusted us with their dreams. Your journey to global education starts with a single conversation.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button class="px-8 py-3 bg-[#EB6534] text-white font-medium rounded-lg shadow-sm hover:bg-[#d55529] transition-all duration-200">
            Get Free Consultation 📞
          </button>
          <button class="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#5d6b56] transition-all duration-200">
            Download Guide ↓
          </button>
        </div>

        <!-- Contact Info -->
        <div class="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
          <div class="flex items-center justify-center space-x-3">
            <div class="w-5 h-5 bg-white/20 rounded"></div>
            <span class="text-white/90">+234 806 544 2707</span>
          </div>
          <div class="flex items-center justify-center space-x-3">
            <div class="w-5 h-5 bg-white/20 rounded"></div>
            <span class="text-white/90">info@bs-education.com</span>
          </div>
          <div class="flex items-center justify-center space-x-3">
            <div class="w-5 h-5 bg-white/20 rounded"></div>
            <span class="text-white/90">Abuja, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Meta tags for SEO
useSeoMeta({
  title: 'Study Abroad Services | B&S Educational Services',
  description: 'Transform your future with world-class education. Professional study abroad services including admissions, visa assistance, and scholarship guidance.',
  ogTitle: 'Study Abroad Services | B&S Educational Services',
  ogDescription: 'Transform your future with world-class education. Professional study abroad services including admissions, visa assistance, and scholarship guidance.',
  ogType: 'website',
})

// Services data with storytelling approach
const servicesWithStory = [
  {
    title: "Educational Counselling",
    subtitle: "Your Story Begins Here",
    description: "Every great journey starts with understanding your unique potential. Our expert counsellors help you discover the perfect academic path that aligns with your dreams and career goals.",
    icon: "academic-cap",
    iconBg: "bg-[#5d6b56]"
  },
  {
    title: "Course & University Selection",
    subtitle: "Find Your Perfect Match",
    description: "With thousands of programs worldwide, finding the right fit can be overwhelming. We match you with universities and courses that complement your aspirations and academic background.",
    icon: "building-library",
    iconBg: "bg-[#6b7a6a]"
  },
  {
    title: "Admissions Support",
    subtitle: "Stand Out From The Crowd",
    description: "Craft compelling applications that showcase your unique story. From essays to portfolios, we help you present your best self to admissions committees.",
    icon: "document-text",
    iconBg: "bg-[#EB6534]"
  },
  {
    title: "Visa Assistance",
    subtitle: "Navigate With Confidence",
    description: "Visa processes can be complex and stressful. Our experienced team guides you through every requirement, ensuring your application is complete and compelling.",
    icon: "identification",
    iconBg: "bg-[#5d6b56]"
  },
  {
    title: "Scholarship Assistance",
    subtitle: "Unlock Financial Freedom",
    description: "Don't let finances limit your dreams. We help you discover and apply for scholarships, grants, and funding opportunities that make education affordable.",
    icon: "currency-dollar",
    iconBg: "bg-[#6b7a6a]"
  },
  {
    title: "Study-abroad Loan Support",
    subtitle: "Invest In Your Future",
    description: "Explore flexible financing options that make your education investment manageable. We connect you with trusted lenders and favorable terms.",
    icon: "banknotes",
    iconBg: "bg-[#EB6534]"
  },
  {
    title: "Pre-departure Services",
    subtitle: "Prepare For Success",
    description: "Get ready for your new adventure with comprehensive pre-departure briefings, cultural orientation, and practical guidance for life abroad.",
    icon: "airplane-takeoff",
    iconBg: "bg-[#5d6b56]"
  },
  {
    title: "Post-arrival Support",
    subtitle: "You're Never Alone",
    description: "Your support doesn't end at departure. We provide ongoing assistance to help you settle in, overcome challenges, and thrive in your new environment.",
    icon: "heart",
    iconBg: "bg-[#6b7a6a]"
  },
  {
    title: "Accommodation Arrangements",
    subtitle: "Home Away From Home",
    description: "Find safe, comfortable housing that fits your budget and lifestyle. From campus dormitories to private apartments, we help you secure the perfect place.",
    icon: "home",
    iconBg: "bg-[#EB6534]"
  }
]

// Countries data with flags and details
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
/* Animations following design system patterns */
.transition-all {
  transition: all 300ms cubic-bezier(0.4, 0, 0.6, 1);
}

/* Custom hover effects */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}

/* Backdrop blur effects */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Line height adjustments */
h1, h2, h3 {
  line-height: 1.2;
}

p {
  line-height: 1.6;
}

/* Ensure proper spacing and typography */
.text-lg {
  font-size: 18px;
  line-height: 28px;
}

.text-3xl {
  font-size: 30px;
  line-height: 40px;
}

.text-4xl {
  font-size: 36px;
  line-height: 44px;
}

@media (max-width: 767px) {
  .text-3xl {
    font-size: 26px;
    line-height: 36px;
  }
  
  .text-4xl {
    font-size: 30px;
    line-height: 40px;
  }
}
</style>