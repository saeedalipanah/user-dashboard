<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'
import { computed } from 'vue'
import { i18n } from '@/composables/I18nCompose'
const store = useProfileStore()
const username = computed<string>(() => store.username)
const { t } = i18n()
</script>

<template>
  <h1 class="username"> {{t('dashboard.welcome')}} {{ username }}</h1>
</template>
