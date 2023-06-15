<script setup lang="ts">
import { i18n } from '@/composables/I18nCompose'
const { t } = i18n()
</script>

<template>
  <h1 class="base-logo">
    <span class="prefix">{{ t('header.prefixLogo') }}</span
    ><span class="postfix">{{ t('header.postfixLogo') }}</span>
  </h1>
</template>

<style lang="scss"></style>
