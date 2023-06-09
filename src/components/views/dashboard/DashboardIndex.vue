<script setup lang="ts">
// component
import NewUser from './NewUser.vue'
import UserInfo from './UserInfo.vue'
import Clock from './Clock.vue'

import { useProfileStore } from '@/stores/profile'
import { computed, onMounted } from 'vue'
const store = useProfileStore()
const username = computed<string>(()=> store.username)
onMounted(() => {
  store.getUserName()
})
</script>

<template>
  <div>
    <clock></clock>
    <new-user v-if="!username"></new-user>
    <user-info v-else></user-info>
  </div>
</template>