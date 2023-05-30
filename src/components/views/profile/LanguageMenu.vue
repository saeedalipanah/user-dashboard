<script setup lang="ts">
import {  watch,  } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '@/stores/locale'
const store = useLocaleStore()
const { locale } = useI18n({ useScope: 'global' }) //i18n locale variable
watch(locale, (v) => {
  store.setLocale(v) //set new selected locale on store and storage
})
</script>

<template>
  <div>
    <a-select ref="select" v-model:value="locale" style="width: 120px">
      <a-select-option value="en">English</a-select-option>
      <a-select-option value="fa">Persian</a-select-option>
    </a-select>
  </div>
</template>