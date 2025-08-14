<template>
  <section class="testimonials-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Success Stories</h2>
        <p class="section-subtitle">
          Hear from our students who are now studying abroad and achieving their dreams
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <!-- First Image Card -->
        <div
          class="testimonial-card image-card"
          @mousemove="(event) => handleMouseMove(event, 'img1')"
          @mouseleave="(event) => handleMouseLeave(event, 'img1')"
          :ref="el => setCardRef(el, 'img1')"
        >
          <div 
            class="gloss-overlay" 
            :ref="el => setGlossRef(el, 'img1')"
          ></div>
          <NuxtImg
            src="/img/Grad1.jpg"
            alt="Graduation success story"
            class="card-image"
            loading="lazy"
            preload
          />
        </div>

        <!-- Testimonial Cards -->
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="testimonial-card"
          :class="{ 'featured': testimonial.featured }"
          @mousemove="(event) => handleMouseMove(event, index)"
          @mouseleave="(event) => handleMouseLeave(event, index)"
          :ref="el => setCardRef(el, index)"
        >
          <!-- Gloss overlay -->
          <div 
            class="gloss-overlay" 
            :ref="el => setGlossRef(el, index)"
          ></div>
          
          <!-- Card content -->
          <div class="card-content">
            <!-- Quote icon -->
            <div class="quote-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" fill="currentColor"/>
              </svg>
            </div>

            <!-- Testimonial text -->
            <blockquote class="testimonial-text">
              "{{ testimonial.text }}"
            </blockquote>

            <!-- Student info -->
            <div class="student-info">
              <div class="student-avatar">
                <NuxtImg
                  :src="testimonial.avatar"
                  :alt="`${testimonial.name} avatar`"
                  width="36"
                  height="36"
                  class="avatar-image"
                  loading="lazy"
                  preload
                />
              </div>
              <div class="student-details">
                <h4 class="student-name">{{ testimonial.name }}</h4>
                <p class="student-course">{{ testimonial.course }}</p>
                <div class="study-location">
                  <NuxtImg
                    :src="testimonial.countryFlag"
                    :alt="`${testimonial.country} flag`"
                    width="14"
                    height="10"
                    class="country-flag"
                    loading="lazy"
                    preload
                  />
                  <span class="country-name">{{ testimonial.country }}</span>
                </div>
              </div>
            </div>

            <!-- Rating stars (static for performance) -->
            <div class="rating">
              <div class="stars" v-html="starsHtml"></div>
            </div>
          </div>
        </div>

        <!-- Second Image Card -->
        <div
          class="testimonial-card image-card"
          @mousemove="(event) => handleMouseMove(event, 'img2')"
          @mouseleave="(event) => handleMouseLeave(event, 'img2')"
          :ref="el => setCardRef(el, 'img2')"
        >
          <div 
            class="gloss-overlay" 
            :ref="el => setGlossRef(el, 'img2')"
          ></div>
          <NuxtImg
            src="/img/Grad2.jpg"
            alt="Graduation success story"
            class="card-image"
            loading="lazy"
            preload
          />
        </div>
        <div
          class="testimonial-card image-card"
          @mousemove="(event) => handleMouseMove(event, 'img3')"
          @mouseleave="(event) => handleMouseLeave(event, 'img3')"
          :ref="el => setCardRef(el, 'img3')"
        >
          <div 
            class="gloss-overlay" 
            :ref="el => setGlossRef(el, 'img3')"
          ></div>
          <NuxtImg
            src="/img/Grad5.jpg"
            alt="Graduation success story"
            class="card-image"
            loading="lazy"
            preload
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// Optimized refs
const cardRefs = ref(new Map())
const glossRefs = ref(new Map())
const observer = ref(null)

// Pre-computed stars HTML to avoid v-for overhead
const starsHtml = computed(() => {
  const starSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  return Array(5).fill(starSvg).join('')
})

// Optimized testimonial data with unique IDs for better v-for performance
const testimonials = ref([
  {
    id: 1,
    name: "Adebayo Olamide",
    text: "B&S guided me through every step of my UK Masters admission! From university selection to visa processing, they made everything seamless.",
    course: "MSc Computer Science",
    country: "United Kingdom",
    countryFlag: "/flags/uk.svg",
    avatar: "/img/default.png",
    featured: true
  },
  {
    id: 2,
    name: "Chioma Nwosu",
    text: "I never thought studying in Canada was possible until B&S showed me the scholarship opportunities. Now I'm living my dream!",
    course: "MBA International Business",
    country: "Canada",
    countryFlag: "/flags/canada.svg",
    avatar: "/img/default.png",
    featured: false
  },
  {
    id: 3,
    name: "Ibrahim Hassan",
    text: "The team's support didn't end after admission. They helped with accommodation and even airport pickup. Truly exceptional service!",
    course: "PhD Engineering",
    country: "Australia",
    countryFlag: "/flags/australia.svg",
    avatar: "/img/default.png",
    featured: false
  }
])

// Optimized ref setters
const setCardRef = (el, index) => {
  if (el) {
    cardRefs.value.set(index, el)
  } else {
    cardRefs.value.delete(index)
  }
}

const setGlossRef = (el, index) => {
  if (el) {
    glossRefs.value.set(index, el)
  } else {
    glossRefs.value.delete(index)
  }
}

// Throttled mouse move handler for better performance
let rafId = null
const handleMouseMove = (event, index) => {
  if (rafId) return
  
  rafId = requestAnimationFrame(() => {
    const card = cardRefs.value.get(index)
    const gloss = glossRefs.value.get(index)
    
    if (!card || !gloss) {
      rafId = null
      return
    }
    
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    // Apply 3D transform to card with GPU acceleration
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, 0, 10px)`
    
    // Move gloss overlay
    const glossX = (x / rect.width) * 100
    const glossY = (y / rect.height) * 100
    
    gloss.style.background = `radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)`
    gloss.style.opacity = '1'
    
    rafId = null
  })
}

const handleMouseLeave = (event, index) => {
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  
  const card = cardRefs.value.get(index)
  const gloss = glossRefs.value.get(index)
  
  if (!card || !gloss) return
  
  // Reset transform with GPU acceleration
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)'
  
  // Hide gloss
  gloss.style.opacity = '0'
}

// Preload success stories page on hover
const preloadSuccessStories = () => {
  if (process.client) {
    // Nuxt 3 preloading
    navigateTo('/success-stories', { preload: true })
  }
}

// Optimized intersection observer
const setupIntersectionObserver = () => {
  if (!process.client) return
  
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Unobserve after animation to save resources
          observer.value?.unobserve(entry.target)
        }
      })
    },
    { 
      threshold: 0.1,
      rootMargin: '50px' // Start animation slightly before element enters viewport
    }
  )
  
  // Observe all cards
  cardRefs.value.forEach((card) => {
    if (card) observer.value?.observe(card)
  })
}

onMounted(async () => {
  await nextTick()
  setupIntersectionObserver()
})

onUnmounted(() => {
  // Cleanup
  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }
  
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  
  // Clear refs
  cardRefs.value.clear()
  glossRefs.value.clear()
})
</script>

<style scoped>
.testimonials-section {
  padding: 64px 0;
  background: linear-gradient(135deg, #f4f5f3 0%, #e8ebe7 100%);
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #333333;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  line-height: 28px;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-grid {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 10px;
  margin-bottom: 48px;
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.testimonials-grid::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 16px;
  border: 1px solid #DDDDDD;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  /* Force GPU acceleration */
  transform: translate3d(0, 30px, 0);
  will-change: transform, opacity;
  /* Fixed width for horizontal layout */
  min-width: 280px;
  width: 280px;
  flex-shrink: 0;
}

.testimonial-card.image-card {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.testimonial-card.animate-in {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.testimonial-card.featured {
  background: linear-gradient(135deg, rgba(132, 148, 132, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%);
  border: 2px solid #5d6b56;
}

.testimonial-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.gloss-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
  will-change: background, opacity;
}

.card-content {
  position: relative;
  z-index: 2;
}

.quote-icon {
  color: #EB6534;
  margin-bottom: 12px;
}

.testimonial-text {
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  margin-bottom: 16px;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.student-info {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
}

.student-avatar {
  flex-shrink: 0;
}

.avatar-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #5d6b56;
}

.student-details {
  flex: 1;
}

.student-name {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 3px;
}

.student-course {
  font-size: 12px;
  color: #666666;
  margin-bottom: 6px;
}

.study-location {
  display: flex;
  align-items: center;
  gap: 5px;
}

.country-flag {
  width: 14px;
  height: 10px;
  object-fit: cover;
  border-radius: 2px;
}

.country-name {
  font-size: 12px;
  color: #5d6b56;
  font-weight: 500;
}

.rating {
  display: flex;
  justify-content: flex-end;
}

.stars {
  display: flex;
  gap: 1px;
  color: #EB6534;
}

.section-footer {
  text-align: center;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  will-change: transform;
}

.view-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(133, 148, 132, 0.3);
}

/* Responsive Design */
@media (max-width: 1023px) {
  .container {
    padding: 0 40px;
  }
  
  .section-title {
    font-size: 30px;
    line-height: 40px;
  }
  
  .testimonial-card {
    min-width: 260px;
    width: 260px;
  }
}

@media (max-width: 767px) {
  .testimonials-section {
    padding: 32px 0;
  }
  
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 26px;
    line-height: 36px;
  }
  
  .section-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
  
  .testimonial-card {
    padding: 14px;
    min-width: 240px;
    width: 240px;
  }
  
  .testimonials-grid {
    gap: 16px;
  }
  
  .view-more-btn {
    padding: 12px 20px;
  }
}

/* Optimized animation delays */
.testimonial-card:nth-child(1) {
  transition-delay: 0ms;
}

.testimonial-card:nth-child(2) {
  transition-delay: 100ms;
}

.testimonial-card:nth-child(3) {
  transition-delay: 200ms;
}

.testimonial-card:nth-child(4) {
  transition-delay: 300ms;
}

.testimonial-card:nth-child(5) {
  transition-delay: 400ms;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .testimonial-card {
    transition: opacity 0.3s ease;
  }
  
  .view-more-btn:hover {
    transform: none;
  }
}
</style>