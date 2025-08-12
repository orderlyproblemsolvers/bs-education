<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
    <!-- Toast Notification -->
    <Transition name="toast">
      <div
        v-if="showToast"
        class="fixed top-4 right-4 z-50 max-w-md w-full bg-white rounded-lg shadow-lg border-l-4 p-4"
        :class="
          toastType === 'success' ? 'border-emerald-500' : 'border-red-500'
        "
      >
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <Icon
              :name="
                toastType === 'success'
                  ? 'i-heroicons-check-circle'
                  : 'i-heroicons-x-circle'
              "
              class="w-5 h-5"
              :class="
                toastType === 'success' ? 'text-emerald-500' : 'text-red-500'
              "
            />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">{{ toastMessage }}</p>
          </div>
          <div class="ml-auto pl-3">
            <button
              @click="showToast = false"
              class="text-gray-400 hover:text-gray-600"
            >
              <Icon name="i-heroicons-x-mark" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Hero Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background decoration -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-orange-50/50"
      ></div>
      <div
        class="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-orange-200/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-emerald-200/20 rounded-full blur-3xl"
      ></div>

      <div class="max-w-7xl mx-auto relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h1
                class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Let's Start Your
                <span
                  class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
                >
                  Study Abroad
                </span>
                Journey
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
                Get personalized guidance from our education experts. We're here
                to help you find the perfect university and course that matches
                your dreams and goals.
              </p>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div
                class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="text-3xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300"
                >
                  500+
                </div>
                <div class="text-sm font-medium text-gray-600 mt-1">
                  Success Stories
                </div>
              </div>
              <div
                class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                >
                  15+
                </div>
                <div class="text-sm font-medium text-gray-600 mt-1">
                  Countries
                </div>
              </div>
            </div>
          </div>

          <!-- Right Image Placeholder -->
          <div class="relative">
            <div
              class="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl"
            >
              <div
                class="w-full h-full flex items-center justify-center text-white text-lg font-medium backdrop-blur-sm bg-black/10"
              >
                [Hero Image Placeholder]
              </div>
            </div>
            <!-- Floating Card -->
            <div
              class="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center"
                >
                  <Icon
                    name="i-heroicons-chat-bubble-left-ellipsis"
                    class="w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">24/7 Support</div>
                  <div class="text-sm text-gray-500">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div
              class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10"
            >
              <div class="mb-10">
                <h2 class="text-3xl font-bold text-gray-900 mb-3">
                  Start Your Journey
                </h2>
                <p class="text-gray-600 text-lg">
                  Fill out the form below and we'll reach out to you within 24
                  hours.
                </p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-8">
                <!-- Personal Information -->
                <div class="form-section">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200"
                  >
                    Personal Information
                  </h3>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.firstName"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Enter your first name"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>

                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.lastName"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Enter your last name"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="your.email@example.com"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>

                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="+234 123 456 7890"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>
                  </div>
                </div>

                <!-- Study Preferences -->
                <div class="form-section">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200"
                  >
                    Study Preferences
                  </h3>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Preferred Study Destination
                        <span class="text-red-500">*</span>
                      </label>
                      <select
                        v-model="form.destination"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        required
                        :disabled="isSubmitting"
                      >
                        <option value="">Select a country</option>
                        <option
                          v-for="destination in destinations"
                          :key="destination"
                          :value="destination"
                        >
                          {{ destination }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Study Level <span class="text-red-500">*</span>
                      </label>
                      <select
                        v-model="form.level"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        required
                        :disabled="isSubmitting"
                      >
                        <option value="">Choose study level</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Certificate">Certificate</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        When Would You Like to Start?
                      </label>
                      <select
                        v-model="form.studyTime"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        :disabled="isSubmitting"
                      >
                        <option value="">Select a year</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Counselling Mode
                      </label>
                      <select
                        v-model="form.mode"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        :disabled="isSubmitting"
                      >
                        <option value="">Choose a mode</option>
                        <option value="In-person">In-person</option>
                        <option value="Virtual">Virtual</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Consent -->
                <div class="form-section">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200"
                  >
                    Consent & Preferences
                  </h3>

                  <div class="space-y-4">
                    <label
                      class="flex items-start space-x-3 cursor-pointer group"
                    >
                      <input
                        v-model="form.agreeTerms"
                        type="checkbox"
                        class="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 transition-colors duration-200"
                        required
                        :disabled="isSubmitting"
                      />
                      <span
                        class="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                      >
                        I agree to B&S terms and privacy policy
                        <span class="text-red-500">*</span>
                      </span>
                    </label>

                    <label
                      class="flex items-start space-x-3 cursor-pointer group"
                    >
                      <input
                        v-model="form.contactPref"
                        type="checkbox"
                        class="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 transition-colors duration-200"
                        :disabled="isSubmitting"
                      />
                      <span
                        class="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                      >
                        Please contact me by phone or email
                      </span>
                    </label>

                    <label
                      class="flex items-start space-x-3 cursor-pointer group"
                    >
                      <input
                        v-model="form.receiveUpdates"
                        type="checkbox"
                        class="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 transition-colors duration-200"
                        :disabled="isSubmitting"
                      />
                      <span
                        class="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                      >
                        I would like to receive updates via email
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Submit -->
                <div class="pt-6 text-center">
                  <button
                    type="submit"
                    class="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100"
                    :disabled="isSubmitting"
                  >
                    <span
                      v-if="isSubmitting"
                      class="flex items-center justify-center"
                    >
                      <Icon
                        name="i-heroicons-arrow-path"
                        class="w-4 h-4 mr-2 animate-spin"
                      />
                      Submitting...
                    </span>
                    <span v-else class="flex items-center justify-center">
                      Submit Application
                      <Icon
                        name="i-heroicons-paper-airplane"
                        class="w-4 h-4 ml-2"
                      />
                    </span>
                  </button>
                  <p class="text-sm text-gray-500 mt-4">
                    We'll review your application and get back to you within 24
                    hours.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Cards -->
            <div
              class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
            >
              <h3 class="text-xl font-semibold text-gray-900 mb-8">
                Get in Touch
              </h3>
              <div class="space-y-8">
                <div
                  class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div
                    class="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  >
                    <Icon
                      name="i-heroicons-phone"
                      class="w-6 h-6 text-orange-600"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p class="text-gray-700 font-medium">+234 806 544 2707</p>
                    <p class="text-sm text-gray-500 mt-1">
                      Mon-Fri 9AM-6PM WAT
                    </p>
                  </div>
                </div>

                <div
                  class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div
                    class="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  >
                    <Icon
                      name="i-heroicons-envelope"
                      class="w-6 h-6 text-orange-600"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                    <p class="text-gray-700 font-medium">
                      info@bs-education.com
                    </p>
                    <p class="text-sm text-gray-500 mt-1">
                      We'll respond within 24hrs
                    </p>
                  </div>
                </div>

                <div
                  class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div
                    class="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  >
                    <Icon
                      name="i-heroicons-map-pin"
                      class="w-6 h-6 text-orange-600"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Office</h4>
                    <p class="text-gray-700 font-medium">Lagos, Nigeria</p>
                    <p class="text-sm text-gray-500 mt-1">
                      Visit by appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- WhatsApp CTA -->
            <div
              class="rounded-3xl p-8 text-white bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 shadow-xl"
            >
              <div class="text-center space-y-6">
                <div
                  class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm"
                >
                  <Icon name="i-simple-icons-whatsapp" class="w-8 h-8" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-3">
                    Quick WhatsApp Chat
                  </h3>
                  <p class="text-emerald-100 mb-6">
                    Get instant answers to your questions via WhatsApp
                  </p>
                  <a
                    href="https://wa.me/+2348065442707"
                    target="_blank"
                    class="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Chat Now
                    <Icon
                      name="i-heroicons-arrow-top-right-on-square"
                      class="w-4 h-4 ml-2"
                    />
                  </a>
                </div>
              </div>
            </div>

            <!-- Success Stories Image -->
            <div class="rounded-3xl overflow-hidden shadow-xl">
              <div
                class="aspect-[4/3] bg-gradient-to-br from-emerald-400 to-emerald-600"
              >
                <div
                  class="w-full h-full flex items-center justify-center text-white text-lg font-medium backdrop-blur-sm bg-black/10"
                >
                  <NuxtImg
                    src="/img/success.jpg"
                    alt="Study abroad destinations"
                    class="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    preload
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section
      class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-emerald-50/30"
    >
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">
            Quick answers to common questions about studying abroad
          </p>
        </div>

        <UAccordion
          :items="faqItems"
          :ui="{
            wrapper: 'space-y-4',
            item: {
              base: 'bg-white rounded-2xl shadow-lg border border-gray-100',
              padding: 'p-6',
              color: 'text-gray-900',
            },
            trigger: {
              base: 'flex items-center justify-between w-full text-left font-semibold hover:text-orange-600 transition-colors duration-200',
            },
          }"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
// Form Data
const destinations = [
  "UK",
  "USA",
  "Australia",
  "France",
  "Hungary",
  "Malta",
  "Cyprus",
];

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  destination: "",
  mode: "",
  studyTime: "",
  level: "",
  agreeTerms: false,
  contactPref: false,
  receiveUpdates: false,
});

const isSubmitting = ref(false);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

const showToastNotification = (message, type = "success") => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, 5000);
};

const resetForm = () => {
  form.firstName = "";
  form.lastName = "";
  form.email = "";
  form.phone = "";
  form.destination = "";
  form.mode = "";
  form.studyTime = "";
  form.level = "";
  form.agreeTerms = false;
  form.contactPref = false;
  form.receiveUpdates = false;
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;

  try {
    const supabase = useSupabaseClient();

    // Insert the form data into Supabase
    const { error } = await supabase.from("study_applications").insert({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      destination: form.destination,
      study_level: form.level,
      study_time: form.studyTime,
      counselling_mode: form.mode,
      agree_terms: form.agreeTerms,
      contact_pref: form.contactPref,
      receive_updates: form.receiveUpdates,
    });

    if (error) {
      console.error("Supabase error:", error);

      // Check if it's a duplicate submission error
      if (error.message.includes("already exists within the last 3 days")) {
        showToastNotification(
          "You have already submitted an application within the last 3 days. Please wait before submitting again.",
          "error"
        );
      } else {
        showToastNotification(
          "There was an error submitting your application. Please try again.",
          "error"
        );
      }
    } else {
      showToastNotification(
        "Application submitted successfully! We'll be in touch within 24 hours.",
        "success"
      );
      resetForm();
    }
  } catch (error) {
    console.error("Submission error:", error);
    showToastNotification(
      "There was an error submitting your application. Please try again.",
      "error"
    );
  } finally {
    isSubmitting.value = false;
  }
};

// FAQ Data
const faqItems = [
  {
    label: "How long does the application process take?",
    content:
      "The typical application process takes 2-4 weeks, depending on the country and university. We handle most of the paperwork to speed up the process.",
    defaultOpen: false,
  },
  {
    label: "Do you help with visa applications?",
    content:
      "Yes! We provide comprehensive visa support including document preparation, application submission, and interview coaching.",
    defaultOpen: false,
  },
  {
    label: "What are your service fees?",
    content:
      "Our counselling is completely free! We only charge a success fee after you successfully get admission and visa approval.",
    defaultOpen: false,
  },
  {
    label: "Can you help with scholarships?",
    content:
      "Absolutely! We have access to numerous scholarship opportunities and will help identify and apply for ones that match your profile.",
    defaultOpen: false,
  },
  {
    label: "Which countries do you specialize in?",
    content:
      "We specialize in UK, Canada, USA, Australia, Ireland, Germany, and several other European countries. Each destination has dedicated specialists.",
    defaultOpen: false,
  },
];

// SEO Meta
useSeoMeta({
  title: "Contact Us - B&S Educational Services",
  description:
    "Get in touch with B&S Educational Services for personalized study abroad guidance. Free counselling, admission support, and visa assistance.",
  ogTitle: "Contact B&S Educational Services - Study Abroad Experts",
  ogDescription:
    "Start your study abroad journey today. Contact our education experts for free counselling and personalized guidance.",
});
</script>

<style scoped>
/* Toast Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Enhanced focus states */
.form-group input:focus,
.form-group select:focus {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.1),
    0 10px 10px -5px rgba(16, 185, 129, 0.04);
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
