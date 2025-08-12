<template>
    <div class="blog-editor">
      <form @submit.prevent="submitPost" class="space-y-8">
        <!-- Form Header -->
        <div class="pb-6 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-[#333333] mb-2">
            {{ props.initialData.id ? 'Edit Article Details' : 'New Article Details' }}
          </h3>
          <p class="text-sm text-gray-600">
            Fill in the basic information about your article
          </p>
        </div>

        <!-- Basic Information Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Title Input -->
          <div class="lg:col-span-2">
            <label for="title" class="block text-sm font-semibold text-[#333333] mb-3">
              Article Title *
            </label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ACBEA3] focus:border-[#ACBEA3] transition-all duration-200 text-[#333333] font-medium"
              placeholder="Enter a compelling article title"
            />
            <p class="mt-2 text-xs text-gray-500">
              Make it engaging and descriptive - this will be the first thing readers see
            </p>
          </div>
    
          <!-- Author Input -->
          <div>
            <label for="author" class="block text-sm font-semibold text-[#333333] mb-3">
              Author Name *
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <input
                id="author"
                v-model="form.author"
                type="text"
                required
                class="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ACBEA3] focus:border-[#ACBEA3] transition-all duration-200 text-[#333333] font-medium"
                placeholder="Enter author name"
              />
            </div>
          </div>

          <!-- Status/Category -->
          <div>
            <label class="block text-sm font-semibold text-[#333333] mb-3">
              Publication Status
            </label>
            <select 
              v-model="form.status"
              class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ACBEA3] focus:border-[#ACBEA3] transition-all duration-200 text-[#333333] font-medium"
            >
              <option value="draft">Save as Draft</option>
              <option value="published">Publish Immediately</option>
            </select>
          </div>
        </div>
    
        <!-- Image Upload Section -->
        <div class="bg-[#f8f9f8] rounded-lg p-6">
          <label class="block text-sm font-semibold text-[#333333] mb-4">
            Featured Image
          </label>
          
          <!-- Image Upload Area -->
          <div 
            @click="$refs.imageInput.click()"
            @dragover.prevent
            @drop.prevent="handleDrop"
            class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#ACBEA3] hover:bg-white/50 transition-all duration-200"
            :class="{ 'border-[#ACBEA3] bg-white/50': imagePreview }"
          >
            <!-- Preview Image -->
            <div v-if="imagePreview" class="mb-4">
              <img 
                :src="imagePreview" 
                alt="Preview" 
                class="max-w-full h-64 object-cover rounded-lg mx-auto shadow-sm"
              />
            </div>
            
            <!-- Upload Icon and Text -->
            <div v-if="!imagePreview">
              <div class="w-16 h-16 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
              </div>
              <p class="text-[#333333] font-medium mb-2">Click to upload or drag and drop</p>
              <p class="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            
            <!-- Change Image Button -->
            <div v-else class="mt-4">
              <button 
                type="button"
                class="inline-flex items-center px-4 py-2 bg-[#ACBEA3] text-white text-sm font-medium rounded-lg hover:bg-[#6b7a6a] transition-colors duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Change Image
              </button>
              <button 
                type="button"
                @click.stop="clearImage"
                class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          </div>
          
          <input
            ref="imageInput"
            type="file"
            accept="image/*"
            @change="handleImageChange"
            class="hidden"
          />
        </div>
    
        <!-- Content Editor Section -->
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-[#f8f9f8] px-6 py-4 border-b border-gray-200">
            <label class="block text-sm font-semibold text-[#333333] mb-1">
              Article Content *
            </label>
            <p class="text-xs text-gray-600">
              Write your article content using the rich text editor below
            </p>
          </div>
          
          <div class="p-6">
            <div 
              v-if="isClient" 
              ref="editorContainer" 
              class="min-h-[400px] text-[#333333]"
            ></div>
            <div 
              v-else 
              class="min-h-[400px] flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg"
            >
              <div class="text-center">
                <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#ACBEA3] mb-4"></div>
                <p>Loading editor...</p>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-gray-200">
          <div class="flex items-center space-x-4">
            <button
              type="button"
              @click="saveDraft"
              :disabled="loading"
              class="inline-flex items-center px-4 py-2 border border-[#ACBEA3] text-[#ACBEA3] text-sm font-medium rounded-lg hover:bg-[#ACBEA3] hover:text-white transition-all duration-200 disabled:opacity-50"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 12l2 2 4-4"></path>
              </svg>
              Save Draft
            </button>
            
            <button
              type="button"
              @click="$emit('cancel')"
              class="inline-flex items-center px-4 py-2 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
          
          <button
            type="submit"
            :disabled="loading"
            class="inline-flex items-center px-8 py-3 bg-[#EB6534] text-white text-base font-medium rounded-lg hover:bg-[#c16a3d] disabled:opacity-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ loading ? 'Processing...' : (props.initialData.id ? 'Update Article' : 'Publish Article') }}
          </button>
        </div>
      </form>

      <!-- Hidden file input for Quill images -->
      <input
        ref="quillImageInput"
        type="file"
        accept="image/*"
        @change="handleQuillImageUpload"
        class="hidden"
      />
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['submit', 'cancel', 'draft-save'])
  const props = defineProps({
    initialData: {
      type: Object,
      default: () => ({})
    }
  })
  
  const { uploadImage, createBlogPost, updateBlogPost } = useBlog()
  
  const form = reactive({
    title: props.initialData.title || '',
    author: props.initialData.author || '',
    content: props.initialData.content || '',
    image_url: props.initialData.image_url || '',
    status: props.initialData.status || 'draft'
  })
  
  const loading = ref(false)
  const imagePreview = ref(props.initialData.image_url || '')
  const selectedImage = ref(null)
  const editorContainer = ref(null)
  const quillImageInput = ref(null)
  const isClient = ref(false)
  let quill = null
  
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        return
      }
      
      selectedImage.value = file
      const reader = new FileReader()
      reader.onload = (e) => {
        imagePreview.value = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (event) => {
    const files = event.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        selectedImage.value = file
        const reader = new FileReader()
        reader.onload = (e) => {
          imagePreview.value = e.target.result
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const clearImage = () => {
    imagePreview.value = ''
    selectedImage.value = null
    form.image_url = ''
  }

  // Custom image handler for Quill editor
  const quillImageHandler = () => {
    quillImageInput.value.click()
  }

  // Handle image upload from Quill editor
  const handleQuillImageUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    try {
      // Show loading cursor
      quill.enable(false)
      
      // Upload image to your server
      const imageUrl = await uploadImage(file)
      
      // Get current cursor position
      const range = quill.getSelection(true)
      
      // Insert uploaded image at cursor position
      quill.insertEmbed(range.index, 'image', imageUrl)
      
      // Move cursor after the image
      quill.setSelection(range.index + 1)
      
      // Clear the file input
      event.target.value = ''
      
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image: ' + error.message)
    } finally {
      // Re-enable editor
      quill.enable(true)
    }
  }
  
  const initializeQuill = async () => {
    if (!process.client || !editorContainer.value) return
    
    try {
      // Dynamic import of Quill only on client side
      const { default: Quill } = await import('quill')
      
      quill = new Quill(editorContainer.value, {
        theme: 'snow',
        placeholder: 'Start writing your article content here...',
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ['link', 'image'],
              ['clean']
            ],
            handlers: {
              image: quillImageHandler
            }
          }
        }
      })
  
      // Set initial content if editing
      if (props.initialData.content) {
        quill.root.innerHTML = props.initialData.content
      }

      // Auto-save functionality
      let saveTimeout
      quill.on('text-change', () => {
        clearTimeout(saveTimeout)
        saveTimeout = setTimeout(() => {
          // Auto-save draft every 30 seconds of inactivity
          if (form.title.trim() || form.author.trim()) {
            saveDraft(true) // silent save
          }
        }, 30000)
      })
      
    } catch (error) {
      console.error('Error initializing Quill editor:', error)
    }
  }

  const saveDraft = async (silent = false) => {
    try {
      const content = quill ? quill.root.innerHTML : ''
      
      if (!form.title.trim() && !form.author.trim() && !content.trim()) {
        if (!silent) {
          alert('Please add some content before saving a draft')
        }
        return
      }

      const draftData = {
        title: form.title.trim(),
        author: form.author.trim(),
        content: content,
        image_url: form.image_url,
        status: 'draft'
      }

      // Handle image upload if new image selected
      if (selectedImage.value) {
        draftData.image_url = await uploadImage(selectedImage.value)
        selectedImage.value = null
      }

      if (!silent) {
        emit('draft-save', draftData)
      }
      
    } catch (error) {
      console.error('Error saving draft:', error)
      if (!silent) {
        alert('Error saving draft: ' + error.message)
      }
    }
  }
  
  const submitPost = async () => {
    try {
      loading.value = true
      
      // Get content from Quill editor
      const content = quill ? quill.root.innerHTML : ''
      
      if (!form.title.trim() || !form.author.trim() || !content.trim()) {
        throw new Error('Please fill in all required fields (title, author, and content)')
      }
  
      let imageUrl = form.image_url
  
      // Upload new image if selected
      if (selectedImage.value) {
        imageUrl = await uploadImage(selectedImage.value)
      }
  
      const postData = {
        title: form.title.trim(),
        author: form.author.trim(),
        content: content,
        image_url: imageUrl,
        // status: form.status
      }
  
      let result
      if (props.initialData.id) {
        // Update existing post
        result = await updateBlogPost(props.initialData.id, postData)
      } else {
        // Create new post
        result = await createBlogPost(postData)
      }
  
      emit('submit', result)
      
      // Reset form if creating new post
      if (!props.initialData.id) {
        form.title = ''
        form.author = ''
        form.image_url = ''
        // form.status = 'draft'
        imagePreview.value = ''
        selectedImage.value = null
        if (quill) {
          quill.setContents([])
        }
      }
  
    } catch (error) {
      console.error('Error submitting post:', error)
      alert('Error: ' + error.message)
    } finally {
      loading.value = false
    }
  }
  
  onMounted(async () => {
    isClient.value = true
    await nextTick()
    await initializeQuill()
  })
  </script>

  <style>
  /* Quill Editor Theming */
  .ql-toolbar {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 1px solid #e5e7eb !important;
    background: #f8f9f8 !important;
  }

  .ql-container {
    border: none !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
  }

  .ql-editor {
    color: #333333 !important;
    padding: 1.5rem !important;
  }

  .ql-editor.ql-blank::before {
    color: #9ca3af !important;
    font-style: normal !important;
  }

  /* Quill toolbar styling */
  .ql-toolbar .ql-stroke {
    stroke: #6b7280 !important;
  }

  .ql-toolbar .ql-fill {
    fill: #6b7280 !important;
  }

  .ql-toolbar .ql-picker-label {
    color: #6b7280 !important;
  }

  .ql-toolbar button:hover {
    color: #ACBEA3 !important;
  }

  .ql-toolbar button:hover .ql-stroke {
    stroke: #ACBEA3 !important;
  }

  .ql-toolbar button:hover .ql-fill {
    fill: #ACBEA3 !important;
  }

  .ql-toolbar button.ql-active {
    color: #ACBEA3 !important;
  }

  .ql-toolbar button.ql-active .ql-stroke {
    stroke: #ACBEA3 !important;
  }

  .ql-toolbar button.ql-active .ql-fill {
    fill: #ACBEA3 !important;
  }

  /* Focus styles */
  .ql-container.ql-focus {
    box-shadow: 0 0 0 2px #ACBEA3 !important;
    border-radius: 0 0 8px 8px !important;
  }
  </style>