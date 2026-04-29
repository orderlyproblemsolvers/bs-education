<template>
  <div class="min-h-screen bg-white">
    <Transition name="toast">
      <div
        v-if="showToast"
        class="fixed top-4 right-4 z-50 max-w-md w-full bg-white rounded-lg shadow-lg border-l-4 p-4"
        :class="toastType === 'success' ? 'border-base' : 'border-red-500'"
      >
        <div class="flex items-center">
          <div class="shrink-0">
            <Icon
              :name="toastType === 'success' ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'"
              class="w-5 h-5"
              :class="toastType === 'success' ? 'text-base' : 'text-red-500'"
            />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">{{ toastMessage }}</p>
          </div>
          <div class="ml-auto pl-3">
            <button
              @click="showToast = false"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon name="i-heroicons-x-mark" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-r from-gray-50/80 to-secondary/5"></div>
      <div class="absolute top-10 right-10 w-72 h-72 bg-linear-to-br from-base/20 to-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 bg-linear-to-tr from-secondary/20 to-base/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="space-y-6">
              <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Let's Start Your
                <span class="text-secondary">Study Abroad</span>
                Journey
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
                Get personalized guidance from our education experts. We're here
                to help you find the perfect university and course that matches
                your dreams and goals.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="group text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div class="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <div class="text-sm font-medium text-gray-600 mt-1">
                  Success Stories
                </div>
              </div>
              <div class="group text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div class="text-3xl font-bold text-base group-hover:scale-110 transition-transform duration-300">
                  7+
                </div>
                <div class="text-sm font-medium text-gray-600 mt-1">
                  Countries
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-4/3 rounded-tl-[80px] rounded-br-[80px] overflow-hidden bg-base shadow-xl">
              <div class="w-full h-full flex items-center justify-center text-white text-lg font-medium backdrop-blur-sm bg-black/10">
                <NuxtImg
                  src="/img/customerservice.png"
                  alt="Study abroad destinations"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  preload
                />
              </div>
            </div>
            <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Icon name="i-heroicons-chat-bubble-left-ellipsis" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Chat with us</div>
                  <div class="text-sm text-gray-500">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-12">
          
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-10">
              <div class="mb-10">
                <h2 class="text-3xl font-bold text-gray-900 mb-3">Start Your Journey</h2>
                <p class="text-gray-600 text-lg">
                  Fill out the form below and we'll reach out to you within 24 hours.
                </p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-8">
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200">
                    Personal Information
                  </h3>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.firstName"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
                        placeholder="Enter your first name"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>

                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.lastName"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
                        placeholder="Enter your last name"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
                        placeholder="your.email@example.com"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>

                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span class="text-red-500">*</span>
                      </label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
                        placeholder="+234 123 456 7890"
                        required
                        :disabled="isSubmitting"
                      />
                    </div>
                  </div>
                </div>

                <div class="space-y-6 pt-2">
                  <h3 class="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200">
                    Study Preferences
                  </h3>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Study Destination <span class="text-red-500">*</span>
                      </label>
                      <select
                        v-model="form.destination"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
                        required
                        :disabled="isSubmitting"
                      >
                        <option value="">Select a country</option>
                        <option v-for="destination in destinations" :key="destination" :value="destination">
                          {{ destination }}
                        </option>
                      </select>
                    </div>

                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Study Level <span class="text-red-500">*</span>
                      </label>
                      <select
                        v-model="form.level"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
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

                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        When Would You Like to Start?
                      </label>
                      <select
                        v-model="form.studyTime"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
                        :disabled="isSubmitting"
                      >
                        <option value="">Select a year</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                      </select>
                    </div>

                    <div class="group">
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Counselling Mode
                      </label>
                      <select
                        v-model="form.mode"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-base focus:border-base hover:border-gray-400 transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500 hover:-translate-y-[1px]"
                        :disabled="isSubmitting"
                      >
                        <option value="">Choose a mode</option>
                        <option value="In-person">In-person</option>
                        <option value="Virtual">Virtual</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="space-y-6 pt-2">
                  <h3 class="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200">
                    Consent & Preferences
                  </h3>

                  <div class="space-y-4">
                    <label class="flex items-start space-x-3 cursor-pointer group">
                      <input
                        v-model="form.agreeTerms"
                        type="checkbox"
                        class="mt-1 w-4 h-4 text-base border-gray-300 rounded focus:ring-base transition-colors duration-200"
                        required
                        :disabled="isSubmitting"
                      />
                      <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                        I agree to B&S terms and privacy policy <span class="text-red-500">*</span>
                      </span>
                    </label>

                    <label class="flex items-start space-x-3 cursor-pointer group">
                      <input
                        v-model="form.contactPref"
                        type="checkbox"
                        class="mt-1 w-4 h-4 text-base border-gray-300 rounded focus:ring-base transition-colors duration-200"
                        :disabled="isSubmitting"
                      />
                      <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                        Please contact me by phone or email
                      </span>
                    </label>

                    <label class="flex items-start space-x-3 cursor-pointer group">
                      <input
                        v-model="form.receiveUpdates"
                        type="checkbox"
                        class="mt-1 w-4 h-4 text-base border-gray-300 rounded focus:ring-base transition-colors duration-200"
                        :disabled="isSubmitting"
                      />
                      <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                        I would like to receive updates via email
                      </span>
                    </label>
                  </div>
                </div>

                <div class="pt-6 text-center">
                  <button
                    type="submit"
                    class="w-full md:w-auto px-10 py-4 bg-base hover:bg-base/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:-translate-y-1 disabled:hover:translate-y-0"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="flex items-center justify-center">
                      <Icon name="i-heroicons-arrow-path" class="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </span>
                    <span v-else class="flex items-center justify-center">
                      Submit Application
                      <Icon name="i-heroicons-paper-airplane" class="w-5 h-5 ml-2" />
                    </span>
                  </button>
                  <p class="text-sm text-gray-500 mt-4">
                    We'll review your application and get back to you within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div class="space-y-8">
            <div class="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-8">Get in Touch</h3>
              <div class="space-y-6">
                
                <div class="group flex items-start space-x-4 p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div class="w-12 h-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon name="i-heroicons-phone" class="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p class="text-gray-600 font-medium">+234 806 544 2707</p>
                    <p class="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM WAT</p>
                  </div>
                </div>

                <div class="group flex items-start space-x-4 p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div class="w-12 h-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon name="i-heroicons-envelope" class="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                    <p class="text-gray-600 font-medium">info@bs-education.com</p>
                    <p class="text-gray-600 font-medium">bseducation@live.com</p>
                    <p class="text-sm text-gray-500 mt-1">We'll respond within 24hrs</p>
                  </div>
                </div>

                <div class="group flex items-start space-x-4 p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div class="w-12 h-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon name="i-heroicons-map-pin" class="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Office</h4>
                    <p class="text-gray-600 font-medium leading-snug">Suite 308, Kings Plaza, Ahmadu Bello Way, Jahi, Abuja, Nigeria</p>
                    <p class="text-sm text-gray-500 mt-1">Visit by appointment only</p>
                  </div>
                </div>

              </div>
            </div>

            <div class="rounded-xl p-8 text-white bg-base shadow-xl">
              <div class="text-center space-y-6">
                <div class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto backdrop-blur-sm">
                  <Icon name="i-simple-icons-whatsapp" class="w-8 h-8" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-3">Quick WhatsApp Chat</h3>
                  <p class="text-white/80 mb-6 text-sm">
                    Get instant answers to your questions via WhatsApp
                  </p>
                  <a
                    href="https://wa.me/+2348065442707"
                    target="_blank"
                    class="inline-flex items-center px-6 py-3 bg-white text-base font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Chat Now
                    <Icon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div class="rounded-xl overflow-hidden shadow-xl">
              <div class="aspect-4/3 bg-base relative">
                <NuxtImg
                  src="/img/celebration.png"
                  alt="Students celebrating"
                  class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">
            Quick answers to common questions about studying abroad
          </p>
        </div>

        <div class="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div class="flex flex-col gap-3">
            <div
              v-for="(faq, index) in faqItems"
              :key="index"
              class="rounded-lg overflow-hidden border transition-all duration-300"
              :class="activeIndex === index ? 'border-base shadow-md' : 'border-gray-200'"
            >
              <button
                class="w-full px-6 py-5 flex justify-between items-center text-left transition-colors hover:bg-gray-50 focus:outline-none"
                :class="activeIndex === index ? 'bg-gray-50 text-base' : 'bg-white text-gray-900'"
                @click="toggleFaq(index)"
                :aria-expanded="activeIndex === index"
              >
                <span class="font-semibold text-lg pr-4">{{ faq.label }}</span>
                <Icon 
                  name="i-heroicons-chevron-down" 
                  class="w-5 h-5 shrink-0 transition-transform duration-300 text-base"
                  :class="{ 'rotate-180': activeIndex === index }"
                />
              </button>
              
              <div 
                class="grid transition-all duration-300 ease-in-out"
                :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <div class="px-6 pb-6 text-gray-600 leading-relaxed">
                    <p v-html="faq.content"></p>
                  </div>
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
import { reactive, ref, watch, nextTick } from 'vue';

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

const triggerWhatsAppChat = (data) => {
  const phoneNumber = "+2348065442707";
  const message = encodeURIComponent(
    "Hello, my name is " +
      data.firstName +
      " " +
      data.lastName +
      ". I would like to inquire about studying abroad. My preferred destination is " + data.destination + "."
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  window.open(whatsappUrl, "_blank");
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  const formDataSnapshot = { ...form };

  try {
    const supabase = useSupabaseClient();

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

      setTimeout(() => {
        showToastNotification(
          "Would you like to chat with us on WhatsApp for immediate assistance?",
          "success"
        );
      }, 4000);
      
      setTimeout(() => {
        triggerWhatsAppChat(formDataSnapshot);
      }, 8000);
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
  },
  {
    label: "Do you help with visa applications?",
    content:
      "Yes! We provide comprehensive visa support including document preparation, application submission, and interview coaching.",
  },
  {
    label: "What are your service fees?",
    content:
      "Our counselling is completely free! We only charge a success fee after you successfully get admission and visa approval.",
  },
  {
    label: "Can you help with scholarships?",
    content:
      "Absolutely! We have access to numerous scholarship opportunities and will help identify and apply for ones that match your profile.",
  },
  {
    label: "Which countries do you specialize in?",
    content:
      "We specialize in UK, Canada, USA, Australia, Ireland, Cyprus, and several other European countries. Each destination has dedicated specialists.",
  },
];

const activeIndex = ref(null);

const toggleFaq = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
  
watch(activeIndex, () => {
  if (activeIndex.value !== null) {
    // Only scroll if the element isn't fully visible
    nextTick(() => {
      const activeElement = document.querySelector('.border-base.shadow-md');
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        if (rect.bottom > window.innerHeight || rect.top < 0) {
          activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }
});

// SEO Meta
useSeoMeta({
  title: "Contact Us - B&S Educational Services",
  description:
    "Get in touch with B&S Educational Services for personalized study abroad guidance. Free counselling, admission support, and visa assistance.",
  ogTitle: "Contact B&S Educational Services - Study Abroad Experts",
  ogDescription:
    "Start your study abroad journey today. Contact our education experts for free counselling and personalized guidance.",
  canonical: "https://www.bs-education.com/contact",
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
  background: #f8fafc;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>