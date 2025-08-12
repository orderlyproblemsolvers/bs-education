<template>
    <div class="min-h-screen bg-[#f4f5f3]">
      <!-- Loading State -->
      <div v-if="loading" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center space-y-6">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ACBEA3]"></div>
          <p class="text-gray-600 font-medium">Loading resource...</p>
        </div>
      </div>
  
      <!-- Error State -->
      <div v-else-if="error" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white rounded-xl shadow border border-gray-200 p-12 text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#333333] mb-3">Resource Not Found</h3>
          <p class="text-gray-600 mb-8 max-w-md mx-auto">{{ error }}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/admin/resources"
              class="inline-flex items-center justify-center px-6 py-3 bg-[#ACBEA3] text-white text-sm font-medium rounded-lg hover:bg-[#6b7a6a] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Resources
            </NuxtLink>
            <button 
              @click="fetchPost"
              class="inline-flex items-center justify-center px-6 py-3 bg-[#EB6534] text-white text-sm font-medium rounded-lg hover:bg-[#c16a3d] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
              </svg>
              Try Again
            </button>
          </div>
        </div>
      </div>
  
      <!-- Edit Form -->
      <div v-else class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="mb-8">
          <div class="flex items-center mb-6">
            <NuxtLink 
              to="#"
              @click.prevent="router.back()"
              class="inline-flex items-center text-[#ACBEA3] hover:text-[#6b7a6a] transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Resources
            </NuxtLink>
          </div>
          
          <!-- Header Card -->
          <div class="bg-white rounded-xl shadow border border-gray-200 p-8">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <!-- Badge -->
                <div class="inline-flex items-center space-x-3 mb-4">
                  <div class="w-3 h-3 bg-[#EB6534] rounded-full"></div>
                  <span class="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                    Edit Resource
                  </span>
                </div>
                
                <h1 class="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-3">
                  Edit Article
                </h1>
                <p class="text-gray-600 font-medium max-w-2xl">
                  Make changes to your article content, update information, and improve your resource.
                </p>
                
                <!-- Article Info -->
                <div v-if="post" class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <span class="font-medium">{{ post.author }}</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <span>Created {{ formatDate(post.created_at) }}</span>
                  </div>
                  <div v-if="post.updated_at !== post.created_at" class="flex items-center">
                    <div class="w-8 h-8 bg-[#EB6534]/10 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-[#EB6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                      </svg>
                    </div>
                    <span>Last updated {{ formatDate(post.updated_at) }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Status Indicator -->
              <div v-if="post" class="hidden lg:block ml-8">
                <div class="bg-[#f8f9f8] rounded-lg p-6 min-w-[200px]">
                  <h3 class="text-sm font-semibold text-[#333333] mb-4 flex items-center">
                    <div class="w-5 h-5 bg-[#ACBEA3]/10 rounded mr-2 flex items-center justify-center">
                      <svg class="w-3 h-3 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    Article Status
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Status</span>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" 
                            :class="post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'">
                        {{ post.status }}
                      </span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">ID</span>
                      <span class="text-xs text-gray-500 font-mono">{{ post.id }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Editor Container -->
        <div class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <!-- Editor Header -->
          <div class="border-b border-gray-200 px-8 py-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-[#333333]">Article Editor</h2>
                  <p class="text-sm text-gray-600">Edit and update your content</p>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="flex items-center space-x-3">
                <NuxtLink 
                  :to="`/admin/resources/${route.params.id}`"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-[#ACBEA3] border border-[#ACBEA3] rounded-lg hover:bg-[#ACBEA3] hover:text-white transition-all duration-200"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Preview
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <!-- Editor Content -->
          <div class="p-8">
            <BlogEditor 
              :initial-data="post"
              @submit="handleSubmit"
              @cancel="handleCancel"
              @draft-save="handleDraftSave"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'admin'
  }) 

  const route = useRoute()
  const router = useRouter()
  const { getBlogPost } = useBlog()
  
  const post = ref(null)
  const loading = ref(true)
  const error = ref(null)
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  const fetchPost = async () => {
    try {
      loading.value = true
      error.value = null
      post.value = await getBlogPost(route.params.id)
    } catch (err) {
      console.error('Error fetching post:', err)
      error.value = 'Blog post not found or failed to load.'
    } finally {
      loading.value = false
    }
  }
  
  const handleSubmit = (updatedPost) => {
    alert('Blog post updated successfully!')
    router.push(`/admin/resources/${updatedPost.id}`)
  }
  
  const handleCancel = () => {
    if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      router.push(`/admin/resources/${route.params.id}`)
    }
  }
  
  const handleDraftSave = (post) => {
    // Handle draft saving
    console.log('Draft saved:', post)
  }
  
  // SEO
  useHead({
    title: 'Edit Resource - Admin Dashboard',
    meta: [
      { name: 'description', content: 'Edit and update educational resources for The Covenant Academy.' },
      { name: 'robots', content: 'noindex, nofollow' }
    ]
  })
  
  onMounted(() => {
    fetchPost()
  })
  </script>
  
  <style scoped>
  .font-inter {
    font-family: 'Inter', sans-serif;
  }

  /* Smooth transitions */
  * {
    transition-property: color, background-color, border-color, transform, opacity, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
  
  /* Custom selection color */
  ::selection {
    background-color: #ACBEA3;
    color: white;
  }
  
  /* Enhanced focus styles for accessibility */
  button:focus,
  a:focus {
    outline: 2px solid #ACBEA3;
    outline-offset: 2px;
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }

  /* Subtle animations */
  .animate-spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>