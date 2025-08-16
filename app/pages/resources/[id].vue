<template>
    <div class="relative w-full min-h-screen bg-white overflow-hidden font-inter">
      <!-- Subtle Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" class="absolute top-0 left-0 w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#ACBEA3"/>
            </pattern>
          </defs>
          <rect width="100%" fill="url(#grid)"/>
        </svg>
      </div>
  
      <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12 space-y-6">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#ACBEA3]"></div>
          <p class="text-gray-600">Loading blog post...</p>
        </div>
  
        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12 space-y-6">
          <div class="w-12 h-12 mx-auto bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p class="text-lg text-gray-600 px-4">{{ error }}</p>
          <NuxtLink 
            to="/blog"
            class="inline-flex items-center px-6 py-3 text-sm font-medium text-[#ACBEA3] border border-[#ACBEA3] rounded-lg hover:bg-[#ACBEA3] hover:text-white transition-all duration-200"
          >
            Back to Blog
          </NuxtLink>
        </div>
  
        <!-- Content -->
        <article v-else class="relative w-full">
          <!-- Navigation -->
          <div class="mb-6 sm:mb-8">
            <NuxtLink 
              to="#"
              @click.prevent="router.back()"
              class="inline-flex items-center text-[#ACBEA3] hover:text-[#6b7a6a] transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back
            </NuxtLink>
          </div>
  
          <!-- Featured Image -->
          <div v-if="post.image_url" class="relative mb-6 sm:mb-8 h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-xl shadow border border-gray-200">
            <img 
              :src="post.image_url" 
              :alt="post.title"
              class="w-full h-full object-cover"
            />
          </div>
  
          <!-- Article Header -->
          <header class="mb-8 sm:mb-12">
            <!-- Category Badge -->
            <div class="inline-flex items-center space-x-3 mb-4 sm:mb-6">
              <div class="w-2 h-2 bg-[#EB6534] rounded-full flex-shrink-0"></div>
              <span class="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                Blog Post
              </span>
            </div>
  
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-4 sm:mb-6 leading-tight break-words">
              {{ post.title }}
            </h1>
  
            <!-- Meta Information -->
            <div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3 text-sm text-gray-600 pb-6">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <span class="font-medium truncate">{{ post.author }}</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span class="whitespace-nowrap">{{ formatDate(post.created_at) }}</span>
              </div>
              <div v-if="post.updated_at !== post.created_at" class="flex items-center text-xs text-gray-500">
                <span class="whitespace-nowrap">
                  Updated {{ formatDate(post.updated_at) }}
                </span>
              </div>
            </div>
  
            <!-- Accent Line -->
            <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#ACBEA3] to-[#EB6534] rounded-full"></div>
          </header>
  
          <!-- Article Content -->
          <div class="w-full bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow border border-gray-200 overflow-hidden">
            <div 
              class="prose prose-sm sm:prose-base lg:prose-lg max-w-none w-full"
              v-html="post.content"
            ></div>
          </div>

          <!-- Article Footer -->
          <footer class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="font-semibold text-[#333333] truncate">{{ post.author }}</p>
                  <p class="text-sm text-gray-600 truncate">Published {{ formatDate(post.created_at) }}</p>
                </div>
              </div>
              
              <NuxtLink 
                to="/blog"
                class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#EB6534] rounded-lg hover:bg-[#c16a3d] transition-colors duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                More Articles
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </template>
  
  <script setup>
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
  
  // SEO
  watch(post, (newPost) => {
    if (newPost) {
      useHead({
        title: `${newPost.title} - The Covenant Academy`,
        meta: [
          { name: 'description', content: newPost.content.replace(/<[^>]*>/g, '').substring(0, 160) },
          { property: 'og:title', content: newPost.title },
          { property: 'og:description', content: newPost.content.replace(/<[^>]*>/g, '').substring(0, 160) },
          { property: 'og:image', content: newPost.image_url || '' },
          { property: 'article:author', content: newPost.author },
          { property: 'article:published_time', content: newPost.created_at }
        ]
      })
      useSeoMeta({
        title: `${newPost.title} - The Covenant Academy`,
        description: newPost.content.replace(/<[^>]*>/g, '').substring(0, 160),
        ogTitle: newPost.title,
        ogDescription: newPost.content.replace(/<[^>]*>/g, '').substring(0, 160),
        ogImage: newPost.image_url || '',
        twitterCard: 'summary_large_image'
      })
    }
  })
  

  onMounted(() => {
    fetchPost()
  })
  </script>
  
  <style scoped>
  .font-inter {
    font-family: 'Inter', sans-serif;
  }

  .prose {
    color: #666666;
    line-height: 1.6;
    font-size: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
    color: #333333;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .prose h1 { 
    font-size: clamp(24px, 4vw, 30px);
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .prose h2 { 
    font-size: clamp(22px, 3.5vw, 26px);
    font-weight: 600;
    margin-bottom: 1.25rem;
  }
  .prose h3 { 
    font-size: clamp(16px, 2.5vw, 18px);
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .prose p {
    margin-bottom: 1.25rem;
    font-weight: 500;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .prose img {
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    max-width: 100%;
    height: auto;
  }
  
  .prose blockquote {
    font-style: italic;
    border-left: 4px solid #ACBEA3;
    padding-left: 1rem;
    margin: 2rem 0;
    color: #859484;
    font-weight: 500;
    background: rgba(133, 148, 132, 0.1);
    padding: 1rem;
    border-radius: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  @media (min-width: 640px) {
    .prose blockquote {
      padding-left: 1.5rem;
      padding: 1.5rem;
    }
  }
  
  .prose ul, .prose ol {
    margin: 1.25rem 0;
    padding-left: 1.5rem;
  }
  
  .prose li {
    margin: 0.5rem 0;
    font-weight: 500;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .prose a {
    color: #EB6534;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    font-weight: 500;
    transition: color 0.2s ease;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .prose a:hover {
    color: #c16a3d;
  }

  .prose code {
    background: #f4f5f3;
    color: #333333;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    word-break: break-all;
  }

  .prose pre {
    background: #f4f5f3;
    border: 1px solid #DDDDDD;
    border-radius: 8px;
    padding: 1rem;
    margin: 1.5rem 0;
    overflow-x: auto;
    max-width: 100%;
  }

  @media (min-width: 640px) {
    .prose pre {
      padding: 1.5rem;
    }
  }

  .prose pre code {
    background: transparent;
    padding: 0;
    word-break: normal;
  }

  .prose strong {
    color: #333333;
    font-weight: 600;
  }

  .prose em {
    color: #859484;
    font-style: italic;
  }

  .prose table {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    display: block;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .prose table {
      display: table;
      white-space: normal;
    }
  }

  .prose video,
  .prose iframe,
  .prose embed,
  .prose object {
    max-width: 100%;
    height: auto;
  }
</style>