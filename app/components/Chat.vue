<template>
    <div>
      <!-- Floating Action Buttons -->
      <div class="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <!-- WhatsApp Button -->
        <UButton
          @click="openWhatsApp"
          :ui="{
            rounded: 'rounded-full',
            size: {
              default: 'w-14 h-14'
            }
          }"
          class="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-3"
          :style="{ backgroundColor: '#25D366' }"
          variant="solid"
        >
          <Icon name="mdi:whatsapp" class="w-6 h-6 text-white" />
        </UButton>
  
        <!-- Chat Button -->
        <UButton
          @click="toggleChat"
          :ui="{
            rounded: 'rounded-full',
            size: {
              default: 'w-14 h-14'
            }
          }"
          class="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-3"
          :style="{ backgroundColor: brandColors.primaryColor }"
          variant="solid"
        >
          <UIcon 
            :name="isChatOpen ? 'i-lucide-x' : 'i-lucide-message-circle'" 
            class="w-6 h-6 text-white" 
          />
        </UButton>
      </div>
  
      <!-- Chat Modal/Sidebar -->
      <div v-if="isChatOpen" class="fixed inset-0 z-40 lg:inset-auto lg:bottom-6 lg:right-6 lg:w-96 lg:h-[500px]">
        <!-- Mobile Overlay -->
        <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50" @click="toggleChat"></div>
        
        <!-- Chat Container -->
        <div class="relative bg-white h-full lg:rounded-xl lg:shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          <!-- Header -->
          <div 
            class="px-6 py-4 border-b border-gray-200 flex items-center justify-between"
            :style="{ backgroundColor: brandColors.baseColor }"
          >
            <div class="flex items-center space-x-3">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                :style="{ backgroundColor: brandColors.primaryColor }"
              >
                B&S
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">B&S Educational Services</h3>
                <p class="text-sm text-gray-500">How can we help you today?</p>
              </div>
            </div>
            <UButton
              @click="toggleChat"
              variant="ghost"
              size="sm"
              class="lg:hidden"
            >
              <Icon name="heroicons:x-mark" class="w-5 h-5" />
            </UButton>
          </div>
  
          <!-- Chat Messages Area -->
          <div class="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
            <!-- Welcome Message -->
            <div class="flex items-start space-x-4">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0"
                :style="{ backgroundColor: brandColors.primaryColor }"
              >
                B&S
              </div>
              <div class="bg-white rounded-2xl rounded-tl-md px-5 py-4 max-w-sm shadow-sm border border-gray-100">
                <p class="text-sm text-gray-800 leading-relaxed mb-3">
                  Welcome to B&S Educational Services! I'm here to help you with your study abroad journey.
                </p>
                <p class="text-xs text-gray-600 mb-4">Choose from the topics below to get started:</p>
                <!-- Initial Options as Chat Bubbles -->
                <div class="space-y-2">
                  <button
                    v-for="option in getInitialOptions()"
                    :key="option.id"
                    @click="selectOption(option)"
                    class="w-full text-left px-3 py-2 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
                  >
                    <div class="flex items-center space-x-2">
                      <Icon :name="option.icon" class="w-4 h-4 text-gray-500 group-hover:text-green-600" />
                      <span class="text-xs font-medium text-gray-700 group-hover:text-green-700">{{ option.text }}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
  
            <!-- User & Bot Messages -->
            <div v-for="message in messages" :key="message.id" class="space-y-4">
              <!-- User Message -->
              <div class="flex justify-end">
                <div 
                  class="rounded-2xl rounded-tr-md px-5 py-4 max-w-xs text-white shadow-sm"
                  :style="{ 
                    backgroundColor: brandColors.primaryColor,
                    background: `linear-gradient(135deg, ${brandColors.primaryColor} 0%, #5a9f6a 100%)`
                  }"
                >
                  <p class="text-sm font-medium">{{ message.text }}</p>
                </div>
              </div>
  
              <!-- Bot Response -->
              <div v-if="message.response" class="flex items-start space-x-4">
                <div 
                  class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0"
                  :style="{ backgroundColor: brandColors.primaryColor }"
                >
                  B&S
                </div>
                <div class="bg-white rounded-2xl rounded-tl-md px-5 py-4 max-w-sm shadow-sm border border-gray-100">
                  <p class="text-sm text-gray-800 leading-relaxed mb-3">{{ message.response }}</p>
                  
                  <!-- Follow-up Options -->
                  <div v-if="message.options && message.options.length > 0" class="space-y-2 mt-3 pt-3 border-t border-gray-100">
                    <p class="text-xs text-gray-600 mb-2">What would you like to explore?</p>
                    <button
                      v-for="option in message.options"
                      :key="option.id"
                      @click="selectOption(option)"
                      class="w-full text-left px-3 py-2 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
                    >
                      <div class="flex items-center space-x-2">
                        <Icon :name="option.icon" class="w-4 h-4 text-gray-500 group-hover:text-green-600" />
                        <span class="text-xs font-medium text-gray-700 group-hover:text-green-700">{{ option.text }}</span>
                      </div>
                    </button>
                    
                    <!-- Back Option -->
                    <button
                      v-if="currentLevel > 0"
                      @click="goBack"
                      class="w-full text-left px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group mt-2"
                    >
                      <div class="flex items-center space-x-2">
                        <Icon name="heroicons:arrow-left" class="w-4 h-4 text-gray-500 group-hover:text-gray-600" />
                        <span class="text-xs font-medium text-gray-700 group-hover:text-gray-800">Back to previous options</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Typing Indicator -->
            <div v-if="isTyping" class="flex items-start space-x-4">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0"
                :style="{ backgroundColor: brandColors.primaryColor }"
              >
                B&S
              </div>
              <div class="bg-white rounded-2xl rounded-tl-md px-5 py-4 shadow-sm border border-gray-100">
                <div class="flex items-center space-x-2">
                  <div class="typing-dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span class="text-sm text-gray-600">{{ typingText }}</span>
                </div>
              </div>
            </div>
  
            <!-- Help Text -->
            <div v-if="messages.length === 0" class="text-center py-8">
              <p class="text-xs text-gray-500">Select any topic above to start our conversation</p>
            </div>
          </div>
  
          <!-- Footer -->
          <div class="border-t border-gray-100 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100">
            <p class="text-xs text-gray-600 text-center leading-relaxed">
              Need immediate assistance? 
              <button 
                @click="openWhatsApp" 
                class="font-semibold underline hover:no-underline transition-colors duration-200"
                :style="{ color: brandColors.primaryColor }"
              >
                Chat on WhatsApp
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const brandColors = {
    baseColor: "#f4f5f3",
    primaryColor: "#6BAE7A",
    accentColor: "#d47a4c",
    textPrimary: "#333333",
    textSecondary: "#666666"
  }
  
  const isChatOpen = ref(false)
  const messages = ref([])
  const currentLevel = ref(0)
  const navigationStack = ref([])
  const isTyping = ref(false)
  const typingText = ref('')
  
  const chatOptions = {
    0: [
      {
        id: 1,
        text: "Study Destinations",
        icon: "heroicons:globe-alt",
        response: "Great! We help students get admitted to top universities worldwide. Which region interests you most?",
        children: [
          { id: 11, text: "United States", icon: "twemoji:flag-united-states", response: "The US has excellent universities and diverse programs. We can help with applications, visa processes, and scholarship opportunities. Would you like to know about specific requirements or popular programs?" },
          { id: 12, text: "United Kingdom", icon: "twemoji:flag-united-kingdom", response: "The UK offers world-class education with shorter program durations. We assist with UCAS applications, student visa applications, and finding the right course. What aspect interests you most?" },
          { id: 13, text: "Canada", icon: "twemoji:flag-canada", response: "Canada is known for its high-quality education and post-study work opportunities. We help with university applications, study permits, and settlement guidance. What would you like to explore?" },
          { id: 14, text: "Australia", icon: "twemoji:flag-australia", response: "Australia offers excellent education with a great lifestyle. We assist with university applications, student visas, and pathway programs. How can we help you with your Australian dream?" }
        ]
      },
      {
        id: 2,
        text: "Application Process",
        icon: "heroicons:document-text",
        response: "We guide you through every step of the application process. What stage are you currently at?",
        children: [
          { id: 21, text: "University Selection", icon: "heroicons:academic-cap", response: "We'll help you choose the right universities based on your profile, preferences, and budget. Our counselors will create a personalized university list for you." },
          { id: 22, text: "Document Preparation", icon: "heroicons:folder", response: "We assist with preparing all required documents including SOP, LORs, transcripts, and certificates. Our team ensures everything meets university standards." },
          { id: 23, text: "Application Submission", icon: "heroicons:paper-airplane", response: "We handle the complete application submission process and track your applications until you receive admission decisions." },
          { id: 24, text: "Visa Assistance", icon: "heroicons:identification", response: "Our visa experts will guide you through the entire visa application process, from documentation to interview preparation." }
        ]
      },
      {
        id: 3,
        text: "Test Preparation",
        icon: "heroicons:book-open",
        response: "We offer comprehensive test preparation for various standardized tests. Which test are you planning to take?",
        children: [
          { id: 31, text: "IELTS Coaching", icon: "heroicons:language", response: "Our IELTS coaching includes comprehensive training for all four skills: Reading, Writing, Listening, and Speaking. We offer both group and individual classes." },
          { id: 32, text: "TOEFL Preparation", icon: "heroicons:speaker-wave", response: "Our TOEFL prep course covers all sections with practice tests and personalized feedback. We help you achieve your target score efficiently." },
          { id: 33, text: "GRE/GMAT Coaching", icon: "heroicons:calculator", response: "We provide intensive GRE and GMAT preparation with expert instructors, practice materials, and strategic test-taking techniques." },
          { id: 34, text: "SAT/ACT Prep", icon: "heroicons:pencil", response: "Our SAT/ACT preparation helps high school students achieve competitive scores for undergraduate admissions in the US." }
        ]
      },
      {
        id: 4,
        text: "Scholarships & Financial Aid",
        icon: "heroicons:currency-dollar",
        response: "We help you find and apply for various scholarship opportunities. What type of funding are you looking for?",
        children: [
          { id: 41, text: "Merit-based Scholarships", icon: "heroicons:trophy", response: "We identify merit-based scholarships that match your academic profile and help you prepare competitive applications." },
          { id: 42, text: "Need-based Financial Aid", icon: "heroicons:heart", response: "We assist with need-based financial aid applications and help you understand the requirements for different programs." },
          { id: 43, text: "Country-specific Scholarships", icon: "heroicons:flag", response: "We provide information about government and university-specific scholarships available in your chosen destination." },
          { id: 44, text: "Education Loans", icon: "heroicons:building-library", response: "We can connect you with education loan providers and help you understand the application process and requirements." }
        ]
      },
      {
        id: 5,
        text: "Career Counseling",
        icon: "heroicons:briefcase",
        response: "Our career counselors help you make informed decisions about your academic and professional future. What guidance do you need?",
        children: [
          { id: 51, text: "Course Selection", icon: "heroicons:list-bullet", response: "We help you choose the right course based on your interests, career goals, and market demand in your chosen field." },
          { id: 52, text: "University Comparison", icon: "heroicons:scale", response: "We provide detailed comparisons of universities, programs, costs, and outcomes to help you make the best choice." },
          { id: 53, text: "Career Prospects", icon: "heroicons:chart-bar", response: "We analyze career prospects and job market trends in different countries and fields to guide your decisions." },
          { id: 54, text: "Post-study Options", icon: "heroicons:arrow-path", response: "We explain post-study work opportunities, permanent residency pathways, and career development options in different countries." }
        ]
      },
      {
        id: 6,
        text: "Book Free Consultation",
        icon: "heroicons:calendar-days",
        response: "Perfect! Our expert counselors are ready to provide personalized guidance for your study abroad journey.",
        action: "consultation"
      }
    ]
  }
  
  const currentOptions = computed(() => {
    // Only show options in the latest message or initial welcome
    return []
  })
  
  function getInitialOptions() {
    return chatOptions[0]
  }
  
  function toggleChat() {
    isChatOpen.value = !isChatOpen.value
    if (!isChatOpen.value) {
      resetChat()
    }
  }
  
  function resetChat() {
    messages.value = []
    currentLevel.value = 0
    navigationStack.value = []
    isTyping.value = false
    typingText.value = ''
  }
  
  async function selectOption(option) {
    // Add user message immediately
    const userMessage = {
      id: Date.now(),
      text: option.text,
      type: 'user',
      response: null,
      options: []
    }
    messages.value.push(userMessage)
  
    // Start typing indicator
    isTyping.value = true
    typingText.value = 'typing...'
  
    // Handle special actions
    if (option.action === 'consultation') {
      await simulateTyping(option.response, 60)
      userMessage.response = option.response
      isTyping.value = false
      
      setTimeout(() => {
        window.open('/book-counselling', '_blank')
      }, 1000)
      return
    }
  
    // Simulate typing with realistic delay
    await simulateTyping(option.response, 50)
    
    // Set the response to the user message
    userMessage.response = option.response
    isTyping.value = false
  
    // Add follow-up options if available
    if (option.children && option.children.length > 0) {
      userMessage.options = option.children
      currentLevel.value++
      navigationStack.value.push(option)
    }
  
    // Auto-scroll to bottom
    nextTick(() => {
      const chatArea = document.querySelector('.overflow-y-auto')
      if (chatArea) {
        chatArea.scrollTop = chatArea.scrollHeight
      }
    })
  }
  
  async function simulateTyping(text, speed = 50) {
    return new Promise((resolve) => {
      let i = 0
      typingText.value = ''
      
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          typingText.value += text.charAt(i)
          i++
        } else {
          clearInterval(typeInterval)
          resolve()
        }
      }, speed)
    })
  }
  
  function goBack() {
    if (navigationStack.value.length > 0) {
      // Find the last message with options and clear them
      for (let i = messages.value.length - 1; i >= 0; i--) {
        if (messages.value[i].options && messages.value[i].options.length > 0) {
          // Get parent options
          const parentNav = navigationStack.value[navigationStack.value.length - 2]
          messages.value[i].options = parentNav ? parentNav.children : chatOptions[0]
          break
        }
      }
      
      navigationStack.value.pop()
      currentLevel.value--
      isTyping.value = false
      typingText.value = ''
    }
  }
  
  function openWhatsApp() {
    const phoneNumber = '2348065442707'
    const message = encodeURIComponent('Hello! I\'m interested in B&S Educational Services. Can you help me with study abroad opportunities?')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }
  
  // Close chat on escape key
  onMounted(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isChatOpen.value) {
        toggleChat()
      }
    }
    document.addEventListener('keydown', handleEscape)
    
    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscape)
    })
  })
  </script>
  
  <style scoped>
  /* Typing dots animation */
  .typing-dots {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #6BAE7A;
    animation: typing 1.4s infinite ease-in-out;
  }
  
  .dot:nth-child(1) {
    animation-delay: 0s;
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes typing {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    30% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }
  
  /* Custom scrollbar for chat area */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f8f9fa;
    border-radius: 6px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #6BAE7A, #5a9f6a);
    border-radius: 6px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a9f6a, #4a8f5a);
  }
  
  /* Smooth transitions */
  .transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Animation for chat opening */
  @keyframes slideInUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @media (min-width: 1024px) {
    .lg\:bottom-6 {
      animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  
  /* Message animations */
  .space-y-6 > * {
    animation: fadeIn 0.3s ease-out;
  }
  
  /* Button hover effects */
  button:hover {
    transform: translateY(-1px);
  }
  
  /* Gradient backgrounds */
  .bg-gradient-to-b {
    background: linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%);
  }
  
  .bg-gradient-to-r {
    background: linear-gradient(to right, #f9fafb 0%, #f3f4f6 100%);
  }
  </style>