<template>
  <section class="py-8 md:py-16 bg-[#f4f5f3] font-sans" aria-labelledby="form-heading">
    <div class="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div id="application" class="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
          <div>
            <header class="mb-8">
              <h1 id="form-heading" class="text-2xl md:text-3xl font-bold text-primary mb-2">Start Your Journey</h1>
              <p class="text-base text-gray-600 leading-relaxed">
                Fill out the form below and we'll reach out to you within 24
                hours.
              </p>
            </header>

            <form 
              @submit.prevent="handleSubmit" 
              class="w-full"
              novalidate
              aria-describedby="form-description"
            >
              <p id="form-description" class="sr-only">
                Complete this application form to begin your study abroad journey. All fields marked with an asterisk are required.
              </p>

              <fieldset class="mb-8 border-none p-0">
                <legend class="text-lg font-semibold text-primary mb-5 pb-2 border-b-2 border-primary w-full">Personal Information</legend>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div class="flex flex-col">
                    <label for="firstName" class="text-sm font-medium text-primary mb-1.5">
                      First Name <span aria-label="required" class="text-secondary">*</span>
                    </label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      placeholder="Enter your first name"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="given-name"
                    />
                  </div>

                  <div class="flex flex-col">
                    <label for="lastName" class="text-sm font-medium text-primary mb-1.5">
                      Last Name <span aria-label="required" class="text-secondary">*</span>
                    </label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      placeholder="Enter your last name"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="family-name"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div class="flex flex-col">
                    <label for="email" class="text-sm font-medium text-primary mb-1.5">
                      Email Address <span aria-label="required" class="text-secondary">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      placeholder="your.email@example.com"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="email"
                      inputmode="email"
                    />
                  </div>

                  <div class="flex flex-col">
                    <label for="phone" class="text-sm font-medium text-primary mb-1.5">
                      Phone Number <span aria-label="required" class="text-secondary">*</span>
                    </label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      placeholder="+234 123 456 7890"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="tel"
                      inputmode="tel"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset class="mb-8 border-none p-0">
                <legend class="text-lg font-semibold text-primary mb-5 pb-2 border-b-2 border-primary w-full">Study Preferences</legend>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div class="flex flex-col">
                    <label for="destination" class="text-sm font-medium text-primary mb-1.5">
                      Preferred Study Destination <span aria-label="required" class="text-secondary">*</span>
                    </label>
                    <select
                      id="destination"
                      v-model="form.destination"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="country"
                    >
                      <option value="" disabled>Select a country</option>
                      <option
                        v-for="destination in destinations"
                        :key="destination"
                        :value="destination"
                      >
                        {{ destination }}
                      </option>
                    </select>
                  </div>

                  <div class="flex flex-col">
                    <label for="level" class="text-sm font-medium text-primary mb-1.5">
                      Study Level <span aria-label="required" class="text-secondary">*</span>
                    </label>
                    <select
                      id="level"
                      v-model="form.level"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                    >
                      <option value="" disabled>Choose study level</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Certificate">Certificate</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div class="flex flex-col">
                    <label for="studyTime" class="text-sm font-medium text-primary mb-1.5">
                      When Would You Like to Start?
                    </label>
                    <select
                      id="studyTime"
                      v-model="form.studyTime"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      :disabled="isSubmitting"
                    >
                      <option value="">Select a year</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>

                  <div class="flex flex-col">
                    <label for="mode" class="text-sm font-medium text-primary mb-1.5">Counselling Mode</label>
                    <select
                      id="mode"
                      v-model="form.mode"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base bg-white text-primary transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                      :disabled="isSubmitting"
                    >
                      <option value="">Choose a mode</option>
                      <option value="In-person">In-person</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              <fieldset class="mb-8 border-none p-0">
                <legend class="text-lg font-semibold text-primary mb-5 pb-2 border-b-2 border-primary w-full">Consent & Preferences</legend>

                <div class="flex flex-col gap-4">
                  <div class="flex items-start gap-2.5">
                    <input
                      id="agreeTerms"
                      v-model="form.agreeTerms"
                      type="checkbox"
                      class="mt-0.5 w-4 h-4 shrink-0 cursor-pointer accent-primary disabled:cursor-not-allowed disabled:opacity-60 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                    />
                    <label for="agreeTerms" class="text-sm text-primary leading-tight cursor-pointer">
                      I agree to B&S terms and privacy policy <span aria-label="required" class="text-secondary">*</span>
                    </label>
                  </div>

                  <div class="flex items-start gap-2.5">
                    <input
                      id="contactPref"
                      v-model="form.contactPref"
                      type="checkbox"
                      class="mt-0.5 w-4 h-4 shrink-0 cursor-pointer accent-primary disabled:cursor-not-allowed disabled:opacity-60 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      :disabled="isSubmitting"
                    />
                    <label for="contactPref" class="text-sm text-primary leading-tight cursor-pointer">
                      Please contact me by phone or email
                    </label>
                  </div>

                  <div class="flex items-start gap-2.5">
                    <input
                      id="receiveUpdates"
                      v-model="form.receiveUpdates"
                      type="checkbox"
                      class="mt-0.5 w-4 h-4 shrink-0 cursor-pointer accent-primary disabled:cursor-not-allowed disabled:opacity-60 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      :disabled="isSubmitting"
                    />
                    <label for="receiveUpdates" class="text-sm text-primary leading-tight cursor-pointer">
                      I would like to receive updates via email
                    </label>
                  </div>
                </div>
              </fieldset>

              <div class="mt-8 text-center">
                <button
                  type="submit"
                  class="w-full px-6 py-4 bg-secondary hover:bg-secondary/90 text-white border-none rounded-lg text-base font-semibold cursor-pointer mb-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60"
                  :disabled="isSubmitting"
                  :aria-busy="isSubmitting"
                >
                  <span v-if="isSubmitting">Submitting...</span>
                  <span v-else>Submit Application</span>
                </button>
                <p class="text-sm text-gray-600">
                  We'll review your application and get back to you within 24
                  hours.
                </p>
              </div>
            </form>
          </div>
        </div>

        <aside class="relative" aria-label="Success statistics">
          <img
            src="/img/caps.jpg"
            alt="Students celebrating graduation with caps thrown in the air, representing successful study abroad journey"
            class="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-lg"
            width="600"
            height="500"
          />
          <div class="flex justify-center gap-5 md:gap-10 mt-6 p-4 md:p-5 bg-white rounded-xl shadow-lg" role="list">
            <div class="text-center" role="listitem">
              <div class="text-2xl md:text-3xl font-bold text-primary mb-1" aria-label="500 plus students placed">1000+</div>
              <div class="text-xs text-gray-600 uppercase tracking-wide">Students Placed</div>
            </div>
            <div class="text-center" role="listitem">
              <div class="text-2xl md:text-3xl font-bold text-primary mb-1" aria-label="95 percent visa success rate">99%</div>
              <div class="text-xs text-gray-600 uppercase tracking-wide">Visa Success Rate</div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <Transition name="toast">
      <div 
        v-if="showToast" 
        :class="[
          'fixed z-50 p-4 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-3 top-5 right-5 left-5 md:left-auto md:max-w-md',
          toastType === 'success' ? 'bg-green-500/95 text-white' : 'bg-red-500/95 text-white'
        ]"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div class="flex items-center gap-3">
          <div class="text-lg font-bold" aria-hidden="true">
            <span v-if="toastType === 'success'">✓</span>
            <span v-else>⚠</span>
          </div>
          <div class="text-sm leading-snug">{{ toastMessage }}</div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

// SEO Meta tags
useHead({
  title: 'Study Abroad Application - Start Your Journey | B&S Education',
  meta: [
    { 
      name: 'description', 
      content: 'Apply to study abroad with B&S Education. Get expert counselling for UK, USA, Australia, France, Hungary, Malta, and Cyprus. 95% visa success rate with 500+ students placed.' 
    },
    { 
      name: 'keywords', 
      content: 'study abroad, international education, student visa, UK study, USA study, Australia study, education counselling, overseas education' 
    },
    { property: 'og:title', content: 'Study Abroad Application - Start Your Journey' },
    { property: 'og:description', content: 'Apply to study abroad with expert guidance. 95% visa success rate.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://yourdomain.com/apply' }
  ]
});

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

// Fixed function: Accepts data argument and builds message dynamically
const triggerWhatsapp = (data) => {
  const message = `Hello! I have just submitted my application form to B&S Educational Services. My name is ${data.firstName} ${data.lastName}, and I am interested in studying in ${data.destination}. Please get in touch with me at your earliest convenience. Thank you!`;
  
  const phoneNumber = '2348065442707';
  
  // Using api.whatsapp.com for better mobile deep-linking support
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  window.open(whatsappUrl, '_blank');
};

const handleSubmit = async () => {
  // Manual Validation added here:
  if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.phone.trim()) {
    showToastNotification("Please fill in your name, email, and phone number before submitting.", "error");
    return;
  }

  if (isSubmitting.value) return;

  isSubmitting.value = true;

  // IMPORTANT: Create a snapshot of the form data before sending or resetting
  const formDataSnapshot = { ...form };

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
      
      setTimeout(() => {
        showToastNotification(
          "A WhatsApp chat will open to confirm your application.",
          "success"
        );
      }, 4000);
      
      // Pass the SNAPSHOT to the delayed trigger function
      setTimeout(() => {
        triggerWhatsapp(formDataSnapshot);
      }, 6000);
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
</script>

<style scoped>
/* Only keeping the classes strictly required for Vue <Transition> component.
   Everything else is handled natively by Tailwind CSS utility classes. */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>