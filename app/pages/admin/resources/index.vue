<template>
  <div
    class="relative w-full min-h-screen bg-[#f4f5f3] p-4 overflow-hidden font-inter"
  >
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        class="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="1" fill="#ACBEA3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Main Container -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-8"
    >
      <!-- Header -->
      <div class="bg-white rounded-xl shadow border border-gray-200 mb-8 p-8">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-3 h-3 bg-[#EB6534] rounded-full"></div>
              <span
                class="text-xs font-semibold text-gray-500 tracking-wide uppercase"
              >
                Admin Dashboard
              </span>
            </div>
            <h1
              class="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-2"
            >
              Resources
            </h1>
            <p class="text-gray-600 font-medium">
              Explore our latest articles and updates
            </p>
          </div>
          <NuxtLink
            to="/admin/resources/create"
            class="group inline-flex items-center justify-center px-6 py-3 bg-[#EB6534] text-white text-sm font-medium rounded-lg hover:bg-[#c16a3d] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Create New
            <UIcon
              name="i-heroicons-plus"
              class="ml-2 w-4 h-4 group-hover:rotate-90 transition-transform duration-200"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Content -->
      <div>
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center py-12">
          <div class="flex flex-col items-center space-y-4">
            <div
              class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ACBEA3]"
            ></div>
            <p class="text-gray-600 font-medium">Loading resources...</p>
          </div>
        </div>

        <!-- Error State -->
        <div
          v-else-if="error"
          class="bg-white rounded-xl shadow border border-gray-200 p-8 text-center"
        >
          <div class="flex justify-center mb-6">
            <div
              class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-exclamation-circle"
                class="w-8 h-8 text-red-600"
              />
            </div>
          </div>
          <h3 class="text-xl font-semibold text-[#333333] mb-3">
            Something went wrong
          </h3>
          <p class="text-gray-600 mb-8 max-w-md mx-auto">{{ error }}</p>
          <button
            @click="fetchPosts"
            class="group inline-flex items-center justify-center px-6 py-3 bg-[#ACBEA3] text-white text-sm font-medium rounded-lg hover:bg-[#6b7a6a] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Try Again
            <UIcon
              name="i-heroicons-arrow-path"
              class="ml-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-200"
            />
          </button>
        </div>

        <!-- Empty State -->
        <div
          v-else-if="posts.length === 0"
          class="bg-white rounded-xl shadow border border-gray-200 p-12 text-center"
        >
          <div class="flex justify-center mb-8">
            <div
              class="w-20 h-20 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-document-text"
                class="w-10 h-10 text-[#ACBEA3]"
              />
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-[#333333] mb-4">
            No resources yet
          </h3>
          <p class="text-gray-600 mb-10 max-w-md mx-auto font-medium">
            Get started by creating your first blog post to share with the
            community.
          </p>
          <NuxtLink
            to="/admin/resources/create"
            class="group inline-flex items-center justify-center px-8 py-4 bg-[#EB6534] text-white text-base font-medium rounded-lg hover:bg-[#c16a3d] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Create First Post
            <UIcon
              name="i-heroicons-arrow-right"
              class="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
            />
          </NuxtLink>
        </div>

        <!-- Resources Grid -->
        <div v-else>
          <!-- Stats Bar -->
          <div
            class="bg-white rounded-xl shadow border border-gray-200 p-6 mb-8"
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div
                  class="w-12 h-12 bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                  <UIcon
                    name="i-heroicons-document-text"
                    class="w-6 h-6 text-[#ACBEA3]"
                  />
                </div>
                <div class="text-2xl font-bold text-[#333333]">
                  {{ posts.length }}
                </div>
                <div class="text-sm text-gray-600 font-medium">
                  Total Articles
                </div>
              </div>
              <div class="text-center">
                <div
                  class="w-12 h-12 bg-[#EB6534]/10 rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                  <UIcon
                    name="i-heroicons-eye"
                    class="w-6 h-6 text-[#EB6534]"
                  />
                </div>
                <div class="text-2xl font-bold text-[#333333]">
                  {{ publishedCount }}
                </div>
                <div class="text-sm text-gray-600 font-medium">Published</div>
              </div>
              <div class="text-center">
                <div
                  class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                  <UIcon
                    name="i-heroicons-clock"
                    class="w-6 h-6 text-gray-600"
                  />
                </div>
                <div class="text-2xl font-bold text-[#333333]">
                  {{ draftCount }}
                </div>
                <div class="text-sm text-gray-600 font-medium">Drafts</div>
              </div>
            </div>
          </div>

          <!-- Resources Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogAdminCard
              v-for="post in posts"
              :key="post.id"
              :post="post"
              @updated="fetchPosts"
            />
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div
        v-if="posts.length > 0"
        class="mt-12 bg-white rounded-xl shadow border border-gray-200 p-8"
      >
        <h3 class="text-lg font-semibold text-[#333333] mb-6">Quick Actions</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#ACBEA3] hover:bg-[#ACBEA3]/5 transition-all duration-200"
          >
            <div
              class="w-10 h-10 bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#ACBEA3]/20"
            >
              <UIcon name="i-heroicons-plus" class="w-5 h-5 text-[#ACBEA3]" />
            </div>
            <div class="text-left">
              <div class="font-medium text-[#333333]">New Article</div>
              <div class="text-sm text-gray-600">Create content</div>
            </div>
          </button>

          <button
            class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#EB6534] hover:bg-[#EB6534]/5 transition-all duration-200"
          >
            <div
              class="w-10 h-10 bg-[#EB6534]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#EB6534]/20"
            >
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-[#EB6534]"
              />
            </div>
            <div class="text-left">
              <div class="font-medium text-[#333333]">Analytics</div>
              <div class="text-sm text-gray-600">View insights</div>
            </div>
          </button>

          <button
            class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#6b7a6a] hover:bg-[#6b7a6a]/5 transition-all duration-200"
          >
            <div
              class="w-10 h-10 bg-[#6b7a6a]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#6b7a6a]/20"
            >
              <UIcon
                name="i-heroicons-cog-6-tooth"
                class="w-5 h-5 text-[#6b7a6a]"
              />
            </div>
            <div class="text-left">
              <div class="font-medium text-[#333333]">Settings</div>
              <div class="text-sm text-gray-600">Manage blog</div>
            </div>
          </button>

          <button
            class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            <div
              class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-200"
            >
              <UIcon
                name="i-heroicons-archive-box"
                class="w-5 h-5 text-gray-600"
              />
            </div>
            <div class="text-left">
              <div class="font-medium text-[#333333]">Archive</div>
              <div class="text-sm text-gray-600">Old posts</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getAllBlogPosts } = useBlog();

// Enhanced SEO
useHead({
  title: "Resources - Admin Dashboard",
  meta: [
    {
      name: "description",
      content:
        "Manage educational resources and blog posts for The Covenant Academy",
    },
    {
      property: "og:title",
      content: "Resources Management - Admin Dashboard",
    },
    {
      property: "og:description",
      content:
        "Administration interface for managing educational resources at The Covenant Academy",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

definePageMeta({
  layout: "admin",
  auth: true,
});

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

// Computed properties for stats
const publishedCount = computed(() => {
  return posts.value.filter((post) => post.status === "published").length;
});

const draftCount = computed(() => {
  return posts.value.filter((post) => post.status === "draft").length;
});

const fetchPosts = async () => {
  try {
    loading.value = true;
    error.value = null;
    posts.value = await getAllBlogPosts();
  } catch (err) {
    console.error("Error fetching posts:", err);
    error.value = "Failed to load resources. Please try again.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.font-inter {
  font-family: "Inter", sans-serif;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity,
    box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Custom selection color */
::selection {
  background-color: #acbea3;
  color: white;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f4f5f3;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #acbea3;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7a6a;
}

/* Enhanced focus styles for accessibility */
button:focus,
a:focus {
  outline: 2px solid #acbea3;
  outline-offset: 2px;
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
