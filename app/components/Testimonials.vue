<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-[#f4f5f3] to-[#e8ebe7] font-sans overflow-hidden">
    <div class="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
      
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
          Success Stories
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Hear from our students who are now studying abroad and achieving their
          dreams.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200 cursor-pointer flex flex-col h-full transform-gpu opacity-0 translate-y-8 transition-all duration-300 ease-out shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          :class="{ 'border-primary/40 bg-gradient-to-br from-primary/5 to-white/95': testimonial.featured }"
          :style="{ transitionDelay: `${index * 150}ms` }"
          @mousemove="(event) => handleMouseMove(event, index)"
          @mouseleave="(event) => handleMouseLeave(event, index)"
          :ref="(el) => setCardRef(el, index)"
        >
          <div
            class="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 z-10"
            :ref="(el) => setGlossRef(el, index)"
          ></div>

          <div class="relative z-20 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-4">
              <div class="text-secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div class="flex gap-0.5 text-secondary pointer-events-none">
                <div v-html="starsHtml" class="flex gap-0.5"></div>
              </div>
            </div>

            <blockquote class="text-[15px] leading-relaxed text-gray-700 italic mb-6 flex-grow">
              "{{ testimonial.text }}"
            </blockquote>

            <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
              <div class="flex-shrink-0">
                <img
                  :src="testimonial.avatar"
                  :alt="`${testimonial.name} avatar`"
                  width="48"
                  height="48"
                  class="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                  loading="lazy"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-bold text-gray-900 truncate">{{ testimonial.name }}</h4>
                <p class="text-[13px] text-gray-500 truncate mb-0.5">{{ testimonial.course }}</p>
                <span class="text-[11px] font-semibold text-primary uppercase tracking-wide">{{ testimonial.country }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref="trustBadgeRef"
        class="flex justify-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        style="transition-delay: 600ms;"
      >
        <NuxtLink 
          to="/contact"
          class="group inline-flex items-center gap-4 bg-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-md border border-gray-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex -space-x-3">
            <img src="/img/grad5.jpg" alt="Student" class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:border-gray-50 transition-colors" loading="lazy" />
            <img src="/img/grad4.jpg" alt="Student" class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:border-gray-50 transition-colors" loading="lazy" />
            <img src="/img/grad3.jpg" alt="Student" class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:border-gray-50 transition-colors" loading="lazy" />
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-secondary text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-sm z-10 group-hover:bg-secondary/90 transition-colors">
              +
            </div>
          </div>
          
          <div class="text-sm md:text-base text-gray-700 flex items-center gap-2">
            <span>Join <span class="font-bold text-primary group-hover:text-secondary transition-colors">900+</span> successful students</span>
            <svg class="w-4 h-4 text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

const cardRefs = ref(new Map());
const glossRefs = ref(new Map());
const trustBadgeRef = ref(null);
const observer = ref(null);

// Pre-computed stars HTML
const starsHtml = computed(() => {
  const starSvg =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  return Array(5).fill(starSvg).join("");
});

// The 4 Specific Testimonials
const testimonials = ref([
  {
    id: 1,
    name: "O.F",
    text: "B&S Educational Services made my dream of studying abroad a reality. Their guidance through the admission and visa process was incredibly seamless and professional.",
    course: "Postgraduate Studies",
    country: "United Kingdom",
    avatar: "/img/grad3.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "C.U",
    text: "I highly recommend their services! They helped me find the perfect university match and made the entire application and transition completely stress-free.",
    course: "Masters Degree",
    country: "Canada",
    avatar: "/img/img/grad5.jpg",
    featured: false,
  },
  {
    id: 3,
    name: "Paulsen",
    text: "From choosing the right university to settling into my new city, the support I received from the B&S team was exceptional every single step of the way.",
    course: "Postgraduate Studies",
    country: "Australia",
    avatar: "/img/grad4.jpg",
    featured: false,
  },
  {
    id: 4,
    name: "D.A",
    text: "Not only did they secure my admission smoothly, but they also guided me through the dependent visa process so my family could travel and join me without any hassle.",
    course: "Masters Degree",
    country: "United Kingdom",
    avatar: "/img/grad1.jpg",
    featured: true,
  },
]);

// Ref setters
const setCardRef = (el, index) => {
  if (el) cardRefs.value.set(index, el);
  else cardRefs.value.delete(index);
};

const setGlossRef = (el, index) => {
  if (el) glossRefs.value.set(index, el);
  else glossRefs.value.delete(index);
};

// 3D Hover Effect handling
let rafId = null;
const handleMouseMove = (event, index) => {
  if (window.innerWidth < 768) return;
  if (rafId) return;

  rafId = requestAnimationFrame(() => {
    const card = cardRefs.value.get(index);
    const gloss = glossRefs.value.get(index);

    if (!card || !gloss) {
      rafId = null;
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -5px, 0)`;

    const glossX = (x / rect.width) * 100;
    const glossY = (y / rect.height) * 100;

    gloss.style.background = `radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`;
    gloss.style.opacity = "1";

    rafId = null;
  });
};

const handleMouseLeave = (event, index) => {
  if (window.innerWidth < 768) return;
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  const card = cardRefs.value.get(index);
  const gloss = glossRefs.value.get(index);

  if (!card || !gloss) return;

  card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
  gloss.style.opacity = "0";
};

// Intersection Observer for scroll animation
const setupIntersectionObserver = () => {
  if (typeof window === 'undefined') return;

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.value?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  // Observe all testimonial cards
  cardRefs.value.forEach((card) => {
    if (card) observer.value?.observe(card);
  });

  // Observe the trust badge
  if (trustBadgeRef.value) {
    observer.value.observe(trustBadgeRef.value);
  }
};

onMounted(async () => {
  await nextTick();
  setupIntersectionObserver();
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
    observer.value = null;
  }
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  cardRefs.value.clear();
  glossRefs.value.clear();
});
</script>