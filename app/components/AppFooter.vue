<template>
  <footer class="bg-[#2d332a] text-white">
    <!-- Main Footer Content -->
    <div class="py-12 px-6 md:px-8 lg:px-16">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Logo & About -->
          <div class="lg:col-span-1">
            <div class="mb-4">
              <NuxtImg
                src="/img/bs-secondary.png"
                alt="B&S Educational Services Logo"
                width="140"
                height="auto"
                loading="lazy"
              />
            </div>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">
              B&S Educational Services helps students actualize their study abroad dreams through expert counselling and visa processing.
            </p>
            <div class="flex items-center gap-2 text-xs text-[#ACBEA3]">
              <span class="w-2 h-2 bg-[#ACBEA3] rounded-full"></span>
              <span>Trusted by 500+ students</span>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-medium mb-4">Quick Links</h4>
            <nav>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/" class="text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/events" class="text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors">
                    Events
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services" class="text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors">
                    Services
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/test-prep" class="text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors">
                    Test Prep
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact" class="text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors">
                    Contact
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact/visit" class="text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors">
                    Get Directions
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Contact Information -->
          <div>
            <h4 class="text-white font-medium mb-4">Contact Info</h4>
            <div class="space-y-3">
              <div class="text-sm">
                <p class="text-gray-300 mb-1">Address</p>
                <p class="text-gray-400 text-xs">
                  No 308, Kings Plaza<br />
                  Jahi, Abuja, Nigeria
                </p>
              </div>

              <div class="text-sm">
                <p class="text-gray-300 mb-1">Phone</p>
                <a href="tel:+2349012345678" class="text-[#ACBEA3] hover:text-white text-xs transition-colors">
                  +234 901 234 5678
                </a>
              </div>

              <div class="text-sm">
                <p class="text-gray-300 mb-1">Email</p>
                <a href="mailto:info@bs-education.com" class="text-[#ACBEA3] hover:text-white text-xs transition-colors">
                  info@bs-education.com
                </a>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div>
            <h4 class="text-white font-medium mb-4">Follow Us</h4>
            <div class="flex gap-3">
              <a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">
                <UIcon name="i-simple-icons-instagram" class="w-4 h-4 text-gray-300 group-hover:text-gray-900" />
              </a>
              <a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">
                <UIcon name="i-simple-icons-facebook" class="w-4 h-4 text-gray-300 group-hover:text-gray-900" />
              </a>
              <a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">
                <UIcon name="i-simple-icons-linkedin" class="w-4 h-4 text-gray-300 group-hover:text-gray-900" />
              </a>
              <a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">
                <UIcon name="i-simple-icons-twitter" class="w-4 h-4 text-gray-300 group-hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white bg-[#2d332a]">
      <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 py-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-3">
          <div class="flex flex-wrap items-center gap-4 text-xs text-gray-100">
            <p>&copy; {{ currentYear }} B&S Educational Services. All rights reserved.</p>
            <NuxtLink to="/privacy" class="hover:text-[#ACBEA3] transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="hover:text-[#ACBEA3] transition-colors">
              Terms of Service
            </NuxtLink>
          </div>

          <div class="flex items-center gap-2 text-xs text-gray-200">
            <span>Made by OPS, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>