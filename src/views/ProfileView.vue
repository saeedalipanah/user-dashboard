<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProfileIndex from '@/components/views/profile/ProfileIndex.vue'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="profile">
    <a-page-header
      :title="t('sidebar.profile')"
      :sub-title="t('profile.subtitle')"
      @back="router.go(-1)"
    />
    <profile-index></profile-index>
  </div>
</template>