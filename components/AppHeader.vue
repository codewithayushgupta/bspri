<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-white shadow-sm border-b border-gray-200',
    ]"
  >
    <!-- Top Info Bar -->
    <div class="bg-primary-900 text-white text-xs py-1.5 hidden md:block">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Citizen Helpdesk (Mon-Sat, 10 AM-6 PM)
          </span>
          <span class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            feedback.commonportal@gmail.com
          </span>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink to="#" class="hover:text-accent-light transition-colors">English</NuxtLink>
          <span class="text-gray-400">|</span>
          <NuxtLink to="#" class="hover:text-accent-light transition-colors">हिन्दी</NuxtLink>
          <span class="text-gray-400">|</span>
          <NuxtLink to="#" class="hover:text-accent-light transition-colors">Screen Reader</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16 lg:h-18">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 flex-shrink-0">
            <div class="w-12 h-12 rounded-full flex items-center justify-center">
              <img src="@/assets/img/bihar-logo-red.png" alt="">
            </div>
            <div class="hidden sm:block">
              <!-- <h1 class="font-heading text-lg font-bold text-primary-900 leading-tight">Bihar PRD</h1> -->
              <p class="text-sm text-gray-600 leading-tight">
                Government of Bihar  
                <br>
                Panchayati Raj Department</p>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-1">
            <NuxtLink
              v-for="item in navItems"
              :key="item.label"
              :to="item.href"
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-primary-50 transition-all duration-200"
              :class="{ 'text-primary bg-primary-50 font-semibold': item.active }"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <!-- Right Section: Search + Actions -->
          <div class="flex items-center gap-3">
            <!-- Search (Desktop) -->
            <div class="hidden md:flex items-center relative">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search departments, notices, sections..."
                  class="w-56 lg:w-64 pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                  @focus="searchFocused = true"
                  @blur="searchFocused = false"
                />
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <!-- Sign In Button (Desktop) -->
            <button class="hidden lg:flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-all duration-200 shadow-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Citizen Login
            </button>

            <!-- Mobile Search Toggle -->
            <button
              class="md:hidden p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
              @click="mobileSearchOpen = !mobileSearchOpen"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <!-- Mobile Menu Toggle -->
            <button
              class="lg:hidden p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Search Bar -->
        <div v-if="mobileSearchOpen" class="md:hidden pb-3 animate-fade-in">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search departments, notices, policies..."
              class="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-100 bg-white">
          <nav class="max-w-7xl mx-auto px-4 py-3 space-y-1">
            <NuxtLink
              v-for="item in navItems"
              :key="item.label"
              :to="item.href"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              :class="{ 'text-primary bg-primary-50': item.active }"
              @click="mobileMenuOpen = false"
            >
              <span v-html="item.icon"></span>
              {{ item.label }}
            </NuxtLink>
            <div class="pt-3 border-t border-gray-100">
              <button class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Citizen Login / Register
              </button>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const mobileSearchOpen = ref(false)
const searchQuery = ref('')
const searchFocused = ref(false)

const navItems = [
  {
    label: 'Home',
    href: '/',
    active: true,
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
  },
  {
    label: 'State Profile',
    href: '/state-profile',
    active: false,
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
  },
  {
    label: 'Departments',
    href: '/departments',
    active: false,
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
    active: false,
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
  },
  {
    label: 'Media Gallery',
    href: '/media-gallery',
    active: false,
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
  },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
