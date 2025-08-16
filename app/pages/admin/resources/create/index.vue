<template>
    <div class="min-h-screen bg-[#f4f5f3]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                    New Resource
                  </span>
                </div>
                
                <h1 class="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-3">
                  Create New Article
                </h1>
                <p class="text-gray-600 font-medium max-w-2xl">
                  Share your thoughts and ideas with the school community. Create engaging content that informs and inspires.
                </p>
              </div>
              
              <!-- Quick Tips -->
              <div class="hidden lg:block ml-8">
                <div class="w-64 bg-[#f8f9f8] rounded-lg p-6">
                  <h3 class="text-sm font-semibold text-[#333333] mb-4 flex items-center">
                    <div class="w-5 h-5 bg-[#ACBEA3]/10 rounded mr-2 flex items-center justify-center">
                      <svg class="w-3 h-3 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    Writing Tips
                  </h3>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-start">
                      <div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Use clear, engaging headlines
                    </li>
                    <li class="flex items-start">
                      <div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Add relevant images
                    </li>
                    <li class="flex items-start">
                      <div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Keep paragraphs concise
                    </li>
                    <li class="flex items-start">
                      <div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Preview before publishing
                    </li>
                  </ul>
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
                  <p class="text-sm text-gray-600">Create and format your content</p>
                </div>
              </div>
              
              <!-- Save Status -->
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span class="text-xs text-gray-500">Not saved</span>
              </div>
            </div>
          </div>
          
          <!-- Editor Content -->
          <div class="p-8">
            <BlogEditor 
              @submit="handleSubmit"
              @cancel="handleCancel"
              @draft-save="handleDraftSave"
            />
          </div>
        </div>

        <!-- Help Section -->
        <div class="mt-8 bg-white rounded-xl shadow border border-gray-200 p-8 lg:hidden">
          <h3 class="text-lg font-semibold text-[#333333] mb-6 flex items-center">
            <div class="w-6 h-6 bg-[#ACBEA3]/10 rounded mr-3 flex items-center justify-center">
              <svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            Writing Guidelines
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium text-[#333333] mb-3">Content Tips</h4>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Write compelling headlines that grab attention
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Use subheadings to break up long content
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Include relevant images and media
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-[#333333] mb-3">Publishing</h4>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-[#ACBEA3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Save drafts frequently as you work
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-[#ACBEA3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Preview your article before publishing
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-[#ACBEA3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Add tags and categories for better organization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'admin',
    middleware: (to) => {
    const user = useSupabaseUser()
    const { isAdmin } = useAuth()

    if (!user.value && !isAdmin.value) {
      return navigateTo('/admin/login')
    }
  },
  })
  
  // SEO
  useHead({
    title: 'Create Resource - Admin Dashboard',
    meta: [
      { name: 'description', content: 'Create and publish a new educational resource for The Covenant Academy.' },
      { name: 'robots', content: 'noindex, nofollow' }
    ]
  })
  
  const router = useRouter()
  
  const handleSubmit = async (post) => {
    try {
      // Show success message
      alert('Article created successfully!')
      
      // Redirect to the new post or blog list
      await router.push(`/admin/resources/${post.id}`)
    } catch (error) {
      console.error('Error redirecting after creation:', error)
      alert('Article created but there was an error navigating to it.')
    }
  }
  
  const handleCancel = () => {
    if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      router.push('/admin/resources')
    }
  }
  
  const handleDraftSave = (post) => {
    // Handle draft saving
    console.log('Draft saved:', post)
    // You could show a temporary visual indicator here
    // For now, just log it - the editor component should handle UI feedback
  }
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
</style>