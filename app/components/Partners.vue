<template>
    <section class="relative bg-white py-16 px-4 sm:px-8 lg:px-24 overflow-hidden">
      <h2 class="text-2xl sm:text-3xl font-bold text-center text-[#859484] mb-12">
        Our Trusted Partners
      </h2>
      
      <!-- Fading edges with improved blur -->
      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      
      <div class="space-y-6">
        <!-- Top Row -->
        <div class="overflow-hidden">
          <div class="flex gap-8 animate-scroll-left will-change-transform">
            <!-- First set of logos -->
            <div class="flex gap-8 flex-shrink-0">
              <img
                v-for="(logo, index) in logos.slice(0, 8)"
                :key="'logo1-set1-' + index"
                :src="logo"
                alt="Partner Logo"
                class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            </div>
            <!-- Duplicate set for seamless loop -->
            <div class="flex gap-8 flex-shrink-0">
              <img
                v-for="(logo, index) in logos.slice(0, 8)"
                :key="'logo1-set2-' + index"
                :src="logo"
                alt="Partner Logo"
                class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            </div>
          </div>
        </div>
        
        <!-- Bottom Row -->
        <div class="overflow-hidden">
          <div class="flex gap-8 animate-scroll-right will-change-transform">
            <!-- First set of logos -->
            <div class="flex gap-8 flex-shrink-0">
              <img
                v-for="(logo, index) in logos.slice(8, 16)"
                :key="'logo2-set1-' + index"
                :src="logo"
                alt="Partner Logo"
                class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            </div>
            <!-- Duplicate set for seamless loop -->
            <div class="flex gap-8 flex-shrink-0">
              <img
                v-for="(logo, index) in logos.slice(8, 16)"
                :key="'logo2-set2-' + index"
                :src="logo"
                alt="Partner Logo"
                class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const logos = [
    '/img/debrecen.jpeg', '/img/coventry.png', '/img/uwe.jpeg', '/img/bangor.webp',
    '/img/hull.jpeg', '/img/sruc.png', '/img/bradford.png', '/img/uclan.webp',
    '/img/abbey.webp', '/img/shorelight.webp', '/img/wakefield.webp', '/img/ieu.png',
    '/img/into.webp', '/img/navitas.webp', '/img/kings.jpeg', '/img/oxford.webp'
  ]
  </script>
  
  <style scoped>
  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% - 2rem));
    }
  }
  
  @keyframes scrollRight {
    0% {
      transform: translateX(calc(-100% - 2rem));
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .animate-scroll-left {
    animation: scrollLeft 30s linear infinite;
  }
  
  .animate-scroll-right {
    animation: scrollRight 30s linear infinite;
  }
  
  /* Pause animation on hover for better UX */
  .animate-scroll-left:hover,
  .animate-scroll-right:hover {
    animation-play-state: paused;
  }
  </style>