<template>
  <section class="py-12 md:py-16 bg-white relative -mt-8 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="section-title">
          <span class="text-primary">Citizen</span> Quick Links
        </h2>
        <p class="section-subtitle">Jump to key Bihar portal sections and public information pages</p>
      </div>

      <!-- Actions Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        <NuxtLink
          v-for="action in actions"
          :key="action.label"
          :to="action.href"
          class="group card-hover p-5 md:p-6 text-center cursor-pointer"
        >
          <div
            class="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
            :class="action.bgClass"
          >
            <span v-html="action.icon" class="w-7 h-7 md:w-8 md:h-8"></span>
          </div>
          <h3 class="text-sm md:text-base font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {{ action.label }}
          </h3>
          <p class="text-xs text-gray-400 mt-1 hidden sm:block">{{ action.sub }}</p>
          <div class="mt-2 flex items-center justify-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Go</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const actions = [
  {
    label: 'State Profile',
    sub: 'History of Bihar',
    href: '/state-profile',
    bgClass: 'bg-primary-50 text-primary',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
  },
  {
    label: 'Governance Profile',
    sub: 'Leadership & governance',
    href: '/governance-profile',
    bgClass: 'bg-blue-50 text-blue-600',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>',
  },
  {
    label: 'Facts and Figure',
    sub: 'Data and indicators',
    href: '/facts-and-figure',
    bgClass: 'bg-purple-50 text-purple-600',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
  },
  {
    label: 'Bihar Leading the Way',
    sub: 'Flagship policy initiatives',
    href: '/bihar-leading-the-way',
    bgClass: 'bg-red-50 text-red-600',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>',
  },
  {
    label: 'Dashboard',
    sub: 'Scheme progress & reports',
    href: '/dashboard',
    bgClass: 'bg-amber-50 text-amber-600',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
  },
  {
    label: 'Departments',
    sub: 'All state departments',
    href: '/departments',
    bgClass: 'bg-teal-50 text-teal-600',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>',
  },
]
</script>
