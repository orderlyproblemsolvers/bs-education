<template>
  <div class="min-h-screen bg-white font-inter">

    <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center px-3 py-1 bg-alt text-primary text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
          Since 2007
        </div>
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Expert Admission <span class="text-secondary">Counselling</span>
        </h1>
        <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Navigate your path to international education with personalized guidance. We've helped thousands secure admissions to top universities worldwide.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-colors shadow-sm text-lg flex items-center justify-center gap-2">
            Book Free Consultation
            <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>

      <div class="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
        <div class="pt-8 md:pt-0">
          <h3 class="text-4xl font-bold text-primary mb-2">17+</h3>
          <p class="text-gray-500 font-medium">Years Experience</p>
        </div>
        <div class="pt-8 md:pt-0">
          <h3 class="text-4xl font-bold text-primary mb-2">Global</h3>
          <p class="text-gray-500 font-medium">University Access</p>
        </div>
        <div class="pt-8 md:pt-0">
          <h3 class="text-4xl font-bold text-primary mb-2">100%</h3>
          <p class="text-gray-500 font-medium">Personalized Approach</p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Support
          </h2>
          <p class="text-lg text-gray-600">
            End-to-end guidance throughout your entire admission journey.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
            <UIcon name="i-lucide-compass" class="w-8 h-8 text-secondary mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Educational Counselling</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              One-on-one sessions to understand your background and map your ideal academic pathway.
            </p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Gap analysis</li>
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Career guidance</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
            <UIcon name="i-lucide-building-2" class="w-8 h-8 text-secondary mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">University Selection</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              Expert guidance in choosing courses that align with your profile and career goals.
            </p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Compatibility check</li>
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Cost analysis</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
            <UIcon name="i-lucide-file-edit" class="w-8 h-8 text-secondary mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Application Support</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              Complete assistance with document review, essay writing, and submission.
            </p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Essay reviews</li>
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Status tracking</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
            <UIcon name="i-lucide-banknote" class="w-8 h-8 text-secondary mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">Scholarship Help</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              Assistance identifying and applying for grants and financial aid opportunities.
            </p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Merit scholarships</li>
              <li class="flex items-center gap-2"><UIcon name="i-lucide-check" class="w-4 h-4 text-primary" /> Grant matching</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p class="text-lg text-gray-600">
            A systematic six-step approach to ensure your admission success.
          </p>
        </div>

        <div class="space-y-8">
          <div v-for="(step, index) in processSteps" :key="index" class="flex gap-6 items-start group">
            <div class="w-12 h-12 rounded-full bg-alt text-primary font-bold text-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-primary px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p class="text-xl text-white/80 mb-10 leading-relaxed">
          Take the first step towards your international education dream today.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-colors shadow-lg text-lg flex items-center justify-center gap-2">
            Book a Consultation
          </NuxtLink>
          <a href="tel:+2348065442707" class="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-lg flex items-center justify-center gap-2">
            <UIcon name="i-lucide-phone" class="w-5 h-5" />
            +234 806 544 2707
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Expert Admission Counselling | B&S Educational Services',
  meta: [
    { 
      name: 'description', 
      content: 'Get expert admission counselling for international education. B&S Educational Services provides comprehensive guidance for university selection, application support, and study abroad planning since 2007.' 
    },
  ]
})

const processSteps = [
  {
    title: 'Initial Consultation',
    description: 'Comprehensive discussion about your academic background, career goals, and study preferences. We assess your profile and understand your aspirations.'
  },
  {
    title: 'Profile Analysis',
    description: 'Detailed evaluation of your academic records, test scores, and extracurricular activities. We identify your strengths and areas for improvement.'
  },
  {
    title: 'University Shortlisting',
    description: 'Based on your profile and preferences, we create a customized list of universities and programs that match your criteria and admission chances.'
  },
  {
    title: 'Application Strategy',
    description: 'Development of a comprehensive application strategy including timeline, required documents, and preparation plan for standardized tests.'
  },
  {
    title: 'Application Support',
    description: 'Hands-on assistance with application completion, essay writing, document preparation, and submission to ensure everything is perfect.'
  },
  {
    title: 'Follow-up & Success',
    description: 'Continuous monitoring of application status, interview preparation support, and assistance with final decisions and enrollment procedures.'
  }
]
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>