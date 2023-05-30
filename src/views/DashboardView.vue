<script setup lang="ts">
// components
import DashboardIndex from '@/components/views/dashboard/DashboardIndex.vue'
// components
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const { t } = useI18n()
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