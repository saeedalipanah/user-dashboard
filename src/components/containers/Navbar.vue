<script setup lang="ts">
// components
import Sidebar from './Sidebar.vue'
import Logo from '../common/Logo.vue'
import RouterLinks from '../common/RouterLinks.vue'
// components
import { ref } from 'vue'

const visible = ref<boolean>(false)
const openMobileDrawer = () => {
  visible.value = true
}
const closeMobileDrawer = () => {
  visible.value = false
}
</script>

<template>
  <nav class="navbar d-flex align-center">
    <!-- menu icon & logo -->
    <figure class="Introduction d-flex align-center">
      <i class="menu-icon bx bx-menu" @click="openMobileDrawer"></i>
      <logo></logo>
    </figure>
    <!-- menu icon & logo -->

    <!-- sidebar -->
    <sidebar></sidebar>
    <!-- sidebar -->

    <!-- navigation drawer modal -->
    <a-modal
      v-model:visible="visible"
      title="Navigation"
      wrap-class-name="antd-full-modal"
      @ok="closeMobileDrawer"
    >
      <router-links @close="visible = false"></router-links>
      <template #footer> </template>
    </a-modal>
    <!-- navigation drawer modal -->
  </nav>
</template>
