<script setup lang="ts">
// component
import NewUser from './NewUser.vue'
import UserInfo from './UserInfo.vue'
import Clock from './Clock.vue'
import { inject } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { computed, onMounted } from 'vue'
const store = useProfileStore()
const username = computed<string>(() => store.username)

//provide and inject test for custom event
const payload :object = { id: 'gg', name: 'payload' }
const onButtonClickTest = inject('testFunc') as any
onMounted(() => {
  store.getUserName()
})
</script>

<template>
  <div>
    <clock></clock>
    <new-user v-if="!username"></new-user>
    <user-info v-else></user-info>

    <!-- provide and inject test for custom event -->
    <button @click="onButtonClickTest(payload)">test the emit</button>
  </div>
</template>
