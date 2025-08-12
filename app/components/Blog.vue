<template>
  <section class="bg-white py-20 px-6 md:px-12 lg:px-24">
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-3xl sm:text-4xl font-bold text-[#859484] mb-12 text-center"
      >
        News, Updates & Featured Scholarships
      </h2>

      <!-- Loading State -->
      <div v-if="loading" class="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="n in 3"
          :key="n"
          class="rounded-xl overflow-hidden shadow border border-gray-100 animate-pulse"
        >
          <div class="w-full h-56 bg-gray-200"></div>
          <div class="p-6 bg-white">
            <div class="h-6 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600 mb-4">{{ error }}</p>
        <button
          @click="fetchPosts"
          class="bg-[#EB6534] text-white px-6 py-2 rounded-lg hover:bg-[#d55529] transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Posts Grid -->
      <div
        v-else-if="postsWithExcerpts.length > 0"
        class="grid gap-10 lg:grid-cols-3 md:grid-cols-2"
      >
        <div
          v-for="post in postsWithExcerpts"
          :key="post.id"
          class="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
        >
          <NuxtImg
            v-if="post.image_url"
            :src="post.image_url || '/images/placeholder-blog.jpg'"
            :alt="post.title"
            class="w-full h-56 object-cover"
            format="webp"
            loading="lazy"
          />
          <div class="p-6 bg-white">
            <h3 class="text-xl font-semibold text-[#859484] mb-2">
              {{ post.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>
            <NuxtLink
              :to="`/resources/${post.id}`"
              class="text-[#EB6534] font-medium text-sm hover:underline transition-colors"
            >
              Read more →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- No Posts State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600">No blog posts available at the moment.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getRecentBlogPosts } = useBlog();

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchPosts = async () => {
  try {
    loading.value = true;
    error.value = null;
    posts.value = await getRecentBlogPosts(3);
  } catch (err) {
    console.error("Error fetching recent posts:", err);
    error.value = "Failed to load blog posts. Please try again.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});

const postsWithExcerpts = computed(() => {
  return posts.value.map((post) => ({
    ...post,
    excerpt: post.content
      ? (() => {
          const textContent = post.content
            .replace(/<[^>]*>/g, "") // Remove HTML tags
            .replace(/\s+/g, " ") // Replace multiple spaces with single space
            .trim(); // Remove leading/trailing whitespace
          return textContent.length > 100
            ? textContent.substring(0, 100) + "..."
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
