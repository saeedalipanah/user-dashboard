<script setup lang="ts">
import { reactive, ref, toRaw, type PropType } from 'vue'
import { useTaskStore } from '@/stores/tasks'
import { useI18n } from 'vue-i18n'

// types
import type { FormInstance } from 'ant-design-vue'
import { taskT } from '@/types'
// types
const { t } = useI18n()
const store = useTaskStore()
const emit = defineEmits(['submitted', 'canceled'])
const props = defineProps({
  task:{
    type: Object as PropType<taskT>,
  }
})

const visible = ref<boolean>(false)
const formRef = ref<FormInstance>()
const formState = reactive<taskT>({
  //if have task prop modal is edit and initial form state with task prop
  title: props.task?.title || '',
  status: props.task?.status || 'Ongoing',
  date: props.task?.date || new Date().toLocaleDateString(),
  id: props.task?.id || ''
})
const onCancelForm = () => {
  emit('canceled')
}

const onSubmitFrom = () => {
  formRef.value
    ?.validateFields() //if form is valid
    .then(() => {
      const newTask: taskT = toRaw(formState)
      const proparedTask: taskT = { ...newTask } // create copy of task that not reset in form reset
      if (props.task) {
        //if is update modal
        store.updateTask(proparedTask)
      } else {
        //if is add modal
        proparedTask.id = Math.random().toString(16).slice(2) //generate unic id in 13 digits
        store.createTask(proparedTask)
      }
      formRef.value?.resetFields() //reset form at last of actions
      emit('submitted')
    })
}
</script>

<template>
  <a-modal
    v-model:visible="visible"
    :title="!props.task ? t('taskFrom.addNew') : t('taskFrom.updateTask')"
    :cancel-text="t('taskFrom.cancelBtn')"
    @cancel="onCancelForm"
    :ok-text="!props.task ? t('taskFrom.createBtn') : t('taskFrom.updateBtn')"
    @ok="onSubmitFrom"
  >
    <!-- title input -->
    <a-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
      <a-form-item
        name="title"
        :label="t('taskFrom.title')"
        :rules="[{ required: true, message: 'Please input the title of collection!' }]"
      >
        <a-input v-model:value="formState.title" />
      </a-form-item>
      <!-- title input -->

      <!-- status input -->
      <a-form-item :label="t('todos.status')">
        <a-select v-model:value="formState.status" placeholder="please select your zone">
          <a-select-option value="Ongoing">Ongoing</a-select-option>
          <a-select-option value="Complete">Complete</a-select-option>
          <a-select-option value="Overdue">Overdue</a-select-option>
        </a-select>
      </a-form-item>
      <!-- status input -->
    </a-form>
  </a-modal>
</template>
