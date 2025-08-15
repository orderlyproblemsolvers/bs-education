<template>
  <div>
    <section class="bg-gray-50 py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-3xl sm:text-5xl font-bold mb-4">Visit Us</h1>
        <p class="text-lg text-gray-700 mb-8">
          We are located at The Kings Plaza, Jahi, Abuja. Visit us for personalized consultations and support.
        </p>
        <div class="flex justify-center">
          <NuxtLink to="/contact" class="bg-[#5d6b56] text-white px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation
          </NuxtLink>
        </div>
        <MapLocation/>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style>

</style>