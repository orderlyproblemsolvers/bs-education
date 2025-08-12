<template>
  <div class="min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-[var(--space-lg)]">
    <div class="w-full max-w-md bg-white rounded-[var(--radius-lg)] shadow-lg p-[var(--space-xl)]">
      <!-- Header -->
      <div class="text-center mb-[var(--space-lg)]">
        <h1 class="text-[var(--font-xl)] font-bold text-[var(--color-text-primary)]">
          Admin Login
        </h1>
        <p class="text-[var(--font-sm)] text-[var(--color-text-secondary)] mt-1">
          Sign in to manage your platform
        </p>
      </div>

      <!-- Form -->
      <form class="space-y-[var(--space-md)]" @submit.prevent="handleSubmit">
        <!-- Email -->
        <div>
          <label for="email" class="block text-[var(--font-sm)] font-medium text-[var(--color-text-secondary)] mb-[var(--space-xs)]">
            Email Address
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="you@example.com"
            required
            class="w-full border border-[var(--color-border)] rounded-[var(--radius-md)] px-[var(--space-sm)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-[var(--font-sm)] font-medium text-[var(--color-text-secondary)] mb-[var(--space-xs)]">
            Password
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            required
            class="w-full border border-[var(--color-border)] rounded-[var(--radius-md)] px-[var(--space-sm)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <!-- Error Message -->
        <div v-if="error" class="text-[var(--font-sm)] text-red-600 text-center">
          {{ error }}
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[var(--color-primary)] text-white font-medium py-[var(--space-sm)] rounded-[var(--radius-md)] hover:bg-[var(--color-primary-dark)] transition-colors duration-200 disabled:opacity-50"
        >
          {{ loading ? 'Signing in...' : 'Sign in' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const { signIn } = useAuth()

const form = reactive({
  email: "",
  password: "",
})

const loading = ref(false)
const error = ref("")

const handleSubmit = async () => {
  if (!form.email || !form.password) {
    error.value = "Please fill in all fields"
    return
  }

  loading.value = true
  error.value = ""

  try {
    const { data, error: authError } = await signIn(form.email, form.password)

    if (authError) {
      error.value = authError.message
    } else if (data?.user) {
      await navigateTo("/admin")
    }
  } catch (err) {
    error.value = "An unexpected error occurred"
    console.error("Login error:", err)
  } finally {
    loading.value = false
  }
}
</script>

<style>
:root {
  /* Design System Tokens */
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-bg: #f9fafb;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-border: #d1d5db;

  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;

  --font-sm: 0.875rem;
  --font-xl: 1.25rem;
}
</style>
