<template>
  <section class="relative w-full overflow-hidden" style="height: clamp(280px, 50vw, 500px);">
    <!-- Active Slide -->
    <div class="absolute inset-0">
      <div class="w-full h-full transition-all duration-300" :style="{ background: activeSlide.bgGradient }"></div>

      <!-- Pattern overlay -->
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <!-- Decorative shapes -->
      <div class="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10 bg-white hidden lg:block"></div>
      <div class="absolute bottom-10 left-20 w-40 h-40 rounded-full opacity-10 bg-white hidden lg:block"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex items-center h-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="max-w-2xl">
          <span
            v-if="activeSlide.tag"
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
            :class="activeSlide.tagClass"
          >
            {{ activeSlide.tag }}
          </span>
          <h2
            class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            v-html="activeSlide.title"
          ></h2>
          <p class="text-base sm:text-lg text-white/80 mb-6 max-w-lg leading-relaxed">
            {{ activeSlide.description }}
          </p>
          <div class="flex flex-wrap gap-3">
            <button
              class="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {{ activeSlide.cta }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              v-if="activeSlide.secondaryCta"
              class="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {{ activeSlide.secondaryCta }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-200"
      @click="prevSlide"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      class="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-200"
      @click="nextSlide"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dots -->
    <div class="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="
          currentSlide === index
            ? 'w-8 bg-white'
            : 'w-2.5 bg-white/50 hover:bg-white/70'
        "
        @click="goToSlide(index)"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Slide {
  id: number
  title: string
  description: string
  cta: string
  secondaryCta?: string
  tag?: string
  tagClass?: string
  bgGradient: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'History of Bihar<br/><span class="text-accent-200">State Profile</span>',
    description: 'Explore Bihar\'s geography, heritage, social profile, and development journey through the official state profile section.',
    cta: 'Read State Profile',
    secondaryCta: 'Explore Governance',
    tag: 'Featured Section',
    tagClass: 'bg-accent/90 text-white',
    bgGradient: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 40%, #1A237E 100%)',
  },
  {
    id: 2,
    title: 'Governance<br/><span class="text-accent-200">Profile</span>',
    description: 'Know the governance vision and leadership perspective shaping citizen-first development in Bihar.',
    cta: 'Read Governance Profile',
    tag: 'Citizen Information',
    tagClass: 'bg-primary-500/90 text-white',
    bgGradient: 'linear-gradient(135deg, #1A237E 0%, #3949AB 40%, #1B5E20 100%)',
  },
  {
    id: 3,
    title: 'Facts Speak<br/><span class="text-accent-200">Bihar Progress</span>',
    description: 'View sector-wise progress stories and fact sheets in health, education, electricity, roads, communication and prohibition.',
    cta: 'View Facts Speak',
    tag: 'Data & Evidence',
    tagClass: 'bg-saffron/90 text-white',
    bgGradient: 'linear-gradient(135deg, #0D3B12 0%, #1B5E20 40%, #FF8F00 100%)',
  },
  {
    id: 4,
    title: 'Departments &<br/><span class="text-accent-200">Website Links</span>',
    description: 'Access state departments, dashboard links, media gallery, publications, and key government citizen resources from one place.',
    cta: 'Open Departments',
    tag: 'Quick Access',
    tagClass: 'bg-red-500/90 text-white',
    bgGradient: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 40%, #1A237E 100%)',
  },
]

const currentSlide = ref(0)
let autoSlideTimer: ReturnType<typeof setInterval> | null = null

const activeSlide = computed(() => slides[currentSlide.value])

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

function goToSlide(index: number) {
  currentSlide.value = index
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 6000)
}

function resetAutoSlide() {
  if (autoSlideTimer) clearInterval(autoSlideTimer)
  startAutoSlide()
}

onMounted(() => {
  resetAutoSlide()
})

onUnmounted(() => {
  if (autoSlideTimer) clearInterval(autoSlideTimer)
})
</script>
