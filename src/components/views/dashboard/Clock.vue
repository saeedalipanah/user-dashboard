<script setup lang="ts">
import { ref, onMounted } from 'vue'
let clock = ref()

const getTime = () => {
  const today = new Date()
  let hour = today.getHours()
  let minute = today.getMinutes()
  let Second = today.getSeconds()
  clock.value = hour + ':' + formatTime(minute) + ':' + formatTime(Second)
}
const formatTime = (i : number) : number | string => {
  if (i < 10) {
   return '0' + i
  } // add zero in front of numbers < 10
  return i
}

onMounted(() => {
  setInterval(() => {
    getTime() //get time in every seconds
  }, 1000)
})
</script>

<template>
  <h1 class="clock">{{ clock }}</h1>
</template>