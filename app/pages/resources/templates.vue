<template>
    <section class="py-20 px-6 md:px-12 lg:px-24 bg-[#f4f5f3]">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <h1 class="text-3xl sm:text-4xl font-bold text-[#859484] mb-8 text-center">
          Download OurTemplates
        </h1>
  
        <!-- Loading State -->
        <div v-if="loading" class="text-gray-600 text-center animate-pulse py-12">
          Loading brochures...
        </div>
  
        <!-- Empty State -->
        <div v-else-if="brochures.length === 0" class="text-gray-600 text-center py-12">
          No brochures available yet.
        </div>
  
        <!-- Brochure List -->
        <ul v-else class="grid gap-6 sm:grid-cols-2">
          <li
            v-for="b in brochures"
            :key="b.id"
            class="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div class="p-6 flex-1 flex flex-col justify-between">
              <!-- Brochure Info -->
              <div>
                <h2 class="text-lg font-semibold text-[#859484] mb-1">
                  {{ b.title }}
                </h2>
              </div>
  
              <!-- Download Button -->
              <div class="mt-4">
                <a
                  :href="b.file_url"
                  target="_blank"
                  rel="noopener"
                  class="block w-full text-center px-6 py-3 border-2 border-[#859484] text-[#859484] font-medium rounded-lg transition-all duration-200 hover:bg-[#859484] hover:text-white"
                >
                  Download
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  useSeoMeta({
    title: 'Download Our Templates',
    description: 'Access our latest brochures and templates to help you with your study abroad journey.',
    ogTitle: 'Download Our Templates',
    ogDescription: 'Explore and download our templates for detailed information on studying abroad with B&S Educational Services.',
    ogImage: '/img/main-logo.png',
    twitterCard: 'summary_large_image'
  })
  import { ref, onMounted } from 'vue'
  import { useSupabaseClient } from '#imports'
  
  const supabase = useSupabaseClient()
  const brochures = ref([])
  const loading = ref(true)
  
  async function fetchBrochures() {
    loading.value = true
    const { data, error } = await supabase
      .from('brochures')
      .select('*')
      .order('created_at', { ascending: false })
  
    if (error) {
      console.error('Error fetching brochures:', error)
      brochures.value = []
    } else {
      brochures.value = data || []
    }
    loading.value = false
  }
  
  function formatDate(dt) {
    if (!dt) return ''
    const d = new Date(dt)
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString()
  }
  
  onMounted(fetchBrochures)
  </script>
  