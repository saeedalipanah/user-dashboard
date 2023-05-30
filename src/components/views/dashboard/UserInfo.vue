<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const store = useProfileStore()
const username = computed<string>(() => store.username)
const { t } = useI18n()
</script>

<template>
  <h1 class="username"> {{t('dashboard.welcome')}} {{ username }}</h1>
</template>
