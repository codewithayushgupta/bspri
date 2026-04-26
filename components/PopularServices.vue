<template>
  <section class="py-12 md:py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
        <div>
          <h2 class="section-title">
            Featured <span class="text-primary">Sections</span>
          </h2>
          <p class="section-subtitle mb-0">Most visited information areas from the Bihar state portal</p>
        </div>
        <NuxtLink to="/services" class="mt-4 sm:mt-0 inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-primary-dark transition-colors">
          View All Sections
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
        <NuxtLink
          v-for="service in services"
          :key="service.name"
          :to="service.href"
          class="group card-hover p-5 md:p-6 flex flex-col items-center text-center"
        >
          <!-- Icon -->
          <div
            class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
            :style="{ background: service.gradient }"
          >
            <span v-html="service.icon" class="w-8 h-8 md:w-10 md:h-10 text-white"></span>
          </div>

          <!-- Title -->
          <h3 class="text-sm md:text-base font-semibold text-gray-800 group-hover:text-primary transition-colors leading-tight">
            {{ service.name }}
          </h3>

          <!-- Description (hidden on smallest screens) -->
          <p class="text-xs text-gray-400 mt-2 line-clamp-2 hidden sm:block">
            {{ service.description }}
          </p>

          <!-- Arrow indicator -->
          <div class="mt-3 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    name: 'State Profile',
    description: 'History, geography, and key socio-economic profile of Bihar',
    href: '/state-profile',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
  },
  {
    name: 'Governance Profile',
    description: 'Governance vision and state leadership perspective',
    href: '/governance-profile',
    gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21h6m-6 0V9m6 12V9m-6 0a3 3 0 01-3-3V5a3 3 0 013-3h0a3 3 0 013 3v1a3 3 0 01-3 3m6 0a3 3 0 013-3V5a3 3 0 00-3-3h0a3 3 0 00-3 3v1a3 3 0 003 3" /></svg>',
  },
  {
    name: 'Facts and Figure',
    description: 'Population, literacy, density and growth indicators',
    href: '/facts-and-figure',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  },
  {
    name: 'Dashboard',
    description: '7 Nishchay and scheme progress dashboards',
    href: '/dashboard',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
  },
  {
    name: 'Media Gallery',
    description: 'Photo gallery, video gallery and publications',
    href: '/media-gallery',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
  },
  {
    name: 'Website Links',
    description: 'Citizen utility links and important state portals',
    href: '/website-links',
    gradient: 'linear-gradient(135deg, #14B8A6, #0D9488)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
  },
]
</script>
