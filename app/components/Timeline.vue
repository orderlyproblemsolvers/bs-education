<template>
    <section class="bg-white py-20 px-4 sm:px-8 lg:px-24 relative overflow-hidden">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-black mb-16">
        How It Works
      </h2>
  
      <div class="relative max-w-7xl mx-auto">
        <!-- Roadmap Line -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-2 bg-[#6BAE7A]/30 rounded-full"></div>
  
        <!-- Steps -->
        <div class="flex flex-col gap-20 relative z-10">
          <div v-for="(step, index) in steps" :key="index" :class="['flex flex-col md:flex-row items-center gap-8', index % 2 === 0 ? 'md:flex-row-reverse' : '']">
            <!-- Step Text -->
            <div class="bg-[#f9f9f9] rounded-xl shadow-md px-6 py-6 w-full md:w-1/2">
              <h3 class="text-xl font-semibold text-black mb-2">
                Step {{ index + 1 }}: {{ step.title }}
              </h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
  
            <!-- Step Icon/Marker -->
            <div class="w-10 h-10 bg-[#6BAE7A] text-white flex items-center justify-center font-bold rounded-full border-4 border-white shadow-md z-20">
              {{ index + 1 }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const steps = [
    {
      title: 'Free Counselling',
      description: 'We start with a free, no-obligation consultation to understand your academic goals and country preference.'
    },
    {
      title: 'University & Program Selection',
      description: 'Our advisors help you choose the best-fit universities and programs tailored to your profile.'
    },
    {
      title: 'Application Support',
      description: 'We guide you in preparing and submitting strong applications to increase your admission chances.'
    },
    {
      title: 'Visa Guidance',
      description: 'Get expert help in gathering documents, filling forms, and preparing for your student visa interview.'
    },
    {
      title: 'Test Prep & Coaching',
      description: 'We offer IELTS, TOEFL, and other test preparation to help you meet language requirements.'
    },
    {
      title: 'Travel & Accommodation',
      description: 'Once admitted, we help you arrange safe travel and find suitable accommodation abroad.'
    }
  ]
  </script>
  
  <style scoped>
  </style>