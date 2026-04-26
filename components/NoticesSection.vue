<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- Notices Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="section-title mb-1">
                <span class="text-primary">Important</span> Notices
              </h2>
              <p class="text-sm text-gray-500">Latest public notifications, speeches and portal updates</p>
            </div>
            <NuxtLink to="#" class="hidden sm:inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-primary-dark transition-colors">
              View All
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>

          <div class="space-y-3">
            <NuxtLink
              v-for="notice in notices"
              :key="notice.id"
              :to="notice.href"
              class="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:bg-primary-50/30 transition-all duration-200"
            >
              <!-- Date -->
              <div class="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-xl flex flex-col items-center justify-center">
                <span class="text-lg font-bold text-primary leading-none">{{ notice.day }}</span>
                <span class="text-xs text-primary/70 mt-0.5">{{ notice.month }}</span>
              </div>

              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span
                    v-if="notice.tag"
                    class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold"
                    :class="notice.tagClass"
                  >
                    {{ notice.tag }}
                  </span>
                  <span class="text-xs text-gray-400">{{ notice.date }}</span>
                </div>
                <h3 class="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                  {{ notice.title }}
                </h3>
              </div>

              <!-- Arrow -->
              <div class="flex-shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </NuxtLink>
          </div>

          <!-- Mobile View All -->
          <div class="mt-4 sm:hidden text-center">
            <NuxtLink to="#" class="text-primary font-medium text-sm">View All Notices →</NuxtLink>
          </div>
        </div>

        <!-- Sidebar: Quick Links -->
        <div class="lg:col-span-1">
          <div class="sticky top-24">
            <!-- Ticker / Updates -->
            <div class="card p-6 mb-6">
              <h3 class="font-heading text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Latest Updates
              </h3>
              <div class="space-y-3">
                <NuxtLink
                  v-for="update in updates"
                  :key="update.id"
                  :to="update.href"
                  class="flex items-start gap-3 group"
                >
                  <div class="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="text-sm text-gray-700 group-hover:text-primary transition-colors leading-relaxed">{{ update.title }}</p>
                    <span class="text-xs text-gray-400">{{ update.time }}</span>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <!-- Quick Links Card -->
            <div class="card p-6 bg-gradient-to-br from-primary-900 to-primary text-white">
              <h3 class="font-heading text-lg font-bold mb-3">Quick Links</h3>
              <div class="space-y-2">
                <NuxtLink
                  v-for="link in quickLinks"
                  :key="link.label"
                  :to="link.href"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                >
                  <span v-html="link.icon" class="w-4 h-4 flex-shrink-0"></span>
                  {{ link.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const notices = [
  {
    id: 1,
    title: 'Speech by Hon\'ble Governor of Bihar during joint session of Bihar Vidhan Mandal 2026',
    tag: 'NEW',
    tagClass: 'bg-red-100 text-red-700',
    day: '24',
    month: 'Apr',
    date: '24 April 2026',
    href: '#',
  },
  {
    id: 2,
    title: 'Speech by Hon\'ble Governor of Bihar during joint session of Bihar Vidhan Mandal 2025',
    tag: 'IMPORTANT',
    tagClass: 'bg-amber-100 text-amber-700',
    day: '22',
    month: 'Apr',
    date: '22 April 2026',
    href: '#',
  },
  {
    id: 3,
    title: 'Speech by Hon\'ble Governor of Bihar during joint session of Bihar Vidhan Mandal 2024',
    tag: 'UPDATE',
    tagClass: 'bg-green-100 text-green-700',
    day: '20',
    month: 'Apr',
    date: '20 April 2026',
    href: '#',
  },
  {
    id: 4,
    title: 'Speech by Hon\'ble Governor of Bihar during joint session of Bihar Vidhan Mandal 2023',
    tag: 'ARCHIVE',
    tagClass: 'bg-blue-100 text-blue-700',
    day: '18',
    month: 'Apr',
    date: '18 April 2026',
    href: '#',
  },
  {
    id: 5,
    title: 'Latest Highlights, media updates and publications available in the portal media gallery',
    tag: 'HIGHLIGHT',
    tagClass: 'bg-red-100 text-red-700',
    day: '15',
    month: 'Apr',
    date: '15 April 2026',
    href: '#',
  },
]

const updates = [
  { id: 1, title: 'History of Bihar section updated with latest profile content', time: 'Today', href: '#' },
  { id: 2, title: 'Facts Speak categories refreshed for Health and Education', time: 'Today', href: '#' },
  { id: 3, title: 'Media Gallery updated with latest photo and video collections', time: 'Yesterday', href: '#' },
  { id: 4, title: 'Website policies and accessibility pages revised', time: '2 days ago', href: '#' },
]

const quickLinks = [
  {
    label: 'Accessibility',
    href: '#',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>',
  },
  {
    label: 'Screen Reader',
    href: '#',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>',
  },
  {
    label: 'Website Policies',
    href: '#',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  },
  {
    label: 'Web Information Manager',
    href: '#',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  },
]
</script>
