<template>
  <div class="min-h-screen bg-gradient-to-b from-[#f4f5f3] to-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Loading State -->
      <div v-if="pending" class="max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div class="animate-pulse">
            <div class="h-10 bg-gray-200 rounded mb-6 w-3/4"></div>
            <div class="flex space-x-4 mb-6">
              <div class="h-6 bg-gray-200 rounded w-32"></div>
              <div class="h-6 bg-gray-200 rounded w-40"></div>
            </div>
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error || !event" class="text-center py-20">
        <div
          class="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <UIcon
            name="i-heroicons-exclamation-triangle"
            class="w-10 h-10 text-red-500"
          />
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h1>
        <p class="text-gray-600 mb-8 max-w-md mx-auto">
          This event may have been moved, cancelled, or does not exist.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="/events"
            class="bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
            Back to Events
          </UButton>
        </div>
      </div>

      <!-- Event Details -->
      <div v-else class="max-w-7xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <UButton
            to="/events"
            variant="link"
            class="text-gray-500 hover:text-[#5d6b56] p-0"
          >
            Events
          </UButton>
          <UIcon name="i-heroicons-chevron-right" class="w-3 h-3" />
          <span class="text-gray-900 font-bold truncate">{{
            event.title
          }}</span>
        </nav>

        <!-- Main Layout Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content Column -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Event Banner & Header Combined Card -->
            <div
              class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <!-- Image Cap (Strictly enforcing the 1200x630 ratio) -->
              <div
                v-if="event.banner_url"
                class="w-full aspect-1200/630 bg-gray-100"
              >
                <img
                  :src="event.banner_url"
                  :alt="event.title"
                  class="w-full h-full object-contain md:object-cover"
                />
              </div>

              <!-- Text Header -->
              <div
                class="bg-gradient-to-r from-[#5d6b56] to-[#9BAD94] p-8 text-white"
              >
                <div class="flex items-center gap-3 mb-4 flex-wrap">
                  <div class="bg-white/20 p-2 rounded-lg">
                    <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
                  </div>
                  <span
                    class="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    Educational Event
                  </span>
                  <span
                    class="px-3 py-1 rounded-full text-sm font-medium"
                    :class="getStatusBadgeClass()"
                  >
                    {{ getEventStatus() }}
                  </span>
                </div>

                <h1 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {{ event.title }}
                </h1>

                <!-- Event Meta Grid -->
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90"
                >
                  <!-- REPLACE the calendar meta cell: -->
                  <div class="flex items-center space-x-2">
                    <div class="bg-white/20 p-2 rounded-lg">
                      <UIcon name="i-heroicons-calendar-days" class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="font-semibold text-sm">
                        {{
                          isMultiDayEvent
                            ? `${formatDateShort(
                                event.event_date
                              )} – ${formatDateShort(event.event_end_date)}`
                            : formatDateShort(event.event_date)
                        }}
                      </div>
                      <div class="text-xs opacity-90">
                        {{
                          isMultiDayEvent
                            ? "Multi-day event"
                            : formatTime(event.event_date)
                        }}
                      </div>
                    </div>
                  </div>

                  <div v-if="event.venue" class="flex items-center space-x-2">
                    <div class="bg-white/20 p-2 rounded-lg">
                      <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="font-semibold text-sm truncate">
                        {{ event.venue }}
                      </div>
                      <div class="text-xs opacity-90">Venue</div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-2">
                    <div class="bg-white/20 p-2 rounded-lg">
                      <UIcon
                        name="i-heroicons-currency-dollar"
                        class="w-4 h-4"
                      />
                    </div>
                    <div>
                      <div class="font-semibold text-sm">
                        {{ getPriceDisplay() }}
                      </div>
                      <div class="text-xs opacity-90">Admission</div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-2">
                    <div class="bg-white/20 p-2 rounded-lg">
                      <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="font-semibold text-sm">
                        {{ getRemainingDays() }}
                      </div>
                      <div class="text-xs opacity-90">Until event</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Event Description & Additional Sections -->
              <div class="p-8">
                <h2
                  class="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                >
                  <UIcon
                    name="i-heroicons-document-text"
                    class="w-6 h-6 mr-3 text-[#5d6b56]"
                  />
                  About This Event
                </h2>

                <div
                  v-if="event.description"
                  class="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  v-html="event.description"
                ></div>

                <div v-else class="bg-gray-50 rounded-xl p-6 text-center">
                  <UIcon
                    name="i-heroicons-information-circle"
                    class="w-8 h-8 text-gray-400 mx-auto mb-2"
                  />
                  <p class="text-gray-500">
                    No additional details provided for this event.
                  </p>
                </div>

                <!-- Pricing Tiers -->
                <div
                  v-if="
                    event.pricing_tiers &&
                    event.pricing_tiers.length > 0 &&
                    !event.is_free
                  "
                  class="mt-8"
                >
                  <h2
                    class="text-xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <UIcon
                      name="i-heroicons-ticket"
                      class="w-5 h-5 mr-2 text-[#5d6b56]"
                    />
                    Ticket Tiers
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      v-for="tier in event.pricing_tiers"
                      :key="tier.name"
                      class="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                    >
                      <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-gray-900 text-base">
                          {{ tier.name }}
                        </h3>
                        <span class="text-lg font-bold text-[#5d6b56]">
                          {{ event.currency }}{{ tier.price }}
                        </span>
                      </div>
                      <p
                        v-if="tier.description"
                        class="text-sm text-gray-600 mb-3"
                      >
                        {{ tier.description }}
                      </p>
                      <ul
                        v-if="tier.perks && tier.perks.length"
                        class="space-y-1"
                      >
                        <li
                          v-for="perk in tier.perks"
                          :key="perk"
                          class="text-xs text-gray-500 flex items-center"
                        >
                          <UIcon
                            name="i-heroicons-check-circle"
                            class="w-3 h-3 text-green-500 mr-1"
                          />
                          {{ perk }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Event Highlights -->
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    class="bg-[#5d6b56]/5 rounded-xl p-4 border border-[#5d6b56]/20"
                  >
                    <div class="flex items-center mb-2">
                      <UIcon
                        name="i-heroicons-users"
                        class="w-5 h-5 text-[#5d6b56] mr-2"
                      />
                      <span class="font-semibold text-gray-900"
                        >Interactive Learning</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Engage with fellow participants and expert facilitators
                    </p>
                  </div>

                  <div
                    class="bg-[#EB6534]/5 rounded-xl p-4 border border-[#EB6534]/20"
                  >
                    <div class="flex items-center mb-2">
                      <UIcon
                        name="i-heroicons-trophy"
                        class="w-5 h-5 text-[#EB6534] mr-2"
                      />
                      <span class="font-semibold text-gray-900"
                        >Certificate</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Receive a certificate of participation upon completion
                    </p>
                  </div>
                </div>
              </div>
              <!-- End of p-8 description section -->
            </div>
            <!-- End of event banner combined card -->
          </div>
          <!-- End of lg:col-span-2 main content block -->

          <!-- Registration Sidebar Column -->
          <div class="lg:col-span-1">
            <div class="sticky top-8 space-y-6">
              <!-- Registration Card -->
              <div
                class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div class="bg-gradient-to-r from-[#5d6b56] to-[#9BAD94] p-4">
                  <h2 class="text-xl font-bold text-white flex items-center">
                    <UIcon
                      name="i-heroicons-clipboard-document-check"
                      class="w-5 h-5 mr-2"
                    />
                    Register Now
                  </h2>
                </div>

                <div class="p-6">
                  <!-- Event Past State -->
                  <div v-if="isEventPast" class="text-center py-6">
                    <div
                      class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <UIcon
                        name="i-heroicons-clock"
                        class="w-8 h-8 text-gray-500"
                      />
                    </div>
                    <h3 class="font-bold text-gray-900 mb-2">
                      Registration Closed
                    </h3>
                    <p class="text-sm text-gray-600">
                      This event has already occurred.
                    </p>
                  </div>

                  <!-- Registration Confirmed State -->
                  <div v-else-if="hasRegistered" class="text-center py-6">
                    <div
                      class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"
                    >
                      <UIcon
                        name="i-heroicons-check-circle"
                        class="w-8 h-8 text-green-600"
                      />
                    </div>
                    <h3 class="font-bold text-green-900 mb-2">
                      Registration Confirmed!
                    </h3>
                    <p class="text-sm text-green-700 mb-4">
                      Thank you for registering!
                    </p>

                    <div
                      class="bg-blue-50 rounded-lg p-4 border border-blue-200 text-left"
                    >
                      <h4
                        class="font-bold text-blue-900 mb-2 flex items-center"
                      >
                        <UIcon
                          name="i-heroicons-credit-card"
                          class="w-4 h-4 mr-2"
                        />
                        Next Steps
                      </h4>
                      <ul class="text-sm text-blue-700 space-y-2">
                        <li class="flex items-start">
                          <UIcon
                            name="i-heroicons-check-badge"
                            class="w-4 h-4 mr-2 mt-0.5 shrink-0"
                          />
                          <span>Check your email for confirmation</span>
                        </li>
                        <li v-if="!event.is_free" class="flex items-start">
                          <UIcon
                            name="i-heroicons-currency-dollar"
                            class="w-4 h-4 mr-2 mt-0.5 shrink-0"
                          />
                          <span>Complete payment to secure your spot</span>
                        </li>
                        <li class="flex items-start">
                          <UIcon
                            name="i-heroicons-calendar"
                            class="w-4 h-4 mr-2 mt-0.5 shrink-0"
                          />
                          <span>Add event to your calendar</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Registration Form State -->
                  <div
                    v-else-if="
                      event.form_fields && event.form_fields.length > 0
                    "
                  >
                    <!-- Progress Bar -->
                    <div v-if="isMultiStep" class="mb-6">
                      <div
                        class="flex justify-between text-xs text-gray-500 mb-2"
                      >
                        <span
                          >Step {{ currentStep + 1 }} of
                          {{ formSteps.length }}</span
                        >
                        <span
                          >{{
                            Math.round(
                              ((currentStep + 1) / formSteps.length) * 100
                            )
                          }}%</span
                        >
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div
                          class="bg-[#5d6b56] h-2 rounded-full transition-all duration-500"
                          :style="{
                            width: `${
                              ((currentStep + 1) / formSteps.length) * 100
                            }%`,
                          }"
                        ></div>
                      </div>
                    </div>

                    <!-- Duplicate Warning -->
                    <div v-if="duplicateWarning" class="mb-4">
                      <div
                        class="bg-amber-50 border border-amber-200 rounded-lg p-4"
                      >
                        <div class="flex items-center text-amber-700 mb-2">
                          <UIcon
                            name="i-heroicons-exclamation-triangle"
                            class="w-4 h-4 mr-2"
                          />
                          <span class="font-medium text-sm"
                            >Already Registered</span
                          >
                        </div>
                        <p class="text-xs text-amber-600">
                          This email is already registered. Please contact
                          support if you need assistance.
                        </p>
                      </div>
                    </div>

                    <form @submit.prevent="handleFormSubmit" class="space-y-4">
                      <!-- Form Fields -->
                      <div
                        :class="
                          isMultiStep
                            ? 'space-y-4'
                            : 'space-y-4 max-h-[400px] overflow-y-auto pr-2'
                        "
                      >
                        <template v-if="isMultiStep">
                          <div
                            v-for="field in formSteps[currentStep]?.fields"
                            :key="field._id || field.label"
                          >
                            <FormField
                              :field="field"
                              :form-data="formData"
                              :disabled="
                                duplicateWarning && field.type === 'email'
                              "
                              @update="updateFormField"
                              @blur="
                                field.type === 'email'
                                  ? checkDuplicateRegistration()
                                  : null
                              "
                            />
                          </div>
                        </template>
                        <template v-else>
                          <div
                            v-for="field in event.form_fields"
                            :key="field._id || field.label"
                          >
                            <FormField
                              :field="field"
                              :form-data="formData"
                              :disabled="
                                duplicateWarning && field.type === 'email'
                              "
                              @update="updateFormField"
                              @blur="
                                field.type === 'email'
                                  ? checkDuplicateRegistration()
                                  : null
                              "
                            />
                          </div>
                        </template>
                      </div>

                      <!-- Navigation Buttons -->
                      <div
                        class="flex gap-3 pt-4"
                        :class="isMultiStep ? 'justify-between' : 'flex-col'"
                      >
                        <template v-if="isMultiStep">
                          <UButton
                            v-if="currentStep > 0"
                            @click="previousStep"
                            type="button"
                            variant="outline"
                            class="flex-1"
                          >
                            <UIcon
                              name="i-heroicons-arrow-left"
                              class="w-4 h-4 mr-2"
                            />
                            Back
                          </UButton>
                          <div v-else class="flex-1"></div>

                          <UButton
                            v-if="currentStep < formSteps.length - 1"
                            @click="nextStep"
                            type="button"
                            :disabled="!isCurrentStepValid"
                            class="flex-1 bg-[#5d6b56] hover:bg-[#9BAD94] text-white"
                          >
                            Next
                            <UIcon
                              name="i-heroicons-arrow-right"
                              class="w-4 h-4 ml-2"
                            />
                          </UButton>

                          <UButton
                            v-else
                            type="submit"
                            :disabled="
                              duplicateWarning || !isFormValid || isSubmitting
                            "
                            class="flex-1 bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-semibold"
                          >
                            <div
                              v-if="isSubmitting"
                              class="flex items-center justify-center"
                            >
                              <div
                                class="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"
                              ></div>
                              Submitting...
                            </div>
                            <template v-else>
                              <UIcon
                                name="i-heroicons-paper-airplane"
                                class="w-4 h-4 mr-2"
                              />
                              Complete Registration
                            </template>
                          </UButton>
                        </template>

                        <UButton
                          v-else
                          type="submit"
                          :disabled="duplicateWarning || isSubmitting"
                          class="w-full bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-semibold py-3"
                        >
                          <div
                            v-if="isSubmitting"
                            class="flex items-center justify-center"
                          >
                            <div
                              class="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"
                            ></div>
                            Processing...
                          </div>
                          <template v-else>
                            <UIcon
                              name="i-heroicons-paper-airplane"
                              class="w-4 h-4 mr-2"
                            />
                            Register Now
                          </template>
                        </UButton>
                      </div>
                    </form>
                  </div>

                  <!-- No Registration Required State -->
                  <div v-else class="text-center py-6">
                    <div
                      class="bg-[#5d6b56]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <UIcon
                        name="i-heroicons-sparkles"
                        class="w-8 h-8 text-[#5d6b56]"
                      />
                    </div>
                    <h3 class="font-bold text-gray-900 mb-2">Open Event</h3>
                    <p class="text-sm text-gray-600">
                      No registration required. Just show up!
                    </p>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="bg-gray-50 p-4 border-t border-gray-100 space-y-2">
                  <UButton
                    @click="addToCalendar"
                    variant="outline"
                    class="w-full"
                  >
                    <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
                    Add to Calendar
                  </UButton>

                  <UButton @click="shareEvent" variant="ghost" class="w-full">
                    <UIcon name="i-heroicons-share" class="w-4 h-4 mr-2" />
                    Share Event
                  </UButton>
                </div>
              </div>
              <!-- End of Registration Card -->

              <!-- Event Details Info Card -->
              <div
                class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <h2
                  class="font-bold text-gray-900 mb-4 flex items-center text-xl"
                >
                  <UIcon
                    name="i-heroicons-information-circle"
                    class="w-5 h-5 mr-2 text-[#5d6b56]"
                  />
                  Event Details
                </h2>

                <div class="space-y-3 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-500">Date</span>
                    <span class="font-medium text-gray-900">{{
                      formatDateFull(event.event_date)
                    }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-500">{{
                      isMultiDayEvent ? "Dates" : "Time"
                    }}</span>
                    <span class="font-medium text-gray-900">{{
                      formatTimeRange()
                    }}</span>
                  </div>
                  <div v-if="event.venue" class="flex justify-between">
                    <span class="text-gray-500">Venue</span>
                    <span class="font-medium text-gray-900 text-right">{{
                      event.venue
                    }}</span>
                  </div>
                  <div class="border-t border-gray-100 pt-3">
                    <div class="flex justify-between">
                      <span class="text-gray-500">Duration</span>
                      <span class="font-medium text-gray-900">{{
                        getEventDuration()
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End of Event Details Card -->
            </div>
            <!-- End of sticky wrapper -->
          </div>
          <!-- End of Registration Sidebar Column -->
        </div>
        <!-- End of Main Layout Grid -->
      </div>
      <!-- End of Event Details Section -->
    </div>
    <!-- End of container -->

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showSuccessModal = false"
    >
      <div
        class="bg-white rounded-2xl max-w-md w-full overflow-hidden transform transition-all animate-slide-up"
      >
        <div
          class="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center"
        >
          <div
            class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <UIcon
              name="i-heroicons-check-circle"
              class="w-10 h-10 text-green-500"
            />
          </div>
          <h2 class="text-xl font-bold text-white mb-2">
            Registration Successful!
          </h2>
          <p class="text-green-50">You're all set for the event.</p>
        </div>
        <div class="p-6 space-y-3">
          <p class="text-gray-600 text-sm text-center">
            A confirmation email has been sent to your registered email address.
          </p>
          <UButton
            @click="closeSuccessModal"
            class="w-full bg-[#5d6b56] hover:bg-[#9BAD94] text-white"
          >
            Close
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, onMounted } from "vue";
import FormField from "~/components/FormField.vue";

const supabase = useSupabaseClient();
const route = useRoute();
const toast = useToast();

const eventId = route.params.id;
const formData = reactive({});
const isSubmitting = ref(false);
const hasRegistered = ref(false);
const duplicateWarning = ref(false);
const currentStep = ref(0);
const showSuccessModal = ref(false);

// ----- Server‑side data fetching with proper error handling -----
const { data: event, pending, error } = await useAsyncData(
  `event-${eventId}`,
  async () => {
    const { data, error: fetchError } = await supabase
      .from("events")
      .select("*")
      .eq("id", eventId)
      .single();

    if (fetchError) {
      // If the error is a 406 (not found) from .single(), throw a 404
      if (fetchError.code === "PGRST116" || fetchError.status === 406) {
        throw createError({ statusCode: 404, message: "Event not found" });
      }
      // For other errors, show a generic server error
      throw createError({ statusCode: 500, message: fetchError.message });
    }

    if (!data) {
      throw createError({ statusCode: 404, message: "Event not found" });
    }

    // Initialize form data
    if (data.form_fields) {
      data.form_fields.forEach((field) => {
        formData[field.label] = field.type === "checkbox" ? false : "";
      });
    }

    return data;
  },
  {
    server: true,   // fetch only on server – the page will not refetch on the client
    lazy: false,    // wait for data before rendering (default)
  }
);

// ----- SEO Meta – set after data is fetched, works perfectly on the server -----
useSeoMeta({
  title: event.value?.title || "Event Details",
  description: () => {
    const raw = event.value?.description || "Join us for this exciting educational event";
    return raw.replace(/<[^>]*>/g, "").slice(0, 160);
  },
  ogTitle: event.value?.title || "Event Details",
  ogDescription: () => {
    const raw = event.value?.description || "Join us for this exciting educational event";
    return raw.replace(/<[^>]*>/g, "").slice(0, 160);
  },
  ogImage: event.value?.banner_url || "/img/main-logo.png",
});

// ----- The rest of your computed properties and methods stay exactly the same -----
// (isMultiStep, formSteps, isCurrentStepValid, ... all the way to onMounted)
// I'm including them here for completeness, but no changes are needed.

const isMultiStep = computed(() => {
  return event.value?.form_fields && event.value.form_fields.length > 5;
});

const formSteps = computed(() => {
  if (!isMultiStep.value || !event.value?.form_fields) return [];
  const fields = event.value.form_fields;
  const steps = [];
  const fieldsPerStep = Math.ceil(fields.length / 3);
  for (let i = 0; i < fields.length; i += fieldsPerStep) {
    steps.push({
      title: `Step ${Math.floor(i / fieldsPerStep) + 1}`,
      fields: fields.slice(i, i + fieldsPerStep),
    });
  }
  return steps;
});

const isCurrentStepValid = computed(() => {
  if (!isMultiStep.value) return true;
  const currentFields = formSteps.value[currentStep.value]?.fields || [];
  return currentFields.every((field) => {
    if (!field.required) return true;
    const value = formData[field.label];
    return field.type === "checkbox" ? value === true : value && value.toString().trim() !== "";
  });
});

const isFormValid = computed(() => {
  if (!event.value?.form_fields) return true;
  return event.value.form_fields.every((field) => {
    if (!field.required) return true;
    const value = formData[field.label];
    return field.type === "checkbox" ? value === true : value && value.toString().trim() !== "";
  });
});

const isEventPast = computed(() => {
  if (!event.value) return false;
  const checkDate = event.value.event_end_date || event.value.event_date;
  return new Date(checkDate) < new Date();
});

const isMultiDayEvent = computed(() => {
  if (!event.value?.event_end_date) return false;
  const start = new Date(event.value.event_date);
  const end = new Date(event.value.event_end_date);
  return start.toDateString() !== end.toDateString();
});

// Methods – no changes required
const updateFormField = ({ field, value }) => {
  formData[field.label] = value;
};

const getPriceDisplay = () => {
  if (!event.value) return "";
  if (event.value.is_free) return "Free";
  if (event.value.pricing_tiers?.length) {
    const minPrice = Math.min(...event.value.pricing_tiers.map((t) => t.price));
    return `From ${event.value.currency}${minPrice}`;
  }
  return `${event.value.currency}${event.value.admission_fee}`;
};

const getEventStatus = () => {
  if (!event.value) return "";
  if (isEventPast.value) return "Completed";
  const eventDate = new Date(event.value.event_date);
  const today = new Date();
  const diffDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays <= 7) return "This Week";
  return "Upcoming";
};

const getStatusBadgeClass = () => {
  if (isEventPast.value) return "bg-gray-500/20 text-gray-100";
  return "bg-green-500/20 text-green-100";
};

const getRemainingDays = () => {
  if (!event.value || isEventPast.value) return "Expired";
  const eventDate = new Date(event.value.event_date);
  const today = new Date();
  const diffDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  return `${diffDays} days left`;
};

const getEventDuration = () => {
  if (!event.value?.event_end_date) return "Not specified";
  const diffMs = new Date(event.value.event_end_date) - new Date(event.value.event_date);
  if (isMultiDayEvent.value) {
    const days = Math.round(diffMs / 86400000);
    return `${days} day${days !== 1 ? "s" : ""}`;
  }
  const totalMins = Math.round(diffMs / 60000);
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr${h !== 1 ? "s" : ""}`;
  return `${h} hr ${m} min`;
};

const formatDateShort = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatDateFull = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatTimeRange = () => {
  if (!event.value) return "";
  const start = formatTime(event.value.event_date);
  if (!event.value.event_end_date) return start;
  if (isMultiDayEvent.value)
    return `${formatDateShort(event.value.event_date)} – ${formatDateShort(event.value.event_end_date)}`;
  return `${start} – ${formatTime(event.value.event_end_date)}`;
};

const nextStep = () => {
  if (currentStep.value < formSteps.value.length - 1 && isCurrentStepValid.value) {
    currentStep.value++;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const checkDuplicateRegistration = async () => {
  const emailField = event.value?.form_fields?.find(
    (field) => field.type === "email" || field.label.toLowerCase().includes("email")
  );
  if (!emailField || !formData[emailField.label]) {
    duplicateWarning.value = false;
    return;
  }
  const emailValue = formData[emailField.label].trim().toLowerCase();
  if (!emailValue) return;

  try {
    const { data } = await supabase
      .from("registrations")
      .select("id")
      .eq("event_id", eventId)
      .ilike(`form_data->>${emailField.label}`, emailValue)
      .limit(1);
    duplicateWarning.value = data && data.length > 0;
  } catch (error) {
    console.error("Error checking duplicate:", error);
  }
};

const handleFormSubmit = async () => {
  if (duplicateWarning.value) {
    toast.add({ title: "Already Registered", description: "This email is already registered for this event.", color: "red" });
    return;
  }
  isSubmitting.value = true;
  try {
    const { error } = await supabase.from("registrations").insert([
      {
        event_id: eventId,
        form_data: formData,
        registered_at: new Date().toISOString(),
      },
    ]);
    if (error) throw error;
    if (process.client) {
      localStorage.setItem(`event_registered_${eventId}`, "true");
    }
    showSuccessModal.value = true;
    hasRegistered.value = true;
    toast.add({ title: "Registration Successful!", description: "Check your email for confirmation details.", color: "green" });
  } catch (error) {
    toast.add({ title: "Registration Failed", description: error.message || "Please try again.", color: "red" });
  } finally {
    isSubmitting.value = false;
  }
};

const closeSuccessModal = () => {
  showSuccessModal.value = false;
};

const addToCalendar = () => {
  if (!event.value) return;
  const start = new Date(event.value.event_date);
  const end = event.value.event_end_date
    ? new Date(event.value.event_end_date)
    : new Date(start.getTime() + 3 * 60 * 60 * 1000);
  const fmt = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  window.open(
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(event.value.title)}` +
      `&dates=${fmt(start)}/${fmt(end)}` +
      `&details=${encodeURIComponent(event.value.description || "")}` +
      `&location=${encodeURIComponent(event.value.venue || "")}`,
    "_blank"
  );
};

const shareEvent = async () => {
  const shareData = {
    title: event.value.title,
    text: `Join me at ${event.value.title}!`,
    url: window.location.href,
  };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch { copyToClipboard(); }
  } else {
    copyToClipboard();
  }
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toast.add({ title: "Link Copied!", description: "Event link copied to clipboard", color: "green" });
  } catch {
    toast.add({ title: "Copy Failed", description: "Please copy the URL manually", color: "red" });
  }
};

onMounted(() => {
  if (process.client && localStorage.getItem(`event_registered_${eventId}`)) {
    hasRegistered.value = true;
  }
});
</script>

<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

/* Custom scrollbar for form fields */
.max-h-\[400px\]::-webkit-scrollbar {
  width: 6px;
}

.max-h-\[400px\]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.max-h-\[400px\]::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.max-h-\[400px\]::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
