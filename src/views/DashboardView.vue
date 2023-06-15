<script setup lang="ts">
// components
import DashboardIndex from '@/components/views/dashboard/DashboardIndex.vue'
// components
import { useRouter } from 'vue-router'
import { i18n } from '@/composables/I18nCompose'
const router = useRouter()
const { t } = i18n()
</script>

<template>
  <div class="dashboard">
    <a-page-header
      :title="t('sidebar.dashboard')"
      :sub-title="t('dashboard.subtitle')"
      @back="router.go(-1)"
    />
    <dashboard-index></dashboard-index>
  </div>
</template>