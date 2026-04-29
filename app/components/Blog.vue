<template>
  <section class="bg-white py-20 px-6 md:px-12 lg:px-24">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
        Study Abroad Guides, Scholarships & Deadlines
      </h2>

      <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-6 lg:min-h-[550px]">
        <div
          v-for="(n, index) in 3"
          :key="n"
          class="rounded-xl overflow-hidden shadow border border-gray-100 animate-pulse bg-white flex"
          :class="index === 0 ? 'lg:col-span-3 lg:row-span-2 flex-col' : 'lg:col-span-2 lg:row-span-1 flex-col sm:flex-row'"
        >
          <div 
            class="bg-gray-200 shrink-0"
            :class="index === 0 ? 'w-full h-64 md:h-[350px] lg:h-[55%]' : 'w-full sm:w-2/5 h-48 sm:h-full'"
          ></div>
          
          <div 
            class="flex flex-col w-full"
            :class="index === 0 ? 'p-6 md:p-8 flex-grow' : 'p-5 lg:p-6 justify-center'"
          >
            <div class="h-7 bg-gray-200 rounded w-3/4 mb-4" :class="index === 0 ? 'md:h-9' : ''"></div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6 mb-6" :class="index !== 0 ? 'hidden sm:block' : ''"></div>
            <div class="h-4 bg-gray-200 rounded w-24 mt-auto"></div>
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
        class="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-6 lg:min-h-[550px]"
      >
        <div
          v-for="(post, index) in postsWithExcerpts.slice(0, 3)"
          :key="post.id"
          class="rounded-xl overflow-hidden shadow transition-all duration-300 border border-gray-100 group bg-white flex hover:shadow-lg"
          :class="index === 0 ? 'lg:col-span-3 lg:row-span-2 flex-col' : 'lg:col-span-2 lg:row-span-1 flex-col sm:flex-row'"
        >
          <div 
            class="shrink-0 relative overflow-hidden"
            :class="index === 0 ? 'w-full h-64 md:h-[350px] lg:h-[55%]' : 'w-full sm:w-2/5 h-48 sm:h-full'"
          >
            <NuxtImg
              v-if="post.image_url"
              :src="post.image_url || '/images/placeholder-blog.jpg'"
              :alt="post.title"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              format="webp"
              loading="lazy"
            />
            <div v-else class="absolute inset-0 w-full h-full bg-gray-100 flex items-center justify-center">
              <span class="text-gray-400">No image</span>
            </div>
          </div>

          <div 
            class="flex flex-col w-full"
            :class="index === 0 ? 'p-6 md:p-8 flex-grow' : 'p-5 lg:p-6 justify-center'"
          >
            <NuxtLink :to="`/resources/${post.id}`" class="group-hover:text-[#EB6534] transition-colors">
              <h3 
                class="font-semibold text-black mb-3 leading-snug"
                :class="index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'"
              >
                {{ post.title }}
              </h3>
            </NuxtLink>
            
            <p 
              class="text-gray-600 mb-6 leading-relaxed"
              :class="index === 0 ? 'line-clamp-3 sm:line-clamp-4 text-base' : 'line-clamp-2 text-sm'"
            >
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

      <div class="flex justify-center mt-12">
        <NuxtLink
          to="/resources"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-semibold rounded-lg shadow hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
        >
          View More Resources
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
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