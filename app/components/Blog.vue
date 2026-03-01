<template>
  <section class="bg-white py-20 px-6 md:px-12 lg:px-24">
    <div class="max-w-5xl mx-auto">
      <h2
        class="text-3xl sm:text-4xl font-bold text-black mb-12 text-center"
      >
        News, Updates & Featured Scholarships
      </h2>

      <div v-if="loading" class="flex flex-col gap-8">
        <div
          v-for="n in 3"
          :key="n"
          class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow border border-gray-100 animate-pulse bg-white"
        >
          <div class="w-full md:w-2/5 lg:w-1/3 h-56 md:h-auto min-h-[220px] bg-gray-200 shrink-0"></div>
          
          <div class="p-6 md:p-8 flex flex-col justify-center w-full">
            <div class="h-7 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
            <div class="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600 mb-4">Failed to load blog posts. Please try again.</p>
        <button
          @click="refreshPosts"
          class="bg-[#EB6534] text-white px-6 py-2 rounded-lg hover:bg-[#d55529] transition-colors font-medium"
        >
          Try Again
        </button>
      </div>

      <div
        v-else-if="postsWithExcerpts.length > 0"
        class="flex flex-col gap-8"
      >
        <div
          v-for="post in postsWithExcerpts"
          :key="post.id"
          class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow  transition-all duration-300 border border-gray-100 group bg-white"
        >
          <div class="w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto shrink-0 relative overflow-hidden">
            <NuxtImg
              v-if="post.image_url"
              :src="post.image_url || '/images/placeholder-blog.jpg'"
              :alt="post.title"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              format="webp"
              loading="lazy"
            />
            <div v-else class="absolute inset-0 w-full h-full bg-gray-100 flex items-center justify-center">
              <span class="text-gray-400">No image</span>
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col justify-center w-full">
            <NuxtLink :to="`/resources/${post.id}`" class="group-hover:text-[#EB6534] transition-colors">
              <h3 class="text-2xl font-semibold text-black mb-3 leading-snug">
                {{ post.title }}
              </h3>
            </NuxtLink>
            
            <p class="text-base text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {{ post.excerpt }}
            </p>
            
            <div class="mt-auto">
              <NuxtLink
                :to="`/resources/${post.id}`"
                class="inline-flex items-center text-[#EB6534] font-semibold text-sm hover:underline transition-all"
              >
                Read more
                <svg class="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
        <p class="text-gray-500 text-lg">No updates available at the moment. Check back soon!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getRecentBlogPosts } = useBlog();

const {
  data: posts,
  pending: loading,
  error,
  refresh: refreshPosts
} = await useAsyncData(
  'recent-blog-posts', 
  () => getRecentBlogPosts(3),
  {
    default: () => [] 
  }
);

const postsWithExcerpts = computed(() => {
  if (!posts.value) return [];
  
  return posts.value.map((post) => ({
    ...post,
    excerpt: post.content
      ? (() => {
          const textContent = post.content
            .replace(/<[^>]*>/g, "") 
            .replace(/\s+/g, " ") 
            .trim(); 
          return textContent.length > 150
            ? textContent.substring(0, 150) + "..."
            : textContent;
        })()
      : "No content available.",
  }));
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>