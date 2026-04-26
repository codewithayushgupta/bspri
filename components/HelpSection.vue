<template>
  <section class="py-12 md:py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Help & Support -->
        <div>
          <h2 class="section-title mb-2">
            Need <span class="text-primary">Help</span>?
          </h2>
          <p class="text-gray-500 mb-8">
            For support, policy references, and accessibility guidance, use the official portal contact and help channels below.
          </p>

          <div class="space-y-4">
            <!-- Helpline -->
            <div class="card p-5 flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Helpline Number</h3>
                <p class="text-primary font-bold text-lg">Jigyasa Helpline (Portal Reference)</p>
                <p class="text-xs text-gray-400 mt-1">Citizen guidance support as published under website links</p>
              </div>
            </div>

            <!-- Email -->
            <div class="card p-5 flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Email Support</h3>
                <p class="text-primary font-medium">feedback.commonportal@gmail.com</p>
                <p class="text-xs text-gray-400 mt-1">Suggestions and feedback may be shared on this email</p>
              </div>
            </div>

            <!-- Address -->
            <div class="card p-5 flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Office Address</h3>
                <p class="text-sm text-gray-600">Information & Public Relations Department<br/>Government of Bihar, Patna</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ & Quick Actions -->
        <div>
          <h2 class="section-title mb-2">
            Frequently Asked <span class="text-primary">Questions</span>
          </h2>
          <p class="text-gray-500 mb-8">Quick guidance for commonly used Bihar portal sections</p>

          <div class="space-y-3">
            <div
              v-for="faq in faqs"
              :key="faq.question"
              class="card overflow-hidden"
            >
              <button
                class="w-full flex items-center justify-between p-4 text-left"
                @click="toggleFaq(faq.question)"
              >
                <span class="text-sm font-semibold text-gray-800 pr-4">{{ faq.question }}</span>
                <svg
                  class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
                  :class="{ 'rotate-180': openFaq === faq.question }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-40"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 max-h-40"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="openFaq === faq.question" class="px-4 pb-4">
                  <p class="text-sm text-gray-500 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Chat Support CTA -->
          <div class="mt-6 card p-6 bg-gradient-to-r from-primary-900 to-primary text-white text-center">
            <div class="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-1">Chat with Us</h3>
            <p class="text-sm text-white/70 mb-4">Need help finding a section? Use guided assistance</p>
            <button class="px-6 py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Open Help Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openFaq = ref<string | null>(null)

const faqs = [
  {
    question: 'Where can I read the State Profile and governance information of Bihar?',
    answer: 'Use the State Profile and Governance Profile sections available on the homepage highlights. These pages provide history, profile details and governance overview.',
  },
  {
    question: 'How do I access department-wise websites from this portal?',
    answer: 'Open the Departments section to find categorized links such as Administration, Finance, Human Resource, Infrastructure, Agriculture & Allied, and Social Welfare.',
  },
  {
    question: 'Where can I find website policies and accessibility options?',
    answer: 'Quick links include Accessibility, Screen Reader, Website Policies, Help, and Web Information Manager pages for citizen convenience.',
  },
  {
    question: 'How can I share feedback for this portal?',
    answer: 'As mentioned in the footer note, feedback and suggestions can be sent to feedback.commonportal@gmail.com.',
  },
]

function toggleFaq(question: string) {
  openFaq.value = openFaq.value === question ? null : question
}
</script>
