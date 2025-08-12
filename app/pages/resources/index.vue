<template>
  <div class="relative w-full min-h-screen bg-[#f4f5f3] p-4 overflow-hidden font-inter">
    <!-- Decorative Pattern Background -->
    <div class="absolute inset-0 opacity-30">
      <svg width="60" height="60" viewBox="0 0 60 60" class="absolute top-0 left-0 w-full h-full">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="#5d6b56"/>
            <circle cx="45" cy="15" r="1" fill="#EB6534"/>
            <circle cx="30" cy="30" r="1" fill="#5d6b56"/>
            <circle cx="15" cy="45" r="1" fill="#EB6534"/>
            <circle cx="45" cy="45" r="1" fill="#5d6b56"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
    </div>

    <!-- Top Decorative Pattern -->
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

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <!-- Header Section -->
      <div class="mb-12 space-y-4">
        <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-[#5d6b56] rounded-full"></div>
          <span class="text-sm font-medium text-[#666666] tracking-wide uppercase">
            Latest Updates
          </span>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight">
          Study Abroad Resources
        </h1>
        <p class="text-lg text-[#666666] max-w-2xl">
          Expert insights, guides, and updates to help you navigate your international education journey
        </p>
        <div class="w-16 h-px bg-[#5d6b56]"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white backdrop-blur-sm p-6 animate-pulse rounded-xl shadow-lg border border-[#DDDDDD]">
          <div class="h-48 bg-gray-200 mb-4 rounded-lg"></div>
          <div class="h-6 bg-gray-200 mb-2 w-3/4 rounded"></div>
          <div class="h-4 bg-gray-200 mb-2 w-1/2 rounded"></div>
          <div class="h-4 bg-gray-200 w-5/6 rounded"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12 space-y-6">
        <div class="w-16 h-16 mx-auto bg-[#EB6534]/10 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-[#EB6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="space-y-2">
          <h3 class="text-lg font-semibold text-[#333333]">Unable to Load Resources</h3>
          <p class="text-[#666666]">{{ error }}</p>
        </div>
        <button 
          @click="fetchPosts"
          class="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#5d6b56] hover:bg-[#6b7a6a] transition-colors rounded-lg shadow-lg"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Try Again
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="posts.length === 0" class="text-center py-12 space-y-6">
        <div class="w-16 h-16 mx-auto bg-[#5d6b56]/10 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-[#5d6b56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <div class="space-y-2">
          <h3 class="text-lg font-semibold text-[#333333]">No Resources Available</h3>
          <p class="text-[#666666]">We're working on adding helpful study abroad content for you.</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="/book-counselling"
            class="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#5d6b56] hover:bg-[#6b7a6a] transition-colors rounded-lg shadow-lg"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z"></path>
            </svg>
            Book Free Consultation
          </NuxtLink>
          <a 
            href="tel:+2348065442707"
            class="inline-flex items-center px-6 py-3 text-sm font-medium text-[#EB6534] border border-[#EB6534] hover:bg-[#EB6534] hover:text-white transition-colors rounded-lg"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call Now
          </a>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard 
          v-for="post in posts" 
          :key="post.id" 
          :post="post" 
        />
      </div>

      <!-- Quick Resources Sidebar -->
      <div v-if="!loading && posts.length > 0" class="mt-16 bg-white rounded-xl p-8 shadow-lg border border-[#DDDDDD]">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-semibold text-[#333333]">Quick Resources</h3>
          <div class="w-8 h-8 bg-[#5d6b56]/10 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-[#5d6b56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-[#5d6b56] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-[#333333] mb-1">2025 Student Guide</h4>
              <p class="text-sm text-[#666666]">Complete application handbook</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-[#EB6534] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-[#333333] mb-1">Scholarship Database</h4>
              <p class="text-sm text-[#666666]">Find funding opportunities</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-[#5d6b56] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-[#333333] mb-1">Country Guides</h4>
              <p class="text-sm text-[#666666]">Destination comparisons</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Side Branding -->
      <div class="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 hidden xl:block">
        <span class="text-xs font-medium text-[#5d6b56]/30 tracking-widest uppercase">Study Abroad • Resources</span>
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
    { name: 'theme-color', content: '#5d6b56' },
    { name: 'keywords', content: 'study abroad resources, international education guides, student resources, Nigeria, university guides, scholarship information' }
  ]
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

* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Custom hover effects */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>