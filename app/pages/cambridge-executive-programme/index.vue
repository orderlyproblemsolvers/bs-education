<template>
  <div class="cambridge-page font-jakarta text-gray-800 bg-white">

    <!-- ═══════════════════════════════════════════
         HERO SECTION
    ═══════════════════════════════════════════ -->
    <section class="relative w-full min-h-screen flex items-end overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="/img/cambridge-overview.jpg"
          alt="University of Cambridge"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      <!-- Trust strip -->
      <div class="absolute top-0 left-0 right-0 z-20 py-3 px-4 sm:px-8 lg:px-16 bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <span class="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
            Presented by <span class="text-secondary font-semibold">B&S Educational Services</span> · Established 2007 · Trusted International Education Consultants
          </span>
          <span class="hidden md:flex items-center gap-2 text-white/70 text-xs">
            <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Applications close May 31st
          </span>
        </div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 pt-32">
        <div class="max-w-3xl">
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span class="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
              5-Day Executive Programme
            </span>
            <span class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full">
              <UIcon name="i-heroicons-map-pin" class="w-3 h-3" /> University of Cambridge, UK
            </span>
            <span class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full">
              <UIcon name="i-heroicons-calendar" class="w-3 h-3" /> 31 Aug - 4 Sep 2025
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Executive Leadership Programme<br class="hidden sm:block" />
            at the <span class="text-secondary">University of Cambridge</span>
          </h1>

          <p class="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            A premium executive programme designed for Nigerian decision-makers, policymakers, and senior executives seeking global perspective and strategic clarity in an increasingly complex world.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/events/18"
              class="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/85 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-secondary/30 transition-all duration-200 hover:scale-105"
            >
              Reserve Executive Seat
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <a
              href="#overview"
              class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              View Programme Details
            </a>
          </div>

          <div class="mt-12 flex flex-wrap gap-6 sm:gap-10">
            <div v-for="stat in heroStats" :key="stat.label" class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-secondary">
                <UIcon :name="stat.icon" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-white font-bold text-sm">{{ stat.value }}</p>
                <p class="text-white/55 text-xs">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Event card overlay (desktop) -->
      <div class="hidden lg:block absolute right-8 xl:right-16 bottom-12 z-20 bg-white rounded-2xl shadow-2xl p-6 w-72">
        <p class="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Secure Your Spot</p>
        <div class="space-y-3 mb-5">
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p class="text-xs text-gray-500 font-medium">Date</p>
              <p class="text-sm font-semibold text-gray-800">31 August – 4 September 2025</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p class="text-xs text-gray-500 font-medium">Location</p>
              <p class="text-sm font-semibold text-gray-800">Cambridge, United Kingdom</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-clock" class="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p class="text-xs text-gray-500 font-medium">Duration</p>
              <p class="text-sm font-semibold text-gray-800">5 Days (Monday – Friday)</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-currency-pound" class="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p class="text-xs text-gray-500 font-medium">Investment</p>
              <p class="text-sm font-semibold text-gray-800">£3,500 per participant</p>
            </div>
          </div>
        </div>
        <div class="bg-amber-50 border border-secondary/20 rounded-lg px-3 py-2 mb-4">
          <p class="text-xs text-secondary font-semibold text-center">Limited participant capacity available</p>
        </div>
        <NuxtLink
          to="/events/18"
          class="block w-full text-center bg-secondary hover:bg-secondary/85 text-white font-bold text-sm px-4 py-3 rounded-xl transition-all duration-200"
        >
          Apply Now
        </NuxtLink>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         OVERVIEW SECTION
    ═══════════════════════════════════════════ -->
    <section id="overview" class="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-secondary text-sm font-bold uppercase tracking-widest">Why This Programme Matters</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
            The Global Economy Is Changing Faster Than Most Institutions Are Prepared For
          </h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>Inflation volatility. Currency instability. Shifting global alliances. AI-driven transformation. Investment migration. Trade realignment.</p>
            <p>Across government, banking, oil and gas, finance, telecommunications, and institutional leadership, executives are being forced to make higher-stakes decisions in increasingly uncertain environments.</p>
            <p>The organisations that adapt strategically will strengthen their influence, resilience, and long-term positioning. The ones that do not may struggle to remain competitive in the decade ahead.</p>
          </div>
          <div class="mt-8">
            <NuxtLink
              to="/events/18"
              class="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/85 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-secondary/20"
            >
              Apply Now
            </NuxtLink>
          </div>
        </div>
        <div class="relative">
          <img
            src="/img/cambridge-hero2.jpg"
            alt="Cambridge University"
            class="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-xl"
          />
          <div class="absolute -bottom-6 -left-6 bg-white border border-gray-100 rounded-2xl shadow-xl p-5 max-w-xs">
            <p class="text-2xl font-extrabold text-secondary">18+</p>
            <p class="text-sm text-gray-600 font-medium">Years placing Nigerian leaders in premium international programmes</p>
          </div>
          <blockquote class="absolute -top-5 -right-4 hidden xl:block bg-primary text-white text-xs leading-relaxed rounded-xl px-4 py-3 max-w-[180px] shadow-lg">
            "Great leaders don't just react to change, they shape the future."
          </blockquote>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         AGENDA SECTION
    ═══════════════════════════════════════════ -->
    <section id="agenda" class="py-20 px-4 sm:px-8 lg:px-16 bg-stone-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-secondary text-sm font-bold uppercase tracking-widest">Programme Structure</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">5-Day Agenda Highlights</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">An intensive, structured executive experience designed to deliver strategic clarity and global perspective.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div
            v-for="(day, i) in agenda"
            :key="i"
            class="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-secondary/30 transition-all duration-200 group"
          >
            <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <span class="text-secondary font-extrabold text-xs">DAY {{ i + 1 }}</span>
            </div>
            <h3 class="font-bold text-gray-900 text-sm leading-snug">{{ day.title }}</h3>
            <p class="text-gray-500 text-xs mt-2 leading-relaxed">{{ day.description }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         WHAT PARTICIPANTS GAIN
    ═══════════════════════════════════════════ -->
    <section class="py-20 px-4 sm:px-8 lg:px-16 bg-primary text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-secondary text-sm font-bold uppercase tracking-widest">Programme Value</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 leading-tight">
              What Participants Will Gain
            </h2>
            <p class="text-white/70 leading-relaxed mb-8">
              This is not a traditional seminar. It is an executive-level learning experience designed for leaders responsible for making strategic decisions in complex environments.
            </p>
            <NuxtLink
              to="/events/18"
              class="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/85 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg"
            >
              Reserve Your Place
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div
              v-for="gain in gains"
              :key="gain.title"
              class="bg-white/8 border border-white/10 rounded-xl p-5 hover:bg-white/12 transition-colors"
            >
              <UIcon :name="gain.icon" class="w-6 h-6 text-secondary mb-3" />
              <h4 class="font-bold text-sm mb-1">{{ gain.title }}</h4>
              <p class="text-white/60 text-xs leading-relaxed">{{ gain.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         WHO SHOULD ATTEND
    ═══════════════════════════════════════════ -->
    <section class="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-start">

          <div class="lg:sticky lg:top-24">
            <span class="text-secondary text-sm font-bold uppercase tracking-widest">Built for Decision-Makers</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-5 leading-tight">
              This programme is for leaders who carry the weight of consequential decisions
            </h2>
            <p class="text-gray-500 leading-relaxed mb-6">
              Not generalists. Not observers. This cohort is assembled from individuals who sit at the intersection of strategy, governance, and institutional influence — across Nigeria's most critical sectors.
            </p>
            <p class="text-gray-500 leading-relaxed mb-8">
              If you make decisions that shape organisations, policy, capital, or people — this programme was designed with you in mind.
            </p>
            <NuxtLink
              to="/events/18"
              class="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/85 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-secondary/20"
            >
              Apply Now
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>

          <div class="space-y-3">
            <div
              v-for="role in roles"
              :key="role.title"
              class="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-200 group"
            >
              <div class="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-secondary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <UIcon :name="role.icon" class="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" />
              </div>
              <div>
                <p class="font-semibold text-gray-900 text-sm group-hover:text-secondary transition-colors leading-snug">{{ role.title }}</p>
                <p class="text-gray-400 text-xs mt-0.5">{{ role.subtitle }}</p>
              </div>
              <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-300 group-hover:text-secondary ml-auto flex-shrink-0 transition-colors" />
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         PROGRAMME INVESTMENT
    ═══════════════════════════════════════════ -->
    <section id="packages" class="py-20 px-4 sm:px-8 lg:px-16 bg-stone-50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-secondary text-sm font-bold uppercase tracking-widest">Programme Investment</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">One Cohort. One Standard of Excellence.</h2>
          <p class="text-gray-500 mt-3 max-w-lg mx-auto">Every participant receives the same premium executive experience — no tiers, no compromises.</p>
        </div>

        <div class="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
          <div class="grid md:grid-cols-2">
            <div class="bg-primary p-10 flex flex-col justify-center">
              <p class="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Programme Fee</p>
              <p class="text-6xl font-extrabold text-white mb-1">£3,500</p>
              <p class="text-white/50 text-sm mb-8">Per Participant · All inclusive</p>
              <NuxtLink
                to="/events/18"
                class="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/85 text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg text-base"
              >
                Apply Now
                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
              </NuxtLink>
              <div class="mt-6 flex items-start gap-2.5">
                <UIcon name="i-heroicons-information-circle" class="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                <p class="text-white/40 text-xs leading-relaxed">Payment plans and corporate sponsorship available. Contact our team for details.</p>
              </div>
            </div>

            <div class="p-10">
              <p class="text-gray-900 font-bold text-sm uppercase tracking-widest mb-6">What's Included</p>
              <ul class="space-y-4">
                <li v-for="inclusion in inclusions" :key="inclusion.label" class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <UIcon :name="inclusion.icon" class="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-sm">{{ inclusion.label }}</p>
                    <p class="text-gray-400 text-xs mt-0.5">{{ inclusion.detail }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-100 px-10 py-4 bg-amber-50 flex items-center gap-3">
            <UIcon name="i-heroicons-exclamation-triangle" class="w-4 h-4 text-secondary flex-shrink-0" />
            <p class="text-xs text-secondary font-semibold">Limited participant capacity available for this executive cohort. Early application is strongly recommended.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         FAQ SECTION
    ═══════════════════════════════════════════ -->
    <section class="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-secondary text-sm font-bold uppercase tracking-widest">Common Questions</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-stone-50 border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              @click="toggleFaq(i)"
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-stone-100 transition-colors"
            >
              <span class="font-semibold text-gray-900 text-sm sm:text-base">{{ faq.question }}</span>
              <UIcon
                :name="openFaq === i ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                class="w-5 h-5 text-secondary flex-shrink-0"
              />
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-gray-600 text-sm leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         FINAL CTA SECTION
    ═══════════════════════════════════════════ -->
    <section class="py-20 px-4 sm:px-8 lg:px-16 bg-primary text-white">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-secondary text-sm font-bold uppercase tracking-widest">Limited Capacity</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-5 leading-tight">
          Position Yourself for the Future of Global Leadership
        </h2>
        <p class="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join senior professionals, policymakers, and decision-makers for a premium executive learning experience at the University of Cambridge. Early application is strongly recommended.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <NuxtLink
            to="/events/18"
            class="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/85 text-white font-bold text-base px-10 py-4 rounded-xl shadow-xl shadow-secondary/30 transition-all duration-200 hover:scale-105"
          >
            Apply Now
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
          </NuxtLink>
          <a
            :href="`https://wa.me/2348065442707?text=${encodeURIComponent('Hello! I\'m interested in the Cambridge Executive Programme. Please send me more information.')}`"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-10 py-4 rounded-xl transition-all duration-200"
          >
            <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
        <div class="bg-white/8 border border-white/10 rounded-xl px-6 py-4 max-w-lg mx-auto">
          <p class="text-white/60 text-xs leading-relaxed">
            <strong class="text-white/80">Our executive programme team will contact qualified applicants with next steps after submission.</strong>
            Payment plans and corporate sponsorship are available on request.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NuxtLink } from '#components'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Executive Leadership Programme at the University of Cambridge | B&S Educational Services',
  description: 'A premium 5-day executive leadership programme at the University of Cambridge for Nigerian decision-makers, policymakers, and senior executives. 31 Aug – 4 Sep 2025.',
  ogTitle: 'Executive Leadership Programme at the University of Cambridge | B&S Educational Services',
  ogDescription: 'Join senior professionals and policymakers for a premium executive learning experience at the University of Cambridge. Limited capacity — apply now.',
  ogImage: '/img/cambridge-hero.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  htmlAttrs: { lang: 'en' },
})

const openFaq = ref(null)
function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

// ─── DATA ─────────────────────────────────────────

const heroStats = [
  { icon: 'i-heroicons-academic-cap', value: '5 Days', label: 'Intensive Training' },
  { icon: 'i-heroicons-globe-alt', value: 'Global Faculty', label: 'Industry Experts' },
  { icon: 'i-heroicons-user-group', value: 'Executive Networking', label: 'Strategic Connections' },
  { icon: 'i-heroicons-trophy', value: 'Certificate', label: 'of Participation' },
]

const agenda = [
  {
    title: 'Global Economic Outlook & Key Trends',
    description: 'Understand macro-level shifts shaping global markets and what they mean for African economies.'
  },
  {
    title: 'Strategic Leadership in Times of Uncertainty',
    description: 'Frameworks for making confident decisions when the environment is complex and unpredictable.'
  },
  {
    title: 'Driving Profitability & Sustainable Growth',
    description: 'Practical strategies for sustaining organisational growth while managing risk.'
  },
  {
    title: 'Building Influence, Partnerships & Global Expansion',
    description: 'How to leverage international networks to grow your institution\'s reach and resilience.'
  },
  {
    title: 'Future-Proofing Your Leadership Legacy',
    description: 'Long-term positioning strategies for leaders who want to remain relevant in a rapidly changing world.'
  },
]

const gains = [
  {
    icon: 'i-heroicons-map',
    title: 'Strategic Frameworks',
    description: 'Tools for navigating economic uncertainty and institutional disruption with confidence.'
  },
  {
    icon: 'i-heroicons-globe-alt',
    title: 'Global Perspective',
    description: 'Understand how international economic shifts directly affect Africa and your sector.'
  },
  {
    icon: 'i-heroicons-users',
    title: 'Executive Networking',
    description: 'Build high-value relationships with senior professionals and policymakers from diverse sectors.'
  },
  {
    icon: 'i-heroicons-building-library',
    title: 'Cambridge Experience',
    description: 'Engage in executive-level learning at one of the world\'s most respected academic institutions.'
  },
  {
    icon: 'i-heroicons-document-text',
    title: 'Certificate of Participation',
    description: 'A recognised credential from a premium Cambridge executive learning experience.'
  },
  {
    icon: 'i-heroicons-arrow-trending-up',
    title: 'Leadership Relevance',
    description: 'Sharpen your executive credibility and long-term positioning for the decade ahead.'
  },
]

const roles = [
  {
    icon: 'i-heroicons-building-library',
    title: 'Government Officials & Policymakers',
    subtitle: 'Ministers, ministry directors, and senior advisers'
  },
  {
    icon: 'i-heroicons-building-office-2',
    title: 'Bank & Finance Executives',
    subtitle: 'CEOs, MDs, and senior leadership in financial institutions'
  },
  {
    icon: 'i-heroicons-briefcase',
    title: 'CEOs, Managing Directors & Founders',
    subtitle: 'Organisational heads driving growth and transformation'
  },
  {
    icon: 'i-heroicons-fire',
    title: 'Oil & Gas Professionals',
    subtitle: 'Senior executives and strategy leads in the energy sector'
  },
  {
    icon: 'i-heroicons-chart-bar',
    title: 'Strategy, HR & Operations Executives',
    subtitle: 'Leaders shaping internal structure and long-term direction'
  },
  {
    icon: 'i-heroicons-share',
    title: 'Institutional Decision-Makers',
    subtitle: 'Board members, directors, and regulatory leaders'
  },
  {
    icon: 'i-heroicons-light-bulb',
    title: 'Senior Consultants & Advisers',
    subtitle: 'High-level professionals advising on complex challenges'
  },
  {
    icon: 'i-heroicons-rocket-launch',
    title: 'High-Growth Entrepreneurs',
    subtitle: 'Founders scaling businesses with institutional ambitions'
  },
]

const inclusions = [
  {
    icon: 'i-heroicons-presentation-chart-line',
    label: 'Access to All Training Sessions',
    detail: 'Five full days of executive-level learning and facilitated discussions'
  },
  {
    icon: 'i-heroicons-book-open',
    label: 'Programme Materials',
    detail: 'Curated frameworks, case studies, and reference resources'
  },
  {
    icon: 'i-heroicons-trophy',
    label: 'Certificate of Participation',
    detail: 'Issued upon completion of the 5-day programme'
  },
  {
    icon: 'i-heroicons-cake',
    label: 'Lunch & Refreshments',
    detail: 'Daily catering throughout the programme'
  },
  {
    icon: 'i-heroicons-users',
    label: 'Executive Networking Sessions',
    detail: 'Structured networking with peers, policymakers, and faculty'
  },
  {
    icon: 'i-heroicons-phone',
    label: 'Full Onboarding Support',
    detail: 'Visa guidance, documentation assistance, and travel preparation'
  },
]

const faqs = [
  {
    question: 'Do I need a visa to attend?',
    answer: 'Yes, a UK visitor visa is required. Our team provides full visa support, including guidance on documentation, application process, and timelines. We strongly recommend applying early to allow sufficient processing time.'
  },
  {
    question: 'Is accommodation included in the programme fee?',
    answer: 'Accommodation is not included in the standard programme fee but can be arranged through our team at additional cost. We assist all participants with hotel recommendations and bookings close to the venue.'
  },
  {
    question: 'Can companies sponsor participants?',
    answer: 'Yes, corporate and institutional sponsorship is welcome. We can provide the necessary documentation for corporate invoicing and group enrolment. Contact our team for details.'
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept bank transfers (NGN and GBP), and can discuss instalment plans for qualifying applicants. Payment details are provided upon confirmation of your application.'
  },
  {
    question: 'What is the programme capacity?',
    answer: 'Participation is limited to maintain the quality of the executive experience. Once capacity is reached, applications will close. We recommend applying as early as possible to secure your place.'
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Yes. All participants receive a Certificate of Participation upon completion of the 5-day executive experience.'
  },
]
</script>

<style scoped>
.cambridge-page {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>