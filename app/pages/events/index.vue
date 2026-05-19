<template>
  <div class="min-h-screen bg-[#f4f5f3]">
    <UContainer class="py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-base rounded-2xl mb-6">
          <UIcon name="i-heroicons-calendar-days" class="w-8 h-8 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Events</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore all our educational programmes designed to enhance your learning journey.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="animate-pulse">
            <div class="h-40 bg-gray-200"></div>
            <div class="p-6 space-y-3">
              <div class="h-5 bg-gray-200 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
              <div class="h-4 bg-gray-200 rounded w-2/3"></div>
              <div class="h-16 bg-gray-200 rounded mt-2"></div>
              <div class="h-10 bg-gray-200 rounded-lg mt-4"></div>
            </div>
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
        <UButton @click="refresh()" color="red" variant="outline" class="border-red-200 text-red-600 hover:bg-red-50">
          Try Again
        </UButton>
      </div>

      <!-- Empty State -->
      <div v-else-if="!allEvents || allEvents.length === 0" class="text-center py-16">
        <div class="bg-base/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-calendar-x-mark" class="w-10 h-10 text-[#5d6b56]" />
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-3">No Events Available</h3>
        <p class="text-gray-600 mb-8 max-w-md mx-auto">
          There are no events available at the moment. Check back soon for exciting new programmes!
        </p>
        <UButton to="/contact" class="bg-base hover:bg-[#9BAD94] text-white font-medium px-8 py-3 rounded-xl">
          Get Notified
        </UButton>
      </div>

      <!-- Events Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="event in allEvents"
          :key="event.id"
          class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#5d6b56]/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
        >
          <!-- Banner Image -->
          <div class="relative h-44 overflow-hidden shrink-0">
            <img
              v-if="event.banner_url"
              :src="event.banner_url"
              :alt="event.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Fallback gradient banner -->
            <div
              v-else
              class="w-full h-full bg-linear-to-br from-[#5d6b56] to-[#ACBEA3] flex items-center justify-center"
            >
              <UIcon name="i-heroicons-academic-cap" class="w-12 h-12 text-white/60" />
            </div>

            <!-- Badges overlay -->
            <div class="absolute top-3 right-3 flex flex-col items-end gap-1.5">
              <span class="bg-white/90 backdrop-blur-sm text-[#5d6b56] text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                Event
              </span>
              <span v-if="isPastEvent(event.event_date)" class="bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
                Past
              </span>
            </div>

            <!-- Pricing badge overlay -->
            <div class="absolute bottom-3 left-3">
              <span
                class="text-xs font-semibold px-3 py-1 rounded-full"
                :class="event.is_free
                  ? 'bg-green-500 text-white'
                  : event.pricing_mode === 'tiered'
                    ? 'bg-[#EB6534] text-white'
                    : 'bg-white/90 text-gray-800'"
              >
                {{ getPricingBadgeText(event) }}
              </span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="flex flex-col flex-1 p-6">
            <h2 class="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#5d6b56] transition-colors duration-200 leading-snug">
              {{ event.title }}
            </h2>

            <!-- Meta details -->
            <div class="space-y-3 mb-4">
              <!-- Date -->
              <div class="flex items-center gap-3">
                <div class="bg-base/10 p-2 rounded-lg shrink-0">
                  <UIcon name="i-heroicons-calendar-days" class="w-4 h-4 text-[#5d6b56]" />
                </div>
                <div>
                  <div class="text-sm font-semibold text-gray-900">{{ formatDateShort(event.event_date) }}</div>
                </div>
              </div>

              <!-- Venue -->
              <div v-if="event.venue" class="flex items-center gap-3">
                <div class="bg-gray-100 p-2 rounded-lg shrink-0">
                  <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-gray-500" />
                </div>
                <div class="text-sm font-medium text-gray-700 truncate">{{ event.venue }}</div>
              </div>

              <!-- Admission -->
              <div class="flex items-center gap-3">
                <div class="bg-green-100 p-2 rounded-lg shrink-0">
                  <UIcon name="i-heroicons-banknotes" class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div class="text-sm font-semibold" :class="event.is_free ? 'text-green-600' : 'text-gray-900'">
                    {{ formatAdmissionFee(event) }}
                  </div>
                  <div v-if="!event.is_free && event.pricing_mode === 'tiered'" class="text-xs text-gray-500">
                    {{ event.pricing_tiers?.length }} tier{{ event.pricing_tiers?.length === 1 ? '' : 's' }} available
                  </div>
                  <div v-else-if="!event.is_free" class="text-xs text-gray-500">Admission fee</div>
                </div>
              </div>
            </div>

            <!-- Description preview (strips HTML from rich editor) -->
            <p class="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
              {{ stripHtml(event.description) || 'Join us for this exciting educational programme designed to enhance your learning experience.' }}
            </p>

            <!-- Status pill -->
            <div class="mb-5">
              <span
                class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                :class="getEventStatusClass(event.event_date)"
              >
                <UIcon :name="getEventStatusIcon(event.event_date)" class="w-3 h-3" />
                {{ getEventStatusText(event.event_date) }}
              </span>
            </div>

            <!-- CTA -->
            <UButton
              :to="`/events/${event.id}`"
              block
              size="lg"
              :class="isPastEvent(event.event_date)
                ? 'bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-xl transition-all duration-200'
                : 'bg-base hover:bg-[#9BAD94] text-white font-medium rounded-xl transition-all duration-200 group-hover:shadow-lg'"
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
const supabase = useSupabaseClient()

useSeoMeta({
  title: 'All Events - B&S Educational Services',
  description: 'Explore all our educational programmes designed to enhance your learning journey.',
  canonical: 'https://bs-education.com/events',
})

const { data: allEvents, pending, error, refresh } = await useAsyncData(
  'allEvents',
  async () => {
    const { data, error } = await supabase
      .from('events')
      .select('id, title, event_date, description, venue, admission_fee, currency, is_free, pricing_mode, pricing_tiers, banner_url')
      .order('event_date', { ascending: false })

    if (error) {
      console.error('Error fetching events:', error)
      throw error
    }
    return data || []
  },
  { default: () => [] }
)

// ── Helpers ──────────────────────────────────────────

const isPastEvent = (dateString) => new Date(dateString) < new Date()

/** Strip HTML tags produced by the rich editor */
const stripHtml = (html) => {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

/**
 * Admission fee display:
 *  - Free                → "Free"
 *  - Flat price          → "₦15,000.00"
 *  - Tiered              → "From ₦10,000.00"  (minimum tier price)
 */
const formatAdmissionFee = (event) => {
  if (event.is_free || parseFloat(event.admission_fee) === 0) return 'Free'

  const symbol = event.currency || '₦'

  if (event.pricing_mode === 'tiered' && event.pricing_tiers?.length) {
    const prices = event.pricing_tiers.map(t => parseFloat(t.price)).filter(p => !isNaN(p))
    if (prices.length) {
      const min = Math.min(...prices)
      return `From ${symbol}${min.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
  }

  const fee = parseFloat(event.admission_fee)
  return `${symbol}${fee.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

/**
 * Short badge text for the image overlay:
 *  Free → "Free"  |  Tiered → "Tiered"  |  Flat → "₦15,000"
 */
const getPricingBadgeText = (event) => {
  if (event.is_free || parseFloat(event.admission_fee) === 0) return 'Free'
  if (event.pricing_mode === 'tiered') return 'Tiered pricing'
  const symbol = event.currency || '₦'
  const fee = parseFloat(event.admission_fee)
  return `${symbol}${fee.toLocaleString('en-NG', { maximumFractionDigits: 0 })}`
}

const formatDateShort = (dateString) =>
  new Date(dateString).toLocaleDateString('en-NG', { month: 'short', day: 'numeric', year: 'numeric' })

const formatTime = (dateString) =>
  new Date(dateString).toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })

const getDaysUntil = (dateString) => {
  const diff = new Date(dateString) - new Date()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

const getEventStatusText = (dateString) => {
  const days = getDaysUntil(dateString)
  if (days < 0) {
    const past = Math.abs(days)
    if (past === 1) return 'Yesterday'
    if (past < 7) return `${past} days ago`
    if (past < 30) return `${Math.floor(past / 7)} weeks ago`
    return `${Math.floor(past / 30)} months ago`
  }
  if (days === 0) return 'Today'
  if (days === 1) return 'Tomorrow'
  if (days < 7) return `In ${days} days`
  if (days < 30) return `In ${Math.floor(days / 7)} weeks`
  return `In ${Math.floor(days / 30)} months`
}

const getEventStatusClass = (dateString) => {
  const days = getDaysUntil(dateString)
  if (days < 0) return 'bg-gray-100 text-gray-600'
  if (days <= 1) return 'bg-[#EB6534]/10 text-[#EB6534]'
  if (days <= 7) return 'bg-yellow-100 text-yellow-800'
  return 'bg-base/10 text-[#5d6b56]'
}

const getEventStatusIcon = (dateString) => {
  const days = getDaysUntil(dateString)
  if (days <= 1) return 'i-heroicons-exclamation-circle'
  return 'i-heroicons-clock'
}
</script>