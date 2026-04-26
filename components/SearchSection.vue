<template>
  <section class="py-16 md:py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary to-primary-dark"></div>
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Section Header -->
      <div class="mb-10">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Portal Finder
        </span>
        <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
          Find Information on Bihar Portal
        </h2>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          Search across sections, departments, notices, policies, publications and citizen resources.
        </p>
      </div>

      <!-- Search Box -->
      <div class="relative max-w-2xl mx-auto">
        <div class="relative">
          <svg class="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search state profile, departments, facts, dashboard..."
            class="w-full pl-14 pr-32 py-4 md:py-5 text-lg bg-white rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/30 text-gray-800 placeholder-gray-400"
            @input="onSearch"
            @focus="showSuggestions = true"
          />
          <button class="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
            Search
          </button>
        </div>

        <!-- Suggestions Dropdown -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="showSuggestions && searchQuery.length > 0"
            class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-20"
          >
            <div v-if="suggestions.length > 0">
              <button
                v-for="(suggestion, idx) in suggestions"
                :key="idx"
                class="w-full flex items-center gap-3 px-5 py-3 hover:bg-primary-50 transition-colors text-left"
                @click="selectSuggestion(suggestion)"
              >
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <div>
                  <span class="text-sm font-medium text-gray-700">{{ suggestion.name }}</span>
                  <span class="text-xs text-gray-400 ml-2">{{ suggestion.type }}</span>
                </div>
              </button>
            </div>
            <div v-else class="px-5 py-6 text-center text-gray-400 text-sm">
              No results found. Try a different search term.
            </div>
          </div>
        </Transition>
      </div>

      <!-- Popular Searches -->
      <div class="mt-8 flex flex-wrap justify-center gap-2">
        <span class="text-white/50 text-sm">Popular:</span>
        <button
          v-for="term in popularTerms"
          :key="term"
          class="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full hover:bg-white/20 transition-colors"
          @click="searchQuery = term"
        >
          {{ term }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const showSuggestions = ref(false)

const popularTerms = [
  'State Profile',
  'Governance Profile',
  'Facts Speak',
  'Departments',
  'Website Policies',
]

const allSuggestions = [
  { name: 'History of Bihar', type: 'State Profile' },
  { name: 'Governance Profile', type: 'Citizen Information' },
  { name: 'Facts and Figure', type: 'Data' },
  { name: 'Bihar leading the way', type: 'Initiatives' },
  { name: 'Dashboard', type: 'Monitoring' },
  { name: 'Media Gallery', type: 'Gallery' },
  { name: 'Publications', type: 'Documents' },
  { name: 'Departments', type: 'Directory' },
  { name: 'Website Policies', type: 'Policy' },
  { name: 'Screen Reader', type: 'Accessibility' },
]

const suggestions = computed(() => {
  if (!searchQuery.value) return []
  const q = searchQuery.value.toLowerCase()
  return allSuggestions.filter(
    (s) =>
      s.name.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)
  )
})

function onSearch() {
  showSuggestions.value = true
}

function selectSuggestion(suggestion: { name: string }) {
  searchQuery.value = suggestion.name
  showSuggestions.value = false
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
      showSuggestions.value = false
    }
  })
})
</script>
