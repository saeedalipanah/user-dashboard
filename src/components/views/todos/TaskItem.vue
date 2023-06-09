<script setup lang="ts">
// components
import TaskFrom from './TaskFrom.vue'

// icons
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

// types
import type { taskT } from '@/types'

import { computed, ref, createVNode, type PropType } from 'vue'
import { Modal } from 'ant-design-vue'
import { useTaskStore } from '@/stores/tasks'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const store = useTaskStore()
const props = defineProps({
  task: {
    type: Object as PropType<taskT>,
    required: true
  }
})
let visiblity = ref<boolean>(false)

const statusColorHandler = computed<string>(() => {
  return props.task.status === 'Ongoing'
    ? 'blue'
    : props.task.status === 'Overdue'
    ? 'red'
    : 'green'
})

const showEditModal = () => {
  visiblity.value = true
}
const onCancelForm = () => {
  visiblity.value = false
}
const onSubmitFrom = () => {
  visiblity.value = false
}

const showDeleteConfirm = () => {
  // delete task modal
  Modal.confirm({
    title: t('taskFrom.deleteTaskTitle'),
    icon: createVNode(ExclamationCircleOutlined),
    content: t('taskFrom.deleteTaskContent'),
    okText: t('taskFrom.yesBtn'),
    okType: 'danger',
    cancelText: t('taskFrom.noBtn'),
    onOk() {
      store.deleteTask(props.task)
    }
  })
}
</script>

<template>
  <li class="task-item" :class="props.task.status">
    <a-row>
      <!-- task title -->
      <a-col :span="24" :sm="{ span: 12 }">
        <label>{{ t('todos.title') }}</label>
        <h3>
          {{ props.task.title }}
        </h3>
      </a-col>
      <!-- task title -->

      <!-- task date -->
      <a-col :span="24" :sm="{ span: 4 }">
        <label>{{ t('todos.createdAt') }}</label>
        <h3>{{ props.task.date }}</h3>
      </a-col>
      <!-- task date -->

      <!-- task status -->
      <a-col :span="12" :sm="{ span: 4 }">
        <label>{{ t('todos.status') }}</label>
        <a-badge
          :color="statusColorHandler"
          :text="props.task.status"
          class="a-badge-status"
          style="color: var(--text-color)"
        />
      </a-col>
      <!-- task status-->

      <!-- task actions-->
      <a-col :span="12" :sm="{ span: 4 }"
        ><label>{{ t('todos.actions') }}</label>
        <div class="action-icons">
          <i class="bx bxs-edit edit" @click="showEditModal"></i>
          <i class="bx bxs-trash-alt delete" @click="showDeleteConfirm"></i>
        </div>
      </a-col>
      <!-- task actions-->
    </a-row>

    <!-- task form modal -->
    <task-from
      :visible="visiblity"
      :task="props.task"
      @submitted="onSubmitFrom"
      @canceled="onCancelForm"
    ></task-from>
    <!-- task form modal -->
  </li>
</template>
