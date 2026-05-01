<!-- components/OgImage/BnS.satori.vue -->
<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Your Dream of Studying Abroad Is Closer Than You Think',
  description: 'We handle your admission, visa, and travel support from start to finish.',
})
</script>

<template>
  <!-- Outer wrapper with soft background -->
  <div class="w-full h-full flex bg-[#F3F4F6] p-10" style=" font-family: 'Plus Jakarta Sans', sans-serif;">
    
    <!-- Main Content Card (Fixed shadow for Satori) -->
    <div 
      class="flex flex-col w-full h-full bg-white rounded-3xl border border-gray-200 relative overflow-hidden flex-1"
      style="box-shadow: 0 4px 12px rgba(0,0,0,0.05);"
    >

      <!-- Decorative Corner Accents (Satori friendly, zero DOM bloat) -->
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#414358] rounded-full opacity-5 flex" />
      <div class="absolute -bottom-24 -right-12 w-72 h-72 border-40 border-[#C5A03A] rounded-full opacity-10 flex" />

      <!-- Top Accent Bar -->
      <div class="w-full h-2 flex bg-[#C5A03A]" />

      <div class="flex flex-col flex-1 justify-between p-12 z-10">
        
        <!-- Header Row: Logo + Domain -->
        <div class="flex items-center justify-between w-full">
          <img
            src="/img/bs-primary.png"
            alt="B&S Educational Services"
            style="height: 56px; object-fit: contain;"
          />
          <div class="flex items-center px-5 py-2 bg-[#F8F9FA] rounded-full border border-gray-100">
            <span class="text-[#414358 tracking-wide">
              bseducationalservices.com
            </span>
          </div>
        </div>

        <!-- Center: Headline & Description -->
        <div class="flex flex-col gap-6 max-w-[85%] mt-6">
          <!-- Eyebrow -->
          <div class="flex items-center gap-4">
            <div class="w-10 h-1.5 bg-[#C5A03A] rounded-full flex" />
            <span class="text-[#C5A03A] text-xl  tracking-[0.15em] uppercase">
              Free Expert Guidance
            </span>
          </div>

          <!-- Headline -->
          <h1 class="text-[56px] font-black leading-[1.1] text-[#1A1B26] m-0 tracking-tight">
            {{ title }}
          </h1>

          <!-- Description -->
          <p class="text-[26px] font-medium text-[#64657A] leading-[1.4] m-0 max-w-[95%]">
            {{ description }}
          </p>
        </div>

        <!-- Footer: Stats Row -->
        <div class="flex items-center mt-auto pt-10">
          
          <!-- Stat 1 -->
          <div class="flex flex-col mr-16">
            <span class="text-[38px] font-black text-[#414358] leading-none mb-2">1,000+</span>
            <span class=" text-[#9CA3AF] uppercase tracking-widest">Students Placed</span>
          </div>

          <!-- Divider -->
          <div class="w-px h-16 bg-gray-200 mr-16 flex" />

          <!-- Stat 2 -->
          <div class="flex flex-col mr-16">
            <span class="text-[38px] font-black text-[#414358] leading-none mb-2">99%</span>
            <span class=" text-[#9CA3AF] uppercase tracking-widest">Visa Success</span>
          </div>

          <!-- Divider -->
          <div class="w-px h-16 bg-gray-200 mr-16 flex" />

          <!-- Stat 3 -->
          <div class="flex flex-col">
            <span class="text-[38px] font-black text-[#C5A03A] leading-none mb-2">100% Free</span>
            <span class=" text-[#9CA3AF] uppercase tracking-widest">Consultation</span>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>