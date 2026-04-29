<template>
  <main class="min-h-screen bg-surface relative pb-20 overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-base/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none z-0"></div>

    <div v-if="loading" class="relative z-10 flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div class="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-base"></div>
      <p class="text-on-surface-variant font-medium tracking-wide">Preparing article...</p>
    </div>

    <div v-else-if="error" class="relative z-10 max-w-2xl mx-auto mt-20 px-6 text-center">
      <div class="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-red-100">
        <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-on-surface mb-4">Article Not Found</h2>
      <p class="text-on-surface-variant mb-8 text-lg">{{ error.message || 'The blog post you are looking for is unavailable.' }}</p>
      <NuxtLink 
        to="/resources"
        class="inline-flex items-center px-8 py-3.5 font-semibold text-white bg-base rounded-lg hover:bg-base/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
      >
        Return to Resources
      </NuxtLink>
    </div>

    <article v-else-if="post" class="w-full relative z-10">
      <div class="relative w-full h-[45vh] min-h-[400px] bg-gray-900">
        <img 
          v-if="post.image_url"
          :src="post.image_url" 
          :alt="post.title"
          class="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        
        <div class="absolute top-0 left-0 w-full p-6 sm:p-8 z-10 max-w-5xl mx-auto right-0">
          <button 
            @click.prevent="router.back()"
            class="inline-flex items-center text-white hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 shadow-sm"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Articles
          </button>
        </div>
      </div>

      <div class="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 sm:-mt-48">
        <div class="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
          
          <header class="px-6 sm:px-12 pt-12 pb-8 border-b border-gray-100">
            <div class="flex items-center space-x-3 mb-6">
              <span class="px-4 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full border border-secondary/20">
                Featured
              </span>
              <span class="text-sm text-gray-300">&bull;</span>
              <span class="text-sm font-medium text-gray-500">{{ formatDate(post.created_at) }}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-8">
              {{ post.title }}
            </h1>

            <div class="flex flex-wrap items-center gap-6 text-sm">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-base to-base/80 rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-inner text-lg">
                  {{ post.author.charAt(0).toUpperCase() }}
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-base">{{ post.author }}</p>
                  <p class="text-gray-500 font-medium">Author</p>
                </div>
              </div>
            </div>
          </header>

          <div class="px-6 sm:px-12 py-10 sm:py-14">
            <div 
              class="prose max-w-none"
              v-html="post.content"
            ></div>
          </div>

          <footer class="bg-gray-50 px-6 sm:px-12 py-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-600 font-medium">
              Enjoyed this read? Share it with others.
            </p>
            <div class="flex gap-3">
              <button class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-base hover:border-base hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
/* Refined Prose Styles strictly using standard CSS without @apply */
.prose {
  color: #4b5563; /* text-gray-600 */
  line-height: 1.625;
  font-size: 1.125rem; /* text-lg */
}

.prose :deep(h1), 
.prose :deep(h2), 
.prose :deep(h3), 
.prose :deep(h4) {
  color: #111827; /* text-gray-900 */
  font-weight: 800;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.375;
  letter-spacing: -0.025em;
}

.prose :deep(h2) { 
  font-size: 1.875rem; /* text-3xl */
}

.prose :deep(h3) { 
  font-size: 1.5rem; /* text-2xl */
}

.prose :deep(p) {
  margin-bottom: 1.5rem;
}

.prose :deep(img) {
  border-radius: 1rem;
  margin: 3rem 0;
  width: 100%;
  height: auto;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
}

.prose :deep(blockquote) {
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.625;
  border-left: 4px solid var(--color-base, #5d6b56);
  padding: 1.5rem 2rem;
  margin: 3rem 0;
  color: #374151; /* text-gray-700 */
  background-color: color-mix(in srgb, var(--color-base, #5d6b56) 5%, transparent);
  border-radius: 0 1rem 1rem 0;
}

.prose :deep(ul), 
.prose :deep(ol) {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.prose :deep(li) {
  margin: 0.75rem 0;
  position: relative;
}

.prose :deep(ul li::marker) {
  color: var(--color-secondary, #EB6534);
  font-weight: 700;
}

.prose :deep(a) {
  color: var(--color-secondary, #EB6534);
  text-decoration: none;
  border-bottom: 2px solid color-mix(in srgb, var(--color-secondary, #EB6534) 20%, transparent);
  transition: all 0.2s ease-in-out;
  font-weight: 600;
}

.prose :deep(a:hover) {
  border-bottom-color: var(--color-secondary, #EB6534);
  color: color-mix(in srgb, var(--color-secondary, #EB6534) 80%, transparent);
}

.prose :deep(pre) {
  background-color: #111827; /* bg-gray-900 */
  color: #f3f4f6; /* text-gray-100 */
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 2rem 0;
  overflow-x: auto;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

.prose :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
}

.prose :deep(pre code) {
  color: inherit;
  background-color: transparent;
  padding: 0;
}

/* Inline code style */
.prose :deep(:not(pre) > code) {
  background-color: #f3f4f6;
  color: var(--color-secondary, #EB6534);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
}
</style>