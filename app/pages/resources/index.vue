<template>
  <div class="min-h-screen bg-surface">
    <section class="relative pt-32 pb-16 px-6 lg:px-8 bg-surface overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-base/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="text-center mb-12 max-w-3xl mx-auto">
          <span class="inline-block py-1 px-3 rounded-full bg-base/10 text-base text-xs font-semibold uppercase tracking-widest mb-6">
            Knowledge Base
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-6 leading-tight tracking-tight">
            Study Abroad
            <span class="text-secondary relative whitespace-nowrap">
              Resources
              <svg class="absolute -bottom-2 left-0 w-full h-3 text-secondary/30 hidden sm:block" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </span>
          </h1>
          <p class="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Expert insights, guides, and updates to help you navigate your international education journey with confidence.
          </p>
        </div>

        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="h-48 bg-gray-200 mb-5 rounded-xl animate-pulse"></div>
            <div class="h-6 bg-gray-200 mb-4 w-3/4 rounded-lg animate-pulse"></div>
            <div class="h-4 bg-gray-200 mb-3 w-1/2 rounded-lg animate-pulse"></div>
            <div class="h-4 bg-gray-200 w-5/6 rounded-lg animate-pulse"></div>
          </div>
        </div>

        <div v-else-if="error" class="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <div class="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-on-surface mb-3">Unable to Load Resources</h3>
          <p class="text-on-surface-variant mb-8 text-lg">{{ error }}</p>
          <button 
            @click="fetchPosts"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-base text-white font-semibold rounded-lg hover:bg-base/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Try Again
          </button>
        </div>

        <div v-else-if="posts.length === 0" class="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <div class="w-20 h-20 mx-auto bg-base/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-on-surface mb-3">No Resources Available Yet</h3>
          <p class="text-on-surface-variant mb-10 text-lg max-w-lg mx-auto">
            We're working on adding helpful study abroad content for you. In the meantime, let's start with a free consultation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink 
              to="/contact"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-base text-white font-semibold rounded-lg hover:bg-base/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              Book Free Consultation
            </NuxtLink>
            <a 
              href="tel:+2348065442707"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-on-surface font-semibold rounded-lg hover:bg-gray-50 hover:border-secondary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm w-full sm:w-auto"
            >
              <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Call Now
            </a>
          </div>
        </div>

        <div v-else>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <BlogCard 
              v-for="post in posts" 
              :key="post.id" 
              :post="post" 
            />
          </div>

          <div class="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
            <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 pb-6 border-b border-gray-100">
              <div class="w-14 h-14 bg-base/10 rounded-xl flex items-center justify-center shrink-0">
                <svg class="w-7 h-7 text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-on-surface">Popular Resources</h3>
                <p class="text-on-surface-variant mt-1">Essential guides to jumpstart your study abroad journey.</p>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NuxtLink to="/resources/templates" class="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 bg-base rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors">2025 Student Guide</h4>
                  <p class="text-sm text-on-surface-variant leading-relaxed">Complete application templates for international education</p>
                </div>
              </NuxtLink>
              
              <NuxtLink to="/events" class="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors">Exciting Events</h4>
                  <p class="text-sm text-on-surface-variant leading-relaxed">Participate in our upcoming events, webinars, and seminars</p>
                </div>
              </NuxtLink>
              
              <NuxtLink to="/countries" class="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 bg-base rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors">Country Guides</h4>
                  <p class="text-sm text-on-surface-variant leading-relaxed">Compare top study destinations and their specific requirements</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { getAllBlogPosts } = useBlog()

// SEO
useHead({
  title: 'Study Abroad Resources | B&S Educational Services',
  meta: [
    { name: 'description', content: 'Access comprehensive study abroad resources, guides, and expert insights from B&S Educational Services. Everything you need for your international education journey.' },
    { property: 'og:title', content: 'Study Abroad Resources | B&S Educational Services' },
    { property: 'og:description', content: 'Expert study abroad resources and guides for Nigerian students' },
    { name: 'keywords', content: 'study abroad resources, international education guides, student resources, Nigeria, university guides, scholarship information' }
  ]
})

useSeoMeta({
  title: 'Study Abroad Resources | B&S Educational Services',
  description: 'Access comprehensive study abroad resources, guides, and expert insights from B&S Educational Services. Everything you need for your international education journey.',
  ogTitle: 'Study Abroad Resources | B&S Educational Services',
  ogDescription: 'Expert study abroad resources and guides for Nigerian students',
  keywords: 'study abroad resources, international education guides, student resources, Nigeria, university guides, scholarship information'
})

const posts = ref([])
const loading = ref(true)
const error = ref(null)

const fetchPosts = async () => {
  try {
    loading.value = true
    error.value = null
    posts.value = await getAllBlogPosts()
  } catch (err) {
    console.error('Error fetching posts:', err)
    error.value = 'Failed to load resources. Please check your connection and try again.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>