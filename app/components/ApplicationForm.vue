<template>
  <section class="form-section">
    <div class="container">
      <div class="form-grid">
        <!-- Left: Form -->
        <div class="form-container">
          <div class="form-card">
            <div class="form-header">
              <h2 class="form-title">Start Your Journey</h2>
              <p class="form-subtitle">
                Fill out the form below and we'll reach out to you within 24
                hours.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="form">
              <!-- Personal Information -->
              <div class="form-section-group">
                <h3 class="section-title">Personal Information</h3>

                <div class="field-row">
                  <div class="form-group">
                    <label class="label">First Name *</label>
                    <input
                      v-model="form.firstName"
                      type="text"
                      class="input"
                      placeholder="Enter your first name"
                      required
                      :disabled="isSubmitting"
                    />
                  </div>

                  <div class="form-group">
                    <label class="label">Last Name *</label>
                    <input
                      v-model="form.lastName"
                      type="text"
                      class="input"
                      placeholder="Enter your last name"
                      required
                      :disabled="isSubmitting"
                    />
                  </div>
                </div>

                <div class="field-row">
                  <div class="form-group">
                    <label class="label">Email Address *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      class="input"
                      placeholder="your.email@example.com"
                      required
                      :disabled="isSubmitting"
                    />
                  </div>

                  <div class="form-group">
                    <label class="label">Phone Number *</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="input"
                      placeholder="+234 123 456 7890"
                      required
                      :disabled="isSubmitting"
                    />
                  </div>
                </div>
              </div>

              <!-- Study Preferences -->
              <div class="form-section-group">
                <h3 class="section-title">Study Preferences</h3>

                <div class="field-row">
                  <div class="form-group">
                    <label class="label">Preferred Study Destination *</label>
                    <select
                      v-model="form.destination"
                      class="select"
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
                    <label class="label">Study Level *</label>
                    <select
                      v-model="form.level"
                      class="select"
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

                <div class="field-row">
                  <div class="form-group">
                    <label class="label">When Would You Like to Start?</label>
                    <select
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
                    <label class="label">Counselling Mode</label>
                    <select
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
              </div>

              <!-- Consent -->
              <div class="form-section-group">
                <h3 class="section-title">Consent & Preferences</h3>

                <div class="checkbox-group">
                  <label class="checkbox-item">
                    <input
                      v-model="form.agreeTerms"
                      type="checkbox"
                      class="checkbox"
                      required
                      :disabled="isSubmitting"
                    />
                    <span class="checkbox-text">
                      I agree to B&S terms and privacy policy *
                    </span>
                  </label>

                  <label class="checkbox-item">
                    <input
                      v-model="form.contactPref"
                      type="checkbox"
                      class="checkbox"
                      :disabled="isSubmitting"
                    />
                    <span class="checkbox-text"
                      >Please contact me by phone or email</span
                    >
                  </label>

                  <label class="checkbox-item">
                    <input
                      v-model="form.receiveUpdates"
                      type="checkbox"
                      class="checkbox"
                      :disabled="isSubmitting"
                    />
                    <span class="checkbox-text"
                      >I would like to receive updates via email</span
                    >
                  </label>
                </div>
              </div>

              <!-- Submit -->
              <div class="form-footer">
                <button
                  type="submit"
                  class="submit-btn"
                  :disabled="isSubmitting"
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

        <!-- Right: Image -->
        <div class="image-container">
          <NuxtImg
            src="/img/caps.jpg"
            alt="Student celebrating graduation abroad"
            class="image"
          />
          <div class="stats">
            <div class="stat">
              <div class="stat-number">500+</div>
              <div class="stat-label">Students Placed</div>
            </div>
            <div class="stat">
              <div class="stat-number">95%</div>
              <div class="stat-label">Visa Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <Transition name="toast">
      <div v-if="showToast" :class="['toast', toastType]">
        <div class="toast-content">
          <div class="toast-icon">
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
</script>

<style scoped>
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
  cursor: pointer;
}

.checkbox {
  margin-top: 2px;
  width: 16px;
  height: 16px;
}

.checkbox:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-text {
  font-size: 14px;
  color: #333333;
  line-height: 1.4;
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
</style>
