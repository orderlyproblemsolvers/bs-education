<template>
    <div class="min-h-screen bg-[#f4f5f3] p-6">
      <div class="max-w-6xl mx-auto">
        
        <!-- Loading State -->
        <div v-if="pending" class="text-center py-12">
          <div class="animate-spin w-8 h-8 border-4 border-[#ACBEA3] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p class="text-gray-600">Loading registrations...</p>
        </div>
  
        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <div class="text-red-500 text-lg mb-4">❌ Failed to load registrations</div>
          <p class="text-gray-600 mb-4">{{ error.message || 'Something went wrong' }}</p>
          <button 
            @click="refresh()"
            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
  
        <!-- Main Content -->
        <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200">
          
          <!-- Header -->
          <div class="p-6 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm text-gray-500 mb-1">Registrations for</p>
                <h1 class="text-2xl font-bold text-gray-900">{{ eventData?.title || 'Event' }}</h1>
                <p class="text-sm text-gray-600 mt-1">
                  {{ registrations.length }} {{ registrations.length === 1 ? 'registration' : 'registrations' }}
                </p>
              </div>
              <button
                @click="$router.push('/admin/events')"
                class="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Back to Events</span>
              </button>
            </div>
          </div>
  
          <!-- Content -->
          <div class="p-6">
            <!-- No Registrations State -->
            <div v-if="registrations.length === 0" class="text-center py-12">
              <div class="text-gray-400 text-6xl mb-4">📋</div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No registrations yet</h3>
              <p class="text-gray-500">No one has registered for this event yet.</p>
            </div>
  
            <!-- Registrations Table -->
            <div v-else class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registration Date
                    </th>
                    <th 
                      v-for="field in eventData?.form_fields || []" 
                      :key="field.label"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {{ field.label }}
                      <span v-if="field.required" class="text-red-500 ml-1">*</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(registration, index) in registrations" :key="index" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ formatDate(registration.created_at) }}
                    </td>
                    <td 
                      v-for="field in eventData?.form_fields || []" 
                      :key="field.label"
                      class="px-6 py-4 text-sm text-gray-900"
                    >
                      <div class="max-w-xs">
                        <span v-if="registration.form_data && registration.form_data[field.label]" class="break-words">
                          {{ registration.form_data[field.label] }}
                        </span>
                        <span v-else class="text-gray-400 italic">-</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <!-- Export Button -->
            <div v-if="registrations.length > 0" class="mt-6 flex justify-end">
              <button
                @click="exportToCSV"
                class="flex items-center space-x-2 px-4 py-2 bg-[#ACBEA3] text-white rounded-lg hover:bg-[#9BAD94] transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Export CSV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'admin',
    middleware: (to) => {
    const user = useSupabaseUser()
    const { isAdmin } = useAuth()

    if (!user.value && !isAdmin.value) {
      return navigateTo('/admin/login')
    }
  },
  });
  
  const supabase = useSupabaseClient();
  const route = useRoute();
  const eventId = route.params.id;
  
  // Reactive variables
  const eventData = ref(null);
  const registrations = ref([]);
  
  // Fetch event and registrations
  const { pending, error, refresh } = await useAsyncData(
    `event-registrations-${eventId}`,
    async () => {
      try {
        // 1. Fetch the event details
        const { data: event, error: eventError } = await supabase
          .from('events')
          .select('title, form_fields')
          .eq('id', eventId)
          .single();
  
        if (eventError) throw eventError;
        eventData.value = event;
  
        // 2. Fetch registrations
        const { data: regs, error: regsError } = await supabase
          .from('registrations')
          .select('created_at, form_data')
          .eq('event_id', eventId)
          .order('created_at', { ascending: false }); // Most recent first
  
        if (regsError) throw regsError;
        registrations.value = regs || [];
  
        return { event, registrations: regs };
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    { server: false }
  );
  
  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Helper function to properly escape CSV values
  const escapeCSVValue = (value) => {
    if (value === null || value === undefined) return '';
    
    const stringValue = String(value);
    
    // If the value contains comma, quote, or newline, wrap it in quotes and escape internal quotes
    if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n') || stringValue.includes('\r')) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    
    return stringValue;
  };
  
  // Export to CSV function
  const exportToCSV = () => {
    if (!registrations.value.length || !eventData.value?.form_fields) return;
  
    // Create CSV headers - escape them too
    const headers = ['Registration Date', ...eventData.value.form_fields.map(field => escapeCSVValue(field.label))];
    
    // Create CSV rows
    const rows = registrations.value.map(reg => {
      // Format date without commas for CSV
      const csvDate = new Date(reg.created_at).toLocaleString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).replace(',', ''); // Remove any comma that might appear
      
      const row = [escapeCSVValue(csvDate)];
      
      eventData.value.form_fields.forEach(field => {
        const value = reg.form_data && reg.form_data[field.label] ? reg.form_data[field.label] : '';
        row.push(escapeCSVValue(value));
      });
      return row;
    });
  
    // Combine headers and rows
    const csvContent = [headers, ...rows]
      .map(row => row.join(','))
      .join('\n');
  
    // Download the CSV
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${eventData.value.title}-registrations.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Debug: Log the data to console
  watch([eventData, registrations], ([event, regs]) => {
    console.log('Event Data:', event);
    console.log('Registrations:', regs);
    if (event?.form_fields) {
      console.log('Form Fields:', event.form_fields);
    }
    if (regs?.length > 0) {
      console.log('Sample Registration:', regs[0]);
    }
  }, { immediate: true });
  </script>