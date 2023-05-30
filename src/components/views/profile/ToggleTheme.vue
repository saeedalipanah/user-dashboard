<script setup lang="ts">
import { ref, onMounted, } from 'vue'
import { useThemesStore } from '@/stores/themes';
const store = useThemesStore()
const isChecked = ref<boolean>(false)
const onToggle = () => {
  store.toggleTheme(isChecked.value)
}
onMounted(() => {
  isChecked.value = store.isDark //apply the saved theme on switch in refresh
})
</script>

<template>
  <a-switch v-model:checked="isChecked" @change="onToggle">
    <template #checkedChildren> <i class="bx bxs-sun" style="color: black"></i></template>
    <template #unCheckedChildren><i class="bx bxs-moon"></i></template>
  </a-switch>
</template>