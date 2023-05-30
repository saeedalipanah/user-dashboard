<script setup lang="ts">
// components
import WeatherIndex from '@/components/views/weather/WeatherIndex.vue'
// components
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const {t}  = useI18n()
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