// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'netlify' // ensures Nuxt builds for Netlify
  },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/supabase', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css', 'quill/dist/quill.snow.css'],
  runtimeConfig: {
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    adminSecret: process.env.ADMIN_SECRET_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirect: false,
    },
    image: {
      provider: process.env.NODE_ENV === 'development' ? 'ipx' : 'netlify',
      dir: 'public',
      // Global options
      quality: 80,
      format: ['webp', 'avif', 'jpg'],
      domains: ['https://minjvvxdfdwmbrtphzpr.supabase.co']
    },


  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})