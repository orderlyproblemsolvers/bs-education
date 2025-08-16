<template>
  <div class="min-h-screen bg-[#f4f5f3] font-inter">
    <!-- Decorative Pattern Top Left -->
    <svg
      class="absolute top-0 left-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 opacity-30 z-0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="2" fill="#5d6b56" />
      <circle cx="30" cy="10" r="2" fill="#EB6534" />
      <circle cx="50" cy="10" r="2" fill="#5d6b56" />
      <circle cx="70" cy="10" r="2" fill="#EB6534" />
      <circle cx="90" cy="10" r="2" fill="#5d6b56" />
      <circle cx="10" cy="30" r="2" fill="#EB6534" />
      <circle cx="30" cy="30" r="2" fill="#5d6b56" />
      <circle cx="50" cy="30" r="2" fill="#EB6534" />
      <circle cx="70" cy="30" r="2" fill="#5d6b56" />
      <circle cx="90" cy="30" r="2" fill="#EB6534" />
      <circle cx="10" cy="50" r="2" fill="#5d6b56" />
      <circle cx="30" cy="50" r="2" fill="#EB6534" />
      <circle cx="50" cy="50" r="2" fill="#5d6b56" />
      <circle cx="70" cy="50" r="2" fill="#EB6534" />
      <circle cx="90" cy="50" r="2" fill="#5d6b56" />
    </svg>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
          Study Abroad Resources
        </h1>
        <p class="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
          Expert insights, guides, and updates to help you navigate your international education journey
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white rounded-xl p-6 shadow-lg border border-[#DDDDDD]">
          <div class="h-48 bg-gray-200 mb-4 rounded-lg animate-pulse"></div>
          <div class="h-6 bg-gray-200 mb-3 w-3/4 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 mb-2 w-1/2 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 w-5/6 rounded animate-pulse"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-16">
        <div class="w-16 h-16 mx-auto bg-[#EB6534] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-[#EB6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[#333333] mb-3">Unable to Load Resources</h3>
        <p class="text-[#666666] mb-6">{{ error }}</p>
        <button 
          @click="fetchPosts"
          class="inline-flex items-center gap-2 px-6 py-3 bg-[#5d6b56] text-white font-semibold rounded-lg hover:bg-[#6b7a6a] transition-colors shadow-lg"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Try Again
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="posts.length === 0" class="text-center py-16">
        <div class="w-16 h-16 mx-auto bg-[#5d6b56] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-[#5d6b56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[#333333] mb-3">No Resources Available Yet</h3>
        <p class="text-[#666666] mb-8 max-w-md mx-auto">
          We're working on adding helpful study abroad content for you. In the meantime, let's start with a free consultation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="/book-counselling"
            class="inline-flex items-center gap-2 px-6 py-3 bg-[#5d6b56] text-white font-semibold rounded-lg hover:bg-[#6b7a6a] transition-colors shadow-lg"
          >
            Book Free Consultation
          </NuxtLink>
          <a 
            href="tel:+2348065442707"
            class="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#EB6534] text-[#EB6534] font-semibold rounded-lg hover:bg-[#EB6534] hover:text-white transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call Now
          </a>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BlogCard 
            v-for="post in posts" 
            :key="post.id" 
            :post="post" 
          />
        </div>

        <!-- Quick Resources Section -->
        <div class="bg-white rounded-xl p-8 shadow-lg border border-[#DDDDDD]">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-[#5d6b56] bg-opacity-10 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-[#5d6b56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[#333333]">Popular Resources</h3>
              <p class="text-[#666666]">Essential guides for your study abroad journey</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NuxtLink to="/resources/templates" class="flex items-start gap-3 p-4 rounded-lg hover:bg-[#f4f5f3] transition-colors">
              <div class="w-10 h-10 bg-[#5d6b56] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#333333] mb-1">2025 Student Guide</h4>
                <p class="text-sm text-[#666666]">Complete application templates for international education</p>
              </div>
            </NuxtLink>
            
            <NuxtLink to="/events" class="flex items-start gap-3 p-4 rounded-lg hover:bg-[#f4f5f3] transition-colors">
              <div class="w-10 h-10 bg-[#EB6534] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#333333] mb-1">Exciting Events </h4>
                <p class="text-sm text-[#666666]">Participate in our upcoming events and seminars</p>
              </div>
            </NuxtLink>
            
            <NuxtLink to="/countries" class="flex items-start gap-3 p-4 rounded-lg hover:bg-[#f4f5f3] transition-colors">
              <div class="w-10 h-10 bg-[#5d6b56] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#333333] mb-1">Country Guides</h4>
                <p class="text-sm text-[#666666]">Compare study destinations and requirements</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
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

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>