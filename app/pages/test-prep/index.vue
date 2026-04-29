<template>
  <div class="min-h-screen bg-surface">
    <section class="relative pt-32 pb-24 px-6 lg:px-8 bg-surface overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-base/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="text-center lg:text-left">
            <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-6">
              Test Preparation
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-6 leading-tight tracking-tight">
              Ace Your
              <span class="text-secondary relative whitespace-nowrap">
                International Tests
                <svg class="absolute -bottom-2 left-0 w-full h-3 text-secondary/30 hidden sm:block" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                </svg>
              </span>
              <br class="hidden lg:block" />
              <span class="text-3xl md:text-4xl lg:text-5xl mt-2 block text-on-surface">Study Abroad with Confidence</span>
            </h1>
            <p class="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From IELTS to SAT, GRE to university entrance exams — we provide comprehensive test preparation that guarantees results. Join thousands of successful students who achieved their dream scores.
            </p>
            
            <div class="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div class="text-center">
                <div class="text-2xl font-extrabold text-base">1000+</div>
                <div class="text-sm text-on-surface-variant mt-1 font-medium uppercase tracking-wider">Students Trained</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-extrabold text-base">99%</div>
                <div class="text-sm text-on-surface-variant mt-1 font-medium uppercase tracking-wider">Success Rate</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-extrabold text-base">7.5+</div>
                <div class="text-sm text-on-surface-variant mt-1 font-medium uppercase tracking-wider">Avg IELTS Score</div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-base">
                Book Free Assessment
                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
              </NuxtLink>
              <a href="tel:+2348065442707" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-on-surface font-semibold rounded-lg hover:bg-gray-50 hover:border-secondary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm text-base">
                <Icon name="heroicons:phone" class="w-4 h-4 text-secondary" />
                Call +234 806 544 2707
              </a>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white shadow-xl border border-gray-100 rounded-[2rem] rounded-tl-[80px] rounded-br-[80px] p-10 text-center relative z-10 hover:-translate-y-1 transition-transform duration-500">
              <div class="w-20 h-20 bg-base/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div class="text-4xl">🎓</div>
              </div>
              <h3 class="text-2xl font-bold text-on-surface mb-3">Success Stories</h3>
              <p class="text-on-surface-variant mb-8 text-lg">Join our community of successful test takers</p>
              
              <div class="space-y-4">
                <div class="bg-surface p-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm group hover:border-base/30 transition-colors">
                  <div class="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">📊</div>
                  <div class="text-left">
                    <div class="font-bold text-on-surface">Live Progress Tracking</div>
                    <div class="text-sm text-on-surface-variant">Monitor your improvement</div>
                  </div>
                </div>
                
                <div class="bg-surface p-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm group hover:border-base/30 transition-colors">
                  <div class="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">🎯</div>
                  <div class="text-left">
                    <div class="font-bold text-on-surface">Target Achievement</div>
                    <div class="text-sm text-on-surface-variant">IELTS 8.0+ Scores</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-base/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white px-6 lg:px-8 border-y border-gray-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 max-w-2xl mx-auto">
          <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-4">Exam Programs</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-on-surface">Choose Your Test Preparation</h2>
          <p class="text-lg text-on-surface-variant">
            Comprehensive preparation programs designed for students aiming for international education.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            v-for="test in testTypes" 
            :key="test.id"
            :class="[
              'min-w-[200px] p-4 rounded-xl border-2 transition-all duration-300 font-medium',
              activeTest === test.id 
                ? 'bg-base text-white border-base shadow-md transform -translate-y-1' 
                : 'bg-white text-on-surface-variant border-gray-200 hover:border-base hover:text-base hover:shadow-sm'
            ]"
            @click="activeTest = test.id"
          >
            <div class="flex items-center justify-start gap-4">
              <div class="text-2xl">{{ test.icon }}</div>
              <div class="text-left">
                <div class="font-bold" :class="activeTest === test.id ? 'text-white' : 'text-on-surface'">{{ test.name }}</div>
                <div class="text-xs" :class="activeTest === test.id ? 'text-white/80' : 'text-on-surface-variant'">{{ test.shortDesc }}</div>
              </div>
            </div>
          </button>
        </div>

        <div class="bg-surface rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div class="mb-6">
                <h3 class="text-2xl md:text-3xl font-bold text-on-surface mb-4">{{ currentTest.fullName }}</h3>
                <div class="flex flex-wrap gap-3">
                  <span class="bg-base/10 text-base px-4 py-1.5 rounded-full text-sm font-bold border border-base/20">{{ currentTest.successRate }} Success Rate</span>
                  <span class="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold border border-secondary/20">{{ currentTest.duration }}</span>
                </div>
              </div>

              <p class="text-on-surface-variant text-lg leading-relaxed mb-8">{{ currentTest.description }}</p>

              <div>
                <h4 class="text-xl font-bold text-on-surface mb-5">What You'll Get:</h4>
                <ul class="grid gap-4 mb-8">
                  <li v-for="feature in currentTest.features" :key="feature" class="flex items-start gap-3">
                    <div class="w-6 h-6 rounded-full bg-base/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="heroicons:check" class="w-4 h-4 text-base" />
                    </div>
                    <span class="text-on-surface-variant font-medium">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col justify-center">
              <div class="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg border border-gray-100 text-center relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-base/5 rounded-full blur-2xl pointer-events-none"></div>
                
                <div class="mb-8 relative z-10">
                  <div class="w-36 h-36 rounded-full bg-gradient-to-br from-base to-base/80 flex flex-col items-center justify-center mx-auto text-white shadow-xl shadow-base/20 transform hover:scale-105 transition-transform duration-300">
                    <div class="text-4xl font-extrabold">{{ currentTest.avgScore }}</div>
                    <div class="text-sm font-medium opacity-90 mt-1 uppercase tracking-wider">Avg Score</div>
                  </div>
                </div>
                
                <div class="space-y-5 relative z-10">
                  <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span class="text-on-surface-variant font-medium">Success Rate</span>
                    <span class="font-bold text-on-surface text-lg">{{ currentTest.successRate }}</span>
                  </div>
                  <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span class="text-on-surface-variant font-medium">Duration</span>
                    <span class="font-bold text-on-surface text-lg">{{ currentTest.duration }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-on-surface-variant font-medium">Class Size</span>
                    <span class="font-bold text-on-surface text-lg">Max 8 students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-4">Why Choose Us</span>
          <h2 class="text-3xl md:text-4xl font-bold text-on-surface">Why 95% of Our Students Achieve Their Target Scores</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="group bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div class="w-16 h-16 rounded-xl bg-base/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-300">
              <Icon :name="feature.icon" class="w-8 h-8 text-base group-hover:text-secondary transition-colors" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-on-surface">{{ feature.title }}</h3>
            <p class="text-on-surface-variant leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-24 bg-base px-6 lg:px-8 overflow-hidden text-center">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-3xl mx-auto relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Achieve Your Target Score?</h2>
        <p class="text-xl text-white/75 mb-10 leading-relaxed">
          Join thousands of successful students. Book your free assessment and get a personalized study plan today.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/80 hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-lg">
            Book Free Assessment
            <Icon name="heroicons:arrow-right" class="w-5 h-5" />
          </NuxtLink>
          <a href="https://wa.me/2348065442707" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm text-lg">
            <Icon name="i-simple-icons-whatsapp" class="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'Test Preparation - B&S Educational Services',
  description: 'Comprehensive test preparation for IELTS, SAT, GRE, JAMB, and more. Achieve your target scores with expert guidance and personalized study plans.',
  ogTitle: 'Test Preparation - B&S Educational Services',
  ogDescription: 'Join thousands of successful students with our proven test preparation programs. Book your free assessment today!',
  ogImage: '/img/main-logo.png',
  twitterCard: 'summary_large_image'
})

const activeTest = ref('ielts')

const testTypes = [
  {
    id: 'ielts',
    name: 'IELTS',
    shortDesc: 'English Proficiency',
    icon: '🇬🇧',
    fullName: 'International English Language Testing System',
    description: 'Master all four skills - Reading, Writing, Listening, and Speaking with our proven methodology. Perfect for UK, Canada, Australia, and New Zealand admissions.',
    duration: '8-12 weeks',
    sessions: '24 sessions',
    features: [
      'One-on-one speaking practice sessions',
      'Writing task feedback & detailed corrections',
      'Weekly mock tests with band prediction',
      'Personalized study plan and progress tracking',
      'Official Cambridge materials included',
      'Flexible timing - weekday & weekend batches'
    ],
    successRate: '95%',
    avgScore: '7.5'
  },
  {
    id: 'sat',
    name: 'SAT',
    shortDesc: 'US College Admissions',
    icon: '🇺🇸',
    fullName: 'Scholastic Assessment Test',
    description: 'Comprehensive preparation for US university admissions focusing on Math, Evidence-Based Reading & Writing. Achieve scores that open doors to top universities.',
    duration: '10-14 weeks',
    sessions: '28 sessions',
    features: [
      'Math and English section mastery',
      'Full-length practice tests every week',
      'Essay writing workshop included',
      'College application guidance',
      'Official CollegeBoard materials',
      'Small class sizes (max 6 students)'
    ],
    successRate: '92%',
    avgScore: '1420'
  },
  {
    id: 'gre',
    name: 'GRE',
    shortDesc: 'Graduate School',
    icon: '🎓',
    fullName: 'Graduate Record Examination',
    description: 'Advanced preparation for graduate school admissions. Master Verbal Reasoning, Quantitative Reasoning, and Analytical Writing for top-tier programs.',
    duration: '12-16 weeks',
    sessions: '32 sessions',
    features: [
      'Comprehensive Verbal & Quant training',
      'Analytical Writing workshops',
      'Advanced problem-solving techniques',
      'Computer-adaptive test simulation',
      'Official ETS PowerPrep materials',
      'Graduate school application support'
    ],
    successRate: '90%',
    avgScore: '315'
  },
  {
    id: 'jamb',
    name: 'JAMB',
    shortDesc: 'Nigerian Universities',
    icon: '🇳🇬',
    fullName: 'Joint Admissions and Matriculation Board',
    description: 'Excel in your JAMB UTME with targeted preparation for Nigerian university admissions. Comprehensive coverage of all subjects and exam strategies.',
    duration: '6-8 weeks',
    sessions: '20 sessions',
    features: [
      'All subject combinations covered',
      'CBT practice and familiarization',
      'Past questions and solutions',
      'Time management techniques',
      'Subject-specific expert teachers',
      'University choice counseling'
    ],
    successRate: '98%',
    avgScore: '280+'
  },
  {
    id: 'entrance',
    name: 'University Entrance',
    shortDesc: 'International Unis',
    icon: '🌍',
    fullName: 'International University Entrance Exams',
    description: 'Specialized preparation for various university entrance exams including country-specific tests for Hungary, Germany, and other European destinations.',
    duration: '8-12 weeks',
    sessions: '24 sessions',
    features: [
      'Country-specific exam preparation',
      'Subject-focused intensive training',
      'University application guidance',
      'Interview preparation included',
      'Scholarship application support',
      'Visa documentation assistance'
    ],
    successRate: '93%',
    avgScore: '85%+'
  }
]

const features = [
  {
    title: 'Expert Instructors',
    description: 'Certified trainers with 8+ years experience and proven track records in international test preparation.',
    icon: 'heroicons:user-group'
  },
  {
    title: 'Personalized Learning',
    description: 'Customized study plans based on your current level, target score, and timeline to maximize results.',
    icon: 'heroicons:light-bulb'
  },
  {
    title: 'Premium Materials',
    description: 'Access to Cambridge, ETS official materials plus our proprietary practice tests and study resources.',
    icon: 'heroicons:book-open'
  }
]

const currentTest = computed(() => {
  return testTypes.find(test => test.id === activeTest.value) || testTypes[0]
})
</script>