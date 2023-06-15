<script setup lang="ts">
import { ref } from 'vue'
import { i18n } from '@/composables/I18nCompose'
const { t } = i18n()
const emit = defineEmits(['close'])
type linksT = {
  name: string
  route: string
  icon: string
}[]
const links = ref<linksT>([
  { name: 'sidebar.dashboard', route: 'dashboard', icon: 'bxs-dashboard' },
  { name: 'sidebar.todos', route: 'todos', icon: 'bx-list-check' },
  { name: 'sidebar.weather', route: 'weather', icon: 'bxs-cloud-lightning' },
  { name: 'sidebar.profile', route: 'profile', icon: 'bxs-user' }
])
</script>

<template>
  <ul>
    <li class="router-link" v-for="(link, i) in links" :key="i" @click="emit('close')">
      <router-link :to="{ name: link.route }"
        ><div>
          <i :class="`bx ${link.icon}`"></i>
          <span>{{ t(link.name) }}</span>
        </div></router-link
      >
    </li>
  </ul>
</template>
