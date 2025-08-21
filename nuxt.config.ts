// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "B&S Educational Services",
      meta: [
        {
          name: "description",
          content: "B&S Educational Services - Building Foundation for Life.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "theme-color", content: "#ffffff" },
        { name: "author", content: "B&S Educational Services" },
        { name: "application-name", content: "B&S Educational Services" },
        {
          name: "apple-mobile-web-app-title",
          content: "B&S Educational Services",
        },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "author", content: "B&S Educational Services" },
        {
          name: "keywords",
          content:
            "education, tutoring, online courses, learning, B&S Educational Services, Study Abroad, Abroad, Forign Studies, Nigeria, UK, USA, Canada, Australia, Consult, Edu Consult, Malta, Study in UK, Study in France",
        },
        { name: "robots", content: "index, follow" },
        { name: "og:title", content: "B&S Educational Services" },
        {
          name: "og:description",
          content: "B&S Educational Services - Building Foundation for Life.",
        },
        { name: "og:image", content: "/img/main-logo.png" },
        { name: "og:image:type", content: "image/png" },
        { name: "og:title", content: "B&S Educational Services" },
        {
          name: "og:description",
          content: "B&S Educational Services - Building Foundation for Life.",
        },
        { name: "og:image", content: "/img/main-logo.png" },
        { name: "og:url", content: "https://bs-education.com" },
        { name: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "B&S Educational Services" },
        {
          name: "twitter:description",
          content: "B&S Educational Services - Building Foundation for Life.",
        },
        { name: "twitter:image", content: "/img/main-logo.png" },
        { name: "twitter:site", content: "@bs_education" },
        { name: "twitter:creator", content: "@bs_education" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
          integrity: "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=",
          crossorigin: "",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  ssr: true,
  security: {
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "connect-src": [
          "'self'",
          "https://api.supabase.co",
          "https://*.supabase.co",
        ],
        "img-src": [
          "'self'",
          "data:",
          "https://api.supabase.co",
          "https://*.supabase.co",
        ],
      },
      xXSSProtection: "1; mode=block",
      xFrameOptions: "DENY",
    },
    rateLimiter: {
      tokensPerInterval: 100,
      interval: 3600000, // 1 hour
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },

  nitro: {
    preset: "netlify", // ensures Nuxt builds for Netlify
  },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "@nuxtjs/leaflet",
    "nuxt-security",
  ],
  css: [
    "~/assets/css/main.css",
    "quill/dist/quill.snow.css",
    "leaflet/dist/leaflet.css",
  ],
  runtimeConfig: {
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    adminSecret: process.env.ADMIN_SECRET_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirect: false,
  },
  image: {
    provider: process.env.NODE_ENV === "development" ? "ipx" : "netlify",
    dir: "public",
    // Global options
    quality: 80,
    format: ["webp", "avif", "jpg", "png"],
    domains: ["https://minjvvxdfdwmbrtphzpr.supabase.co", "localhost:3000"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
