<script setup lang="ts">
// components
import DashboardIndex from '@/components/views/dashboard/DashboardIndex.vue'
// components
import { useRouter } from 'vue-router'
import { i18n } from '@/composables/I18nCompose'
import {provide} from 'vue'
const router = useRouter()
const { t } = i18n()


//provide and inject test for custom event
const onButtonClickTest  = (payload : object) =>{
  console.log('its clicked');
  console.log('payload',payload);
}
provide('testFunc', onButtonClickTest)
</script>

<template>
  <div class="dashboard">
    <a-page-header
      :title="t('sidebar.dashboard')"
      :sub-title="t('dashboard.subtitle')"
      @back="router.go(-1)"
    />
    <dashboard-index ></dashboard-index>
  </div>
</template>