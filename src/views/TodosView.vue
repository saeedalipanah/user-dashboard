<script setup lang="ts">
// components
import TodosIndex from '@/components/views/todos/TodosIndex.vue'
// components
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const {t}  = useI18n()
const router = useRouter()
</script>

<template>
  <div class="todos">
    <a-page-header
      :title="t('sidebar.todos')"
      :sub-title="t('todos.subtitle')"
      @back="router.go(-1)"
    />
   <todos-index></todos-index>
  </div>
</template>
