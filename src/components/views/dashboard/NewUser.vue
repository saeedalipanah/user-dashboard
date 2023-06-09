<script setup lang="ts">
// andv icons
import { UserOutlined } from '@ant-design/icons-vue';

import { useProfileStore } from '@/stores/profile';
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const {t}  = useI18n()
const store = useProfileStore()
type FormState = {
  username: string
}
const formState = reactive<FormState>({
  username: ''
})
const onFinish = (values: {username:string}) => {
  store.setUsername(values.username)
  formState.username = ''
}
</script>

<template>
  <div class="user-info d-flex flex-col align-center">
    <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
    layout="vertical"
    style="width:100%;max-width:280px"
    class="username-form"
  >
    <a-form-item
      :label="t('dashboard.usernameLabel')"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
      class="username-form"
    >
      <a-input v-model:value="formState.username" :placeholder="t('dashboard.usernamePlaceholder')" class="username-input"  >
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 9, span: 16 }">
      <a-button class="submit-btn" type="primary" html-type="submit">{{t('dashboard.submitButton')}}</a-button>
    </a-form-item>
  </a-form>
  </div>
</template>