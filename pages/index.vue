<template>
  <div>
    <!-- Hero Carousel - full width, no top padding -->
    <HeroCarousel />

    <!-- Quick Actions -->
    <QuickActions />

    <!-- Popular Services -->
    <PopularServices />

    <!-- Important Notices -->
    <NoticesSection />

    <!-- Government Schemes -->
    <SchemesSection />

    <!-- Search / Service Finder -->
    <SearchSection />

    <!-- Statistics -->
    <StatsSection />

    <!-- Help & Support -->
    <HelpSection />

    <!-- Footer spacing for mobile bottom nav -->
    <div class="h-16 lg:h-0"></div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Government of Bihar - Panchayati Raj Department Citizen Portal',
})
</script>
