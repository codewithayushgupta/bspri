<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="section-title">
          Portal <span class="text-primary">Statistics</span>
        </h2>
        <p class="section-subtitle">Visitor and usage counters as displayed on Bihar government portal</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="card p-6 text-center group hover:border-primary/20 transition-all duration-300"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            :style="{ background: stat.bgGradient }"
          >
            <span v-html="stat.icon" class="w-7 h-7 text-white"></span>
          </div>

          <!-- Number -->
          <div class="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-1">
            <span ref="counters">{{ stat.displayValue }}</span>
          </div>

          <!-- Label -->
          <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>

          <!-- Trend -->
          <div class="mt-3 flex items-center justify-center gap-1 text-xs" :class="stat.trendClass">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="stat.trendIcon" />
            </svg>
            {{ stat.trend }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    label: 'Total Visitors',
    value: 0,
    displayValue: '0',
    bgGradient: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
    trend: 'Counter on portal',
    trendClass: 'text-blue-600',
    trendIcon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: 'Logged In User',
    value: 4,
    displayValue: '4',
    bgGradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
    trend: 'Live portal metric',
    trendClass: 'text-blue-600',
    trendIcon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: 'Active Users',
    value: 1636,
    displayValue: '1,636',
    bgGradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>',
    trend: 'Current active session count',
    trendClass: 'text-green-600',
    trendIcon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    label: 'Registered Users',
    value: 311,
    displayValue: '311',
    bgGradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
  trend: 'User base on portal',
    trendClass: 'text-blue-600',
    trendIcon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]
</script>
