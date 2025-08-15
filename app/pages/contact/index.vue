<template>
  <div class="min-h-screen bg-gradient-to-br from-[#f4f5f3] to-gray-100">
    <!-- Toast Notification -->
    <Transition name="toast">
      <div
        v-if="showToast"
        class="fixed top-4 right-4 z-50 max-w-md w-full bg-white rounded-lg shadow-lg border-l-4 p-4"
        :class="
          toastType === 'success' ? 'border-[#5d6b56]' : 'border-red-500'
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
                toastType === 'success' ? 'text-[#5d6b56]' : 'text-red-500'
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
        class="absolute inset-0 bg-gradient-to-r from-[#f4f5f3]/50 to-orange-50/50"
      ></div>
      <div
        class="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-[#5d6b56]/20 to-[#eb6534]/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-[#eb6534]/20 to-[#5d6b56]/20 rounded-full blur-3xl"
      ></div>

      <div class="max-w-7xl mx-auto relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h1
                class="text-4xl md:text-6xl font-bold text-[#333333] leading-tight font-inter"
              >
                Let's Start Your
                <span
                  class="bg-gradient-to-r from-[#eb6534] to-[#eb6534] bg-clip-text text-transparent"
                >
                  Study Abroad
                </span>
                Journey
              </h1>
              <p class="text-xl text-[#666666] leading-relaxed max-w-lg font-inter">
                Get personalized guidance from our education experts. We're here
                to help you find the perfect university and course that matches
                your dreams and goals.
              </p>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div
                class="group text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-[#DDDDDD] hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="text-3xl font-bold text-[#eb6534] group-hover:scale-110 transition-transform duration-300 font-inter"
                >
                  500+
                </div>
                <div class="text-sm font-medium text-[#666666] mt-1 font-inter">
                  Success Stories
                </div>
              </div>
              <div
                class="group text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-[#DDDDDD] hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="text-3xl font-bold text-[#5d6b56] group-hover:scale-110 transition-transform duration-300 font-inter"
                >
                  7+
                </div>
                <div class="text-sm font-medium text-[#666666] mt-1 font-inter">
                  Countries
                </div>
              </div>
            </div>
          </div>

          <!-- Right Image Placeholder -->
          <div class="relative">
            <div
              class="aspect-[4/3] rounded-tl-[80px] rounded-br-[80px] overflow-hidden bg-gradient-to-br from-[#5d6b56] to-[#6b7a6a] shadow-xl"
            >
              <div
                class="w-full h-full flex items-center justify-center text-white text-lg font-medium backdrop-blur-sm bg-black/10 font-inter"
              >
              <NuxtImg
                    src="/img/customerservice.png"
                    alt="Study abroad destinations"
                    class="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    preload
                  />
              </div>
            </div>
            <!-- Floating Card -->
            <div
              class="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-[#DDDDDD]"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-[#eb6534] to-[#eb6534] flex items-center justify-center"
                >
                  <Icon
                    name="i-heroicons-chat-bubble-left-ellipsis"
                    class="w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <div class="font-semibold text-[#333333] font-inter">Chat with us</div>
                  <div class="text-sm text-[#666666] font-inter">Always here to help</div>
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
              class="bg-white rounded-xl shadow-xl border border-[#DDDDDD] p-8 md:p-10"
            >
              <div class="mb-10">
                <h2 class="text-3xl font-bold text-[#333333] mb-3 font-inter">
                  Start Your Journey
                </h2>
                <p class="text-[#666666] text-lg font-inter">
                  Fill out the form below and we'll reach out to you within 24
                  hours.
                </p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-8">
                <!-- Personal Information -->
                <div class="form-section">
                  <h3
                    class="text-xl font-semibold text-[#333333] mb-6 pb-2 border-b border-[#DDDDDD] font-inter"
                  >
                    Personal Information
                  </h3>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        First Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.firstName"
                        type="text"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
                        placeholder="Enter your first name"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>

                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        Last Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.lastName"
                        type="text"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
                        placeholder="Enter your last name"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        Email Address <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
                        placeholder="your.email@example.com"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>

                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        Phone Number <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
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
                    class="text-xl font-semibold text-[#333333] mb-6 pb-2 border-b border-[#DDDDDD] font-inter"
                  >
                    Study Preferences
                  </h3>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        Preferred Study Destination
                        <span class="text-red-500">*</span>
                      </label>
                      <select
                        v-model="form.destination"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
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
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        Study Level <span class="text-red-500">*</span>
                      </label>
                      <select
                        v-model="form.level"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
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
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        When Would You Like to Start?
                      </label>
                      <select
                        v-model="form.studyTime"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
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
                        class="block text-sm font-medium text-[#333333] mb-2 font-inter"
                      >
                        Counselling Mode
                      </label>
                      <select
                        v-model="form.mode"
                        class="w-full px-4 py-3 border border-[#DDDDDD] rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 font-inter"
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
                    class="text-xl font-semibold text-[#333333] mb-6 pb-2 border-b border-[#DDDDDD] font-inter"
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
                        class="mt-1 w-4 h-4 text-[#5d6b56] border-[#DDDDDD] rounded focus:ring-[#5d6b56] transition-colors duration-200"
                        required
                        :disabled="isSubmitting"
                      />
                      <span
                        class="text-sm text-[#666666] group-hover:text-[#333333] transition-colors duration-200 font-inter"
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
                        class="mt-1 w-4 h-4 text-[#5d6b56] border-[#DDDDDD] rounded focus:ring-[#5d6b56] transition-colors duration-200"
                        :disabled="isSubmitting"
                      />
                      <span
                        class="text-sm text-[#666666] group-hover:text-[#333333] transition-colors duration-200 font-inter"
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
                        class="mt-1 w-4 h-4 text-[#5d6b56] border-[#DDDDDD] rounded focus:ring-[#5d6b56] transition-colors duration-200"
                        :disabled="isSubmitting"
                      />
                      <span
                        class="text-sm text-[#666666] group-hover:text-[#333333] transition-colors duration-200 font-inter"
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
                    class="w-full md:w-auto px-10 py-4 bg-[#5d6b56] hover:bg-[#6b7a6a] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100 font-inter"
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
                  <p class="text-sm text-[#666666] mt-4 font-inter">
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
              class="bg-white rounded-xl shadow-xl border border-[#DDDDDD] p-8"
            >
              <h3 class="text-xl font-semibold text-[#333333] mb-8 font-inter">
                Get in Touch
              </h3>
              <div class="space-y-8">
                <div
                  class="group flex items-start space-x-4 p-4 rounded-lg hover:bg-[#f8f9f8] transition-colors duration-200"
                >
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#eb6534]/10 to-[#eb6534]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  >
                    <Icon
                      name="i-heroicons-phone"
                      class="w-6 h-6 text-[#eb6534]"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-[#333333] mb-1 font-inter">Phone</h4>
                    <p class="text-[#666666] font-medium font-inter">+234 806 544 2707</p>
                    <p class="text-sm text-[#666666] mt-1 font-inter">
                      Mon-Fri 9AM-6PM WAT
                    </p>
                  </div>
                </div>

                <div
                  class="group flex items-start space-x-4 p-4 rounded-lg hover:bg-[#f8f9f8] transition-colors duration-200"
                >
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#eb6534]/10 to-[#eb6534]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  >
                    <Icon
                      name="i-heroicons-envelope"
                      class="w-6 h-6 text-[#eb6534]"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-[#333333] mb-1 font-inter">Email</h4>
                    <p class="text-[#666666] font-medium font-inter">
                      info@bs-education.com
                    </p>
                    <p class="text-sm text-[#666666] mt-1 font-inter">
                      We'll respond within 24hrs
                    </p>
                  </div>
                </div>

                <div
                  class="group flex items-start space-x-4 p-4 rounded-lg hover:bg-[#f8f9f8] transition-colors duration-200"
                >
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#eb6534]/10 to-[#eb6534]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  >
                    <Icon
                      name="i-heroicons-map-pin"
                      class="w-6 h-6 text-[#eb6534]"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-[#333333] mb-1 font-inter">Office</h4>
                    <p class="text-[#666666] font-medium font-inter">Abuja, Nigeria</p>
                    <p class="text-sm text-[#666666] mt-1 font-inter">
                      Visit by appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- WhatsApp CTA -->
            <div
              class="rounded-xl p-8 text-white bg-gradient-to-br from-[#5d6b56] via-[#5d6b56] to-[#6b7a6a] shadow-xl"
            >
              <div class="text-center space-y-6">
                <div
                  class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto backdrop-blur-sm"
                >
                  <Icon name="i-simple-icons-whatsapp" class="w-8 h-8" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-3 font-inter">
                    Quick WhatsApp Chat
                  </h3>
                  <p class="text-white/80 mb-6 font-inter">
                    Get instant answers to your questions via WhatsApp
                  </p>
                  <a
                    href="https://wa.me/+2348065442707"
                    target="_blank"
                    class="inline-flex items-center px-6 py-3 bg-white text-[#5d6b56] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-inter"
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
            <div class="rounded-xl overflow-hidden shadow-xl">
              <div
                class="aspect-[4/3] bg-gradient-to-br from-[#5d6b56] to-[#6b7a6a]"
              >
                <div
                  class="w-full h-full flex items-center justify-center text-white text-lg font-medium backdrop-blur-sm bg-black/10 font-inter"
                >
                  <NuxtImg
                    src="/img/celebration.png"
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
      class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f4f5f3] to-[#f4f5f3]/70"
    >
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#333333] mb-4 font-inter">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-[#666666] font-inter">
            Quick answers to common questions about studying abroad
          </p>
        </div>

        <div class="faq-main">
            <div class="faq-list">
              <div
                v-for="(faq, index) in faqItems"
                :key="index"
                class="faq-item"
                :class="{ 'active': activeIndex === index }"
              >
                <button
                  class="faq-question"
                  @click="toggleFaq(index)"
                  :aria-expanded="activeIndex === index"
                >
                  <span class="question-text">{{ faq.label }}</span>
                  <div class="toggle-icon">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="2"
                      :class="{ 'rotated': activeIndex === index }"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  class="faq-answer"
                  :ref="el => answerRefs[index] = el"
                >
                  <div class="answer-content">
                    <p v-html="faq.content"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
const activeIndex = ref(null)
  const answerRefs = ref([])

const toggleFaq = (index) => {
    if (activeIndex.value === index) {
      activeIndex.value = null
    } else {
      activeIndex.value = index
    }
  }
  
  watch(activeIndex, () => {
    if (activeIndex.value !== null) {
      nextTick(() => {
        const activeElement = document.querySelector('.faq-item.active')
        if (activeElement) {
          activeElement.scrollIntoView({ block: 'nearest' })
        }
      })
    }
  })

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

.faq-main {
    background: white;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
  
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  .faq-item {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #DDDDDD;
  }
  
  .faq-item.active {
    border-color: #5d6b56;
    box-shadow: 0 4px 12px rgba(133, 148, 132, 0.15);
  }
  
  .faq-question {
    width: 100%;
    padding: 20px 24px;
    background: white;
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }
  
  .faq-item.active .faq-question {
    background: #f8f9f8;
    color: #5d6b56;
  }
  
  .faq-question:hover {
    background: #f8f9f8;
    color: #5d6b56;
  }
  
  .question-text {
    flex: 1;
    padding-right: 16px;
  }
  
  .toggle-icon {
    color: #5d6b56;
  }
  
  .toggle-icon svg.rotated {
    transform: rotate(180deg);
  }
  
  .faq-answer {
    overflow: hidden;
    background: white;
  }
  
  .faq-item.active .faq-answer {
    display: block;
  }
  
  .faq-item:not(.active) .faq-answer {
    display: none;
  }
  
  .answer-content {
    padding: 24px;
    color: #666666;
    line-height: 1.6;
  }
  
  .answer-content p {
    margin-bottom: 16px;
  }
</style>
