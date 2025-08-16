<template>
  <div class="min-h-screen bg-[#f4f5f3] p-6">
    <div class="max-w-2xl mx-auto">
      
      <!-- Simple Header -->
      <div class="mb-6">
        <div class="flex items-center space-x-3 mb-4">
          <button 
            @click="router.push('/admin/events')"
            class="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all"
          >
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Edit Event</h1>
            <p class="text-gray-600">Update your event details</p>
          </div>
        </div>
      </div>

      <!-- Main Content Card -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        
        <!-- Loading State -->
        <div v-if="pending" class="text-center py-12">
          <div class="animate-spin w-8 h-8 border-4 border-[#ACBEA3] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p class="text-gray-600">Loading event details...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <div class="text-red-500 text-lg mb-4">❌ Failed to load event</div>
          <p class="text-gray-600 mb-4">{{ error.message || 'Something went wrong' }}</p>
          <button 
            @click="refresh()"
            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Try Again
          </button>
        </div>

        <!-- Event Form -->
        <div v-else>
          <form @submit.prevent="handleUpdateEvent">
            
            <!-- Event Title -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Event Title
              </label>
              <input 
                v-model="formData.title"
                type="text" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"
                placeholder="Enter event title"
              />
            </div>

            <!-- Event Date -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Event Date
              </label>
              <input 
                v-model="formData.event_date"
                type="datetime-local" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"
              />
            </div>

            <!-- Venue -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Venue
              </label>
              <input 
                v-model="formData.venue"
                type="text" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"
                placeholder="Enter event venue"
              />
            </div>

            <!-- Admission Fee Section -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Admission Fee
              </label>
              
              <!-- Free Event Toggle -->
              <div class="mb-4">
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input 
                    v-model="formData.is_free"
                    type="checkbox"
                    class="w-4 h-4 text-[#ACBEA3] border-gray-300 rounded focus:ring-[#ACBEA3] focus:ring-2"
                    @change="handleFreeEventToggle"
                  />
                  <span class="text-sm text-gray-700">This is a free event</span>
                </label>
              </div>

              <!-- Fee Input (only shown when not free) -->
              <div v-if="!formData.is_free" class="grid grid-cols-3 gap-3">
                <div class="col-span-2">
                  <label class="block text-xs font-medium text-gray-600 mb-1">
                    Amount
                  </label>
                  <input 
                    v-model="formData.admission_fee"
                    type="number"
                    step="0.01"
                    min="0"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">
                    Currency
                  </label>
                  <select 
                    v-model="formData.currency"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"
                  >
                    <option value="₦">₦ (Naira)</option>
                    <option value="$">$ (USD)</option>
                    <option value="£">£ (GBP)</option>
                    <option value="€">€ (EUR)</option>
                  </select>
                </div>
              </div>

              <!-- Fee Preview -->
              <div class="mt-3 p-3 bg-gray-50 rounded-lg">
                <div class="text-sm text-gray-600">
                  <span class="font-medium">Admission Fee:</span>
                  <span v-if="formData.is_free" class="text-green-600 font-medium ml-2">Free</span>
                  <span v-else class="font-medium ml-2">
                    {{ formData.currency }}{{ parseFloat(formData.admission_fee || 0).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea 
                v-model="formData.description"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"
                placeholder="Enter event description"
              ></textarea>
            </div>

            <!-- Registration Form Fields -->
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <label class="block text-sm font-medium text-gray-700">
                  Registration Form Fields
                </label>
                <button
                  type="button"
                  @click="addFormField"
                  class="text-[#ACBEA3] hover:text-[#9BAD94] font-medium text-sm"
                >
                  + Add Field
                </button>
              </div>
              
              <div class="space-y-3">
                <div 
                  v-for="(field, index) in formData.form_fields" 
                  :key="index"
                  class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg bg-gray-50"
                >
                  <input 
                    v-model="field.label"
                    type="text" 
                    placeholder="Field Label (e.g., Full Name)"
                    class="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"
                  />
                  <select 
                    v-model="field.type"
                    class="px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"
                  >
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="tel">Phone</option>
                    <option value="number">Number</option>
                    <option value="textarea">Textarea</option>
                  </select>
                  <label class="flex items-center text-sm">
                    <input 
                      v-model="field.required" 
                      type="checkbox"
                      class="mr-2 text-[#ACBEA3] focus:ring-[#ACBEA3]"
                    />
                    Required
                  </label>
                  <button
                    type="button"
                    @click="removeFormField(index)"
                    class="text-red-500 hover:text-red-700 p-1"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
                
                <div v-if="formData.form_fields.length === 0" class="text-center py-8 text-gray-500">
                  No registration fields added yet. Click "Add Field" to create registration form fields.
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4">
              <button
                type="button"
                @click="router.push('/admin/events')"
                class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isUpdating"
                class="flex-1 bg-[#ACBEA3] text-white px-4 py-3 rounded-lg hover:bg-[#9BAD94] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span v-if="isUpdating" class="flex items-center justify-center">
                  <div class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Updating...
                </span>
                <span v-else>Update Event</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  title: 'Edit Event',
  middleware: (to) => {
    const user = useSupabaseUser()
    const { isAdmin } = useAuth()

    if (!user.value && !isAdmin.value) {
      return navigateTo('/admin/login')
    }
  },
});
const supabase = useSupabaseClient();
const router = useRouter();
const route = useRoute();
const toast = useToast();

const eventId = route.params.id;
const isUpdating = ref(false);

// Form data with proper initialization including admission fee fields
const formData = ref({
  title: '',
  event_date: '',
  venue: '',
  description: '',
  form_fields: [], // Initialize as empty array
  admission_fee: 0.00,
  currency: '₦',
  is_free: true
});

// Fetch the specific event
const { data: event, pending, error, refresh } = await useAsyncData(`event-${eventId}`, async () => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', eventId)
    .single();

  if (error) throw error;
  return data;
}, { server: false });

// Fill form when event data loads
watch(event, (newEvent) => {
  if (newEvent) {
    formData.value = {
      title: newEvent.title || '',
      event_date: newEvent.event_date ? formatDateForInput(newEvent.event_date) : '',
      venue: newEvent.venue || '',
      description: newEvent.description || '',
      form_fields: Array.isArray(newEvent.form_fields) ? newEvent.form_fields : [], // Ensure it's always an array
      admission_fee: newEvent.admission_fee || 0.00,
      currency: newEvent.currency || '₦',
      is_free: newEvent.is_free !== undefined ? newEvent.is_free : true
    };
  }
}, { immediate: true });

// Format date for datetime-local input
function formatDateForInput(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().slice(0, 16);
}

// Handle free event toggle
const handleFreeEventToggle = () => {
  if (formData.value.is_free) {
    formData.value.admission_fee = 0.00;
  }
};

// Add new form field
const addFormField = () => {
  formData.value.form_fields.push({
    label: '',
    type: 'text',
    required: false
  });
};

// Remove form field
const removeFormField = (index) => {
  formData.value.form_fields.splice(index, 1);
};

// Handle form submission
const handleUpdateEvent = async () => {
  isUpdating.value = true;
  
  try {
    // Ensure logical consistency between is_free and admission_fee
    const updateData = {
      title: formData.value.title,
      event_date: formData.value.event_date,
      description: formData.value.description,
      venue: formData.value.venue,
      form_fields: formData.value.form_fields,
      admission_fee: formData.value.is_free ? 0.00 : parseFloat(formData.value.admission_fee),
      currency: formData.value.currency,
      is_free: formData.value.is_free
    };

    const { error } = await supabase
      .from('events')
      .update(updateData)
      .eq('id', eventId);

    if (error) throw error;

    toast.add({ 
      title: 'Success', 
      description: 'Event updated successfully!', 
      color: 'green' 
    });
    
    router.push('/admin/events');
    
  } catch (error) {
    toast.add({ 
      title: 'Error', 
      description: error.message, 
      color: 'red' 
    });
  } finally {
    isUpdating.value = false;
  }
};
</script>