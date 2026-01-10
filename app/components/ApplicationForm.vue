<template>
  <section class="form-section" aria-labelledby="form-heading">
    <div class="container">
      <div class="form-grid">
        <div id="application" class="form-container">
          <div class="form-card">
            <header class="form-header">
              <h1 id="form-heading" class="form-title">Start Your Journey</h1>
              <p class="form-subtitle">
                Fill out the form below and we'll reach out to you within 24
                hours.
              </p>
            </header>

            <form 
              @submit.prevent="handleSubmit" 
              class="form"
              novalidate
              aria-describedby="form-description"
            >
              <p id="form-description" class="sr-only">
                Complete this application form to begin your study abroad journey. All fields marked with an asterisk are required.
              </p>

              <fieldset class="form-section-group">
                <legend class="section-title">Personal Information</legend>

                <div class="field-row">
                  <div class="form-group">
                    <label for="firstName" class="label">
                      First Name <span aria-label="required">*</span>
                    </label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      class="input"
                      placeholder="Enter your first name"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="given-name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="lastName" class="label">
                      Last Name <span aria-label="required">*</span>
                    </label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      class="input"
                      placeholder="Enter your last name"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="family-name"
                    />
                  </div>
                </div>

                <div class="field-row">
                  <div class="form-group">
                    <label for="email" class="label">
                      Email Address <span aria-label="required">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="input"
                      placeholder="your.email@example.com"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                      autocomplete="email"
                      inputmode="email"
                    />
                  </div>

                  <div class="form-group">
                    <label for="phone" class="label">
                      Phone Number <span aria-label="required">*</span>
                    </label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="input"
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

              <fieldset class="form-section-group">
                <legend class="section-title">Study Preferences</legend>

                <div class="field-row">
                  <div class="form-group">
                    <label for="destination" class="label">
                      Preferred Study Destination <span aria-label="required">*</span>
                    </label>
                    <select
                      id="destination"
                      v-model="form.destination"
                      class="select"
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

                  <div class="form-group">
                    <label for="level" class="label">
                      Study Level <span aria-label="required">*</span>
                    </label>
                    <select
                      id="level"
                      v-model="form.level"
                      class="select"
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

                <div class="field-row">
                  <div class="form-group">
                    <label for="studyTime" class="label">
                      When Would You Like to Start?
                    </label>
                    <select
                      id="studyTime"
                      v-model="form.studyTime"
                      class="select"
                      :disabled="isSubmitting"
                    >
                      <option value="">Select a year</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="mode" class="label">Counselling Mode</label>
                    <select
                      id="mode"
                      v-model="form.mode"
                      class="select"
                      :disabled="isSubmitting"
                    >
                      <option value="">Choose a mode</option>
                      <option value="In-person">In-person</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              <fieldset class="form-section-group">
                <legend class="section-title">Consent & Preferences</legend>

                <div class="checkbox-group">
                  <div class="checkbox-item">
                    <input
                      id="agreeTerms"
                      v-model="form.agreeTerms"
                      type="checkbox"
                      class="checkbox"
                      required
                      aria-required="true"
                      :disabled="isSubmitting"
                    />
                    <label for="agreeTerms" class="checkbox-text">
                      I agree to B&S terms and privacy policy <span aria-label="required">*</span>
                    </label>
                  </div>

                  <div class="checkbox-item">
                    <input
                      id="contactPref"
                      v-model="form.contactPref"
                      type="checkbox"
                      class="checkbox"
                      :disabled="isSubmitting"
                    />
                    <label for="contactPref" class="checkbox-text">
                      Please contact me by phone or email
                    </label>
                  </div>

                  <div class="checkbox-item">
                    <input
                      id="receiveUpdates"
                      v-model="form.receiveUpdates"
                      type="checkbox"
                      class="checkbox"
                      :disabled="isSubmitting"
                    />
                    <label for="receiveUpdates" class="checkbox-text">
                      I would like to receive updates via email
                    </label>
                  </div>
                </div>
              </fieldset>

              <div class="form-footer">
                <button
                  type="submit"
                  class="submit-btn"
                  :disabled="isSubmitting"
                  :aria-busy="isSubmitting"
                >
                  <span v-if="isSubmitting">Submitting...</span>
                  <span v-else>Submit Application</span>
                </button>
                <p class="footer-text">
                  We'll review your application and get back to you within 24
                  hours.
                </p>
              </div>
            </form>
          </div>
        </div>

        <aside class="image-container" aria-label="Success statistics">
          <NuxtImg
            src="/img/caps.jpg"
            alt="Students celebrating graduation with caps thrown in the air, representing successful study abroad journey"
            class="image"
            loading="lazy"
            width="600"
            height="500"
          />
          <div class="stats" role="list">
            <div class="stat" role="listitem">
              <div class="stat-number" aria-label="500 plus students placed">1000+</div>
              <div class="stat-label">Students Placed</div>
            </div>
            <div class="stat" role="listitem">
              <div class="stat-number" aria-label="95 percent visa success rate">99%</div>
              <div class="stat-label">Visa Success Rate</div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <Transition name="toast">
      <div 
        v-if="showToast" 
        :class="['toast', toastType]"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div class="toast-content">
          <div class="toast-icon" aria-hidden="true">
            <span v-if="toastType === 'success'">✓</span>
            <span v-else>⚠</span>
          </div>
          <div class="toast-message">{{ toastMessage }}</div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
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
/* Screen reader only class for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.form-section {
  padding: 64px 0;
  background: #f4f5f3;
  font-family: "Inter", sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

/* Form Styling */
.form-container {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #dddddd;
}

.form-header {
  margin-bottom: 32px;
}

.form-title {
  font-size: 28px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 8px;
}

.form-subtitle {
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
}

.form-section-group {
  margin-bottom: 32px;
  border: none;
  padding: 0;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #5d6b56;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 6px;
}

.input,
.select {
  padding: 12px 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333333;
  transition: all 0.2s ease;
}

.input:focus,
.select:focus {
  outline: none;
  border-color: #5d6b56;
  box-shadow: 0 0 0 3px rgba(133, 148, 132, 0.1);
}

.input:disabled,
.select:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.select {
  cursor: pointer;
}

/* Checkboxes */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.checkbox-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.checkbox {
  margin-top: 2px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  cursor: pointer;
}

.checkbox:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox:focus {
  outline: 2px solid #5d6b56;
  outline-offset: 2px;
}

.checkbox-text {
  font-size: 14px;
  color: #333333;
  line-height: 1.4;
  cursor: pointer;
}

/* Submit Button */
.form-footer {
  margin-top: 32px;
  text-align: center;
}

.submit-btn {
  width: 100%;
  padding: 16px 24px;
  background: #5d6b56;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #6b7a6a;
}

.submit-btn:focus {
  outline: 2px solid #5d6b56;
  outline-offset: 2px;
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.footer-text {
  font-size: 14px;
  color: #666666;
}

/* Image Section */
.image-container {
  position: relative;
}

.image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 24px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: #5d6b56;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Toast Notification */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 400px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.toast.success {
  background: rgba(34, 197, 94, 0.95);
  color: white;
}

.toast.error {
  background: rgba(239, 68, 68, 0.95);
  color: white;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  font-size: 18px;
  font-weight: bold;
}

.toast-message {
  font-size: 14px;
  line-height: 1.4;
}

/* Toast Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Responsive */
@media (max-width: 1023px) {
  .container {
    padding: 0 40px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .field-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .form-section {
    padding: 32px 0;
  }

  .container {
    padding: 0 20px;
  }

  .form-container {
    padding: 24px;
  }

  .form-title {
    font-size: 24px;
  }

  .image {
    height: 300px;
  }

  .stats {
    gap: 20px;
    padding: 16px;
  }

  .toast {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .input,
  .select {
    border: 2px solid currentColor;
  }
  
  .submit-btn {
    border: 2px solid currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>