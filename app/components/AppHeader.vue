<template>
  <header
    class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo/Brand -->
        <NuxtLink to="/" class="flex items-center space-x-3 flex-shrink-0">
          <div class="w-10 h-10 lg:w-14 lg:h-12">
            <NuxtImg
              src="/img/bs-primary.png"
              alt="B&S Educational Services logo"
              class="w-full h-full object-contain"
              loading="eager"
              width="52"
              height="48"
            />
          </div>
          <div class="hidden sm:block">
            <h1 class="text-md lg:text-lg font-bold text-gray-900">
              B&S Educational Services
            </h1>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-2 text-sm">
          <!-- Home Link -->
          <NuxtLink
            to="/"
            class="px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200"
            :class="{ 'bg-[#859484]/15 text-[#859484]': $route.path === '/' }"
          >
            Home
          </NuxtLink>

          <!-- About Link -->
          <NuxtLink
            to="/events"
            class="px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200"
            :class="{
              'bg-[#859484]/15 text-[#859484]': $route.path === '/about',
            }"
          >
            Events
          </NuxtLink>

          <!-- Services Dropdown -->
          <div
            class="relative"
            @mouseenter="showServicesDropdown = true"
            @mouseleave="showServicesDropdown = false"
          >
            <button
              class="px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"
              :class="{
                'bg-[#859484]/15 text-[#859484]':
                  $route.path.startsWith('/services'),
              }"
            >
              <span>Services</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showServicesDropdown }"
              />
            </button>
            <div
              v-if="showServicesDropdown"
              class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            >
              <NuxtLink
                to="/services"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">All Services</div>
                <div class="text-sm text-gray-500">Complete overview</div>
              </NuxtLink>
              <NuxtLink
                to="/services/counselling"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Admission Counselling</div>
                <div class="text-sm text-gray-500">
                  University placement guidance
                </div>
              </NuxtLink>
              <NuxtLink
                to="/services/visa-assistance"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Visa Assistance</div>
                <div class="text-sm text-gray-500">Student visa support</div>
              </NuxtLink>
            </div>
          </div>

          <!-- Test Prep Dropdown -->
          <div
            class="relative"
            @mouseenter="showCoachingDropdown = true"
            @mouseleave="showCoachingDropdown = false"
          >
            <button
              class="px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"
              :class="{
                'bg-[#859484]/15 text-[#859484]':
                  $route.path.startsWith('/coaching'),
              }"
            >
              <span>Test Prep</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showCoachingDropdown }"
              />
            </button>
            <div
              v-if="showCoachingDropdown"
              class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            >
              <NuxtLink
                to="/coaching"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">All Test Prep</div>
                <div class="text-sm text-gray-500">
                  Complete test preparation
                </div>
              </NuxtLink>
              <NuxtLink
                to="/coaching/ielts"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">IELTS Preparation</div>
                <div class="text-sm text-gray-500">
                  International English testing
                </div>
              </NuxtLink>
              <NuxtLink
                to="/coaching/toefl"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">TOEFL Preparation</div>
                <div class="text-sm text-gray-500">
                  Test of English proficiency
                </div>
              </NuxtLink>
              <NuxtLink
                to="/coaching/gre"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">GRE Preparation</div>
                <div class="text-sm text-gray-500">
                  Graduate Record Examination
                </div>
              </NuxtLink>
              <NuxtLink
                to="/coaching/gmat"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">GMAT Preparation</div>
                <div class="text-sm text-gray-500">
                  Business school admission
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Resources Dropdown -->
          <div
            class="relative"
            @mouseenter="showResourcesDropdown = true"
            @mouseleave="showResourcesDropdown = false"
          >
            <button
              class="px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"
              :class="{
                'bg-[#859484]/15 text-[#859484]':
                  $route.path.startsWith('/resources'),
              }"
            >
              <span>Resources</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showResourcesDropdown }"
              />
            </button>
            <div
              v-if="showResourcesDropdown"
              class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            >
              <NuxtLink
                to="/resources"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">All Resources</div>
                <div class="text-sm text-gray-500">
                  Complete resource library
                </div>
              </NuxtLink>
              <NuxtLink
                to="/resources/brochures"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Brochures</div>
                <div class="text-sm text-gray-500">Download our guides</div>
              </NuxtLink>
              <NuxtLink
                to="/resources/study-guides"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Study Guides</div>
                <div class="text-sm text-gray-500">Educational materials</div>
              </NuxtLink>
              <NuxtLink
                to="/resources/country-guides"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Country Guides</div>
                <div class="text-sm text-gray-500">Study destination info</div>
              </NuxtLink>
            </div>
          </div>

          <!-- Contact Dropdown -->
          <div
            class="relative"
            @mouseenter="showContactDropdown = true"
            @mouseleave="showContactDropdown = false"
          >
            <button
              class="px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"
              :class="{
                'bg-[#859484]/15 text-[#859484]':
                  $route.path.startsWith('/contact'),
              }"
            >
              <span>Contact</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showContactDropdown }"
              />
            </button>
            <div
              v-if="showContactDropdown"
              class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            >
              <NuxtLink
                to="/contact"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Contact Us</div>
                <div class="text-sm text-gray-500">Get in touch</div>
              </NuxtLink>
              <NuxtLink
                to="/contact/office-visit"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Visit Our Office</div>
                <div class="text-sm text-gray-500">Jahi, Abuja location</div>
              </NuxtLink>
              <NuxtLink
                to="/contact/online-consultation"
                class="block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
              >
                <div class="font-medium">Online Consultation</div>
                <div class="text-sm text-gray-500">Virtual meetings</div>
              </NuxtLink>
            </div>
          </div>
        </nav>

        <!-- CTA Buttons (Desktop) -->
        <div class="hidden lg:flex items-center space-x-4">
          <NuxtLink
            to="/book-counselling"
            class="px-2 py-2 border-2 border-[#859484] text-[#859484] hover:bg-[#859484] hover:text-white font-medium rounded-lg transition-all duration-200"
          >
            Free Counselling
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 text-gray-700 hover:text-[#859484] hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Slide-in Drawer -->
    <Teleport to="body">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 lg:hidden">
        <!-- Backdrop with blur instead of dark overlay -->
        <div
          class="fixed inset-0 bg-white/20 backdrop-blur-sm transition-all duration-500 ease-out"
          @click="isMobileMenuOpen = false"
        ></div>

        <!-- Slide-in Drawer from Right -->
        <div
          class="mobile-drawer fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl transform translate-x-full transition-all duration-500 ease-out overflow-y-auto border-l border-gray-200/50"
        >
          <!-- Drawer Header -->
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200"
          >
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8">
                <NuxtImg
                  src="/img/main-logo.png"
                  alt="B&S Educational Services logo"
                  class="w-full h-full object-contain"
                  width="32"
                  height="32"
                />
              </div>
              <span class="font-semibold text-gray-900 text-sm"
                >B&S Educational</span
              >
            </div>
            <button
              @click="isMobileMenuOpen = false"
              class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Icon name="heroicons:x-mark" class="w-5 h-5" />
            </button>
          </div>

          <!-- Drawer Content -->
          <div class="p-4 space-y-6">
            <!-- Navigation Links -->
            <div class="space-y-1">
              <h3
                class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
              >
                Navigation
              </h3>
              <NuxtLink
                v-for="route in mainRoutes"
                :key="route.path"
                :to="route.path"
                class="flex items-center px-3 py-3 text-gray-700 hover:text-[#859484] hover:bg-[#859484]/5 font-medium rounded-lg transition-all duration-200"
                :class="{
                  'text-[#859484] bg-[#859484]/10': $route.path === route.path,
                }"
                @click="isMobileMenuOpen = false"
              >
                {{ route.name }}
              </NuxtLink>
            </div>

            <!-- Service Links -->
            <div class="space-y-1">
              <h3
                class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
              >
                Services
              </h3>
              <NuxtLink
                to="/services/counselling"
                class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200"
                @click="isMobileMenuOpen = false"
              >
                Admission Counselling
              </NuxtLink>
              <NuxtLink
                to="/services/visa-assistance"
                class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200"
                @click="isMobileMenuOpen = false"
              >
                Visa Assistance
              </NuxtLink>
            </div>

            <!-- Test Prep Links -->
            <div class="space-y-1">
              <h3
                class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
              >
                Test Preparation
              </h3>
              <NuxtLink
                to="/coaching/ielts"
                class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200"
                @click="isMobileMenuOpen = false"
              >
                IELTS Preparation
              </NuxtLink>
              <NuxtLink
                to="/coaching/toefl"
                class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200"
                @click="isMobileMenuOpen = false"
              >
                TOEFL Preparation
              </NuxtLink>
              <NuxtLink
                to="/coaching/gre"
                class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200"
                @click="isMobileMenuOpen = false"
              >
                GRE Preparation
              </NuxtLink>
              <NuxtLink
                to="/coaching/gmat"
                class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200"
                @click="isMobileMenuOpen = false"
              >
                GMAT Preparation
              </NuxtLink>
            </div>

            <!-- CTA Buttons -->
            <div class="pt-4 space-y-3 border-t border-gray-200">
              <NuxtLink
                to="/book-counselling"
                class="block w-full px-6 py-3 border-2 border-[#859484] text-[#859484] hover:bg-[#859484] hover:text-white font-medium rounded-lg transition-all duration-200 text-center"
                @click="isMobileMenuOpen = false"
              >
                Book Free Counselling
              </NuxtLink>
            </div>

            <!-- Contact Info -->
            <div class="pt-4 border-t border-gray-200">
              <h3
                class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
              >
                Get in Touch
              </h3>
              <div class="space-y-2 text-sm text-gray-600">
                <p class="flex items-center space-x-2">
                  <Icon
                    name="heroicons:map-pin"
                    class="w-4 h-4 text-[#859484]"
                  />
                  <span>Jahi, Abuja</span>
                </p>
                <NuxtLink
                  to="/contact"
                  class="flex items-center space-x-2 hover:text-[#859484] transition-colors duration-200"
                  @click="isMobileMenuOpen = false"
                >
                  <Icon
                    name="heroicons:envelope"
                    class="w-4 h-4 text-[#859484]"
                  />
                  <span>Contact Us</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
// Brand colors from the design system
const brandColors = {
  baseColor: "#f4f5f3",
  primaryColor: "#505050",
  accentColor: "#EB6534",
  textPrimary: "#333333",
  textSecondary: "#666666",
};

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Dropdown states
const showServicesDropdown = ref(false);
const showCoachingDropdown = ref(false);
const showResourcesDropdown = ref(false);
const showContactDropdown = ref(false);

// Navigation routes
const mainRoutes = [
  { path: "/", name: "Home" },
  { path: "/events", name: "Events" },
  { path: "/services", name: "Services" },
  { path: "/coaching", name: "Test Prep" },
  { path: "/resources", name: "Resources" },
  { path: "/contact", name: "Contact" },
];

const allRoutes = [
  ...mainRoutes,
  { path: "/book-counselling", name: "Book Free Counselling" },
];

// Close mobile menu when route changes
const route = useRoute();
watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
    // Close all dropdowns when route changes
    showServicesDropdown.value = false;
    showCoachingDropdown.value = false;
    showResourcesDropdown.value = false;
    showContactDropdown.value = false;
  }
);

// Close mobile menu on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      isMobileMenuOpen.value = false;
    }
  };
  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

// Prevent body scroll when mobile menu is open and handle smooth animations
watch(isMobileMenuOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Add a small delay to ensure smooth animation
      nextTick(() => {
        const drawer = document.querySelector(".mobile-drawer");
        if (drawer) {
          drawer.classList.remove("translate-x-full");
          drawer.classList.add("translate-x-0");
        }
      });
    } else {
      document.body.style.overflow = "";
      // Smooth close animation
      const drawer = document.querySelector(".mobile-drawer");
      if (drawer) {
        drawer.classList.remove("translate-x-0");
        drawer.classList.add("translate-x-full");
      }
    }
  }
});

// Clean up body overflow on unmount
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
/* Custom styles for the header */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Ensure proper text rendering */
h1 {
  font-family: "Inter", sans-serif;
  letter-spacing: -0.025em;
}

/* Smooth transitions for all interactive elements */
a,
button {
  transition: all 0.2s ease-in-out;
}

/* Active link styling */
.router-link-active {
  color: #859484 !important;
}

.router-link-active span {
  width: 100% !important;
}
</style>
