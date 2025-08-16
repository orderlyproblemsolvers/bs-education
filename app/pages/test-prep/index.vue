<template>
    <div class="test-prep-page">
      <!-- Hero Section -->
      <section class="bg-gray-50 py-20">
        <div class="container mx-auto px-5">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="text-center lg:text-left">
              <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
                Ace Your <span class="text-[#5d6b56]">International Tests</span>
                <br>Study Abroad with Confidence
              </h1>
              <p class="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
                From IELTS to SAT, GRE to university entrance exams - we provide comprehensive test preparation that guarantees results. Join thousands of successful students who achieved their dream scores.
              </p>
              
              <!-- Stats -->
              <div class="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
                <div class="text-center">
                  <div class="text-2xl font-bold text-[#5d6b56]">500+</div>
                  <div class="text-sm text-gray-600 mt-1">Students Trained</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-[#5d6b56]">95%</div>
                  <div class="text-sm text-gray-600 mt-1">Success Rate</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-[#5d6b56]">7.5+</div>
                  <div class="text-sm text-gray-600 mt-1">Avg IELTS Score</div>
                </div>
              </div>
  
              <div class="flex flex-wrap justify-center lg:justify-start gap-4">
                <button class="bg-[#5d6b56] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#6b7a6a] transition-colors shadow-lg">
                  Book Free Assessment
                  <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                </button>
                <button class="border border-[#eb6534] text-[#eb6534] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#eb6534] hover:text-white transition-colors shadow-lg">
                  <Icon name="heroicons:phone" class="w-4 h-4" />
                  Call (234) 806 544 2707
                </button>
              </div>
            </div>
  
            <div class="relative">
              <div class=" bg-gray-100 shadow-sm border border-[#5d6b56] bg-opacity-10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-none rounded-bl-none p-8 text-center">
                <div class="text-6xl mb-4">🎓</div>
                <h3 class="text-xl font-bold text-black mb-2">Success Stories</h3>
                <p class="text-gray-700 mb-6">Join our community of successful test takers</p>
                
                <!-- Simple success indicators -->
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded-lg flex items-center gap-3 shadow-sm">
                    <div class="text-2xl">📊</div>
                    <div class="text-left">
                      <div class="font-semibold text-sm text-black">Live Progress Tracking</div>
                      <div class="text-xs text-gray-600">Monitor your improvement</div>
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded-lg flex items-center gap-3 shadow-sm">
                    <div class="text-2xl">🎯</div>
                    <div class="text-left">
                      <div class="font-semibold text-sm text-black">Target Achievement</div>
                      <div class="text-xs text-gray-600">IELTS 8.0+ Scores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Test Categories Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-5">
          <div class="text-center mb-16 max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">Choose Your Test Preparation</h2>
            <p class="text-lg text-gray-700">
              Comprehensive preparation programs designed for Nigerian students aiming for international education
            </p>
          </div>
  
          <div class="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              v-for="test in testTypes" 
              :key="test.id"
              :class="[
                'min-w-[200px] p-4 rounded-lg border-2 transition-colors',
                activeTest === test.id 
                  ? 'bg-[#5d6b56] text-white border-[#5d6b56]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#5d6b56] hover:text-[#5d6b56]'
              ]"
              @click="activeTest = test.id"
            >
              <div class="flex items-center justify-start gap-3">
                <div class="text-xl">{{ test.icon }}</div>
                <div class="text-left">
                  <div class="font-semibold">{{ test.name }}</div>
                  <div class="text-xs opacity-80">{{ test.shortDesc }}</div>
                </div>
              </div>
            </button>
          </div>
  
          <div class="bg-gray-50 rounded-2xl p-10 mt-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div class="mb-6">
                  <h3 class="text-2xl font-bold text-black mb-3">{{ currentTest.fullName }}</h3>
                  <div class="flex flex-wrap gap-2">
                    <span class="bg-[#5d6b56] bg-opacity-10 text-white px-3 py-1 rounded-full text-sm font-semibold">{{ currentTest.successRate }} Success Rate</span>
                    <span class="bg-[#5d6b56] bg-opacity-10 text-white px-3 py-1 rounded-full text-sm font-semibold">{{ currentTest.duration }}</span>
                  </div>
                </div>
  
                <p class="text-gray-700 mb-8">{{ currentTest.description }}</p>
  
                <div>
                  <h4 class="text-lg font-semibold text-black mb-4">What You'll Get:</h4>
                  <ul class="grid gap-3 mb-8">
                    <li v-for="feature in currentTest.features" :key="feature" class="flex items-start gap-2">
                      <Icon name="heroicons:check" class="w-5 h-5 text-[#5d6b56] mt-0.5 flex-shrink-0" />
                      <span class="text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              <div>
                <div class="bg-white rounded-tl-[60px] rounded-br-[60px] rounded-tr-none rounded-bl-none p-8 shadow-lg text-center border border-gray-200">
                  <div class="mb-8">
                    <div class="w-32 h-32 rounded-full bg-gradient-to-br from-[#5d6b56] to-[#6b7a6a] flex flex-col items-center justify-center mx-auto text-white">
                      <div class="text-3xl font-bold">{{ currentTest.avgScore }}</div>
                      <div class="text-xs opacity-90">Avg Score</div>
                    </div>
                  </div>
                  
                  <div class="space-y-4">
                    <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span class="text-gray-600">Success Rate</span>
                      <span class="font-semibold text-black">{{ currentTest.successRate }}</span>
                    </div>
                    <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span class="text-gray-600">Duration</span>
                      <span class="font-semibold text-black">{{ currentTest.duration }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Class Size</span>
                      <span class="font-semibold text-black">Max 8 students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Why Choose Us Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-5">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-black">Why 95% of Our Students Achieve Their Target Scores</h2>
          </div>
  
          <div class="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="feature in features" 
              :key="feature.title"
              class="bg-gray-50 p-8 rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none text-center hover:shadow-lg transition-shadow"
            >
              <div class="w-16 h-16 rounded-full bg-[#5d6b56] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <Icon :name="feature.icon" class="w-8 h-8 text-[#5d6b56]" />
              </div>
              <h3 class="text-xl font-semibold mb-3 text-black">{{ feature.title }}</h3>
              <p class="text-gray-700">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-[#5d6b56] to-[#6b7a6a] text-white">
        <div class="container mx-auto px-5 text-center">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Achieve Your Target Score?</h2>
            <p class="text-lg opacity-90 mb-10">
              Join thousands of successful students. Book your free assessment and get a personalized study plan today.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button class="bg-white text-[#5d6b56] px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
                Book Free Assessment
                <Icon name="heroicons:arrow-right" class="w-5 h-5" />
              </button>
              <button class="bg-[#eb6534] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#b66654] transition-colors shadow-lg">
                <Icon name="i-lucide-message-circle" class="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
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