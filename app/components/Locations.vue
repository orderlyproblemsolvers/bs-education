<template>
    <section class="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <h2 class="text-3xl sm:text-4xl font-bold text-black mb-10 text-center">
        Where Can You Study?
      </h2>
      <!-- Mobile Layout: 2 columns with equal square images -->
      <div class="grid grid-cols-2 gap-4 sm:hidden">
        <!-- UK -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/uk.png" alt="Study in the UK" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">UK</h3>
          </div>
        </div>

        <!-- USA -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/usa.jpg" alt="Study in the USA" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">USA</h3>
          </div>
        </div>

        <!-- Australia -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/australia.jpg" alt="Study in Australia" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">Australia</h3>
          </div>
        </div>

        <!-- France -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/france.jpg" alt="Study in France" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">France</h3>
          </div>
        </div>

        <!-- Malta -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/malta.jpg" alt="Study in Malta" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">Malta</h3>
          </div>
        </div>

        <!-- Hungary -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/hungary.png" alt="Study in Hungary" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">Hungary</h3>
          </div>
        </div>

        <!-- Cyprus -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/cyprus.png" alt="Study in Cyprus" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">Cyprus</h3>
          </div>
        </div>

        <!-- Nigeria -->
        <div class="aspect-square group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/nigeria.jpg" alt="Study in Nigeria" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">Nigeria</h3>
          </div>
        </div>
      </div>

      <!-- Desktop Layout: Original grid layout for sm and up -->
      <div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4">
        <!-- UK -->
        <div class="col-span-2 row-span-2 group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/uk.png" alt="Study in the UK" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-xl sm:text-2xl font-semibold">UK</h3>
          </div>
        </div>
  
        <!-- USA -->
        <div class="col-span-2 group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/usa.jpg" alt="Study in the USA" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-xl sm:text-2xl font-semibold">USA</h3>
          </div>
        </div>
  
        <!-- Australia -->
        <div class="col-span-2 group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/australia.jpg" alt="Study in Australia" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-xl sm:text-2xl font-semibold">Australia</h3>
          </div>
        </div>
  
        <!-- France -->
        <div class="col-span-2 row-span-2 group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/france.jpg" alt="Study in France" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-xl sm:text-2xl font-semibold">France</h3>
          </div>
        </div>
  
        <!-- Malta -->
        <div class="group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/malta.jpg" alt="Study in Malta" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">Malta</h3>
          </div>
        </div>
  
        <!-- Hungary -->
        <div class="group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/hungary.png" alt="Study in Hungary" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-lg font-semibold">Hungary</h3>
          </div>
        </div>
  
        <!-- Cyprus -->
        <div class="col-span-2 group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/cyprus.png" alt="Study in Cyprus" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-xl sm:text-2xl font-semibold">Cyprus</h3>
          </div>
        </div>
        <!-- Nigeria -->
        <div class="col-span-2 group relative overflow-hidden rounded-xl">
          <NuxtImg src="/img/nigeria.jpg" alt="Study in Nigeria" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 class="text-white text-xl sm:text-2xl font-semibold">Nigeria</h3>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script for now
  </script>
  
  <style scoped>
  </style>