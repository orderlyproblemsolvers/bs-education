<template>
  <article
    class="group bg-white overflow-hidden border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:border-[#5d6b56]"
  >
    <!-- Uniform Image Container -->
    <div v-if="post.image_url" class="relative h-48 overflow-hidden">
      <NuxtImg
        :src="post.image_url"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:300px"
        format="webp"
        width="400"
        height="240"
      />
    </div>

    <!-- Compact Content -->
    <div class="p-5 space-y-3">
      <!-- Title -->
      <h3
        class="text-lg font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-[#5d6b56] transition-colors"
      >
        <NuxtLink
          :to="`/resources/${post.id}`"
        >
          {{ post.title }}
        </NuxtLink>
      </h3>

      <!-- Meta -->
      <div class="flex items-center text-xs text-gray-500 space-x-2">
        <span>By {{ post.author }}</span>
        <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
        <time :datetime="post.created_at">{{ formattedDate }}</time>
      </div>

      <!-- Excerpt -->
      <p class="text-gray-600 text-sm line-clamp-2 leading-relaxed">
        {{ excerpt }}
      </p>

      <!-- Read More -->
      <div>
        <NuxtLink
          :to="`/resources/${post.id}`"
          class="inline-flex items-center text-[#5d6b56] hover:text-[#EB6534] font-medium text-sm mt-2 transition-colors"
          aria-label="Read full article"
        >
          Read more
          <svg
            class="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  return new Date(props.post.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
});

const excerpt = computed(() => {
  const textContent = props.post.content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ");
  return textContent.length > 100
    ? textContent.substring(0, 100) + "..."
    : textContent;
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>