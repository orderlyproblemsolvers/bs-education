<template>
  <section class="bg-surface py-20 px-6 sm:px-8 lg:px-24">

    <!-- Header -->
    <div class="max-w-7xl mx-auto mb-16 text-center">
      <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-4">
        Visa Assistance
      </span>
      <h1 class="text-4xl md:text-5xl font-bold text-on-surface mb-4 leading-tight">
        Navigate Your Visa Journey <span class="text-secondary">with Confidence</span>
      </h1>
      <p class="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
        Our expert team provides comprehensive support from application to approval — so visa complexity never stands between you and your goals.
      </p>
    </div>

    <!-- Feature cards -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="group bg-white p-7 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300"
      >
        <div class="flex items-start gap-5">
          <div class="w-12 h-12 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-secondary/30 transition-colors duration-300">
            <component :is="feature.icon" class="w-5 h-5 text-base" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-on-surface mb-2">{{ feature.title }}</h2>
            <p class="text-on-surface-variant leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="max-w-7xl mx-auto relative bg-base rounded-xl overflow-hidden p-10 md:p-14 text-center">
      <div class="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-16 -right-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-2xl mx-auto">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Begin Your <span class="text-secondary-fixed-dim">Visa Journey?</span>
        </h3>
        <p class="text-white/75 mb-8 leading-relaxed">
          Don't let visa complexities hold back your study abroad dreams. Our counsellors are here to guide you through every step.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/80 hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            Book a Consultation
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
          
          <a
            href="https://wa.me/2348065442707"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-400 border border-white/20 text-white font-semibold rounded-lg hover:bg-green-400/20 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.845L.057 23.143l5.432-1.424A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.518-5.166-1.42l-.371-.22-3.847 1.008 1.027-3.737-.242-.385A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span><strong class="text-white">99%</strong> Visa Success Rate</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4  shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span><strong class="text-white">Free</strong> Consultation</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span><strong class="text-white">17+</strong> Years Experience</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { h } from 'vue'

const mk = (paths) => ({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
    paths.map(d => h('path', { d }))
  )
})

const features = [
  {
    title: 'Personalized Strategies',
    description: 'We tailor a visa application strategy specific to your destination country and circumstances — ensuring the right approach every step of the way.',
    icon: mk(['M9 12l2 2 4-4', 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'])
  },
  {
    title: 'Document Preparation',
    description: 'From checklists to translations and form reviews, our team ensures your documentation is accurate, organized, and embassy-ready.',
    icon: mk(['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H8'])
  },
  {
    title: 'Interview Coaching',
    description: 'Through mock interviews, insight on common questions, and presentation coaching, we prepare you to perform confidently at the embassy.',
    icon: mk(['M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z', 'M19 10v2a7 7 0 01-14 0v-2', 'M12 19v3'])
  },
  {
    title: 'Full Support Until Approval',
    description: 'From application tracking to post-approval guidance, we stand by you until your visa is approved — and beyond.',
    icon: mk(['M9 12l2 2 4-4', 'M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3', 'M3 12c1 0 3-1 3-3S4 6 3 6 0 7 0 9s2 3 3 3'])
  },
]
</script>