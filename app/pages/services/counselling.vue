<template>
  <div class="min-h-screen bg-surface">

    <!-- Hero -->
    <section class="relative pt-32 pb-24 px-6 lg:px-8 bg-surface overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-base/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-6">
          Since 2007
        </span>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-on-surface mb-6 leading-tight tracking-tight">
          Expert Admission
          <span class="text-secondary relative whitespace-nowrap">
            Counselling
            <svg class="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-on-surface-variant mb-10 leading-relaxed max-w-3xl mx-auto">
          Navigate your path to international education with personalized guidance. We've helped thousands secure admissions to top universities worldwide.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-container text-on-secondary-container font-semibold rounded-lg hover:bg-secondary hover:text-on-secondary hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-base"
        >
          Book Free Consultation
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>

      <!-- Stats card -->
      <div class="max-w-5xl mx-auto mt-20 bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 relative z-20">
        <div class="pt-8 md:pt-0 flex flex-col items-center justify-center group">
          <div class="text-4xl lg:text-5xl font-extrabold text-base mb-2 group-hover:scale-105 transition-transform duration-300">17+</div>
          <p class="text-on-surface-variant font-medium uppercase tracking-wider text-sm">Years Experience</p>
        </div>
        <div class="pt-8 md:pt-0 flex flex-col items-center justify-center group">
          <div class="text-4xl lg:text-5xl font-extrabold text-base mb-2 group-hover:scale-105 transition-transform duration-300">Global</div>
          <p class="text-on-surface-variant font-medium uppercase tracking-wider text-sm">University Access</p>
        </div>
        <div class="pt-8 md:pt-0 flex flex-col items-center justify-center group">
          <div class="text-4xl lg:text-5xl font-extrabold text-base mb-2 group-hover:scale-105 transition-transform duration-300">100%</div>
          <p class="text-on-surface-variant font-medium uppercase tracking-wider text-sm">Personalized Approach</p>
        </div>
      </div>
    </section>

    <!-- Feature cards -->
    <section class="py-24 bg-white px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 text-center max-w-2xl mx-auto">
          <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-4">What We Offer</span>
          <h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-4">Comprehensive Support</h2>
          <p class="text-on-surface-variant text-lg">End-to-end guidance throughout your entire admission journey.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="group bg-white p-7 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-5 group-hover:border-secondary/30 transition-colors duration-300">
              <component :is="feature.icon" class="w-5 h-5 text-base" />
            </div>
            <h3 class="text-lg font-bold text-on-surface mb-2">{{ feature.title }}</h3>
            <p class="text-on-surface-variant text-sm leading-relaxed mb-5">{{ feature.description }}</p>
            <ul class="text-sm text-on-surface-variant space-y-2">
              <li v-for="item in feature.bullets" :key="item" class="flex items-center gap-2">
                <svg class="w-4 h-4 text-base shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process timeline -->
    <section class="py-24 px-6 lg:px-8 bg-surface">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-4">How It Works</span>
          <h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-4">Our Proven Process</h2>
          <p class="text-on-surface-variant text-lg">A systematic six-step approach to ensure your admission success.</p>
        </div>

        <div class="relative space-y-6 before:absolute before:inset-0 before:ml-[34px] before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="relative flex gap-5 items-start group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-300 z-10"
          >
            <div class="w-14 h-14 rounded-xl bg-white border border-gray-200 shadow-sm text-base font-bold text-xl flex items-center justify-center shrink-0 group-hover:bg-base group-hover:text-white group-hover:border-base transition-all duration-300">
              {{ index + 1 }}
            </div>
            <div class="pt-1.5">
              <h3 class="text-lg font-bold text-on-surface mb-1.5 group-hover:text-base transition-colors duration-300">{{ step.title }}</h3>
              <p class="text-on-surface-variant leading-relaxed text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 bg-base px-6 lg:px-8 overflow-hidden">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-3xl mx-auto text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Start Your Journey?</h2>
        <p class="text-xl text-white/75 mb-10 leading-relaxed">Take the first step towards your international education dream today.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            Book a Consultation
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
          
          <a
            href="tel:+2348065442707"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +234 806 544 2707
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { h } from 'vue'

useHead({
  title: 'Expert Admission Counselling | B&S Educational Services',
  meta: [{ name: 'description', content: 'Expert admission counselling for international education since 2007.' }]
})

const mkIcon = (d) => ({ render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d })]) })

const features = [
  { title: 'Educational Counselling', description: 'One-on-one sessions to map your ideal academic pathway.', icon: mkIcon('M12 14l9-5-9-5-9 5 9 5zm0 7V9m0 12l-9-5m9 5l9-5'), bullets: ['Gap analysis', 'Career guidance'] },
  { title: 'University Selection',    description: 'Expert guidance choosing programs that align with your profile.', icon: mkIcon('M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5'), bullets: ['Compatibility check', 'Cost analysis'] },
  { title: 'Application Support',     description: 'Complete help with document review, essays, and submission.', icon: mkIcon('M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'), bullets: ['Essay reviews', 'Status tracking'] },
  { title: 'Scholarship Help',        description: 'Identifying and applying for grants and funding opportunities.', icon: mkIcon('M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'), bullets: ['Merit scholarships', 'Grant matching'] },
]

const processSteps = [
  { title: 'Initial Consultation',  description: 'Comprehensive discussion about your academic background, career goals, and study preferences.' },
  { title: 'Profile Analysis',      description: 'Detailed evaluation of your academic records, test scores, and extracurricular activities.' },
  { title: 'University Shortlisting', description: 'A customized list of universities and programs that match your criteria and admission chances.' },
  { title: 'Application Strategy',  description: 'Development of a comprehensive strategy including timeline, required documents, and test prep plan.' },
  { title: 'Application Support',   description: 'Hands-on assistance with completion, essay writing, document preparation, and submission.' },
  { title: 'Follow-up & Success',   description: 'Continuous monitoring, interview prep support, and assistance with enrollment procedures.' },
]
</script>