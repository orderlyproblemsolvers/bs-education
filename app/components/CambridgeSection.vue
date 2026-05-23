<template>
  <section class="py-12 px-4 sm:px-8 lg:px-16 bg-stone-50">
    <div class="max-w-7xl mx-auto">

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="grid lg:grid-cols-[1fr_320px]">

          <!-- Left: image with overlay -->
          <div class="relative min-h-55 overflow-hidden">
            <img
              src="/img/cambridge-overview.jpg"
              alt="University of Cambridge"
              class="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>

            <div class="relative h-full flex flex-col justify-center p-8 lg:p-10">
              <div class="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-3 w-fit">
                5-Day Executive Programme
              </div>
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2">
                Executive Leadership at<br class="hidden sm:block" />
                <span class="text-secondary">University of Cambridge</span>
              </h2>
              <p class="text-white/65 text-sm max-w-sm leading-relaxed">
                For decision-makers and senior executives. 31 Aug – 4 Sep 2026, Cambridge UK.
              </p>
            </div>
          </div>

          <!-- Right: slim action panel -->
          <div class="flex flex-col justify-between p-7 border-t lg:border-t-0 lg:border-l border-gray-100">
            <div class="space-y-3 mb-6">
              <div v-for="detail in details" :key="detail.label" class="flex items-center gap-2.5">
                <UIcon :name="detail.icon" class="w-4 h-4 text-secondary shrink-0" />
                <span class="text-xs text-gray-500">{{ detail.label }}: <strong class="text-gray-800">{{ detail.value }}</strong></span>
              </div>
            </div>

            <div>
              <div class="bg-amber-50 border border-secondary/20 rounded-lg px-3 py-2 mb-4">
                <p class="text-[11px] text-secondary font-semibold text-center">Applications close May 31st · Limited seats</p>
              </div>
              <p class="text-2xl font-extrabold text-gray-900 mb-4">£3,500 <span class="text-sm font-normal text-gray-400">/ person</span></p>
              <div class="flex flex-col gap-2">
                <NuxtLink
                  to="/events/19"
                  class="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/85 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm"
                >
                  Apply Now
                  <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                </NuxtLink>
                <NuxtLink
                  to="/cambridge-executive-programme"
                  class="flex items-center justify-center text-gray-500 hover:text-secondary font-medium text-xs py-2 transition-colors"
                >
                  View programme details →
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const details = [
  { icon: 'i-heroicons-calendar', label: 'Date', value: '31 Aug – 4 Sep 2026' },
  { icon: 'i-heroicons-map-pin', label: 'Location', value: 'Cambridge, UK' },
  { icon: 'i-heroicons-clock', label: 'Duration', value: '5 Days' },
  { icon: 'i-heroicons-trophy', label: 'Award', value: 'Certificate of Participation' },
]
</script>