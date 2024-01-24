<script setup lang="ts">
//components
import Navbar from './components/containers/Navbar.vue'
import Footer from './components/containers/Footer.vue'
//components

import { onMounted } from 'vue'
import { i18n } from '@/composables/I18nCompose'
import { useLocaleStore } from '@/stores/locale'
import { useThemesStore } from '@/stores/themes'
// define stores
const store = useLocaleStore()
const themesStore = useThemesStore()
// define stores

const { locale } = i18n({ useScope: 'global' }) //i18n locale variable
onMounted(() => {
  store.setLocale(locale.value) //set site language in refresh

  const savedTheme: string | null = localStorage.getItem('theme') //get saved theme from storage
  savedTheme === 'dark' ? themesStore.setIsDark(true) : themesStore.setIsDark(false) //set saved theme in our app
})
</script>

<template>
  <navbar></navbar>a
  <h1>hello world</h1>
  <main class="main">
    <a-config-provider :direction="locale === 'en' ? 'ltr' : 'rtl'">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </a-config-provider>
  </main>
  <Footer></Footer>
</template>
