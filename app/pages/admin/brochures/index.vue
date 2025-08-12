<template>
    <div class="max-w-4xl mx-auto px-6 lg:px-8 py-10">
      <!-- Page Title -->
      <h1 class="text-3xl font-bold text-[#333333] mb-8">
        Manage Brochures
      </h1>
  
      <!-- Upload Form Card -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
        <form @submit.prevent="uploadBrochure" class="space-y-5">
          <!-- Title Input -->
          <input
            v-model="title"
            type="text"
            placeholder="Brochure Title"
            class="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-[#ACBEA3] focus:ring-1 focus:ring-[#ACBEA3]"
          />
  
          <!-- File Input -->
          <input
            type="file"
            @change="onFileChange"
            class="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-[#ACBEA3] focus:ring-1 focus:ring-[#ACBEA3]"
          />
  
          <!-- Action Buttons -->
          <div>
            <button
              type="submit"
              class="px-6 py-3 border-2 border-[#859484] text-[#859484] font-medium rounded-lg transition-all duration-200 hover:bg-[#859484] hover:text-white disabled:opacity-50"
              :disabled="loading"
            >
              {{ loading ? 'Uploading...' : 'Upload Brochure' }}
            </button>
          </div>
        </form>
      </div>
  
      <!-- Empty State -->
      <div
        v-if="brochures.length === 0"
        class="text-gray-600 text-center py-12 bg-white border border-gray-200 rounded-xl"
      >
        No brochures uploaded yet.
      </div>
  
      <!-- Table -->
      <div v-else class="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
        <table class="w-full text-left">
          <thead class="bg-[#f4f5f3] text-gray-700">
            <tr>
              <th class="p-4 font-medium">Title</th>
              <th class="p-4 font-medium">File</th>
              <th class="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="b in brochures"
              :key="b.id"
              class="border-t border-gray-100 hover:bg-[#859484]/5 transition-colors"
            >
              <td class="p-4 text-gray-900">{{ b.title }}</td>
              <td class="p-4">
                <a
                  :href="b.file_url"
                  target="_blank"
                  rel="noopener"
                  class="text-[#EB6534] font-medium hover:underline"
                >
                  Open
                </a>
              </td>
              <td class="p-4">
                <button
                  @click="deleteBrochure(b)"
                  class="text-red-600 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useSupabaseClient } from '#imports'

  definePageMeta({
    layout: 'admin'
  })
  
  const supabase = useSupabaseClient()
  
  const brochures = ref([])
  const title = ref('')
  const file = ref(null)
  const loading = ref(false)
  
  function onFileChange(e) {
    const f = e.target.files && e.target.files[0]
    file.value = f || null
  }
  
  async function fetchBrochures() {
    const { data, error } = await supabase
      .from('brochures')
      .select('*')
      .order('created_at', { ascending: false })
  
    if (error) {
      console.error('Error fetching brochures:', error)
      return
    }
    brochures.value = data || []
  }
  
  async function uploadBrochure() {
    if (!title.value || !file.value) {
      return alert('Please provide a title and choose a file.')
    }
  
    loading.value = true
  
    try {
      const fileExt = file.value.name.split('.').pop()
      const safeName = `${Date.now()}.${fileExt}`
  
      const { error: uploadError } = await supabase.storage
        .from('brochures')
        .upload(safeName, file.value)
  
      if (uploadError) throw uploadError
  
      const { data: publicData } = supabase.storage
        .from('brochures')
        .getPublicUrl(safeName)
      const publicUrl = publicData?.publicUrl || ''
  
      const { error: dbError } = await supabase.from('brochures').insert([
        {
          title: title.value,
          file_path: safeName,
          file_url: publicUrl
        }
      ])
  
      if (dbError) throw dbError
  
      title.value = ''
      file.value = null
      document.querySelectorAll('input[type="file"]').forEach(i => (i.value = ''))
  
      await fetchBrochures()
    } catch (err) {
      console.error(err)
      alert(err?.message || 'Upload failed')
    } finally {
      loading.value = false
    }
  }
  
  async function deleteBrochure(brochure) {
    if (!confirm('Delete this brochure?')) return
  
    loading.value = true
    try {
      const path =
        brochure.file_path ||
        (brochure.file_url ? brochure.file_url.split('/').pop() : null)
      if (path) {
        const { error: removeErr } = await supabase.storage
          .from('brochures')
          .remove([path])
        if (removeErr) console.error('Storage delete error:', removeErr)
      }
  
      const { error: dbDelError } = await supabase
        .from('brochures')
        .delete()
        .eq('id', brochure.id)
      if (dbDelError) throw dbDelError
  
      await fetchBrochures()
    } catch (err) {
      console.error(err)
      alert(err?.message || 'Delete failed')
    } finally {
      loading.value = false
    }
  }
  
  onMounted(fetchBrochures)
  </script>
  