<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <h1 class="base-logo">
    <span class="prefix">{{ t('header.prefixLogo') }}</span
    ><span class="postfix">{{ t('header.postfixLogo') }}</span>
  </h1>
</template>

<style lang="scss"></style>
