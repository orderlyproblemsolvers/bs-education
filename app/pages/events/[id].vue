<template>
  <div class="min-h-screen bg-[#f4f5f3]">
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
        <div class="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-10 h-10 text-red-500" />
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h2>
        <p class="text-gray-600 mb-8 max-w-md mx-auto">
          This event may have been moved, cancelled, or does not exist. Please check the event list for available programmes.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            to="/events" 
            class="bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium px-8 py-3 rounded-xl"
          >
            <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
            Back to Events
          </UButton>
          <UButton 
            to="/" 
            variant="outline"
            class="border-[#5d6b56] text-[#5d6b56] hover:bg-[#5d6b56] hover:text-white font-medium px-8 py-3 rounded-xl"
          >
            Go Home
          </UButton>
        </div>
      </div>

      <!-- Event Details -->
      <div v-else class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              
              <!-- Event Header -->
              <div class="bg-gradient-to-r from-[#5d6b56] to-[#9BAD94] p-8 text-white">
                <div class="flex items-center mb-4">
                  <div class="bg-white/20 p-2 rounded-lg mr-3">
                    <UIcon name="i-heroicons-academic-cap" class="w-6 h-6" />
                  </div>
                  <span class="bg-white/20 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
                    Educational Event
                  </span>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {{ event.title }}
                </h1>
                
                <!-- Event Meta Information -->
                <div class="flex flex-wrap gap-6 text-white/90">
                  <div class="flex items-center space-x-2">
                    <div class="bg-white/20 p-1.5 rounded-lg">
                      <UIcon name="i-heroicons-calendar-days" class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="font-semibold">{{ formatDateShort(event.event_date) }}</div>
                      <div class="text-sm opacity-90">{{ formatTime(event.event_date) }}</div>
                    </div>
                  </div>
                  
                  <div v-if="event.venue" class="flex items-center space-x-2">
                    <div class="bg-white/20 p-1.5 rounded-lg">
                      <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="font-semibold">{{ event.venue }}</div>
                      <div class="text-sm opacity-90">Venue</div>
                    </div>
                  </div>

                  <!-- Admission Fee -->
                  <div class="flex items-center space-x-2">
                    <div class="bg-white/20 p-1.5 rounded-lg">
                      <UIcon name="i-heroicons-currency-dollar" class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="font-semibold">
                        {{ event.is_free ? 'Free' : `${event.currency}${event.admission_fee}` }}
                      </div>
                      <div class="text-sm opacity-90">Admission</div>
                    </div>
                  </div>

                  <!-- Event Status -->
                  <div class="flex items-center space-x-2">
                    <div class="bg-white/20 p-1.5 rounded-lg">
                      <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="font-semibold" :class="getStatusClass()">
                        {{ getEventStatus() }}
                      </div>
                      <div class="text-sm opacity-90">Status</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Event Description -->
              <div class="p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <UIcon name="i-heroicons-document-text" class="w-6 h-6 mr-3 text-[#5d6b56]" />
                  About This Event
                </h2>
                
                <div v-if="event.description" class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>{{ event.description }}</p>
                </div>
                <div v-else class="bg-gray-50 rounded-xl p-6 text-center">
                  <UIcon name="i-heroicons-information-circle" class="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p class="text-gray-500">No additional details provided for this event.</p>
                </div>

                <!-- Event Highlights -->
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-[#5d6b56]/5 rounded-xl p-4 border border-[#5d6b56]/20">
                    <div class="flex items-center mb-2">
                      <UIcon name="i-heroicons-users" class="w-5 h-5 text-[#5d6b56] mr-2" />
                      <span class="font-semibold text-gray-900">Interactive Learning</span>
                    </div>
                    <p class="text-sm text-gray-600">Engage with fellow participants and expert facilitators</p>
                  </div>
                  
                  <div class="bg-[#EB6534]/5 rounded-xl p-4 border border-[#EB6534]/20">
                    <div class="flex items-center mb-2">
                      <UIcon name="i-heroicons-trophy" class="w-5 h-5 text-[#EB6534] mr-2" />
                      <span class="font-semibold text-gray-900">Certificate</span>
                    </div>
                    <p class="text-sm text-gray-600">Receive a certificate of participation upon completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Registration Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-8">
              <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                
                <!-- Registration Header -->
                <div class="bg-[#f4f5f3] p-6 border-b border-gray-100">
                  <h3 class="text-xl font-bold text-gray-900 flex items-center">
                    <UIcon name="i-heroicons-clipboard-document-check" class="w-6 h-6 mr-3 text-[#5d6b56]" />
                    Event Registration
                  </h3>
                </div>

                <div class="p-6">
                  <!-- Event Past -->
                  <div v-if="isEventPast" class="text-center py-8">
                    <div class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UIcon name="i-heroicons-clock" class="w-8 h-8 text-gray-500" />
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Registration Closed</h4>
                    <p class="text-sm text-gray-600 mb-4">This event has already occurred.</p>
                    <div class="bg-gray-50 rounded-lg p-4">
                      <p class="text-xs text-gray-500">
                        Event took place on {{ formatDateShort(event.event_date) }}
                      </p>
                    </div>
                  </div>

                  <!-- Registration Confirmed -->
                  <div v-else-if="hasRegistered" class="text-center py-8">
                    <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-green-600" />
                    </div>
                    <h4 class="font-bold text-green-900 mb-2">Registration Confirmed!</h4>
                    <p class="text-sm text-green-700 mb-4">Thank you! We have received your registration.</p>
                    
                    <!-- Payment Instructions for Paid Events -->
                    <div v-if="!event.is_free" class="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4 text-left">
                      <h5 class="font-bold text-blue-900 mb-2 flex items-center">
                        <UIcon name="i-heroicons-credit-card" class="w-4 h-4 mr-2" />
                        Payment Instructions
                      </h5>
                      <p class="text-sm text-blue-700 mb-3">
                        Please complete your payment to secure your spot:
                      </p>
                      <ol class="list-decimal list-inside text-sm text-blue-700 space-y-1">
                        <li>Transfer <span class="font-bold">{{ event.currency }}{{ event.admission_fee }}</span> to:</li>
                        <li class="ml-5">
                          <span class="font-semibold">Bank Name:</span> Zenith Bank<br>
                          <span class="font-semibold">Account Name:</span> Tech Events Ltd<br>
                          <span class="font-semibold">Account Number:</span> 1234567890
                        </li>
                        <li>Send proof of payment via WhatsApp to <span class="font-bold">+234 812 345 6789</span></li>
                        <li>You'll receive a confirmation within 24 hours</li>
                      </ol>
                      <div class="mt-3">
                        <UButton 
                          to="https://wa.me/2348123456789?text=Payment%20Receipt%20for%20{{ encodeURIComponent(event.title) }}"
                          target="_blank"
                          class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg"
                        >
                          <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4 mr-2" />
                          Send Receipt on WhatsApp
                        </UButton>
                      </div>
                    </div>
                    
                    <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p class="text-xs text-green-600 font-medium">
                        You will receive a confirmation email shortly with event details.
                      </p>
                    </div>
                  </div>
                  
                  <!-- Registration Form -->
                  <div v-else-if="event.form_fields && event.form_fields.length > 0">
                    <div class="mb-6">
                      <div class="bg-[#5d6b56]/10 rounded-lg p-4 mb-4">
                        <div class="flex items-center text-[#5d6b56] mb-2">
                          <UIcon name="i-heroicons-information-circle" class="w-4 h-4 mr-2" />
                          <span class="font-medium text-sm">Registration Required</span>
                        </div>
                        <p class="text-xs text-gray-600">Please fill out the form below to secure your spot.</p>
                        
                        <!-- Admission Fee Notice -->
                        <div v-if="!event.is_free" class="mt-3 bg-amber-50 rounded-lg p-3 border border-amber-200">
                          <div class="flex items-start">
                            <UIcon name="i-heroicons-exclamation-circle" class="w-4 h-4 text-amber-600 mt-0.5 mr-2" />
                            <div>
                              <p class="text-xs font-medium text-amber-700">
                                This event requires a payment of <span class="font-bold">{{ event.currency }}{{ event.admission_fee }}</span>.
                                Payment instructions will be provided after registration.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Progress Bar for Multi-step Forms -->
                    <div v-if="isMultiStep" class="mb-6">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-700">
                          Step {{ currentStep + 1 }} of {{ formSteps.length }}
                        </span>
                        <span class="text-xs text-gray-500">
                          {{ Math.round(((currentStep + 1) / formSteps.length) * 100) }}% Complete
                        </span>
                      </div>
                      
                      <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          class="bg-[#5d6b56] h-2 rounded-full transition-all duration-300" 
                          :style="{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }"
                        ></div>
                      </div>

                      <!-- Step Indicator -->
                      <div class="flex justify-between mb-6">
                        <div 
                          v-for="(step, index) in formSteps" 
                          :key="index"
                          class="flex flex-col items-center"
                          :class="{ 'flex-1': formSteps.length <= 4 }"
                        >
                          <div 
                            class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-200"
                            :class="index <= currentStep 
                              ? 'bg-[#5d6b56] text-white' 
                              : 'bg-gray-200 text-gray-500'"
                          >
                            <UIcon 
                              v-if="index < currentStep" 
                              name="i-heroicons-check" 
                              class="w-4 h-4" 
                            />
                            <span v-else>{{ index + 1 }}</span>
                          </div>
                          <span 
                            class="text-xs mt-1 text-center max-w-16 leading-tight"
                            :class="index <= currentStep ? 'text-[#5d6b56] font-medium' : 'text-gray-400'"
                          >
                            {{ step.title }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Duplicate Registration Warning -->
                    <div v-if="duplicateWarning" class="mb-4">
                      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div class="flex items-center text-amber-700 mb-2">
                          <UIcon name="i-heroicons-exclamation-triangle" class="w-4 h-4 mr-2" />
                          <span class="font-medium text-sm">Already Registered</span>
                        </div>
                        <p class="text-xs text-amber-600">
                          This email is already registered for this event. If you believe this is an error, please contact support.
                        </p>
                      </div>
                    </div>

                    <!-- Form Content -->
                    <form @submit.prevent="handleFormSubmit" class="space-y-4">
                      <!-- Multi-step Form Fields -->
                      <div v-if="isMultiStep">
                        <div class="mb-4">
                          <h4 class="font-semibold text-gray-900 mb-2">
                            {{ formSteps[currentStep].title }}
                          </h4>
                          <p class="text-sm text-gray-600 mb-4">
                            {{ formSteps[currentStep].description }}
                          </p>
                        </div>

                        <div class="space-y-4">
                          <div 
                            v-for="field in formSteps[currentStep].fields" 
                            :key="field.label" 
                            class="space-y-1"
                          >
                            <label 
                              :for="field.label" 
                              class="block text-sm font-medium text-gray-700"
                            >
                              {{ getFieldLabel(field) }}
                              <span v-if="field.required" class="text-red-500 ml-1">*</span>
                            </label>
                            
                            <input 
                              v-if="field.type !== 'checkbox' && field.type !== 'select' && field.type !== 'textarea'"
                              v-model="formData[field.label]" 
                              :type="field.type" 
                              :id="field.label"
                              :name="field.label"
                              :required="field.required"
                              :placeholder="getFieldPlaceholder(field)"
                              :disabled="duplicateWarning && field.type === 'email'"
                              class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] disabled:bg-gray-100 disabled:cursor-not-allowed"
                              @blur="field.type === 'email' ? checkDuplicateRegistration() : null"
                            />
                            
                            <textarea 
                              v-else-if="field.type === 'textarea'"
                              v-model="formData[field.label]" 
                              :id="field.label"
                              :name="field.label"
                              :required="field.required"
                              :placeholder="getFieldPlaceholder(field)"
                              class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]"
                              rows="3"
                            ></textarea>
                            
                            <select 
                              v-else-if="field.type === 'select'"
                              v-model="formData[field.label]" 
                              :id="field.label"
                              :name="field.label"
                              :required="field.required"
                              class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]"
                            >
                              <option value="">{{ getFieldPlaceholder(field) }}</option>
                              <option 
                                v-for="option in field.options || []" 
                                :key="option" 
                                :value="option"
                              >
                                {{ option }}
                              </option>
                            </select>
                            
                            <div v-else class="flex items-center">
                              <input 
                                v-model="formData[field.label]" 
                                type="checkbox"
                                :id="field.label"
                                :name="field.label"
                                :required="field.required"
                                class="h-4 w-4 text-[#5d6b56] focus:ring-[#5d6b56] border-gray-300 rounded"
                              />
                              <label :for="field.label" class="ml-2 text-sm text-gray-700">
                                {{ getFieldLabel(field) }}
                              </label>
                            </div>

                            <p v-if="getFieldHelp(field)" class="text-xs text-gray-500 mt-1">
                              {{ getFieldHelp(field) }}
                            </p>
                          </div>
                        </div>

                        <!-- Step Navigation -->
                        <div class="flex justify-between pt-6 mt-6 border-t border-gray-100">
                          <UButton 
                            v-if="currentStep > 0"
                            @click="previousStep"
                            type="button"
                            class="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg"
                          >
                            <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
                            Previous
                          </UButton>
                          <div v-else></div>

                          <UButton 
                            v-if="currentStep < formSteps.length - 1"
                            @click="nextStep"
                            type="button"
                            :disabled="!isCurrentStepValid"
                            class="bg-[#5d6b56] hover:bg-[#9BAD94] text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
                          </UButton>
                          
                          <UButton 
                            v-else
                            type="submit" 
                            :disabled="duplicateWarning || !isFormValid || isSubmitting"
                            class="bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-semibold px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <UIcon v-if="!isSubmitting" name="i-heroicons-paper-airplane" class="w-4 h-4 mr-2" />
                            <span v-if="isSubmitting">Submitting...</span>
                            <span v-else-if="duplicateWarning">Already Registered</span>
                            <span v-else>Complete Registration</span>
                          </UButton>
                        </div>
                      </div>

                      <!-- Single Step Form (5 or fewer fields) -->
                      <div v-else>
                        <div 
                          v-for="field in event.form_fields" 
                          :key="field.label" 
                          class="space-y-1"
                        >
                          <label 
                            :for="field.label" 
                            class="block text-sm font-medium text-gray-700"
                          >
                            {{ getFieldLabel(field) }}
                            <span v-if="field.required" class="text-red-500 ml-1">*</span>
                          </label>
                          
                          <input 
                            v-if="field.type !== 'checkbox' && field.type !== 'select' && field.type !== 'textarea'"
                            v-model="formData[field.label]" 
                            :type="field.type" 
                            :id="field.label"
                            :name="field.label"
                            :required="field.required"
                            :placeholder="getFieldPlaceholder(field)"
                            :disabled="duplicateWarning && field.type === 'email'"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] disabled:bg-gray-100 disabled:cursor-not-allowed"
                            @blur="field.type === 'email' ? checkDuplicateRegistration() : null"
                          />
                          
                          <textarea 
                            v-else-if="field.type === 'textarea'"
                            v-model="formData[field.label]" 
                            :id="field.label"
                            :name="field.label"
                            :required="field.required"
                            :placeholder="getFieldPlaceholder(field)"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]"
                            rows="3"
                          ></textarea>
                          
                          <select 
                            v-else-if="field.type === 'select'"
                            v-model="formData[field.label]" 
                            :id="field.label"
                            :name="field.label"
                            :required="field.required"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]"
                          >
                            <option value="">{{ getFieldPlaceholder(field) }}</option>
                            <option 
                              v-for="option in field.options || []" 
                              :key="option" 
                              :value="option"
                            >
                              {{ option }}
                            </option>
                          </select>
                          
                          <div v-else class="flex items-center">
                            <input 
                              v-model="formData[field.label]" 
                              type="checkbox"
                              :id="field.label"
                              :name="field.label"
                              :required="field.required"
                              class="h-4 w-4 text-[#5d6b56] focus:ring-[#5d6b56] border-gray-300 rounded"
                            />
                            <label :for="field.label" class="ml-2 text-sm text-gray-700">
                              {{ getFieldLabel(field) }}
                            </label>
                          </div>

                          <p v-if="getFieldHelp(field)" class="text-xs text-gray-500 mt-1">
                            {{ getFieldHelp(field) }}
                          </p>
                        </div>
                        
                        <UButton 
                          type="submit" 
                          :disabled="duplicateWarning || isSubmitting"
                          class="w-full bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <UIcon v-if="!isSubmitting" name="i-heroicons-paper-airplane" class="w-4 h-4 mr-2" />
                          <span v-if="isSubmitting">Submitting Registration...</span>
                          <span v-else-if="duplicateWarning">Already Registered</span>
                          <span v-else>Register Now</span>
                        </UButton>
                      </div>
                    </form>
                  </div>

                  <!-- No Registration Required -->
                  <div v-else class="text-center py-8">
                    <div class="bg-[#5d6b56]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UIcon name="i-heroicons-information-circle" class="w-8 h-8 text-[#5d6b56]" />
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Open Event</h4>
                    <p class="text-sm text-gray-600 mb-4">No registration required for this event.</p>
                    <div class="bg-[#5d6b56]/5 rounded-lg p-4 border border-[#5d6b56]/20">
                      <p class="text-xs text-gray-600">
                        Simply show up at the venue on the event date and time.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Event Actions -->
                <div class="bg-[#f4f5f3] p-6 border-t border-gray-100">
                  <div class="flex flex-col space-y-3">
                    <UButton 
                      to="/events" 
                      class="w-full  text-[#5d6b56] hover:bg-[#5d6b56] hover:text-white font-medium py-2 rounded-lg transition-all duration-200"
                    >
                      <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
                      Back to All Events
                    </UButton>
                    
                    <UButton 
                      @click="shareEvent"
                      class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition-all duration-200"
                    >
                      <UIcon name="i-heroicons-share" class="w-4 h-4 mr-2" />
                      Share Event
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const route = useRoute();
const toast = useToast();

const eventId = route.params.id;
const formData = reactive({});
const isSubmitting = ref(false);
const hasRegistered = ref(false);
const duplicateWarning = ref(false);
const isCheckingDuplicate = ref(false);
const currentStep = ref(0);

// Fetch the single event data
const { data: event, pending, error } = await useAsyncData(`event-${eventId}`, async () => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', eventId)
    .single();

  if (error) throw error;

  // Initialize the formData object based on the form fields
  if (data && data.form_fields) {
    data.form_fields.forEach(field => {
      // Set default for checkbox to false, others to empty string
      formData[field.label] = field.type === 'checkbox' ? false : '';
    });
  }

  return data;
});

// Determine if this should be a multi-step form
const isMultiStep = computed(() => {
  return event.value?.form_fields && event.value.form_fields.length > 5;
});

// Create form steps for multi-step forms
const formSteps = computed(() => {
  if (!isMultiStep.value || !event.value?.form_fields) return [];
  
  const fields = event.value.form_fields;
  const steps = [];
  
  // Auto-group fields into logical steps
  const personalFields = fields.filter(f => 
    ['name', 'first name', 'last name', 'full name', 'email', 'phone', 'telephone', 'mobile'].some(keyword => 
      f.label.toLowerCase().includes(keyword)
    )
  );
  
  const organizationFields = fields.filter(f => 
    ['organization', 'company', 'institution', 'workplace', 'job', 'title', 'position', 'department'].some(keyword => 
      f.label.toLowerCase().includes(keyword)
    )
  );
  
  
  const demographicFields = fields.filter(f => 
    ['age', 'gender', 'location', 'city', 'state', 'country', 'address', 'experience', 'level'].some(keyword => 
      f.label.toLowerCase().includes(keyword)
    )
  );
  
  const preferencesFields = fields.filter(f => 
    ['preference', 'interest', 'dietary', 'accessibility', 'special', 'requirement', 'note', 'comment'].some(keyword => 
      f.label.toLowerCase().includes(keyword)
    )
  );
  
  // Get remaining fields not categorized
  const categorizedFields = [...personalFields, ...organizationFields, ...demographicFields, ...preferencesFields];
  const otherFields = fields.filter(f => !categorizedFields.includes(f));
  let otherFields1 = [];
  let otherFields2 = [];

  if (otherFields.length > 5) {
    const mid = Math.ceil(otherFields.length / 2);
    otherFields1 = otherFields.slice(0, mid);
    otherFields2 = otherFields.slice(mid);
  } else {
    otherFields1 = otherFields;
  }

  
  
  // Create steps based on available field categories
  if (personalFields.length > 0) {
    steps.push({
      title: 'Personal Info',
      description: 'Tell us a bit about yourself',
      fields: personalFields
    });
  }
  
  if (organizationFields.length > 0) {
    steps.push({
      title: 'Professional',
      description: 'Your professional background',
      fields: organizationFields
    });
  }
  
  if (demographicFields.length > 0) {
    steps.push({
      title: 'Background',
      description: 'Additional information',
      fields: demographicFields
    });
  }
  
  if (preferencesFields.length > 0) {
    steps.push({
      title: 'Preferences',
      description: 'Your preferences and requirements',
      fields: preferencesFields
    });
  }
  
  if (otherFields1.length > 0) {
    steps.push({
      title: 'Additional',
      description: 'Additional information',
      fields: otherFields1
    });
  }
  if (otherFields2.length > 0) {
    steps.push({
      title: 'Additional',
      description: 'Additional information',
      fields: otherFields2
    });
  }

  
  
  // If we only have one step or categorization didn't work well, split evenly
  if (steps.length <= 1) {
    const fieldsPerStep = Math.ceil(fields.length / 3);
    steps.length = 0; // Clear existing steps
    
    for (let i = 0; i < fields.length; i += fieldsPerStep) {
      const stepFields = fields.slice(i, i + fieldsPerStep);
      const stepNumber = Math.floor(i / fieldsPerStep) + 1;
      
      steps.push({
        title: `Step ${stepNumber}`,
        description: `Complete the following fields`,
        fields: stepFields
      });
    }
  }
  
  return steps;
});

// Validation for current step
const isCurrentStepValid = computed(() => {
  if (!isMultiStep.value) return true;
  
  const currentStepFields = formSteps.value[currentStep.value]?.fields || [];
  return currentStepFields.every(field => {
    if (!field.required) return true;
    const value = formData[field.label];
    return field.type === 'checkbox' ? value === true : (value && value.toString().trim() !== '');
  });
});

// Overall form validation
const isFormValid = computed(() => {
  if (!event.value?.form_fields) return true;
  
  return event.value.form_fields.every(field => {
    if (!field.required) return true;
    const value = formData[field.label];
    return field.type === 'checkbox' ? value === true : (value && value.toString().trim() !== '');
  });
});

// Step navigation
const nextStep = () => {
  if (currentStep.value < formSteps.value.length - 1 && isCurrentStepValid.value) {
    currentStep.value++;
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

// Enhanced field labeling and helpers
const getFieldLabel = (field) => {
  // Improve field labels with proper formatting
  const label = field.label || field.name || '';
  return label.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const getFieldPlaceholder = (field) => {
  const label = field.label.toLowerCase();
  
  // Custom placeholders based on field type and label
  const placeholderMap = {
    'email': 'Enter your email address',
    'phone': 'Enter your phone number',
    'name': 'Enter your full name',
    'first name': 'Enter your first name',
    'last name': 'Enter your last name',
    'organization': 'Enter your organization name',
    'company': 'Enter your company name',
    'job title': 'Enter your job title',
    'position': 'Enter your position',
    'age': 'Enter your age',
    'address': 'Enter your address',
    'city': 'Enter your city',
    'state': 'Enter your state',
    'country': 'Enter your country',
    'experience': 'Years of experience',
    'website': 'https://example.com',
    'linkedin': 'LinkedIn profile URL',
    'twitter': 'Twitter handle',
    'dietary': 'Any dietary restrictions?',
    'accessibility': 'Any accessibility needs?',
    'comments': 'Additional comments or notes',
    'notes': 'Additional notes',
    'emergency contact': 'Emergency contact information'
  };

  // Check for exact matches first
  if (placeholderMap[label]) {
    return placeholderMap[label];
  }

  // Check for partial matches
  for (const [key, value] of Object.entries(placeholderMap)) {
    if (label.includes(key)) {
      return value;
    }
  }

  // Default placeholder based on field type
  switch (field.type) {
    case 'email':
      return 'Enter your email address';
    case 'tel':
    case 'phone':
      return 'Enter your phone number';
    case 'url':
      return 'Enter URL';
    case 'number':
      return 'Enter a number';
    case 'date':
      return 'Select date';
    case 'textarea':
      return 'Enter your response here...';
    case 'select':
      return 'Please select an option';
    default:
      return `Enter your ${label}`;
  }
};

const getFieldHelp = (field) => {
  const label = field.label.toLowerCase();
  
  // Provide helpful hints based on field type and label
  const helpMap = {
    'email': 'We\'ll use this to send you event updates',
    'phone': 'Include country code if international',
    'dietary': 'Let us know about any food allergies or dietary restrictions',
    'accessibility': 'Help us make this event accessible for you',
    'emergency contact': 'Person to contact in case of emergency',
    'experience': 'This helps us tailor the content to your level',
    'linkedin': 'Optional: Your LinkedIn profile for networking',
    'website': 'Optional: Your personal or company website',
    'organization': 'The company or institution you represent'
  };

  // Check for matches
  for (const [key, value] of Object.entries(helpMap)) {
    if (label.includes(key)) {
      return value;
    }
  }

  // Field type specific help
  if (field.type === 'checkbox' && field.required) {
    return 'This field is required';
  }

  return null;
};

// Handle form submission (works for both single and multi-step)
const handleFormSubmit = async () => {
  if (isMultiStep.value) {
    // For multi-step, this only triggers on the last step
    await handleRegistration();
  } else {
    // For single step, submit immediately
    await handleRegistration();
  }
};

// Check localStorage for existing registration
onMounted(() => {
  if (process.client) {
    const storageKey = `event_registered_${eventId}`;
    const localRegistration = localStorage.getItem(storageKey);
    
    if (localRegistration) {
      hasRegistered.value = true;
    }
  }
});

// Function to check for duplicate registration by email
const checkDuplicateRegistration = async () => {
  // Find email field
  const emailField = event.value.form_fields?.find(field => 
    field.type === 'email' || 
    field.label.toLowerCase().includes('email')
  );
  
  if (!emailField || !formData[emailField.label]) {
    duplicateWarning.value = false;
    return;
  }
  
  const emailValue = formData[emailField.label].trim().toLowerCase();
  
  if (!emailValue) {
    duplicateWarning.value = false;
    return;
  }
  
  isCheckingDuplicate.value = true;
  
  try {
    const { data, error } = await supabase
      .from('registrations')
      .select('id')
      .eq('event_id', eventId)
      .ilike(`form_data->>${emailField.label}`, emailValue)
      .limit(1);
    
    if (error) throw error;
    
    duplicateWarning.value = data && data.length > 0;
    
  } catch (error) {
    console.error('Error checking duplicate registration:', error);
    // Don't show warning if there's an error checking
    duplicateWarning.value = false;
  } finally {
    isCheckingDuplicate.value = false;
  }
};

// Computed property to check if the event date is in the past
const isEventPast = computed(() => {
  if (!event.value) return false;
  return new Date(event.value.event_date) < new Date();
});

// Get event status
const getEventStatus = () => {
  if (!event.value) return '';
  if (isEventPast.value) return 'Completed';
  
  const eventDate = new Date(event.value.event_date);
  const today = new Date();
  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays <= 7) return 'This Week';
  return 'Upcoming';
};

// Get status styling class
const getStatusClass = () => {
  if (isEventPast.value) return 'text-white/70';
  return 'text-white';
};

// The registration handler with duplicate prevention
const handleRegistration = async () => {
  // Double-check for duplicates before submission
  await checkDuplicateRegistration();
  
  if (duplicateWarning.value) {
    toast.add({
      title: 'Registration Error',
      description: 'This email is already registered for this event.',
      color: 'red',
      timeout: 5000
    });
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    const { error } = await supabase.from('registrations').insert([
      {
        event_id: eventId,
        form_data: formData,
        admission_fee: event.value.admission_fee,
        is_paid: event.value.is_free, // Default to true if event is free
        currency: event.value.currency
      },
    ]);

    if (error) throw error;

    // Store registration in localStorage for UX
    if (process.client) {
      const storageKey = `event_registered_${eventId}`;
      localStorage.setItem(storageKey, JSON.stringify({
        eventId,
        registeredAt: new Date().toISOString(),
        email: getEmailFromFormData()
      }));
    }

    toast.add({ 
      title: 'Registration Successful!', 
      description: 'Your registration has been confirmed. Check your email for details.', 
      color: 'green',
      timeout: 7000
    });
    
    hasRegistered.value = true;
    
  } catch (error) {
    // Check if it's a duplicate key error (database constraint)
    if (error.message?.includes('duplicate') || error.code === '23505') {
      toast.add({
        title: 'Already Registered',
        description: 'You have already registered for this event.',
        color: 'orange',
        timeout: 7000
      });
      duplicateWarning.value = true;
    } else {
      toast.add({ 
        title: 'Registration Failed', 
        description: error.message || 'An error occurred during registration. Please try again.', 
        color: 'red',
        timeout: 7000
      });
    }
  } finally {
    isSubmitting.value = false;
  }
};

// Helper function to get email from form data
const getEmailFromFormData = () => {
  const emailField = event.value.form_fields?.find(field => 
    field.type === 'email' || 
    field.label.toLowerCase().includes('email')
  );
  return emailField ? formData[emailField.label] : null;
};

// Share event functionality
const shareEvent = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: event.value.title,
        text: `Join me at ${event.value.title}`,
        url: window.location.href
      });
    } catch (error) {
      // Fallback to copying URL
      await navigator.clipboard.writeText(window.location.href);
      toast.add({
        title: 'Link Copied',
        description: 'Event link has been copied to your clipboard.',
        color: 'green'
      });
    }
  } else {
    // Fallback for browsers without Web Share API
    await navigator.clipboard.writeText(window.location.href);
    toast.add({
      title: 'Link Copied',
      description: 'Event link has been copied to your clipboard.',
      color: 'green'
    });
  }
};

// Helper function to format the full date
const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

// Helper function to format date short version
const formatDateShort = (dateString) => {
  if (!dateString) return '';
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

// Helper function to format time
const formatTime = (dateString) => {
  if (!dateString) return '';
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString('en-NG', options);
};
</script>