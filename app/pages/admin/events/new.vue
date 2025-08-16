<template>
  <div class="min-h-screen bg-[#f4f5f3] p-6">
    <div class="max-w-4xl mx-auto">
      
      <!-- Header Section -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="bg-[#ACBEA3] p-3 rounded-xl mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Create New Event</h1>
              <p class="text-gray-600 mt-1">Add a new educational programme to your events calendar</p>
            </div>
          </div>
          
          <button 
            @click="router.push('/admin/events')"
            class="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>Back to Events</span>
          </button>
        </div>
      </div>

      <!-- Main Form -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        <!-- Form Header -->
        <div class="bg-[#f4f5f3] p-6 border-b border-gray-200">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-[#ACBEA3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h2 class="text-xl font-semibold text-gray-900">Event Details</h2>
          </div>
          <p class="text-gray-600 mt-1 text-sm">Fill in the information below to create your event</p>
        </div>

        <!-- Form Content -->
        <div class="p-8">
          <form @submit.prevent="handleCreateEvent" class="space-y-8">
            
            <!-- Basic Event Information -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Basic Information</h3>
              
              <!-- Event Title -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Event Title <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.title"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  placeholder="e.g., Introduction to Digital Marketing"
                />
              </div>

              <!-- Event Date and Time -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Event Date & Time <span class="text-red-500">*</span>
                  </label>
                  <input 
                    v-model="formData.event_date"
                    type="datetime-local" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Venue
                  </label>
                  <input 
                    v-model="formData.venue"
                    type="text" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                    placeholder="e.g., Main Conference Hall"
                  />
                </div>
              </div>

              <!-- Event Pricing -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <label class="block text-sm font-medium text-gray-700">
                    Event Pricing
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      v-model="formData.is_free"
                      @change="handleFreeEventToggle"
                      type="checkbox"
                      class="mr-2 text-[#ACBEA3] focus:ring-[#ACBEA3] rounded"
                    />
                    <span class="text-sm text-gray-700">This is a free event</span>
                  </label>
                </div>

                <div v-if="!formData.is_free" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Admission Fee <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span class="text-gray-500 text-sm">{{ formData.currency }}</span>
                      </div>
                      <input 
                        v-model.number="formData.admission_fee"
                        type="number"
                        step="0.01"
                        min="0"
                        :required="!formData.is_free"
                        class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Currency <span class="text-red-500">*</span>
                    </label>
                    <select 
                      v-model="formData.currency"
                      :required="!formData.is_free"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                    >
                      <option value="₦">NGN (₦) - Nigerian Naira</option>
                      <option value="$">USD ($) - US Dollar</option>
                      <option value="£">GBP (£) - British Pound</option>
                      <option value="€">EUR (€) - Euro</option>
                    </select>
                  </div>
                </div>

                <div v-else class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-green-800 font-medium text-sm">This event is free for all participants</span>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Event Description
                </label>
                <textarea 
                  v-model="formData.description"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  placeholder="Describe what participants will learn and what to expect..."
                ></textarea>
              </div>
            </div>

            <!-- Registration Form Fields -->
            <div class="space-y-6">
              <div class="flex items-center justify-between border-b border-gray-200 pb-2">
                <h3 class="text-lg font-semibold text-gray-900">Registration Form</h3>
                <button
                  type="button"
                  @click="addFormField"
                  class="flex items-center space-x-2 text-[#ACBEA3] hover:text-[#9BAD94] font-medium text-sm transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  <span>Add Field</span>
                </button>
              </div>
              
              <p class="text-sm text-gray-600">
                Create custom registration fields to collect participant information
              </p>

              <div class="space-y-4">
                <div 
                  v-for="(field, index) in formData.form_fields" 
                  :key="index"
                  class="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg bg-gray-50"
                >
                  <div class="flex-1">
                    <input 
                      v-model="field.label"
                      type="text" 
                      placeholder="Field Label (e.g., Full Name)"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"
                    />
                  </div>
                  
                  <div class="w-32">
                    <select 
                      v-model="field.type"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"
                    >
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                      <option value="tel">Phone</option>
                      <option value="number">Number</option>
                      <option value="textarea">Textarea</option>
                    </select>
                  </div>
                  
                  <label class="flex items-center text-sm whitespace-nowrap">
                    <input 
                      v-model="field.required" 
                      type="checkbox"
                      class="mr-2 text-[#ACBEA3] focus:ring-[#ACBEA3] rounded"
                    />
                    Required
                  </label>
                  
                  <button
                    type="button"
                    @click="removeFormField(index)"
                    class="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
                
                <!-- Empty State -->
                <div v-if="formData.form_fields.length === 0" class="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <p class="text-gray-500 mb-2">No registration fields added yet</p>
                  <p class="text-sm text-gray-400">Click "Add Field" to create registration form fields</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                @click="router.push('/admin/events')"
                class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isCreating"
                class="flex-1 bg-[#ACBEA3] text-white px-6 py-3 rounded-lg hover:bg-[#9BAD94] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                <span v-if="isCreating" class="flex items-center justify-center">
                  <div class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Creating Event...
                </span>
                <span v-else>Create Event</span>
              </button>
            </div>

          </form>
        </div>
      </div>

      <!-- Help Section -->
      <div class="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-start">
          <div class="bg-[#EB6534]/10 p-2 rounded-lg mr-4 mt-1">
            <svg class="w-5 h-5 text-[#EB6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Tips for Creating Great Events</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Use clear, descriptive titles that highlight the main benefit</li>
              <li>• Include detailed descriptions to help participants understand what to expect</li>
              <li>• Set up registration forms to collect necessary participant information</li>
              <li>• Set appropriate admission fees - consider your target audience</li>
              <li>• Double-check the date, time, venue, and pricing information before publishing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl max-w-md w-full overflow-hidden">
        <div class="bg-green-50 p-6 text-center">
          <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-green-900 mb-2">Event Created Successfully!</h3>
          <p class="text-green-700">Your new event has been added to the calendar.</p>
        </div>
        
        <div class="p-6">
          <div class="flex flex-col space-y-3">
            <button 
              @click="goToEventsList"
              class="w-full bg-[#ACBEA3] hover:bg-[#9BAD94] text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              View All Events
            </button>
            <button 
              @click="createAnother"
              class="w-full border border-[#ACBEA3] text-[#ACBEA3] hover:bg-[#ACBEA3] hover:text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Create Another Event
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Overlay -->
    <div v-if="isCreating" class="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div class="bg-white rounded-xl p-8 max-w-sm mx-4 text-center">
        <div class="animate-spin w-12 h-12 border-4 border-[#ACBEA3] border-t-transparent rounded-full mx-auto mb-4"></div>
        <h3 class="font-semibold text-gray-900 mb-2">Creating Event...</h3>
        <p class="text-gray-600 text-sm">Please wait while we set up your new event.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  requiresAuth: true,
  title: 'Create New Event - Admin Dashboard',
  layout: 'admin',
  middleware: (to) => {
    const user = useSupabaseUser()
    const { isAdmin } = useAuth()

    if (!user.value && !isAdmin.value) {
      return navigateTo('/admin/login')
    }
  },
})

const supabase = useSupabaseClient();
const router = useRouter();
const toast = useToast();

const isCreating = ref(false);
const showSuccessModal = ref(false);

// Form data
const formData = ref({
  title: '',
  event_date: '',
  venue: '',
  description: '',
  admission_fee: 0,
  currency: '₦', // Default to Nigerian Naira
  is_free: true, // Default to free events
  form_fields: []
});

// Handle free event toggle
const handleFreeEventToggle = () => {
  if (formData.value.is_free) {
    formData.value.admission_fee = 0;
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
const handleCreateEvent = async () => {
  isCreating.value = true;
  
  try {
    const { data, error } = await supabase.from('events').insert([
      {
        title: formData.value.title,
        event_date: formData.value.event_date,
        description: formData.value.description,
        venue: formData.value.venue,
        admission_fee: formData.value.is_free ? 0 : formData.value.admission_fee,
        currency: formData.value.is_free ? '₦' : formData.value.currency,
        is_free: formData.value.is_free,
        form_fields: formData.value.form_fields,
      },
    ]).select().single();

    if (error) throw error;

    // Show success modal
    showSuccessModal.value = true;
    
    // Also show a toast for good measure
    toast.add({ 
      title: 'Event Created!', 
      description: `"${formData.value.title}" has been successfully created.`, 
      color: 'green',
      timeout: 5000
    });
    
  } catch (error) {
    toast.add({ 
      title: 'Creation Failed', 
      description: error.message || 'An error occurred while creating the event. Please try again.', 
      color: 'red',
      timeout: 7000
    });
  } finally {
    isCreating.value = false;
  }
};

const goToEventsList = () => {
  showSuccessModal.value = false;
  router.push('/admin/events');
};

const createAnother = () => {
  showSuccessModal.value = false;
  // Reset the form
  formData.value = {
    title: '',
    event_date: '',
    venue: '',
    description: '',
    admission_fee: 0,
    currency: '₦',
    is_free: true,
    form_fields: []
  };
};

// Set page meta
useHead({
  title: 'Create New Event - Admin Dashboard',
  meta: [
    { name: 'description', content: 'Create a new educational event for B&S Educational Services' }
  ]
});
</script>