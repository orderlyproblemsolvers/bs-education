<template>
  <div>
    <AdminLoginForm />
  </div>
</template>

<script setup>
// Prevent authenticated users from accessing login page
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    navigateTo('/admin')
  }
})

// Set page meta
definePageMeta({
  layout: false
})
</script>