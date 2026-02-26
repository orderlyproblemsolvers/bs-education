<template>
  <main class="min-h-screen bg-[#f8faf8] font-inter pb-20">
    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div class="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-[#ACBEA3]"></div>
      <p class="text-gray-500 font-medium tracking-wide">Preparing article...</p>
    </div>

    <div v-else-if="error" class="max-w-2xl mx-auto mt-20 px-6 text-center">
      <div class="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
        <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
      <p class="text-gray-600 mb-8">{{ error.message || 'The blog post you are looking for is unavailable.' }}</p>
      <NuxtLink 
        to="/resources"
        class="inline-flex items-center px-6 py-3 font-medium text-white bg-[#ACBEA3] rounded-lg hover:bg-[#97aa8e] transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Return to Resources
      </NuxtLink>
    </div>

    <article v-else-if="post" class="w-full relative">
      <div class="relative w-full h-[45vh] min-h-[400px] bg-[#2c332b]">
        <img 
          v-if="post.image_url"
          :src="post.image_url" 
          :alt="post.title"
          class="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a1f19] via-transparent to-transparent opacity-80"></div>
        
        <div class="absolute top-0 left-0 w-full p-6 sm:p-8 z-10 max-w-5xl mx-auto left-0 right-0">
          <button 
            @click.prevent="router.back()"
            class="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Articles
          </button>
        </div>
      </div>

      <div class="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 sm:-mt-48">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          <header class="px-6 sm:px-10 pt-10 pb-8 border-b border-gray-100">
            <div class="flex items-center space-x-3 mb-6">
              <span class="px-3 py-1 bg-[#EB6534]/10 text-[#EB6534] text-xs font-bold uppercase tracking-wider rounded-full">
                Featured
              </span>
              <span class="text-sm text-gray-400">&bull;</span>
              <span class="text-sm font-medium text-gray-500">{{ formatDate(post.created_at) }}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#333333] tracking-tight leading-[1.15] mb-8">
              {{ post.title }}
            </h1>

            <div class="flex flex-wrap items-center gap-6 text-sm">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gradient-to-br from-[#ACBEA3] to-[#8a9b81] rounded-full flex items-center justify-center mr-3 text-white font-bold shadow-inner">
                  {{ post.author.charAt(0).toUpperCase() }}
                </div>
                <div>
                  <p class="font-semibold text-gray-800">{{ post.author }}</p>
                  <p class="text-gray-500 text-xs">Author</p>
                </div>
              </div>
            </div>
          </header>

          <div class="px-6 sm:px-10 py-10 sm:py-12">
            <div 
              class="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
              v-html="post.content"
            ></div>
          </div>

          <footer class="bg-gray-50 px-6 sm:px-10 py-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-500 font-medium">
              Enjoyed this read? Share it with others.
            </p>
            <div class="flex gap-3">
              <button class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#ACBEA3] hover:border-[#ACBEA3] transition-colors shadow-sm">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#EB6534] hover:border-[#EB6534] transition-colors shadow-sm">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const { getBlogPost } = useBlog()

// Formatter function
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// SSR Data Fetching
const { data: post, pending: loading, error } = await useAsyncData(
  `blog-post-${route.params.id}`,
  () => getBlogPost(route.params.id)
)

// Dynamic SSR SEO Meta Tags
if (post.value) {
  const plainTextExcerpt = post.value.content
    .replace(/<[^>]*>/g, '')
    .substring(0, 160)
    .trim() + '...';

  useSeoMeta({
    title: `${post.value.title} | B&S Educational Services`,
    description: plainTextExcerpt,
    ogTitle: post.value.title,
    ogDescription: plainTextExcerpt,
    ogImage: post.value.image_url || '',
    ogType: 'article',
    author: post.value.author,
    twitterCard: 'summary_large_image',
  })
}
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Refined Prose Styles for modern editorial look */
.prose {
  color: #4b5563; /* gray-600 */
  line-height: 1.8;
  font-size: 1.125rem;
}

.prose h1, .prose h2, .prose h3, .prose h4 {
  color: #1f2937; /* gray-800 */
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.prose h2 { font-size: 1.875rem; }
.prose h3 { font-size: 1.5rem; }

.prose p {
  margin-bottom: 1.5rem;
}

.prose img {
  border-radius: 0.75rem;
  margin: 3rem 0;
  width: 100%;
  height: auto;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.prose blockquote {
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.6;
  border-left: 4px solid #ACBEA3;
  padding: 1.5rem 2rem;
  margin: 3rem 0;
  color: #374151;
  background: linear-gradient(to right, rgba(172, 190, 163, 0.15), transparent);
  border-radius: 0 1rem 1rem 0;
}

.prose ul, .prose ol {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.prose li {
  margin: 0.75rem 0;
  position: relative;
}

.prose ul li::marker {
  color: #EB6534;
}

.prose a {
  color: #EB6534;
  text-decoration: none;
  border-bottom: 2px solid rgba(235, 101, 52, 0.2);
  transition: all 0.2s ease;
  font-weight: 600;
}

.prose a:hover {
  border-bottom-color: #EB6534;
  color: #c55328;
}

.prose pre {
  background: #1f2937;
  color: #f3f4f6;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 2rem 0;
  overflow-x: auto;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.prose code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
}

.prose pre code {
  color: inherit;
  background: transparent;
  padding: 0;
}

/* Inline code style */
.prose :not(pre) > code {
  background: #f3f4f6;
  color: #EB6534;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-weight: 600;
}
</style>