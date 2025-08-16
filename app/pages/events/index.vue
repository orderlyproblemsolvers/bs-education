<template>
  <div class="min-h-screen bg-[#f4f5f3]">
    <UContainer class="py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-[#5d6b56] rounded-2xl mb-6">
          <UIcon name="i-heroicons-calendar-days" class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          All Events
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore all our educational programmes designed to enhance your learning journey.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div class="animate-pulse">
            <div class="h-6 bg-gray-200 rounded mb-4"></div>
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
              <div class="h-20 bg-gray-200 rounded"></div>
            </div>
            <div class="mt-6 h-10 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-16">
        <div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-8 h-8 text-red-500" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">Unable to Load Events</h3>
        <p class="text-gray-600 mb-6 max-w-md mx-auto">
          We're having trouble loading the events right now. Please check your connection and try again.
        </p>
        <UButton 
          @click="refresh()" 
          color="red" 
          variant="outline"
          class="border-red-200 text-red-600 hover:bg-red-50"
        >
          Try Again
        </UButton>
      </div>

      <!-- Empty State -->
      <div v-else-if="!allEvents || allEvents.length === 0" class="text-center py-16">
        <div class="bg-[#5d6b56]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-calendar-x-mark" class="w-10 h-10 text-[#5d6b56]" />
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-3">No Events Available</h3>
        <p class="text-gray-600 mb-8 max-w-md mx-auto">
          There are no events available at the moment. Check back soon for exciting new programmes!
        </p>
        <UButton 
          to="/contact" 
          class="bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium px-8 py-3 rounded-xl"
        >
          Get Notified
        </UButton>
      </div>

      <!-- Events Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="event in allEvents" 
          :key="event.id" 
          class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#5d6b56]/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Event Header -->
          <div class="p-6 pb-4">
            <div class="flex items-start justify-between mb-4">
              <div class="bg-[#EB6534]/10 p-2 rounded-lg">
                <UIcon name="i-heroicons-academic-cap" class="w-5 h-5 text-[#EB6534]" />
              </div>
              <div class="flex flex-col items-end space-y-1">
                <!-- Event Status Badge -->
                <div class="bg-[#5d6b56]/10 px-3 py-1 rounded-full">
                  <span class="text-xs font-medium text-[#5d6b56] uppercase tracking-wide">Event</span>
                </div>
                <!-- Past Event Badge -->
                <div v-if="isPastEvent(event.event_date)" class="bg-gray-100 px-3 py-1 rounded-full">
                  <span class="text-xs font-medium text-gray-600 uppercase tracking-wide">Past</span>
                </div>
              </div>
            </div>
            
            <h2 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5d6b56] transition-colors duration-200">
              {{ event.title }}
            </h2>
          </div>

          <!-- Event Details -->
          <div class="px-6 pb-6 space-y-4">
            <!-- Date -->
            <div class="flex items-center space-x-3">
              <div class="bg-[#5d6b56]/10 p-2 rounded-lg">
                <UIcon name="i-heroicons-calendar-days" class="w-4 h-4 text-[#5d6b56]" />
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-900">
                  {{ formatDateShort(event.event_date) }}
                </div>
                <div class="text-xs text-gray-500">
                  {{ formatTime(event.event_date) }}
                </div>
              </div>
            </div>

            <!-- Venue -->
            <div v-if="event.venue" class="flex items-center space-x-3">
              <div class="bg-gray-100 p-2 rounded-lg">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <div class="text-sm font-medium text-gray-700">
                  {{ event.venue }}
                </div>
              </div>
            </div>

            <!-- Admission Fee -->
            <div class="flex items-center space-x-3">
              <div class="bg-green-100 p-2 rounded-lg">
                <UIcon name="i-heroicons-banknotes" class="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div class="text-sm font-semibold" :class="event.is_free ? 'text-green-600' : 'text-gray-900'">
                  {{ formatAdmissionFee(event) }}
                </div>
                <div v-if="!event.is_free" class="text-xs text-gray-500">
                  Admission Fee
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="pt-2">
              <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {{ event.description || 'Join us for this exciting educational programme designed to enhance your learning experience.' }}
              </p>
            </div>

            <!-- Days Until/Since Event -->
            <div class="pt-2">
              <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                   :class="getEventStatusClass(event.event_date)">
                <UIcon :name="getEventStatusIcon(event.event_date)" class="w-3 h-3 mr-1" />
                {{ getEventStatusText(event.event_date) }}
              </div>
            </div>
          </div>

          <!-- Event Footer -->
          <div class="px-6 pb-6">
            <UButton 
              :to="`/events/${event.id}`" 
              block 
              size="lg"
              :class="isPastEvent(event.event_date) ? 
                'bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 rounded-xl transition-all duration-200' : 
                'bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium py-3 rounded-xl transition-all duration-200 group-hover:shadow-lg'"
            >
              <span class="flex items-center justify-center">
                {{ isPastEvent(event.event_date) ? 'View Details' : 'View Details & Register' }}
                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </UButton>
          </div>
        </div>
      </div>
 
    </UContainer>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

useSeoMeta({
  title: 'All Events - B&S Educational Services',
  description: 'Explore all our educational programmes designed to enhance your learning journey.',
  ogTitle: 'All Events - B&S Educational Services',
  ogDescription: 'Discover our upcoming and past events to enrich your educational experience.',
  ogImage: '/img/main-logo.png',
  ogType: 'website'
});

// Fetch all events from the server
const { data: allEvents, pending, error, refresh } = await useAsyncData(
  'allEvents',
  async () => {
    const { data, error } = await supabase
      .from('events')
      .select('id, title, event_date, description, venue, admission_fee, currency, is_free')
      .order('event_date', { ascending: false }); // Show most recent events first
    
    if (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
    return data || [];
  },
  {
    default: () => []
  }
);

// Helper function to check if event is in the past
const isPastEvent = (dateString) => {
  const eventDate = new Date(dateString);
  const today = new Date();
  return eventDate < today;
};

// Helper function to format admission fee
const formatAdmissionFee = (event) => {
  if (event.is_free) {
    return 'Free Event';
  }
  
  // Format the admission fee with currency
  const fee = parseFloat(event.admission_fee);
  if (fee === 0) {
    return 'Free Event';
  }
  
  // Format number with commas for thousands
  const formattedFee = fee.toLocaleString('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return `${event.currency || '₦'}${formattedFee}`;
};

// Helper function to format the date nicely
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

// Helper function to format date short version
const formatDateShort = (dateString) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

// Helper function to format time
const formatTime = (dateString) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

// Helper function to calculate days until/since event
const getDaysUntil = (dateString) => {
  const eventDate = new Date(dateString);
  const today = new Date();
  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// Helper function to get event status text
const getEventStatusText = (dateString) => {
  const days = getDaysUntil(dateString);
  
  if (days < 0) {
    const pastDays = Math.abs(days);
    if (pastDays === 1) return 'Yesterday';
    if (pastDays < 7) return `${pastDays} days ago`;
    if (pastDays < 30) return `${Math.floor(pastDays / 7)} weeks ago`;
    return `${Math.floor(pastDays / 30)} months ago`;
  }
  
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  if (days < 7) return `${days} days`;
  if (days < 30) return `${Math.floor(days / 7)} weeks`;
  return `${Math.floor(days / 30)} months`;
};

// Helper function to get appropriate styling class based on event status
const getEventStatusClass = (dateString) => {
  const days = getDaysUntil(dateString);
  
  if (days < 0) return 'bg-gray-100 text-gray-600'; // Past events
  if (days <= 1) return 'bg-[#EB6534]/10 text-[#EB6534]'; // Today/Tomorrow
  if (days <= 7) return 'bg-yellow-100 text-yellow-800'; // This week
  return 'bg-[#5d6b56]/10 text-[#5d6b56]'; // Future events
};

// Helper function to get appropriate icon based on event status
const getEventStatusIcon = (dateString) => {
  const days = getDaysUntil(dateString);
  
  if (days < 0) return 'i-heroicons-clock'; // Past events
  if (days <= 1) return 'i-heroicons-exclamation-circle'; // Urgent
  return 'i-heroicons-clock'; // Future events
};
</script>