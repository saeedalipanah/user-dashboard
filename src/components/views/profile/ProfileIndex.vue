<script setup lang="ts">
// components
import ToggleTheme from '@/components/views/profile/ToggleTheme.vue'
import LanguageMenu from '@/components/views/profile/LanguageMenu.vue'
import NewUser from '@/components/views/dashboard/NewUser.vue'
// components
import { useI18n } from 'vue-i18n'
const {t}  = useI18n()
</script>

<template>
  <a-row type="flex" justify="center">
    <a-col :span="24" :md="{span:12}">
      <div class="profile-card d-flex flex-col align-center">
        <!-- theme selection -->
        <section class="select-option ">
          <label>{{t('profile.themes')}}</label>
          <toggle-theme></toggle-theme>
        </section>
        <!-- theme selection -->

        <!-- language selection -->
        <section class="select-option ">
          <label>{{t('profile.language')}}</label>
          <language-menu></language-menu>
        </section>
        <!-- language selection -->

        <!-- username selection -->
        <new-user></new-user>
        <!-- username selection -->
      </div>
    </a-col>
  </a-row>
</template>
