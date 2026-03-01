<template>
  <header
    class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <NuxtLink to="/" class="flex items-center space-x-3 flex-shrink-0">
          <div class="w-24 h-24 lg:w-24 lg:h-24">
            <img
              src="/img/bs-primary.png"
              alt="B&S Educational Services logo"
              class="w-full h-full object-contain"
              width="52"
              height="52"
            />
          </div>
          <div class="hidden sm:block">
            <h1 class="text-md lg:text-lg font-bold text-gray-900">
              B&S Educational Services
            </h1>
          </div>
        </NuxtLink>

        <nav class="hidden lg:flex items-center space-x-2 text-sm">
          <NuxtLink
            to="/"
            class="px-4 py-2 font-medium rounded-lg transition-all duration-200"
            :class="$route.path === '/' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/events"
            class="px-4 py-2 font-medium rounded-lg transition-all duration-200"
            :class="$route.path === '/events' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'"
          >
            Events
          </NuxtLink>

          <div
            class="relative"
            @mouseenter="showServicesDropdown = true"
            @mouseleave="showServicesDropdown = false"
          >
            <button
              class="px-4 py-2 font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"
              :class="$route.path.startsWith('/services') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'"
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
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/services' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">All Services</div>
                <div class="text-sm opacity-70">Complete overview</div>
              </NuxtLink>
              <NuxtLink
                to="/services/counselling"
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/services/counselling' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Admission Counselling</div>
                <div class="text-sm opacity-70">University placement guidance</div>
              </NuxtLink>
              <NuxtLink
                to="/services/visa-assistance"
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/services/visa-assistance' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Visa Assistance</div>
                <div class="text-sm opacity-70">Student visa support</div>
              </NuxtLink>
              <NuxtLink
                to="/test-prep"
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/test-prep' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Test Preparation</div>
                <div class="text-sm opacity-70">IELTS, SAT, GLE and more</div>
              </NuxtLink>
            </div>
          </div>

          <div
            class="relative"
            @mouseenter="showResourcesDropdown = true"
            @mouseleave="showResourcesDropdown = false"
          >
            <button
              class="px-4 py-2 font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"
              :class="$route.path.startsWith('/resources') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'"
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
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/resources' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Blog</div>
                <div class="text-sm opacity-70">News, tips, and updates</div>
              </NuxtLink>
              <NuxtLink
                to="/resources/templates"
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/resources/templates' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Templates & Guides</div>
                <div class="text-sm opacity-70">Download our guides</div>
              </NuxtLink>
              <NuxtLink
                to="/resources/country-guides"
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/resources/country-guides' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Country Guides</div>
                <div class="text-sm opacity-70">Study destination info</div>
              </NuxtLink>
            </div>
          </div>

          <div
            class="relative"
            @mouseenter="showContactDropdown = true"
            @mouseleave="showContactDropdown = false"
          >
            <button
              class="px-4 py-2 font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"
              :class="$route.path.startsWith('/contact') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'"
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
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/contact' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Contact Us</div>
                <div class="text-sm opacity-70">Get in touch</div>
              </NuxtLink>
              <NuxtLink
                to="/contact/visit"
                class="block px-4 py-3 transition-colors duration-200"
                :class="$route.path === '/contact/visit' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
              >
                <div class="font-medium">Visit Our Office</div>
                <div class="text-sm opacity-70">Jahi, Abuja location</div>
              </NuxtLink>
            </div>
          </div>
        </nav>

        <div class="hidden lg:flex items-center space-x-4">
          <NuxtLink
            to="/contact"
            class="px-4 py-2 border-2 bg-secondary text-white font-medium rounded-lg transition-all duration-200 hover:bg-secondary/90"
          >
            Free Counselling
          </NuxtLink>
        </div>

        <div class="lg:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 lg:hidden">
        <div
          class="fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 ease-out"
          @click="isMobileMenuOpen = false"
        ></div>

        <div
          class="mobile-drawer fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform translate-x-full transition-all duration-500 ease-out overflow-y-auto border-l border-gray-200"
        >
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10"
          >
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8">
                <NuxtImg
                  src="/img/main-logo.png"
                  alt="B&S Educational Services logo"
                  class="w-full h-full object-contain"
                  width="48"
                  height="48"
                />
              </div>
              <span class="font-semibold text-gray-900 text-sm">B&S Educational</span>
            </div>
            <button
              @click="isMobileMenuOpen = false"
              class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Icon name="heroicons:x-mark" class="w-5 h-5" />
            </button>
          </div>

          <div class="p-4 space-y-6">
            <div class="space-y-1">
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Navigation
              </h3>
              <NuxtLink
                v-for="route in mainRoutes"
                :key="route.path"
                :to="route.path"
                class="flex items-center px-3 py-3 font-medium rounded-lg transition-all duration-200"
                :class="$route.path === route.path ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'"
                @click="isMobileMenuOpen = false"
              >
                {{ route.name }}
              </NuxtLink>
            </div>

            <div class="space-y-1">
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Resources
              </h3>
              <NuxtLink
                to="/resources"
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200"
                :class="$route.path === '/resources' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'"
                @click="isMobileMenuOpen = false"
              >
                Blog Posts
              </NuxtLink>
              <NuxtLink
                to="/resources/templates"
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200"
                :class="$route.path === '/resources/templates' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'"
                @click="isMobileMenuOpen = false"
              >
                Templates & Guides
              </NuxtLink>
              <NuxtLink
                to="/resources/country-guides"
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200"
                :class="$route.path === '/resources/country-guides' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'"
                @click="isMobileMenuOpen = false"
              >
                Country Guides
              </NuxtLink>
            </div>

            <div class="space-y-1">
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Services
              </h3>
              <NuxtLink
                to="/services/counselling"
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200"
                :class="$route.path === '/services/counselling' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'"
                @click="isMobileMenuOpen = false"
              >
                Admission Counselling
              </NuxtLink>
              <NuxtLink
                to="/services/visa-assistance"
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200"
                :class="$route.path === '/services/visa-assistance' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'"
                @click="isMobileMenuOpen = false"
              >
                Visa Assistance
              </NuxtLink>
              <NuxtLink
                to="/test-prep"
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200"
                :class="$route.path === '/test-prep' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'"
                @click="isMobileMenuOpen = false"
              >Test Preparation
              </NuxtLink>
            </div>

            <div class="pt-4 space-y-3 border-t border-gray-200">
              <NuxtLink
                to="/contact"
                class="block w-full px-6 py-3 border-2 bg-secondary text-white font-medium rounded-lg transition-all duration-200 text-center"
                @click="isMobileMenuOpen = false"
              >
                Book Free Counselling
              </NuxtLink>
            </div>

            <div class="pt-4 border-t border-gray-200 pb-8">
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Get in Touch
              </h3>
              <div class="space-y-2 text-sm text-gray-600">
                <p class="flex items-center space-x-2">
                  <Icon name="heroicons:map-pin" class="w-4 h-4 text-primary" />
                  <span>Jahi, Abuja</span>
                </p>
                <NuxtLink
                  to="/contact"
                  class="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
                  @click="isMobileMenuOpen = false"
                >
                  <Icon name="heroicons:envelope" class="w-4 h-4 text-primary" />
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
useSeoMeta({
  title: "B&S Educational Services - Your Path to Studying Abroad",
  description:
    "B&S Educational Services offers free expert counselling, admission processing, visa support, and test prep for students looking to study in the UK, USA, Hungary, Australia, and more.",
  ogTitle: "B&S Educational Services - Your Path to Studying Abroad",
  ogDescription:
    "B&S Educational Services provides comprehensive support for students aspiring to study abroad. From free consultations to visa assistance, we are here to help you succeed.",
  ogImage: "/img/main-logo.jpg",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});

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
  { path: "/contact", name: "Contact" },
];

const allRoutes = [
  ...mainRoutes,
  { path: "/contact", name: "Book Free Counselling" },
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
</style>