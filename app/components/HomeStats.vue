<template>
  <section class="py-6 bg-white" aria-label="Key statistics">
    <div class="max-w-5xl mx-auto px-4">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <article
          v-for="stat in stats"
          :key="stat.id"
          class="p-4 rounded-lg bg-slate-50 text-center"
          :style="{ borderTop: `3px solid ${stat.color}` }"
          role="figure"
          :aria-label="stat.aria"
        >
          <div
            class="stat-value font-bold text-slate-900 text-2xl sm:text-3xl leading-none"
            :data-target="stat.target"
            :data-suffix="stat.suffix"
            :data-static="stat.static ? '1' : '0'"
            aria-live="polite"
          >{{ stat.display }}</div>
          <div class="text-xs text-slate-500 mt-1">{{ stat.label }}</div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

const stats = [
  { id: 'since',    label: 'In business since',    display: '2007',   target: 2007, suffix: '',  aria: 'Since 2007',                         static: true,  color: 'var(--color-primary)' },
  { id: 'partners', label: 'Partner universities', display: '17+',    target: 15,   suffix: '+', aria: 'Fifteen plus partner universities',   static: false, color: 'var(--color-secondary)' },
  { id: 'students', label: 'Students placed',      display: '1,000+', target: 1000, suffix: '+', aria: 'One thousand plus students placed',   static: false, color: 'var(--color-base)' },
  { id: 'visa',     label: 'Visa success rate',    display: '99%',    target: 99,   suffix: '%', aria: 'Ninety nine percent visa success rate', static: false, color: 'var(--color-secondary)' },
]

function animateCount(el, end, suffix = '') {
  if (matchMedia?.('(prefers-reduced-motion: reduce)').matches || end >= 1900) {
    el.textContent = end.toLocaleString() + suffix
    return
  }
  const duration = Math.min(1400, 40 * Math.log(end + 1) * 60)
  const startTime = performance.now()
  const step = (now) => {
    const p = Math.min((now - startTime) / duration, 1)
    el.textContent = Math.floor(p * end).toLocaleString() + suffix
    if (p < 1) requestAnimationFrame(step)
    else el.textContent = end.toLocaleString() + suffix
  }
  requestAnimationFrame(step)
}

onMounted(async () => {
  await nextTick()
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ isIntersecting, target: el }) => {
      if (!isIntersecting) return
      const isStatic = el.dataset.static === '1'
      const end = parseInt(el.dataset.target, 10)
      const suffix = el.dataset.suffix || ''
      isStatic
        ? (el.textContent = String(end) + suffix)
        : animateCount(el, end, suffix)
      obs.unobserve(el)
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.stat-value').forEach(el => io.observe(el))
})
</script>