<script setup lang="ts">
  const dateFormatChenger = () => {
  let date = new Date()
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  let day = days[date.getDay()]
  let month = months[date.getMonth()]
  let year = date.getFullYear()
  return `${day} ${date.getDate()} ${month} ${year}`
}
</script>

<template>
<h2 class="w-date">{{ dateFormatChenger() }}</h2>
</template>