<script setup lang="ts">
// components
import WeatherIndex from '@/components/views/weather/WeatherIndex.vue'
// components
import { useRouter } from 'vue-router'
import { i18n } from '@/composables/I18nCompose'
const {t}  = i18n()
const router = useRouter()
</script>

<template>
  <div>
    <a-page-header
      :title="t('sidebar.weather')"
      :sub-title="t('weather.subtitle')"
      @back="router.go(-1)"
    />
    <weather-index></weather-index>
  </div>
</template>