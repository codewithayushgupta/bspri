<template>
  <section class="py-12 md:py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="section-title">
          Bihar <span class="text-primary">Leading the Way</span>
        </h2>
        <p class="section-subtitle">Key governance and social initiatives highlighted on Bihar citizen portal</p>
      </div>

      <!-- Category Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-5 py-2 text-sm font-medium rounded-full transition-all duration-200"
          :class="
            activeCategory === cat
              ? 'bg-primary text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary border border-gray-200'
          "
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Schemes Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="scheme in filteredSchemes"
          :key="scheme.name"
          class="group card-hover overflow-hidden"
        >
          <!-- Card Header with gradient -->
          <div class="h-3" :style="{ background: scheme.gradient }"></div>

          <div class="p-6">
            <!-- Icon + Category -->
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-14 h-14 rounded-2xl flex items-center justify-center"
                :style="{ background: scheme.gradient }"
              >
                <span v-html="scheme.icon" class="w-7 h-7 text-white"></span>
              </div>
              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="scheme.catClass"
              >
                {{ scheme.category }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {{ scheme.name }}
            </h3>

            <!-- Description -->
            <p class="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
              {{ scheme.description }}
            </p>

            <!-- Key Details -->
            <div class="flex items-center gap-4 mb-5 text-xs text-gray-400">
              <span class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                All Bihar
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ scheme.year }}
              </span>
            </div>

            <!-- CTA -->
            <button class="w-full py-2.5 text-sm font-semibold text-primary border-2 border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-10">
        <NuxtLink to="#" class="btn-primary">
          Explore All Initiatives
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('All')
const categories = ['All', 'Public Welfare', 'Women Empowerment', 'Governance Reforms', 'Digital Governance']

interface Scheme {
  name: string
  description: string
  category: string
  catClass: string
  gradient: string
  icon: string
  year: string
}

const schemes: Scheme[] = [
  {
    name: 'Total Prohibition of Alcohol',
    description: 'Statewide prohibition policy focused on social welfare, family well-being, and safer community life across Bihar.',
    category: 'Public Welfare',
    catClass: 'bg-blue-50 text-blue-700',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
    year: 'Ongoing',
  },
  {
    name: '50% Reservation for Women in Panchayati Raj Institutions',
    description: 'Reservation policy promoting women leadership and inclusive grassroots governance in local self-government institutions.',
    category: 'Women Empowerment',
    catClass: 'bg-green-50 text-green-700',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    year: 'Implemented',
  },
  {
    name: '35% Reservation for Women in Government Jobs',
    description: 'State policy for increased women participation in public service employment and administrative representation.',
    category: 'Women Empowerment',
    catClass: 'bg-purple-50 text-purple-700',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>',
    year: 'Implemented',
  },
  {
    name: '7 Nishchay Dashboard Monitoring',
    description: 'Physical and financial progress tracking of major state schemes through dashboard-based public reporting.',
    category: 'Digital Governance',
    catClass: 'bg-amber-50 text-amber-700',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>',
    year: 'Ongoing',
  },
  {
    name: 'Facts Speak Sectoral Storytelling',
    description: 'Evidence-led stories on Health, Education, Electricity, Road Network, Communication, and Prohibition outcomes.',
    category: 'Governance Reforms',
    catClass: 'bg-blue-50 text-blue-700',
    gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
    year: 'Updated 2026',
  },
  {
    name: 'Departmental Citizen Link Integration',
    description: 'Single-window access to Administration, Finance, Human Resource, Infrastructure, Agriculture and Social Welfare departments.',
    category: 'Digital Governance',
    catClass: 'bg-green-50 text-green-700',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
    year: 'Updated 2026',
  },
]

const filteredSchemes = computed(() => {
  if (activeCategory.value === 'All') return schemes
  return schemes.filter((s) => s.category === activeCategory.value)
})
</script>
