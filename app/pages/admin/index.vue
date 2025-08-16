<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 bg-[#f4f5f3] min-h-screen">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <header class="mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-[#859484]">
          Admin Dashboard
        </h1>
        <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
          Welcome to the admin panel. Use the cards below to manage different sections.
        </p>
      </header>

      <!-- Dashboard Cards -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="card in cards"
          :key="card.title"
          :to="card.to"
          class="group block rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div class="p-6 flex items-start gap-5">
            <!-- Icon -->
            <div
              :class="[
                'flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105',
                card.color
              ]"
            >
              {{ card.icon }}
            </div>

            <!-- Text -->
            <div>
              <h2 class="text-lg font-semibold text-[#859484] mb-1">
                {{ card.title }}
              </h2>
              <p class="text-sm text-gray-500 leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>

definePageMeta({
  title: 'Admin Dashboard - B&S Educational Services',
  middleware: (to) => {
    const user = useSupabaseUser()
    const { isAdmin } = useAuth()

    if (!user.value && !isAdmin.value) {
      return navigateTo('/admin/login')
    }
  },
  layout: 'admin'


})

useSeoMeta({
  title: 'Admin Dashboard - B&S Educational Services',
  description: 'Manage blog posts, events, inquiries, and brochures in the admin panel.',
  ogTitle: 'Admin Dashboard - B&S Educational Services',
  ogDescription: 'Access the admin dashboard to manage all aspects of B&S Educational Services.',
  robots: 'noindex, nofollow',
})

const cards = [
  {
    title: 'Manage Blog Posts',
    description: 'Create and edit blog posts',
    to: '/admin/resources',
    icon: '📝',
    color: 'bg-indigo-500'
  },
  {
    title: 'Manage Events',
    description: 'Add and update upcoming events',
    to: '/admin/events',
    icon: '📅',
    color: 'bg-blue-500'
  },
  {
    title: 'Manage Inquiries',
    description: 'View and respond to messages',
    to: '/admin/enquiries',
    icon: '📨',
    color: 'bg-yellow-500'
  },
  {
    title: 'Manage Brochures',
    description: 'Upload and organize brochures',
    to: '/admin/brochures',
    icon: '📄',
    color: 'bg-green-500'
  }
]
</script>
